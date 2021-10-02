import React from "react";
import { Link } from "react-router-dom";
import Products from "./Products";
import Container from "@material-ui/core/Container";

function Home(props) {
  return (
    <div>
      <Link>
        <img
          src="https://cdnb.artstation.com/p/assets/images/images/028/685/761/medium/jessica-alves-anime-funkostore-banner-shenron-x.jpg?1595215368"
          fluid
          style={{
            width: "100%",
            display: "flex",
          }}
        />
      </Link>

      <Products />
    </div>
  );
}

export default Home;
