import { useState } from 'react'
import './Design.css'

export const FormValidation = () => {

    const [inputarray, setInputarray] = useState([]);
    const [inputData, setInputData] = useState({
        emailid: "",
        password: ""
    });


    const changehandle = (event) => {
    
            setInputData({ ...inputData, [event.target.name]: event.target.value })

    }

    let { emailid, password } = inputData;

    const handlesubmit = (event) => {
        event.preventDefault();
        setInputarray([...inputarray, { emailid, password }])
       // console.log(inputData);
        //console.log(inputarray);
        setInputData({ emailid: "", password: "" })
    }


    const handledelete = (index) => {
        const dataRow = [...inputarray];
        dataRow.splice(index, 1);
        console.log(inputarray);
        console.log(dataRow);
        setInputarray(dataRow);
    }

    return (
        <div>

            <div className="container">
                <form>
                    <h1>Login Form</h1>
                    <div className="form-group">
                        <label>Email id</label>
                        <input type="text" autoComplete='off' name='emailid' value={inputData.emailid} className="form-control" placeholder='Enter your email..' onChange={changehandle}></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="text" name='password' value={inputData.password} className="form-control" placeholder='Enter your password..' onChange={changehandle}></input>
                    </div>
                    <button onClick={handlesubmit}>Submit</button>

                </form>
                <table border={2} cellPadding={20} width="60%" >
                    <tbody>
                        <tr>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Delete</th>
                        </tr>
                        {inputarray.map((data, index) => {
                            return (

                                <tr>
                                    <td>{data.emailid}</td>
                                    <td>{data.password}</td>
                                    <td><button onClick={() => handledelete(index)}>Delete</button></td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>

            </div>






        </div>


    )
}