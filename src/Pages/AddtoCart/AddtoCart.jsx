import { Link } from "react-router-dom";
import UseAddtocart from "../../hooks/UseAddtocart";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";


const AddtoCart = () => {
    const [addcart, refetch] = UseAddtocart();
    console.log(addcart)
    const totalPrice = addcart.reduce((total, item) => total + parseFloat(item.price), 0);
    const axiosSecure = UseAxiosSecure();

    // delete function
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/addtocart/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        refetch();
                    })
            }
        });
    }

    return (
        <div className="px-16 h-screen container mx-autopy-12">
            <div className="">
                <div className="lg:flex justify-between w-full">
                    <th className="font-bold text-xl text-blue-600">Your Total items: {addcart.length}</th>
                    <th>Your Total Price ${totalPrice}</th>
                    {/* <p>{totalPrice}</p> */}
                </div>
                <div className="pt-8">
                    {
                        addcart.map((item, index) => <div key={item._id} className="flex justify-between">
                            <div className="mb-4 lg:flex gap-4">
                                <img className="rounded-xl w-32 h-32" src={item.image} alt="" />
                                <div className="lg:pt-0 md:pt-6 sm:pt-6 pt-6">
                                    <h1 className="text-xl font-bold text-blue-600">{item.name}</h1>
                                    <h1>{item.title}</h1>
                                </div>
                            </div>
                            <div className="lg:lex gap-96 items-start">
                                <h1> Total Inroll: <span className="text-blue-600 font-bold">{item.total_enrollment}</span></h1>
                                <div className="lg:flex items-center gap-16">
                                    <h1 className="font-bold text-blue-600">{item.price}</h1>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="bg-[#ffffff56] p-4 lg:mr-0 md:mr-0 sm:mr-0 mt-4 rounded-md hover:bg-red-600">
                                        <MdDelete className="text-white "></MdDelete>
                                    </button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div className="lg:flex justify-between mt-10">
                    <Link to="/"><button className=" font-medium bg-blue-200 hover:bg-blue-600 text-black hover:text-white px-12 py-3 rounded-md">Continue Shopping</button></Link>
                    <Link to="/payment">
                        <button className="text-xl lg:mt-0 md:pt-0 sm:pt-0 mt-6 font-medium bg-blue-600 text-white px-12 py-3 rounded-md">Check Out</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AddtoCart;