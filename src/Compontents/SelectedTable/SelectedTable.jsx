/* eslint-disable react/prop-types */

const SelectedTable = ({ data,idx }) => {
    const { day, formatHour, formattedData, title } = data
    console.log(data)
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
                    <button><i className="fa-solid fa-pen-to-square"></i></button>
                    <button className="btn"><i className="fa-solid fa-trash"></i></button>
                    <button className="btn"><i className="fa-solid fa-check"></i></button>
                </td>
            </tr>
        </div>
    );
};

export default SelectedTable;