import { BrowserRouter, Switch, Route } from "react-router-dom";
import SinglePost from "./components/SinglePost/SinglePost";
import AutoSearchComponent from "./components/AutoSearch/AutoSearch";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <AutoSearchComponent></AutoSearchComponent>
        </Route>

        <Route path="/post/:id">
          <SinglePost></SinglePost>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
