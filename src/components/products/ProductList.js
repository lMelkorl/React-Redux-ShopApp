import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table } from 'reactstrap';
import * as productActions from '../../redux/actions/productActions';
import * as cartActions from '../../redux/actions/cardActions';
import { Button } from 'reactstrap';
import alerify from 'alertifyjs';
import { Link } from 'react-router-dom';

class ProductList extends Component {

    componentDidMount() {
        this.props.actions.getProducts();
    }

    addToCart = (product) => {
        this.props.actions.addToCart({ quantity: 1, product });
        alerify.success(product.productName + " Added to cart !")
    }

    render() {
        return (
            <div>
                <br/>
                <h3>
                    <span class="badge alert-warning">Products</span>&nbsp;
                    <span class="badge alert-success">{this.props.currentCategory.categoryName}</span>
                </h3>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity Per Unit</th>
                            <th>Units In Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(product => (
                            <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td><Link to={"/saveproduct/"+product.id}>{product.productName}</Link></td>
                                <td>{product.unitPrice}</td>
                                <td>{product.quantityPerUnit}</td>
                                <td>{product.unitsInStock}</td>
                                <th><td><Button onClick={() => this.addToCart(product)} color="success">
                                    Add to cart
                                </Button></td></th>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            getProducts: bindActionCreators(productActions.getProducts, dispatch),
            addToCart: bindActionCreators(cartActions.addToCart, dispatch)
        }
    }
}

const mapStateToProps = (state) => {
    return {
        currentCategory: state.changeCategoryReducer,
        products: state.productListReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);