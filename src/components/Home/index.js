import Create from "../Create/Create";
import Read from "../Read/Read";

export default function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "2rem" }}>CRUD with axios</h1>

      <Create />
      <Read />
    </div>
  );
}
