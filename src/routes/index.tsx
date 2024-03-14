import React from "react"
import {
  BrowserRouter,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Home from "../screens/Home";
import ProductRegistration from "../screens/ProductRegistration";


const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/product/create" element={<ProductRegistration />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;