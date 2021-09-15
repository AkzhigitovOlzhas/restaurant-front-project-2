import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { Route, Switch } from "react-router-dom";
import {
  Cart,
  Main,
  Menu,
  User,
  AdminPage,
  OrderPage,
  Contacts,
  AboutUs,
} from "./pages";

function App() {
  return (
    <>
      <Provider store={store}>
        <Switch>
          <Route path="/menu/:category" component={Menu} />
          <Route path="/cart" component={Cart} />
          <Route path="/order" component={OrderPage} />
          <Route path="/user" component={User} />
          <Route path="/admin/:page" component={AdminPage} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/about" component={AboutUs} />
          <Route path="/" component={Main} />
        </Switch>
      </Provider>
    </>
  );
}

export default App;
