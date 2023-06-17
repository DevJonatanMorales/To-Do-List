import { Formulario } from "../components/formulario/Formulario";
import { Options } from "../components/options/Options";
import { Pagination } from "../components/pagination/Pagination";
import "./App.css"

function App() {

  return (
    <form className="container">
      <h1 className="container__title">To-Do-List</h1>
      <div className="container__main">
        <div className="container__form">
          <Formulario />
        </div>
        <div className="container__option">
          <Options
          />
        </div>
      </div>
      <div className="container__pagination">
        <Pagination />
      </div>

    </form>
  );
}

export default App;
