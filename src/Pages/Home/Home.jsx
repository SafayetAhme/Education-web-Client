import Hero from "./Hero";
import TrustedCompany from "./TrustedCompany";
import Cart from "./Cart";
import DiscoverAboutUs from "./DiscoverAboutUs";
import Feedback from "./Feedback";
import HomeButton from "./HomeButton";
import { Helmet } from 'react-helmet-async';
import ReviewTwo from "./ReviewTwo";
import UseCartitems from "../../hooks/UseCartitems";



const Home = () => {
    const [menu] = UseCartitems();
    const popular = menu.filter(item => item.category === 'DigitalMarketing');

    return (
        <div className="mx-auto">
            <Helmet>
                <title>E-learning / Home</title>
            </Helmet>
            <Helmet>
                <title>E-learning / Home</title>
            </Helmet>
            <Hero></Hero>
            <TrustedCompany></TrustedCompany>
            <DiscoverAboutUs></DiscoverAboutUs>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-12 container mx-auto">
                {
                    popular.map(item => <Cart key={item._id} item={item}></Cart>)
                }
            </div>
            <HomeButton></HomeButton>
            <Feedback></Feedback>
            <ReviewTwo></ReviewTwo>
        </div>
    );
};

export default Home;