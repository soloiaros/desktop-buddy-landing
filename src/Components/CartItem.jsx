import styles from './CartItem.module.css'

export default function CartItem({ title, priceTag, description, src, quantity }) {
    return (
        <div className={styles['cart-item']}>
            <div className={styles['image-container']}>
                <img src={src} aria-hidden="true" alt={title} />
            </div>
            <div className={styles['details']}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className={styles['quantity']}>
                <button>-</button>
                <span>{quantity || 1}</span>
                <button>+</button>
            </div>
            <div className={styles['price']}>{priceTag}</div>
            <button className={styles['remove']}>Remove</button>
        </div>
    )
}
