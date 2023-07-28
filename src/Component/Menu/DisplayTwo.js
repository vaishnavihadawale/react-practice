
export const DisplayTwo = ({name,data1}) => {
    return (
        <div>
           
            {name &&
                <table>
                    <tr>
                        <th>ID</th>
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
                         data1 .map((u) =>
                            <tr>
                                <td>{u.Id}</td>
                                <td>{u.class}</td>
                                <td>{u.sname}</td>
                                <td>{u.Department}</td>
                                <td>{u.math}</td>
                                <td>{u.science}</td>
                                <td>{u.history}</td>
                                <td>{u.marathi}</td>
                                <td>{u.english}</td>
                                <td>{u.geography}</td>
                            </tr>
                        )
                    }
                </table>}
        </div>
    )
}