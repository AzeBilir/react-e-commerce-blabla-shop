import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./Footer";
import { DataProvider } from "./components/Context";

class App extends React.Component {
  render() {
    return (
      <DataProvider>
        <div>
          <Router>
            <Header />
            <Section />
            <Footer />
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default App;
