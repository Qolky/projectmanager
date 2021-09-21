// General imports
import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// Pages imports
import Main from "./page/main/main";



function App() {
  return (
      <BrowserRouter>
        <Switch>
            <Route path={"/dev/main"} exact component={Main}></Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
