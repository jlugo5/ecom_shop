import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51I3l3rKcss6iB8RpZPUbz9xS6q9Vhnf4wauBKGTS8A7U8G2eH4zZSgduBtcxf3Pgtv82zwNcVOyHlPU8oHmtZngf00XAFE8ui6'
    
    const onToken = token => {
        alert('Payment Successful')
    }
    
    return (
        <StripeCheckout 
            label="Pay Now"
            name='Ecommerce Pvt Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total price is ${price}`}
            amount = {priceForStripe}
            panelLabel='Pay Now'
            token = {onToken}
            stripeKey= {publishableKey}
        />
    )
}

export default StripeCheckoutButton