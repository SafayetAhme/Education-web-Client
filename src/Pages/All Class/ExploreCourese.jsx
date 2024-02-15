import { FaBusinessTime } from 'react-icons/fa';


const ExploreCourese = () => {
    return (
        <div className='container justify-center mx-auto'>
            <div className="text-center py-12">
                <h3 className="text-xl font-normal">Top Categories</h3>
                <h1 className="text-2xl font-bold pb-4">Explore Our Courses</h1>
                <div className="w-full">
                    <img className="pl-[550px] -mt-4" src="https://i.ibb.co/T4cjMPf/Vector-1158-1.png" alt="" />
                </div>
            </div>

            {/*  */}
            <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 justify-center mx-auto gap-8'>
                <div className="bg-slate-100 pr-8 hover:bg-blue-500 hover:text-white lg:w-[220px] text-center py-12 rounded-lg">
                    <div className='justify-center'>
                        < FaBusinessTime />
                    </div>
                    <h2 className='text-xl font-medium pb-1 hover:text-white'>Account & Business</h2>
                    <p>236+ Course Available</p>
                </div>
                <div className="bg-slate-100 pr-8  hover:bg-red-500 hover:text-white lg:w-[220px] text-center py-12 rounded-lg">
                    <div className='justify-center'>
                        < FaBusinessTime />
                    </div>
                    <h2 className='text-xl  font-medium pb-1'>Account & Business</h2>
                    <p>236+ Course Available</p>
                </div>
                <div className="bg-slate-100 pr-8  hover:bg-green-500 hover:text-white lg:w-[220px] text-center py-12 rounded-lg">
                    <div className='justify-center'>
                        < FaBusinessTime />
                    </div>
                    <h2 className='text-xl font-medium pb-1'>Account & Business</h2>
                    <p>236+ Course Available</p>
                </div>
                <div className="bg-slate-100 pr-8 hover:bg-red-500 hover:text-white lg:w-[220px] text-center py-12 rounded-lg">
                    <div className='justify-center'>
                        < FaBusinessTime />
                    </div>
                    <h2 className='text-xl font-medium pb-1'>Account & Business</h2>
                    <p>236+ Course Available</p>
                </div>
                <div className="bg-slate-100 hover:bg-blue-500 hover:text-white lg:w-[220px] text-center py-12 rounded-lg">
                    <div className='justify-center'>
                        < FaBusinessTime />
                    </div>
                    <h2 className='text-xl font-medium pb-1'>Account & Business</h2>
                    <p>236+ Course Available</p>
                </div>
            </div>
            <div className="text-center py-12">
                <h3 className="text-xl font-normal">Course</h3>
                <h1 className="text-2xl font-bold pb-4">Most Popular courses</h1>
                <div className="w-full">
                    <img className="pl-[550px] -mt-4" src="https://i.ibb.co/T4cjMPf/Vector-1158-1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ExploreCourese;