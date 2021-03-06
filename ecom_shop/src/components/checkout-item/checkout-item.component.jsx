import './checkout-item.styles.scss'
import {removeItem, addItem, clearItem } from '../../redux/cart/cart.action'
import {connect} from 'react-redux'

const CheckOutItem = ({cartItem,removeItem,clearItem,addItem}) => {
    const {name, imageUrl, price, quantity} = cartItem
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt="item" src={imageUrl}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => {removeItem(cartItem)}}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => {addItem(cartItem)}}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => {clearItem(cartItem)}}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => (
    {
        removeItem: item => dispatch(removeItem(item)),
        addItem: item => dispatch(addItem(item)),
        clearItem: item => dispatch(clearItem(item))
    }
)
export default connect(null, mapDispatchToProps)(CheckOutItem)