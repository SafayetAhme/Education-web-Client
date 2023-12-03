import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import UseAuth from "./UseAuth";


const UseAddtocart = () => {
    // tan stack query
    const axiosSecure = UseAxiosSecure();
    const { user } = UseAuth();
    const { refetch, data: addcart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/addtocart?email=${user.email}`);
            return res.data;
        }
    })
    return [addcart, refetch]
};

export default UseAddtocart;