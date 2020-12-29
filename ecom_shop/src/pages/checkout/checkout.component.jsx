import './checkout.styles.scss'
import CheckOutItem from '../../components/checkout-item/checkout-item.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.components'

const CheckOutPage = ({cartItems,totalPrice}) => {
    return(<div className='checkout-page'>
        <h1>Checkout</h1>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Products</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span></span>
            </div>
        </div>
        {
            cartItems.map(
                cartItem => <CheckOutItem id={cartItem.id} cartItem={cartItem} />
            )
        }
        <div className='total'>
            <span>{totalPrice}</span>
        </div>
        <div className='test-warning'>
            *Pleas use the following test credit card for the payments*
            <br/>
            4242 4242 4242 - Exp: 11/21 -CVV: 123
        </div>
        <StripeCheckoutButton price={totalPrice}/>
    </div>)
}

const mapStateToProps = createStructuredSelector(
    {
        cartItems: selectCartItems,
        totalPrice: selectCartTotal
    }
)

export default connect(mapStateToProps,null)(CheckOutPage)