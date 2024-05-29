import Link from "./components/Link";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Link to="www.facebook.com">Facebook</Link>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Todos />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
