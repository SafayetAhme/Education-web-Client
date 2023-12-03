import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import UseAuth from "../../hooks/UseAuth";


const Paymenthistory = () => {
    const { user } = UseAuth();
    const axiosSecure = UseAxiosSecure();

    const { data: payment = [] } = useQuery({
        queryKey: ['payment', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment/${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <div className="text-center py-12">
                <h1 className="text-2xl pb-2 text-green-600 font-bold">payments History bro!</h1>
                <p>payments history from user{payment.length}</p>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-blue-600 text-xl">Number</th>
                            <th className="text-blue-600 text-xl"></th>
                            <th className="text-blue-600 text-xl">Date</th>
                            <th className="text-blue-600 text-xl">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payment.map((pay, index) =>
                                <tr key={pay._id}>
                                    <th>{index + 1}</th>
                                    <td></td>
                                    <td>{pay.date}</td>
                                    <td>{pay.price}</td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Paymenthistory;