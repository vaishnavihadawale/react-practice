import { useState } from "react"
import './StyleToTaskFour.css'



export const Home = () => {
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

    let q = student.filter((p) =>
        p.class === 'FYMSC'
    )
    let k = student.filter((a) =>
        a.class === 'SYMSC'
    )
    let r = student.filter((b) =>
        b.class === 'TYMSC'
    )
  
  const [isLoggedIn,setIsLoggedIn]=useState(false);
     function display(){
        setIsLoggedIn(true)
        setSecond(false)
        setThirdTable(false)
     }
    const [second , setSecond]=useState(false)
      function displayone(){
        setSecond(true)
        setIsLoggedIn(false)
        setThirdTable(false)
      }

      const [third , setThirdTable]=useState(false)
      function displaytwo(){
        setThirdTable(true)
        setIsLoggedIn(false)
        setSecond(false)
      }
    return (
        <div>
            <button  onClick={display}>FYMSC Student</button>
            <button onClick={displayone}>SYMSC Student</button>
            <button onClick={displaytwo}>TYMSC Student</button>
            { isLoggedIn && 
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
                    q.map((u) =>
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

            </table>
            }

           {second && <table>





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
                    k.map((s) =>
                        <tr>

                            <td>{s.Id}</td>
                            <td>{s.class}</td>
                            <td>{s.sname}</td>
                            <td>{s.Department}</td>
                            <td>{s.math}</td>
                            <td>{s.science}</td>
                            <td>{s.history}</td>
                            <td>{s.marathi}</td>
                            <td>{s.english}</td>
                            <td>{s.geography}</td>
                        </tr>
                    )
                }

            </table>
            } 
            { third && <table>




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
                    r.map((j) =>
                        <tr>
                            <td>{j.Id}</td>
                            <td>{j.class}</td>
                            <td>{j.sname}</td>
                            <td>{j.Department}</td>
                            <td>{j.math}</td>
                            <td>{j.science}</td>
                            <td>{j.history}</td>
                            <td>{j.marathi}</td>
                            <td>{j.english}</td>
                            <td>{j.geography}</td>
                        </tr>
                    )
                }

            </table>}

        </div>

    )
}