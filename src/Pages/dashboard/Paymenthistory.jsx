import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";


const Paymenthistory = () => {
    const axiosSecure = UseAxiosSecure();

    const { data: payment = [] } = useQuery({
        queryKey: ['payment'],
        queryFn: async () => {
            const res = await axiosSecure.get('/payment')
            return res.data;
        }
    })
    return (
        <div>
            <div className="text-center py-12">
                <h1 className="text-2xl pb-2 text-green-600 font-bold">payments History bro!</h1>
                <p>payments history from user{payment.length}</p>
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>iuygui</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                           
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Paymenthistory;