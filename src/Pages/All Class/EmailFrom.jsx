

const EmailFrom = () => {
    return (
        <div className="pl-[160px] my-16">
            <div className="flex gap-48 rounded-lg py-8 px-6 justify-between bg-green-800 w-[900px] ">
            <h1 className="font-semibold text-3xl w-[280px] text-white">Subscribe To Our Newslatter</h1>
            <div className="flex bg-[#ffffff28] px-5 items-center">
                <form className="bg-white p-2">
                    <input type="email" placeholder="Enter Your Email" required />
                </form>
                <button className="bg-blue-600 p-2 px-4 text-white">Subscribe</button>
            </div>
        </div>
        </div>
    );
};

export default EmailFrom;