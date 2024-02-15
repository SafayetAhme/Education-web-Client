import { Link } from "react-router-dom";
import ExploreCourese from "./ExploreCourese";
import CategoryCart from "./CategoryCart";
import EmailFrom from "./EmailFrom";
import { Helmet } from "react-helmet-async";

const AllClass = () => {
    return (
        <div className="mx-auto container">
            <Helmet>
                <title>E-learning / All Class</title>
            </Helmet>
            <div className="pb-16">
            <div className="hero py-24" style={{ backgroundImage: 'url(https://i.ibb.co/TgykCvJ/book.jpg)' }}>

                <div className="text-white">
                    <h1 className="mb-5 text-5xl font-bold">Our Courses</h1>
                    <div className="text-center">
                        <Link className=" justify-center text-white bg-blue-600 p-1 hover:bg-white hover:text-black rounded-md w-[90px]" to="/">Home </Link>
                    </div>
                </div>
            </div>
        </div>
        {/* explore corses */}
        <ExploreCourese></ExploreCourese>
        <CategoryCart></CategoryCart>
        <EmailFrom></EmailFrom>
        </div>
    );
};

export default AllClass;