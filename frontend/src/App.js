import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import Home from "./routes/layouts/Home";
import React from "react";

// Routes
// Layouts
// NonLayouts
import SignIn from './routes/nonLayouts/SignIn';
import SignUp from './routes/nonLayouts/SignUp';
import Products from './routes/layouts/products/Products';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home />} >
        <Route path="login" element={<SignIn />} />
        <Route path="register_user" element={<SignUp />} />
      </Route>
      <Route path="/products" element={<Products />} >
      </Route>
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
