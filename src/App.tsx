import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import About from "./components/About";
import Content from "./components/Content";
import TfLambdaDemo from "./components/TfLambdaDemo";
import Welcome from "./components/Welcome";

const routes = [
  { name: "WelcomePage", url: "/", component: Welcome },
  { name: "AboutPage", url: "/about", component: About },
  { name: "ContentPage", url: "/content", component: Content },
  { name: "Tf Lambda Demo", url: "/tflambda", component: TfLambdaDemo },
];
function App() {
  return (
    <div className="App">
      <h2>React Application</h2>
      <h3>Creating a GitHub Pages site</h3>
      <ol>
        {routes.map((el, idx) => (
          <li key={el.name + "-" + idx}>
            <Link to={el.url}>{el.name}</Link>
          </li>
        ))}
      </ol>
      <hr />
      <Routes>
        {routes.map((el, idx) => (
          <Route
            key={el.name + "_" + idx}
            path={el.url}
            element={<el.component />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
