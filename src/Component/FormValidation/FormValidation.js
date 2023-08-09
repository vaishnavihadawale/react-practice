import { useState } from 'react'
import './Design.css';
import { BsFillTrashFill } from "react-icons/bs"
import { BsFillPencilFill } from 'react-icons/bs';

export const FormValidation = () => {
    const [currentIndex, setCurrentIndex] = useState();
    const [flag, setFlag] = useState(true);
    const [inputarray, setInputarray] = useState([]);
    const [inputData, setInputData] = useState({
        emailid: "",
        password: ""
    });


    const changehandle = (event) => {

        setInputData({ ...inputData, [event.target.name]: event.target.value })
        console.log(inputData)

    }

    let { emailid, password } = inputData;

    const handlesubmit = (event) => {
        event.preventDefault();

        if (flag === true) {
            setInputarray([...inputarray, { emailid, password }])
        }
        else {
            inputarray.splice(currentIndex, 1, { emailid, password })
            setFlag(true)
        }

        setInputData({ emailid: "", password: "" })

    }


    const handledelete = (index) => {
        const dataRow = [...inputarray];
        dataRow.splice(index, 1);
        setInputarray(dataRow);
    }

    let handleEdit = (data, index) => {
        setFlag(false);
        setInputData(data);
        setCurrentIndex(index);

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
                    <button onClick={handlesubmit}>Submit
                    </button>

                </form>
                <table border={2} cellPadding={20} width="60%" >
                    <tbody>
                        <tr>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        {inputarray.map((data, index) => {
                            return (

                                <tr>
                                    <td>{data.emailid}</td>
                                    <td>{data.password}</td>
                                    <td><BsFillPencilFill onClick={() => handleEdit(data, index)} /></td>
                                    <td><BsFillTrashFill onClick={() => handledelete(index)} /></td>
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