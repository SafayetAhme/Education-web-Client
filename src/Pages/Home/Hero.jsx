

const Hero = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero bg-yellow-100">
                        <div className=" grid grid-cols-2 p-24 gap-2 items-center">
                            <img src="https://i.ibb.co/Rccm64b/Group-15.png" className="rounded-lg" />
                            <div>
                                <h1 className="text-5xl font-bold">Learn <span className="text-blue-600">Skills</span> From Our Top Istructors</h1>
                                <p className="py-6">The more that you learn, the more thinks you will know, here you learn anything anywhere. we will help you alogn the way.</p>
                                <button className="btn bg-blue-500 text-white">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/*  */}
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero bg-yellow-100">
                        <div className=" grid grid-cols-2 p-24 gap-2 items-center">
                            <img src="https://i.ibb.co/GpmXKFM/Group-13.png" className="rounded-lg" />
                            <div>
                                <h1 className="text-5xl font-bold">Learn <span className="text-blue-600">Skills</span> From Our Top Istructors</h1>
                                <p className="py-6">The more that you learn, the more thinks you will know, here you learn anything anywhere. we will help you alogn the way.</p>
                                <button className="btn bg-blue-500 text-white">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/*  */}
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero bg-yellow-100">
                        <div className=" grid grid-cols-2 p-24 gap-2 items-center">
                            <img src="https://i.ibb.co/1bbN1H1/Group-10.png" className="rounded-lg" />
                            <div>
                                <h1 className="text-5xl font-bold">Learn <span className="text-blue-600">Skills</span> From Our Top Istructors</h1>
                                <p className="py-6">The more that you learn, the more thinks you will know, here you learn anything anywhere. we will help you alogn the way.</p>
                                <button className="btn bg-blue-500 text-white">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/*  */}
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="hero bg-yellow-100">
                        <div className=" grid grid-cols-2 p-24 gap-2 items-center">
                            <img src="https://i.ibb.co/nsm7dMX/Group-14.png" className="rounded-lg" />
                            <div>
                                <h1 className="text-5xl font-bold">Learn <span className="text-blue-600">Skills</span> From Our Top Istructors</h1>
                                <p className="py-6">The more that you learn, the more thinks you will know, here you learn anything anywhere. we will help you alogn the way.</p>
                                <button className="btn bg-blue-500 text-white">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;