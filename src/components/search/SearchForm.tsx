import { useRouter } from "next/router";

export const SearchForm = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/results");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="city">Ciudad o aeropuerto</label>
      <input id="city" required />

      <label htmlFor="pickup">Fecha de recogida</label>
      <input id="pickup" type="date" required />

      <label htmlFor="return">Fecha de devolución</label>
      <input id="return" type="date" required />

      <button type="submit">Buscar</button>
    </form>
  );
};
