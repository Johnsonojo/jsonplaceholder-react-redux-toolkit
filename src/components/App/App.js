import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "../../history";
import Categories from "../Categories/Categories";
import WebsiteCreate from "../WebsiteCreate/WebsiteCreate";
import WebsiteDelete from "../WebsiteDelete/WebsiteDelete";
import WebsiteEdit from "../WebsiteEdit/WebsiteEdit";
import WebsiteList from "../WebsiteList/WebsiteList";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={WebsiteList} />
          <Route path="/websites/new" exact component={WebsiteCreate} />
          <Route path="/websites/edit/:id" exact component={WebsiteEdit} />
          <Route path="/websites/delete/:id" exact component={WebsiteDelete} />
          <Route path="/websites/category" exact component={Categories} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
