import { useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../../hooks/UseAuth";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import UseAddtocart from "../../hooks/UseAddtocart";


const Details = () => {

    const detail = useLoaderData();
    console.log(detail);
    // console.log(detail.image)

    const { user } = UseAuth();
    const nagigate = useNavigate()
    const location = useLocation();
    const axiosSecure = UseAxiosSecure();
    const [, refetch] = UseAddtocart();

    // handle add to cart
    const handleaddtocart = () => {
        if (user && user.email) {
            // TODO: wow
            console.log(user.email);
            const addtocartitem = {
                menuId: detail?._id,
                email: user?.email,
                image: detail?.image,
                price: detail?.price,
                name: detail?.name,
                title: detail?.title,
                total_enrollment: detail?.total_enrollment
            }

            axiosSecure.post('/addtocart', addtocartitem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        alert("nice")
                        refetch()
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
        else {
            Swal.fire({
                title: "if you want to add item please login",
                text: "please",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sign In"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   toto
                    nagigate("/signin", { state: { from: location } })
                }
            });
        }
    }

    return (
        <div className="grid container mx-auto h-screen lg:grid-cols-2 p-12 gap-8">
            <div className="lg:w-[540px] lg:h-[440px]">
                <img className="w-full h-full rounded-xl" src={detail?.image} alt="" />
            </div>
            <div>
                <h1 className="text-3xl font-bold">{detail?.name}</h1>
                <h1 className="py-2 text-xl text-gray-600 font-medium">{detail?.title}</h1>
                <h1><span className="text-blue-600 text-xl font-bold">{detail?.price}</span></h1>
                <p className="py-1">{detail?.short_description}</p>
                <p className="text-green-700 text-xl font-bold">{detail?.total_enrollment}</p>
                <div className="lg:flex gap-6">
                    <button className="text-white bg-blue-600 p-3 mt-4 px-16 rounded-md font-medium hover:bg-green-600">Enroll This Now</button>
                    <button onClick={() => handleaddtocart(detail)} className="text-white bg-blue-600 p-3 mt-4 px-16 rounded-md font-medium hover:bg-green-600">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Details;