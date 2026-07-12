export default function OfferCard({ type="standard", title, priceTag, description, src }) {
    return (
        <div className={`card-${type}`}>
            <div className="image-container">
                <img src={src} aria-hidden="true" />
            </div>
            <div className="text-container">
                <h3>{title}</h3>
                <div className="price-tag">{priceTag}</div>
                <h4>{description}</h4>
            </div>
            <button>Learn more</button>
        </div>
    )
}