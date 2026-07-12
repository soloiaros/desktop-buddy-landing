import styles from './OfferCard.module.css'

export default function OfferCard({ type="standard", title, priceTag, description, src, buttonText="Learn more" }) {
    return (
        <div className={styles[`card-${type}`]}>
            <div className={styles[`image-container`]}>
                <img src={src} aria-hidden="true" />
            </div>
            <div className={styles[`text-container`]}>
                <h3>{title}</h3>
                <div className={styles[`price-tag`]}>{priceTag}</div>
                <p>{description}</p>
            </div>
            <button>{buttonText}</button>
        </div>
    )
}