import React, { Component } from "react";

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Rick Statue",
        src: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty150/product/media/images/20210802/13/114982431/217738168/1/1_org_zoom.jpg",
        description: "Statue for you! ",
        content: "Item Number:58599, Category: DC Comics",
        price: 23,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "2",
        title: "Baby Yoda Statue",
        src: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty69/product/media/images/20210217/0/63526238/119065400/1/1_org_zoom.jpg",
        description: "Statue for you! ",
        content: "SItem Number:58599, Category: DC Comics",
        price: 19,
        colors: ["red", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "3",
        title: "Minions Statue",
        src: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty134/product/media/images/20210622/15/103050501/191685602/1/1_org_zoom.jpg",
        description: "Statue for you! ",
        content: "Item Number:58599, Category: DC Comics",
        price: 50,
        colors: ["lightblue", "white", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "4",
        title: "Ron Statue",
        src: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty139/product/media/images/20210702/14/106441812/196251607/1/1_org_zoom.jpg",
        description: "Statue for you! ",
        content: "Item Number:58599, Category: DC Comics",
        price: 15,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "5",
        title: "Dumbledore Statue",
        src: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty53/product/media/images/20210329/0/75818722/13057656/1/1_org_zoom.jpg",
        description: "Statue for you! ",
        content: "Item Number:58599, Category: DC Comics",
        price: 10,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "6",
        title: "Disney Statue",
        src: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty132/product/media/images/20210623/10/103244951/191971166/1/1_org_zoom.jpg",
        description: "Statue for you! ",
        content: "Item Number:58599, Category: DC Comics",
        price: 17,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "7",
        title: "Harry Statue",
        src: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty144/product/media/images/20210716/15/111288069/205143855/1/1_org_zoom.jpg",
        description: "Statue for you! ",
        content: "Item Number:58599, Category: DC Comics",
        price: 17,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "8",
        title: "Deadpool Statue",
        src: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty145/product/media/images/20210716/13/111249382/65213760/1/1_org_zoom.jpg",
        description: "Statue for you! ",
        content: "Item Number:58599, Category: DC Comics",
        price: 43,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "9",
        title: "Michael Statue",
        src: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty111/product/media/images/20210511/10/87419124/173042956/1/1_org_zoom.jpg",
        description: "Statue for you! ",
        content: "Item Number:58599, Category: DC Comics",
        price: 27,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "10",
        title: "Joker Statue",
        src: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty34/product/media/images/20201211/13/37546669/118452677/1/1_org_zoom.jpg",
        description: "Statue for you! ",
        content: "Item Number:58599, Category: DC Comics",
        price: 32,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "11",
        title: "Eleven Statue",
        src: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty49/product/media/images/20210106/15/47808177/118490382/1/1_org_zoom.jpg",
        description: "Statue for you! ",
        content: "Item Number:58599, Category: DC Comics",
        price: 19,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "12",
        title: "Rachel Statue",
        src: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty36/product/media/images/20201218/8/39485808/58027930/1/1_org_zoom.jpg",
        description: "Statue for you! ",
        content: "Item Number:58599, Category: DC Comics ",
        price: 37,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
    ],
    cart: [],
    total: 0,
  };

  addCart = (id) => {
    const { products, cart } = this.state;
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      this.setState({ cart: [...cart, ...data] });
    } else {
      alert("The product has been added to cart.");
    }
  };

  reduction = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  increase = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      const { cart } = this.state;
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      this.setState({ cart: cart });
      this.getTotal();
    }
  };

  getTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    this.setState({ total: res });
  };

  componentDidUpdate() {
    localStorage.setItem("dataCart", JSON.stringify(this.state.cart));
    localStorage.setItem("dataTotal", JSON.stringify(this.state.total));
  }

  componentDidMount() {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart !== null) {
      this.setState({ cart: dataCart });
    }
    const dataTotal = JSON.parse(localStorage.getItem("dataTotal"));
    if (dataTotal !== null) {
      this.setState({ total: dataTotal });
    }
  }

  render() {
    const { products, cart, total } = this.state;
    const { addCart, reduction, increase, removeProduct, getTotal } = this;
    return (
      <DataContext.Provider
        value={{
          products,
          addCart,
          cart,
          reduction,
          increase,
          removeProduct,
          total,
          getTotal,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
