import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { ClipLoader } from "react-spinners";

import React from "react";

import AppBar from "./components/appBar/AppBar";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

import s from "./app.module.scss";

const Form = lazy(() => import("./pages/form/Form"));
const SuccessfullyRegist = lazy(() =>
  import("./pages/successfullyRegist/SuccessfullyRegist")
);
const Users = lazy(() => import("./pages/users/Users"));

function App() {
  return (
    <div>
      <AppBar />
      <Suspense
        fallback={
          <div className={s.wrapSpinner}>
            <ClipLoader color="#00BDD3" size={48} />
          </div>
        }
      >
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

          <Route path="/success">
            <SuccessfullyRegist />
          </Route>
          <Route path="*">
            <Main />
          </Route>
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
