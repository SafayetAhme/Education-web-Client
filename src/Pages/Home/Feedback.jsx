

const Feedback = () => {
    return (
        <div className=" bg-[#040e26] px-12 my-24 gap-12 p-20">
            <div>
                <img className="" src="https://i.ibb.co/c16T51P/Group-33.png" alt="" />
            </div>
            <div>
                <div className="carousel w-full pt-12">
                    <div id="item1" className="carousel-item w-full justify-center">
                        <div className="">
                            <h1 className="text-3xl w-[300px] text-white font-bold">What Our <span className="text-blue-600">Students Say</span> About us</h1>
                            <img className="py-4 w-12"  src="https://i.ibb.co/tzDsGZx/Group-36.png" alt="" />
                            <p className="w-[500px] pb-2 text-white">"Lorem ipsum dolor sit amet consectetur adipisicing elit. A sunt ratione ut eaque molestiae neque, accusamus quos praesentium delectus tempora."</p>
                            <hr />
                            <p className=" pt-2 text-xl font-bold text-blue-600 f">Safayet Ahmed</p>
                            <p className="text-white">font end developer</p>
                        </div>
                    </div>
                    <div id="item2" className="carousel-item w-full justify-center">
                        <div className="">
                            <h1 className="text-3xl text-white w-[300px] font-bold">What Our <span className="text-blue-600">Students Say</span> About us</h1>
                            <img className="py-4 w-12"  src="https://i.ibb.co/tzDsGZx/Group-36.png" alt="" />
                            <p className="w-[500px] pb-2 text-white">"Lorem ipsum dolor sit amet consectetur adipisicing elit. A sunt ratione ut eaque molestiae neque, accusamus quos praesentium delectus tempora."</p>
                            <hr />
                            <p className=" pt-2 text-xl font-bold text-blue-600 f">Safayet Ahmed</p>
                            <p className="text-white">font end developer</p>
                        </div>
                    </div>
                    <div id="item3" className="carousel-item w-full justify-center">
                        <div className="">
                            <h1 className="text-3xl w-[300px] font-bold text-white">What Our <span className="text-blue-600">Students Say</span> About us</h1>
                            <img className="py-4 w-12"  src="https://i.ibb.co/tzDsGZx/Group-36.png" alt="" />
                            <p className="w-[500px] pb-2 text-white">"Lorem ipsum dolor sit amet consectetur adipisicing elit. A sunt ratione ut eaque molestiae neque, accusamus quos praesentium delectus tempora."</p>
                            <hr />
                            <p className=" pt-2 text-xl font-bold text-blue-600 f">Safayet Ahmed</p>
                            <p className="text-white">font end developer</p>
                        </div>
                    </div>
                    <div id="item4" className="carousel-item w-full justify-center">
                        <div className="">
                            <h1 className="text-3xl w-[300px] font-bold text-white">What Our <span className="text-blue-600">Students Say</span> About us</h1>
                            <img className="py-4 w-12"  src="https://i.ibb.co/tzDsGZx/Group-36.png" alt="" />
                            <p className="w-[500px] pb-2 text-white">"Lorem ipsum dolor sit amet consectetur adipisicing elit. A sunt ratione ut eaque molestiae neque, accusamus quos praesentium delectus tempora."</p>
                            <hr />
                            <p className=" pt-2 text-xl font-bold text-blue-600 f">Safayet Ahmed</p>
                            <p className="text-white ">font end developer</p>
                        </div>
                    </div>

                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>
        </div>
    );
};

export default Feedback;