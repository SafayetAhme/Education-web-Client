import { Link } from "react-router-dom";


const DiscoverAboutUs = () => {
    return (
        <div>
            <div className="bg-blue-100 py-20 pt-20 grid px-12 grid-cols-2">
                <div className="flex pl-16">
                    <div className="mr-2">
                        <img src="https://i.ibb.co/HYT6D7v/Group-30.png" alt="" />
                        <img className="w-[180px]" src="https://i.ibb.co/GFD5HG9/Rectangle-19.png" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/h8m7cgj/Rectangle-18.png" alt="" />
                    </div>
                </div>
                <div>
                    <p className="px-3 py-2 mb-3 text-blue-600 font-medium bg-white w-48 rounded">Get To Know About Us</p>
                    <h1 className="text-3xl w-[400px] font-bold pb-3">Discover Top <span className="text-blue-600">Instructors</span> Around The World</h1>
                    <p>Branding thought-leader angel investor. protocal writeing, inflated saas series. zoom supported product mange. term sheet-login internationla intelligence operative.</p>
                    <div className="flex gap-16 pt-4">
                        <div>
                            <p className="text-lg"><span className="text-blue-600 font-medium">2000+</span> Expert Toturs
                            </p>
                        </div>
                        <div>
                            <p className="text-lg"><span className="text-blue-600 font-medium">1500+</span> Top Lessons
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-16 pt-4">
                        <div>
                            <p className="text-lg"><span className="text-blue-600 font-medium">1800+</span> Over Students
                            </p>
                        </div>
                        <div>
                            <p className="text-lg"><span className="text-blue-600 font-medium">3200+</span> Pro Videos
                            </p>
                        </div>
                    </div>
                    <button className="bg-blue-600 p-3 px-10 text-white rounded mt-4">DISCOVER MORE</button>
                </div>
            </div>
            <div className="flex pt-24 pb-6 px-12 items-center justify-between">
                <div>
                    <p className="bg-blue-200 p-2 mb-2 rounded">10,000+ Unique Online Courses</p>
                    <h1 className="text-2xl font-semibold">Our <span className="text-blue-600">Featured</span> Courses</h1>
                </div>
                <div>
                    <p className="text-blue-600 underline font-medium"><Link to="/allclass">All Class</Link></p>
                </div>
            </div>
        </div>
    );
};

export default DiscoverAboutUs;