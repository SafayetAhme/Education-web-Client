import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://y-tau-jade.vercel.app'
})

const UseAxiosPublic = () => {
    return axiosPublic;
};

export default UseAxiosPublic;