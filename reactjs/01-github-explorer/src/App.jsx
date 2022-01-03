import { RepositoryList } from "../src/components/RepositoryList";
import { Counter } from "./components/Counter";
import "./styles/global.scss";
export function App() {
  return (
    <>
      <RepositoryList />
      <Counter />
    </>
  );
}
