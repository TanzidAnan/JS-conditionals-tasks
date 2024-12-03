/* eslint-disable react/prop-types */

const SelectedTable = ({ data,idx,setSeduleData,seduleData }) => {
    const { _id,day, formatHour, formattedData, title } = data
    console.log(data);
    const hendleDelete =(id) =>{
        console.log(id)
        fetch(`http://localhost:5000/schedule/${id}`,{
            method:'DELETE',
        })
        .then(res =>res.json())
        .then(data =>{
            const newData =seduleData.filter((sedule) => sedule._id !== id);
            setSeduleData(newData)
        })
    }
    const isCompleted = true
    return (
        <div>
            <tr className="flex gap-20">
                <td>{idx+1}</td>
                <td>{title}</td>
                <td>{day}</td>
                <td>{formatHour}</td>
                <td>{formattedData}</td>
                <td className="flex gap-6">
                    <button className="btn"><i className="fa-solid fa-pen-to-square"></i></button>
                    <button onClick={() =>hendleDelete(_id)} className="btn"><i className="fa-solid fa-trash"></i></button>
                    <button className="btn"><i className="fa-solid fa-check"></i></button>
                </td>
            </tr>
        </div>
    );
};

export default SelectedTable;