import CardCarousel from "../Components/CardCarousel";
import OfferCard from "../Components/OfferCard";
import './Homepage.css';

export default function Homepage() {
    return (
        <main>
            <section className="hero">
                <div className="headline">
                    <h1>Desktop Bud</h1>
                </div>
                <div className="image-container">
                    <img src="/hero-img.png" alt="Tiny Mike" />
                </div>
                <div className="text-container">
                    <h1>Meet your perfect desk buddy.</h1>
                    <p>Need a disposable friend? An interlocutor? A study buddy? Tiny Mike is all you can ask for and more.</p>
                </div>
            </section>
            <section className="offers">
                <CardCarousel title="Check out our limited offers!" cards={[
                    <OfferCard title="With a surveillance camera installed" priceTag='-60%' description="Give us all your data forever, for a fraction of the price." src="/camera-card-img.png" />,
                    <OfferCard title="Without RAM" priceTag='-99%' description="Get rid of the priciest component. Do you really need it anyway?" src="./ram-card-img.png" />,
                    <OfferCard title="With a friend" priceTag='+$79.99' description="Get your Tiny Mike a friend! With this setup, you're not really needed here anymore." src="./friend-card-img.png" />,
                ]} />
                <div className="offer-cards"></div>
            </section>
        </main>
    )
}