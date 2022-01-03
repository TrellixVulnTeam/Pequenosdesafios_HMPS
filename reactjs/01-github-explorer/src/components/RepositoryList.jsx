import { RepositoryItem } from "./RepositoryItem";

const repository ={
    title: "Título",
    description: "Descrição",
    link: "https://github.com/talitagb/Pequenosdesafios"
}
export function RepositoryList() {
  return (
    <section>
      <h1>Lista de Repositórios</h1>
      <ul>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
      </ul>
    </section>
  );
}
