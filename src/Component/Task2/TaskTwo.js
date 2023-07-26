export const TaskTwo = () => {
    const student = [
        { Id: 101, class: 'SYMSC', sname: 'tyu', Department: 'compuer science', math: 56, science: 77, history: 89, marathi: 95, english: 70, geography: 89 },
        { Id: 102, class: 'FYMSC', sname: 'abc', Department: 'compuer science', math: 56, science: 77, history: 89, marathi: 91, english: 86, geography: 72 },
        { Id: 103, class: 'TYMSC', sname: 'aaf', Department: 'compuer science', math: 56, science: 77, history: 89, marathi: 89, english: 67, geography: 59 },
        { Id: 104, class: 'FYMSC', sname: 'bhc', Department: 'compuer science', math: 56, science: 77, history: 89, marathi: 95, english: 87, geography: 76 },
        { Id: 105, class: 'SYMSC', sname: 'kum', Department: 'compuer science', math: 56, science: 77, history: 89, marathi: 78, english: 70, geography: 67 },
        { Id: 106, class: 'TYMSC', sname: 'ert', Department: 'compuer science', math: 56, science: 77, history: 89, marathi: 86, english: 74, geography: 81 },
        { Id: 107, class: 'SYMSC', sname: 'gah', Department: 'compuer science', math: 56, science: 77, history: 89, marathi: 92, english: 73, geography: 49 },
        { Id: 108, class: 'TYMSC', sname: 'pqr', Department: 'compuer science', math: 56, science: 77, history: 89, marathi: 92, english: 73, geography: 49 }
    ]

    let a = student.filter((p) =>

        p.class === "FYMSC"



    )
    console.log(a);


    return (
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Class</th>
                    <th>SName</th>
                    <th>Department</th>
                    <th>Math</th>
                    <th>Science</th>
                    <th>History</th>
                    <th>Marathi</th>
                    <th>English</th>
                    <th>Geography</th>
                </tr>
                {a.map((p) => {
                    return (
                        <tr>
                            <td>{p.Id}</td>
                            <td>{p.class}</td>
                            <td>{p.sname}</td>
                            <td>{p.Department}</td>
                            <td>{p.math}</td>
                            <td>{p.science}</td>
                            <td>{p.science}</td>
                            <td>{p.history}</td>
                            <td>{p.marathi}</td>
                            <td>{p.english}</td>
                            <td>{p.geography}</td>
                        </tr>
                    )
                }
                )}


            </table>
        </div>
    )
}