import { useState } from "react";
import style from './CardCarousel.module.css'

export default function CardCarousel({ cards=[], title }) {
    const [cardId, setCardId] = useState(0);

    const handleScrollBack = () => {
        setCardId(cardId === 0 ? cards.length - 1 : cardId - 1);
    }

    const handleScrollForward = () => {
        setCardId((cardId + 1) % cards.length);
    }

    return (
        <div className={style.carousel}>
            <h2>{title}</h2>
            <div className={style["cards-container"]}>
                {cards.at(cardId === 0 ? cards.length - 1 : cardId - 1)}
                {cards.at(cardId)}
                {cards.at((cardId + 1) % cards.length)}
            </div>
            <span onClick={handleScrollBack}>{`<`}</span>
            <span onClick={handleScrollForward}>{`>`}</span>
        </div>
    )
}