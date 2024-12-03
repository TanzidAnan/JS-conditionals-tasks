
const SelectedTable = ({ data }) => {
    const { day, formatHour, formattedData, title } = data
    console.log(data)
    const isCompleted = true
    return (
        <div>
            <tr className="flex gap-20">
                <td></td>
                <td>{title}</td>
                <td>{day}</td>
                <td>{formatHour}</td>
                <td>{formattedData}</td>

            </tr>
        </div>
    );
};

export default SelectedTable;