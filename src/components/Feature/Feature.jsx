import { IoCheckmarkDone } from "react-icons/io5";

const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex gap-3 items-center"><IoCheckmarkDone className="text-green-500 font-bold text-xl"></IoCheckmarkDone> {feature}</p>
        </div>
    );
};

export default Feature;