import { SearchForm } from "@/components/search/SearchForm";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="main">
        <div className="container-description">
          <div className="description">
            <h1>Busqueda de vehículos</h1>
            <p>Flujo de búsqueda y selección de <span>vehículos.</span></p>
            <Image
              src="/circle.svg"
              alt="circle"
              width={125.47}
              height={125.47}
              priority             
              className="circle"
            />
          </div>
        </div>
        <Image
              src="/circle.svg"
              alt="circle"
              width={354.36}
              height={354.36}
              priority             
              className="circle-left"
            />
        <SearchForm />  
      </main>
    </div>
  );
}
