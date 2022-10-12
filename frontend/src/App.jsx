import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/profile/:username">
            <Profile />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Routes>
    </>
  );
}

export default App;
