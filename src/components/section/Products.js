import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import "../css/Products.css";

export class Products extends Component {
  static contextType = DataContext;

  render() {
    const { products, addCart } = this.context;
    return (
      <div id="product">
        {products.map((product) => (
          <Box>
            <Container maxWidth="lg" style={{ marginTop: "10px" }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                  <div className="card" key={product._id}>
                    <Link to={`/product/${product._id}`}>
                      <img src={product.src} alt="" />
                    </Link>
                    <div className="content">
                      <h3>
                        <Link to={`/product/${product._id}`}>
                          {product.title}
                        </Link>
                      </h3>
                      <span>${product.price}</span>
                      <p>{product.description}</p>
                      <button onClick={() => addCart(product._id)}>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Box>
        ))}
      </div>
    );
  }
}

export default Products;
