import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addToShoppingCart, getAllProducts } from '../../redux/reducer';

import './StoreFront.css';

class StoreFront extends Component {

    componentDidMount() {
        this.props.getAllProducts();
    }

    render() {
        console.log(this.props.products);
        let productDisplay = this.props.products.map((element, index) => {
            return (
                <div className="product-container" key={index}>
                    <h2>{element.title}</h2>
                    <img src={element.image} alt="" />
                    <h2>{element.desc}</h2>
                    <h3>{"$" + element.price + ".00"}</h3>
                    <button onClick={() => this.props.addToShoppingCart(element)}>Purchase!</button>
                </div>
            )
        })
        return (
            <div className="storefront-container">
                {productDisplay}
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(this.state);
    return {
        products: state.products,
        loading: state.loading,
    }
}

export default connect(mapStateToProps, {addToShoppingCart, getAllProducts})(StoreFront);