import Navbar from './Navbar'
import Home  from './Home'
import Create from './Create.js'
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import Counter from "./Counter";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  return (
      <Router>
        <div className="App">
          <Navbar />
          <Counter />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                  <Create />
              </Route>
              <Route path="/blogs/:id">
                  <BlogDetails />
              </Route>
              <Route path="*">
                  <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
