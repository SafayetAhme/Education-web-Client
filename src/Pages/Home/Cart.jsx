import { Link } from "react-router-dom";

const cart = ({ item }) => {
    const { _id, name, image, price, total_enrollment, short_description, title } = item;
    return (
        <div className="">
            <div>
                <div className=" w-[384px] card card-compact bg-base-100 shadow-xl">
                    <img className="h-[300px] rounded-lg w-full" src={image} alt="Shoes" />
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <div className="flex gap-36 items-center w-[350px]">
                            <h2 className="card-title ">{title}</h2>
                            <p className="text-xl font-bold text-blue-600">{price}</p>
                        </div>
                        <p>{short_description}</p>
                        <p>Total Enrolled: {total_enrollment}</p>
                        <div className="card-actions justify-center py-2">
                            <Link to={`/details/${_id}`}>
                                <button className="btn bg-blue-600 px-36 text-white w-full">Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default cart;