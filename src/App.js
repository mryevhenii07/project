import React, { lazy, Suspense, createContext, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { ClipLoader } from "react-spinners";

import AppBar from "./components/appBar/AppBar";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

import s from "./app.module.scss";

const Form = lazy(() => import("./pages/form/Form"));
const SuccessfullyRegist = lazy(() =>
  import("./pages/successfullyRegist/SuccessfullyRegist")
);
const Users = lazy(() => import("./pages/users/Users"));

export const IsNav = createContext("");

function App() {
  const [isNav, setIsNav] = useState(true);
  return (
    <div>
      <IsNav.Provider value={{ isNav, setIsNav }}>
        <AppBar />
        <Suspense
          fallback={
            <div className={s.wrapSpinner}>
              <ClipLoader color="#00BDD3" size={48} />
            </div>
          }
        >
          <Switch>
            <Route exact path="/project">
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
      </IsNav.Provider>
    </div>
  );
}

export default App;
