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
    const popular = menu.filter(item => item.category === 'Programming');

    return (
        <div><Helmet>
                <title>E-learning / Home</title>
            </Helmet>
            <Helmet>
                <title>E-learning / Home</title>
            </Helmet>
            <Hero></Hero>
            <TrustedCompany></TrustedCompany>
            <DiscoverAboutUs></DiscoverAboutUs>
            <div className="grid grid-cols-3 px-12">
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