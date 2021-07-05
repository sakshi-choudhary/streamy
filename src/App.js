import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home";

const A = () => {
  return <p>escfe</p>;
};

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/a" component={A} />
      </div>
    </BrowserRouter>
  );
};

export default App;
