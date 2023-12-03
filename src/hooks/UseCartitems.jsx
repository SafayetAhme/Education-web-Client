import { useEffect, useState } from "react";
import UseAxiosPublic from "./UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const UseCartitems = () => {
    const axiosPublic = UseAxiosPublic();
    // const [cart, setcart] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('http://localhost:5000/cart')
    //         .then(res => res.json())
    //         .then(data => {
    //             setcart(data);
    //             setLoading(false);
    //         });
    // }, [])

    const {data: cart = [], ispending: loading, refetch} = useQuery({
        queryKey: ['cart'],
        queryFn: async() => {
            const res = await axiosPublic.get('/cart');
            return res.data;
        }
    })

    return [cart, loading, refetch]
};

export default UseCartitems;