import { Switch, Route } from "react-router-dom";

import AppBar from "./components/appBar/AppBar";
import Main from "./components/main/Main";
import Users from "./pages/users/Users";
import Form from "./pages/form/Form";
import Footer from "./components/footer/Footer";
import SuccessfullyRegist from "./components/successfullyRegist/SuccessfullyRegist";

function App() {
  return (
    <div>
      <AppBar />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/login">
          <Form />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
      <SuccessfullyRegist />
      <Footer />
    </div>
  );
}

export default App;
