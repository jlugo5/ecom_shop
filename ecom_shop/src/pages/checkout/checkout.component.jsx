import './checkout.styles.scss'
import CheckOutItem from '../../components/checkout-item/checkout-item.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

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
    </div>)
}

const mapStateToProps = createStructuredSelector(
    {
        cartItems: selectCartItems,
        totalPrice: selectCartTotal
    }
)

export default connect(mapStateToProps,null)(CheckOutPage)