import "./App.scss";
// My components
import Header from "./shared/Header/Header";
import Posts from "./pages/posts/Posts";
import PostDetail from "./pages/post-detail/PostDetail";

//context
import DatabaseProvider from "./context/Database";

// Module import
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <DatabaseProvider>
      <div className="App">
        <Header />

        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/posts" />
            </Route>
            <Route path="/posts" component={Posts} />
            <Route path="/post/:postId" component={PostDetail} />
          </Switch>
        </Router>
      </div>
    </DatabaseProvider>
  );
}

export default App;
