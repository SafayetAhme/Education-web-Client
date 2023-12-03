import { Link } from "react-router-dom";


const HomeButton = () => {
    return (
        <div className="text-center pt-12">
            <button className="text-xl border-0 border-b-4 bg-blue-600 p-3 px-12 text-white rounded-lg hover:bg-green-600"><Link to="/allclass">See All Class</Link></button>
        </div>
    );
};

export default HomeButton;