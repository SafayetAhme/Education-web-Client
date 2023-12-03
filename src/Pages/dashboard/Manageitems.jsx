import { MdDelete } from "react-icons/md";
import UseCartitems from "../../hooks/UseCartitems";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import { Link } from "react-router-dom";


const Manageitems = () => {
    const [cart, loading, refetch] = UseCartitems();
    const axiosSecure = UseAxiosSecure();

    const handleDeletaitems = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/cart/${item._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch();
                    loading();
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.name} has been deleted`,
                        icon: "success"
                    });
                }
            }
        });
    }


    // handle handleUpdateitems
    const handleUpdateitems = (item) => {

    }

    return (
        <div>
            <div className="text-center py-12">
                <h1 className="text-2xl pb-2 text-green-600 font-bold">Manage your Items</h1>
                <p>if you want to manage you can manage.</p>
            </div>
            <div className="pl-2 pr-12">
                <thead>
                    <tr className="flex gap-48 pb-8 text-blue-600">
                        <th>
                            #
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Delete</th>
                        <th></th>
                    </tr>
                </thead>
                <div>
                    {
                        cart.map((item, index) => <div className="flex ">
                            <th className="">
                                {index + 1}
                            </th>
                            <div className="flex pb-6 mr-24">
                                <img className="rounded-xl w-32 h-32 mx-4" src={item.image} alt="" />
                                <div>
                                    <h1 className="text-xl font-bold text-blue-600">{item.name}</h1>
                                    <h1>{item.title}</h1>
                                </div>
                            </div>
                            <div className="pb-12">
                                <h1> Total Inroll: <span className="text-blue-600 font-bold">{item.total_enrollment}</span></h1>
                                <div className="flex gap-36  items-end">
                                    <h1 className="font-bold text-blue-600">{item.price}</h1>
                                    <div className="flex gap-12">
                                        <div>
                                            <Link to={`/dashboard/updateitems/${item._id}`}>
                                                <button
                                                    onClick={() => handleUpdateitems(item)}
                                                    className="bg-[#14131356] p-4 rounded-md hover:bg-red-600">
                                                    <FaEdit className="text-white "></FaEdit>
                                                </button>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => handleDeletaitems(item)}
                                                className="bg-[#14131356] p-4 rounded-md hover:bg-red-600">
                                                <MdDelete className="text-white "></MdDelete>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Manageitems;