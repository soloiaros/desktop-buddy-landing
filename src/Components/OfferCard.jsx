import styles from './OfferCard.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router';

export default function OfferCard({ type="standard", title, priceTag, description, src, buttonText="Learn more" }) {
    const [amountInCart, setAmountInCart] = useState(0);
    const navigate = useNavigate();

    const handleIncreaseQuantity = () => {
        setAmountInCart(amountInCart + 1);
    }

    const handleDecreaseQuantity = () => {
        setAmountInCart(amountInCart - 1);
    }

    const handleStoreNavigation = () => {
        navigate('shop');
    }
    
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
            {type === 'standard' ?
                <button onClick={handleStoreNavigation}>{buttonText}</button>
                :
                amountInCart <= 0 ? 
                    <button onClick={handleIncreaseQuantity}>{buttonText}</button> 
                    : <div className={styles.dial}>
                        <div onClick={handleDecreaseQuantity}>-</div>
                        <p>{amountInCart}</p>
                        <div onClick={handleIncreaseQuantity}>+</div>
                    </div>
}
        </div>
    )
}