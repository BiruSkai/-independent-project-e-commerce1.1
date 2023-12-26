import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import Home from "./routes/layouts/Home";
import React from "react";

// Routes
// Layouts
// NonLayouts
import SignIn from './routes/nonLayouts/SignIn';
import SignUp from './routes/nonLayouts/SignUp';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Home />} >
        <Route path="signIn" element={<SignIn />} />
        <Route path="signUp" element={<SignUp />} />
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
