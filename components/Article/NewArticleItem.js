import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function NewArticleItem({ ...props }) {
    return (
        <>
            <div className="my-5">
                <p className="text-sm text-gray-500"></p>
                <input onChange={(e) => props.setList(e.target.value)} required type="text" name="text" className="mt-1 px-3 py-2 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-300 focus:ring-yellow-300 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                <DatePicker className="text-center mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-300 focus:ring-yellow-300 block w-full rounded-md sm:text-sm focus:ring-1"
                    selected={props.sDate} onChange={(date) => props.setDate(date)}
                    dateFormat="MMM dd"
                    />
            </div>
        </>
    )
}

export default NewArticleItem