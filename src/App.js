import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { Route, Switch } from "react-router-dom";
import { Cart, Main, Menu, User } from "./pages";

function App() {
  return (
    <>
      <Provider store={store}>
        <Switch>
          <Route path="/menu/:category" component={Menu} />
          <Route path="/cart" component={Cart} />
          <Route path="/user" component={User} />
          <Route path="/" component={Main} />
        </Switch>
      </Provider>
    </>
  );
}

export default App;
