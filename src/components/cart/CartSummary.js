import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem, NavLink, Dropdown, Col} from 'reactstrap';
import * as cartActions from '../../redux/actions/cardActions';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import alertify from 'alertifyjs';

class CartSummary extends Component {

    removeFromCart = (product) => {
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName + " Removed From Bakset")
    } 

    renderEmpty = () => {
        return (
            <NavItem>
              <NavLink>Your cart is empty</NavLink>
            </NavItem>
        )
    }

    renderSummary = () => {
        return(
            <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Cart
            </DropdownToggle>
            <DropdownMenu right>
            {this.props.cart.map(cartItem=>(
                <DropdownItem  key={cartItem.product.id}>
                    {cartItem.product.productName} 
                    &nbsp;<span class="badge alert-info">{cartItem.quantity}</span>
                    &nbsp;<span class="badge alert-danger" onClick={()=>this.removeFromCart(cartItem.product)}>
                    <FaTrash/>
                        </span>
                </DropdownItem>
            ))}
                <DropdownItem divider />
                <DropdownItem>
                   <Link to={'/cart'}>Go Basket</Link> 
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
        )
    }

    render() {
        return (
            <div>
                {
                    this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()
                }
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

export default connect(mapStateToProps,mapDispatchToProps)(CartSummary)