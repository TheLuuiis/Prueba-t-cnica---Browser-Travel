import { useRouter } from "next/router";

export const SearchForm = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/results");
  };

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit}>
        <div className="input search">
          <label htmlFor="city">Ciudad o aeropuerto</label>
          <input id="city" required />
        </div>
        <div className="input">
          <label htmlFor="pickup">Fecha de recogida</label>
          <input id="pickup" type="date" required />
        </div>
        <div className="input">
          <label htmlFor="return">Fecha de devolución</label>
          <input id="return" type="date" required />
        </div>
          <button type="submit">Buscar</button>
      </form>
    </div>
  );
};
