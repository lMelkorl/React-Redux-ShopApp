import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../../redux/actions/cardActions';
import {Button, Table} from 'reactstrap';
import alertify from 'alertifyjs';

class cartDetail extends Component {

    removeFromCart = (product) => {
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName + " Removed From Bakset")
    } 

    render() {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map(cartItem => (
                            <tr key={cartItem.id}>
                                <th scope="row">{cartItem.product.id}</th>
                                <td>{cartItem.product.productName}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>{cartItem.quantity}</td>
                                <th><td><Button onClick={() => this.removeFromCart(cartItem.product)} color="danger">
                                    Delete
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
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(cartDetail)