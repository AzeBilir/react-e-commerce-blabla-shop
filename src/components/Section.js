import React from "react";
import Products from "./section/Products";
import Details from "./section/Details";
import { Route } from "react-router";
import { Cart } from "./section/Cart";
import { Payment } from "./section/Payment";
import Home from "./section/Home";
import Form from "../Form";
import Contact from "./section/Contact";
import About from "./section/About";

export class Section extends React.Component {
  render() {
    return (
      <div>
        <Route path="/product" component={Products} exact />
        <Route path="/product/:id" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/payment" component={Payment} />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Form} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default Section;
