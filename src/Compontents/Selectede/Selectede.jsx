import { useLoaderData } from "react-router-dom";
import SelectedTable from "../SelectedTable/SelectedTable";

const Selectede = () => {

    const AllData =useLoaderData();
    console.log(AllData)

    return (
        <div className="w-9/12 mx-auto">
            <div className=" text-center">
                <input onChange={(e) => setSearch(e.target.value)} type="text" name="search" placeholder="search" className="input input-bordered w-full max-w-xs" required />
                <div className="text-center">
                    <div>
                        <table>
                            <thead>
                                <tr className="gap-14 flex py-7 ">
                                    <th>serial</th>
                                    <th>Title</th>
                                    <th>Day</th>
                                    <th>Date</th>
                                    <th>time</th>
                                    <th>Auction</th>
                                </tr>
                            </thead>
                        </table>
                        <tbody>
                            {
                              AllData.length===0?<p>No data found</p> :AllData.map(data => <SelectedTable key={data._id} data={data}></SelectedTable>) 
                            }
                        </tbody>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Selectede;