import { useState } from "react";

export default function CardCarousel({ cards=[], title }) {
    const [cardId, setCardId] = useState(0);

    const handleScrollBack = () => {
        setCardId(cardId === 0 ? cards.length : cardId - 1);
    }

    const handleScrollForward = () => {
        setCardId((cardId + 1) % cards.length);
    }

    return (
        <div>
            <h2>{title}</h2>
            <div className="cards-container">
                {cards.at(cardId === 0 ? cards.length : cardId - 1)}
                {cards.at(cardId)}
                {cards.at((cardId + 1) % cards.length)}
            </div>
            <button onClick={handleScrollBack}>{`<`}</button>
            <button onClick={handleScrollForward}>{`>`}</button>
        </div>
    )
}