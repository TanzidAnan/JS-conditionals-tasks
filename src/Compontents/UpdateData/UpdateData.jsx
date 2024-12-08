import { useState } from "react";
import DatePicker from "react-datepicker";
import { useLoaderData, useParams } from "react-router-dom";


const formetTime12Hours =(data) =>{
    let hours =data.getHours()
    const minutes =String(data.getMinutes()).padStart(2,"0")
    const seconds =String(data.getMinutes()).padStart(2,"0")
    const ampa =hours>=12?"pm" : "am";
    hours =hours%12 ||12
    return(`${hours}:${minutes}:${seconds}:${ampa}`)
}
const UpdateData = () => {
    const singleData =useLoaderData();
    const [title,setTitle] =useState(singleData?.title)
    const [day,setDay] =useState(singleData?.day);


    const [startDate, setStartDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date())
    const hendleTimeChange = (time) => {
        setSelectedTime(time)
    }

    const {id } =useParams();



    const hendleUpdateSchedule =(e) =>{
        e.preventDefault()
        const form =e.target;
        const formatHour =formetTime12Hours(selectedTime);
        const formattedData=startDate.toLocaleDateString("en-CA")
        const title =form.title.value;
        const day =form.day.value;;
        console.log(formatHour,formattedData,title,day)
    }

    return (
        <div>
             <form onSubmit={hendleUpdateSchedule} className="card-body">
                <div className="flex gap-4">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" name="title" value={title} onChange={(e) =>setTitle(e.target.value)} placeholder="Title" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Day</span>
                        </label>
                        <label className="w-full ">
                            <DatePicker
                                className="input input-bordered w-full"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                        </label>

                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Day</span>
                        </label>
                        <input type="text" name="day" defaultValue={day} placeholder="Title" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Time</span>
                        </label>
                        <DatePicker
                            className="input input-bordered w-full"
                            selected={selectedTime}
                            onChange={hendleTimeChange}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            timeCaption="Time"
                            dateFormat="H:mm:aa"
                        />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn bg-green-300" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default UpdateData;