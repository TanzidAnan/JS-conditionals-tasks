
const Selectede = () => {
    return (
        <div className="w-9/12 mx-auto">
            <input onChange={(e) =>setSearch(e.target.value)} type="text" name="search" placeholder="search" className="input input-bordered w-full max-w-xs" required />
            <div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>serial</th>
                                <th>Title</th>
                                <th>Day</th>
                                <th>Date</th>
                                <th>time</th>
                                <th>Auction</th>
                            </tr>
                        </thead>
                    </table>
                    <tbody></tbody>
                </div>
            </div>
        </div>
    );
};

export default Selectede;