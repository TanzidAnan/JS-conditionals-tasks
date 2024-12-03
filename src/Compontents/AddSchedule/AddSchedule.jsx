import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import Swal from "sweetalert2";

const formetTime12Hours =(data) =>{
    let hours =data.getHours()
    const minutes =String(data.getMinutes()).padStart(2,"0")
    const seconds =String(data.getMinutes()).padStart(2,"0")
    const ampa =hours>=12?"pm" : "am";
    hours =hours%12 ||12
    return(`${hours}:${minutes}:${seconds}:${ampa}`)
}


const AddSchedule = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date())
    const hendleTimeChange = (time) => {
        setSelectedTime(time)
    }
    const hendleAddSchedule =(e) =>{
        e.preventDefault()
        const form =e.target;
        const formatHour =formetTime12Hours(selectedTime);
        const formattedData=startDate.toLocaleDateString("en-CA")
        const title =form.title.value;
        const day =form.day.value;
      
        const data ={title,day,formatHour,formattedData}
        console.log(data);
        fetch('http://localhost:5000/schedule',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1000
                  });
            }
        })
    }



    return (
        <div>
            <form onSubmit={hendleAddSchedule} className="card-body">
                <div className="flex gap-4">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
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
                        <input type="text" name="day" placeholder="Title" className="input input-bordered" required />
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

export default AddSchedule;