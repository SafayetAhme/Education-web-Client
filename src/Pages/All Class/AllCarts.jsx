/* eslint-disable react/prop-types */
import Cart from "../Home/Cart";

const AllCarts = ({ items }) => {
    return (
        <div className='px-12 grid grid-cols-3'>
            {
                items.map(item => <Cart key={item._id} item={item}></Cart>)
            }
        </div>
    );
};

export default AllCarts;