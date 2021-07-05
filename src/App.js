import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./shared/Nav";

import {
  StreamCreate,
  StreamList,
  StreamShow,
  StreamEdit,
  StreamDelete,
} from "./components/Streams";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Nav />
          <Route path="/" exact component={StreamList} />
          <Route path="/stream/new" exact component={StreamCreate} />
          <Route path="/stream/edit" exact component={StreamEdit} />
          <Route path="/stream/delete" exact component={StreamDelete} />
          <Route path="/stream/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
