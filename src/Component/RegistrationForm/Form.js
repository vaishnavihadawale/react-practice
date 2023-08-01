import { useState } from "react"
import { FormData } from "./FormData";
import './StyleToForm.css'
export const Form = () => {
    const[form,setForm]=useState(true);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [emailid, setEmailid] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [flag, setFlag] = useState(false);
    const [usererr, setUsererr] = useState(false);
    const handlefirstname = (event) => {
        
        setFirstname(event.target.value)
        setFlag(false);
        if (firstname.length < 4) {
            setUsererr(true);
        }
        else{
            setUsererr(false);
        }
    }
    const handlelastname = (event) => {
        setLastName(event.target.value)
        setFlag(false);
    }
    const handleUsername = (event) => {
        setUsername(event.target.value)
        setFlag(false);
    }
    const handleid = (event) => {
        setEmailid(event.target.value)
        setFlag(false);
    }
    const handlemobile = (event) => {
        setMobile(event.target.value)
        setFlag(false);
    }
    const handlepassword = (event) => {
        setPassword(event.target.value)
        setFlag(false);
    }
    const handlesubmit = (event) => {
        event.preventDefault();
        setFlag(true);
        setForm(false);
        

    }


    return (
        <div class="container">
{form && 
            <form class="form-container" onSubmit={handlesubmit}>
                <label>FirstName</label><br></br>
                <input  type="text" value={firstname} onChange={handlefirstname} ></input>{usererr ?<span>User is not valid</span>:""}<br></br>
                <label>LastName</label><br></br>
                <input type="text" value={lastname} onChange={handlelastname}></input><br></br>
                <label>Username</label><br></br>
                <input type="text" value={username} onChange={handleUsername}></input><br></br>
                <label>EmailId</label><br></br>
                <input type="text" value={emailid} onChange={handleid}></input><br></br>
                <label>Mobile No.</label><br></br>
                <input type="text" value={mobile} onChange={handlemobile}></input><br></br>
                <label>Password</label><br></br>
                <input type="text" value={password} onChange={handlepassword}></input><br></br>
                <input type="submit" value="Submit" onClick={handlesubmit}></input>
            </form>
}
            <FormData fname={firstname} lname={lastname} Flag={flag} />
        </div>
    )

}


