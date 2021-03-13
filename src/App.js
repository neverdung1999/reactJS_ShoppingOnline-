import React, { Component } from 'react'
import Header from './components/header/header'
import ProductContainer from "./redux/containers/productContainer";
import Footer from './components/footer/footer'
import Message from "./components/body/message";
import CartContainer from "./redux/containers/cartContainer";
export default class App extends Component {
    render() {
        return (
          <body className="hidden-sn animated deep-purple-skin">
            <div>
              <Header />
              <main id="mainContainer">
                <div className="container">
                  <ProductContainer />
                  <Message />
                  <CartContainer />
                </div>
              </main>
              <Footer />
            </div>
          </body>
        );
    }
}
