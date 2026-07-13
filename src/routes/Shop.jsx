import './Shop.css'
import OfferCard from '../Components/OfferCard'
import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router';

export default function Shop() {
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
                console.log(data)
                setStoreData(data);
            }) 
    }, [])

    return (
        <main className="shop-page">
            <div className="headline">
                <h1>Shop</h1>
            </div>
            <section className="shop-grid">
                {storeData.length === 0 ? (
                    <p>No items in the shop yet.</p>
                ) : (
                    storeData.map((item) => (
                        <OfferCard 
                            setCartItems={setCartItems}
                            cartItems={cartItems}
                            type="store"
                            key={item.id} 
                            title={item.name} 
                            priceTag={item.price} 
                            description={item.description} 
                            src={`/${item.slug}.png`}
                            buttonText={item.buttonText || "Add to Cart"}
                        />
                    ))
                )}
            </section>
        </main>
    )
}