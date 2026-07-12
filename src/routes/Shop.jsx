import './Shop.css'
import OfferCard from '../Components/OfferCard'

export default function Shop({ items = [] }) {
    return (
        <main className="shop-page">
            <div className="headline">
                <h1>Shop</h1>
            </div>
            <section className="shop-grid">
                {items.length === 0 ? (
                    <p>No items in the shop yet.</p>
                ) : (
                    items.map((item, index) => (
                        <OfferCard 
                            key={index} 
                            title={item.title} 
                            priceTag={item.priceTag} 
                            description={item.description} 
                            src={item.src}
                            buttonText={item.buttonText || "Add to Cart"}
                        />
                    ))
                )}
            </section>
        </main>
    )
}