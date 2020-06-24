import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import WebsiteList from "../WebsiteList/WebsiteList";
import Categories from "../Categories/Categories";
import Tags from "../Tags/Tags";

import history from "../../history";
import WebsiteCreate from "../WebsiteCreate/WebsiteCreate";
import WebsiteEdit from "../WebsiteEdit/WebsiteEdit";
import WebsiteDelete from "../WebsiteDelete/WebsiteDelete";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={WebsiteList} />
          <Route path="/websites/new" exact component={WebsiteCreate} />
          <Route path="/websites/edit/:id" exact component={WebsiteEdit} />
          <Route path="/websites/delete/:id" exact component={WebsiteDelete} />
          {/* <Route path="/" exact component={WebsiteList} /> */}
          <Tags />
          <Categories />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
