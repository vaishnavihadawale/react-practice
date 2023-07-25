export const Task = () => {
    const student = [
        { Id: 101, class: 'SYMSC', sname: 'tyu', Department: 'compuer science', math: 56, science: 77, history: 89, marathi: 95, english: 70, geography: 89 },
        { Id: 102, class: 'FYMSC', sname: 'abc', Department: 'compuer science', math: 56, science: 77, history: 89, marathi: 91, english: 86, geography: 72 },
        { Id: 103, class: 'TYMSC', sname: 'aaf', Department: 'compuer science', math: 56, science: 77, history: 89, marathi: 89, english: 67, geography: 59 },
        { Id: 104, class: 'FYMSC', sname: 'bhc', Department: 'compuer science', math: 56, science: 77, history: 89, marathi: 95, english: 87, geography: 76 },
        { Id: 105, class: 'SYMSC', sname: 'kum', Department: 'compuer science', math: 56, science: 77, history: 89, marathi: 78, english: 70, geography: 67 },
        { Id: 106, class: 'TYMSC', sname: 'ert', Department: 'compuer science', math: 56, science: 77, history: 89, marathi: 86, english: 74, geography: 81 },
        { Id: 106, class: 'SYMSC', sname: 'gah', Department: 'compuer science', math: 56, science: 77, history: 89, marathi: 92, english: 73, geography: 49 }
    ]




    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Id</th>
                    <th>Class</th>
                    <th>Department</th>
                    <th>Marathi</th>
                    <th>English</th>
                    <th>History</th>
                    <th>Geography</th>
                    <th>Science</th>
                    <th>Math</th>


                </tr>

                {student.map((value, index) => {
                    return (
                        <tr key={index}>{value.Id}
                            <td>{value.sname}</td>
                            <td>{value.class}</td>
                            <td>{value.Department}</td>

                            <td>{value.marathi}</td>
                            <td>{value.english}</td>
                            <td>{value.history}</td>
                            <td>{value.geography}</td>
                            <td>{value.science}</td>
                            <td>{value.math}</td>
                        </tr>


                    )

                }
                )
                }
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>



                    <td>Total </td>
                    <td>{student.reduce((total, element) => {
                        console.log('total', total, typeof total)
                        console.log(element.math, typeof element.math)
                        return total + element.marathi






                    }, 0)}</td>
                    <td>{student.reduce((total, element) => {
                        return total + element.english
                    }, 0
                    )}</td>

                    <td>{student.reduce((total, element) => {
                        return total + element.history
                    }, 0
                    )}</td>

                    <td>{student.reduce((total, element) => {
                        return total + element.geography
                    }, 0
                    )}</td>

                    <td>{student.reduce((total, element) => {
                        return total + element.science
                    }, 0
                    )}</td>

                    <td>{student.reduce((total, element) => {
                        return total + element.math;
                    }, 0
                    )}</td>


                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Average</td>
                    <td>{student.reduce((p, q) => {
                        return p + q.marathi / 7
                    }, 0
                    )}</td>
                </tr>

            </table>
        </div>
    )
}