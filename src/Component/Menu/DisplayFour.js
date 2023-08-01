export const DisplayFour=({name2,data3})=>{
    return(
        <div>
           
        {name2 &&
            <table>
                <tr>
                    <th title="Id">ID</th>
                    <th>Class</th>
                    <th>Sname</th>
                    <th>Department</th>
                    <th>Math</th>
                    <th>Science</th>
                    <th>History</th>
                    <th>Marathi</th>
                    <th>English</th>
                    <th>Geography</th>
                </tr>
                {
                     data3 .map((e) =>
                        <tr>
                            <td>{e.Id}</td>
                            <td>{e.class}</td>
                            <td>{e.sname}</td>
                            <td>{e.Department}</td>
                            <td>{e.math}</td>
                            <td>{e.science}</td>
                            <td>{e.history}</td>
                            <td>{e.marathi}</td>
                            <td>{e.english}</td>
                            <td>{e.geography}</td>
                        </tr>
                    )
                }
            </table>}
    </div>
    )
}