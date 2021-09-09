import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { Route, Switch } from "react-router-dom";
import { Cart, Main, Menu, User, AdminPage } from "./pages";

function App() {
  return (
    <>
      <Provider store={store}>
        <Switch>
          <Route path="/menu/:category" component={Menu} />
          <Route path="/cart" component={Cart} />
          <Route path="/user" component={User} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/" component={Main} />
        </Switch>
      </Provider>
    </>
  );
}

export default App;
