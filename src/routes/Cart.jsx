import './Cart.css'
import CartItem from '../Components/CartItem'

export default function Cart({ cartItems = [] }) {
    return (
        <main className="cart-page">
            <div className="headline">
                <h1>Your Cart</h1>
            </div>
            <section className="cart-container">
                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        cartItems.map((item, index) => (
                            <CartItem 
                                key={index}
                                title={item.title}
                                priceTag={item.priceTag}
                                description={item.description}
                                src={item.src}
                                quantity={item.quantity}
                            />
                        ))
                    )}
                </div>
                <div className="cart-summary">
                    <h2>Summary</h2>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span className="summary-price">$0.00</span>
                    </div>
                    <button className="checkout-btn">Proceed to Checkout</button>
                </div>
            </section>
        </main>
    )
}