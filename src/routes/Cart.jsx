import './Cart.css'
import OfferCard from '../Components/OfferCard'
import { useOutletContext } from 'react-router';
import { useEffect, useState } from 'react'

export default function Cart() {
    const { cartItems, setCartItems } = useOutletContext();
    const [storeData, setStoreData] = useState([]);

    useEffect(() => {
        fetch('/store-data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch the store data.');
                }
                return response.json();
            })
            .then(data => {
                setStoreData(data);
            }) 
    }, [])

    const cartData = storeData.filter(item => cartItems[item.name] > 0);

    return (
        <main className="cart-page">
            <div className="headline">
                <h1>Your Cart</h1>
            </div>
            <section className="cart-container">
                {cartData.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cartData.map((item) => (
                        <OfferCard 
                            setCartItems={setCartItems}
                            cartItems={cartItems}
                            type="store"
                            key={item.id} 
                            title={item.name} 
                            priceTag={item.price} 
                            description={item.description} 
                            src={`/${item.slug}.png`}
                            buttonText="Add to Cart"
                        />
                    ))
                )}
            </section>
        </main>
    )
}