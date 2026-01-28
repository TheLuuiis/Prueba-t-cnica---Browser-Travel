import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const navItems = [
	{ href: "/", label: "Inicio" },
	{ href: "/results", label: "Resultados" },
];

export function Header() {
	const router = useRouter();

	return (
		<header className="siteHeader">
			<div className="siteHeader__inner">
				<Link href="/" className="siteHeader__brand" aria-label="Ir al inicio">
					<Image
						src="/logo.svg"
						alt="Outlet Rental Cars"
						width={106}
						height={32}
						priority
                        className="logo"
					/>
				</Link>

				<nav className="siteNav" aria-label="Navegación principal">
					{navItems.map((item) => {
						const isActive = router.pathname === item.href;
						return (
							<Link
								key={item.href}
								href={item.href}
								className={isActive ? "siteNav__link is-active" : "siteNav__link"}
							>
								{item.label}
							</Link>
						);
					})}
				</nav>
			</div>
		</header>
	);
}
