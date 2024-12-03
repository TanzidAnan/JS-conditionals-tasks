/* eslint-disable no-undef */
import { useLoaderData } from "react-router-dom";
import SelectedTable from "../SelectedTable/SelectedTable";
import { useState } from "react";

const Selectede = () => {

    const AllData =useLoaderData();
    console.log(AllData)
    const [seduleData,setSeduleData] =useState(AllData)

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
                              seduleData.length===0?<p>No data found</p> :seduleData.map((data,index) => <SelectedTable  key={data._id} idx={index}
                              setSeduleData={setSeduleData}
                              seduleData={seduleData}
                              data={data}></SelectedTable>) 
                            }
                        </tbody>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Selectede;