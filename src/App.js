import { useState } from 'react';
import './App.css';
import {Form} from './Component/RegistrationForm/Form';

 //import {DisplayOne} from './Component/Menu/DisplayOne' 
//import { Home } from './Component/Task4/Home';
//import { TaskThree } from './Component/Task/Task3';
//import { TaskTwo } from './Component/Task2/TaskTwo';
//import { Task } from './Component/Task/Task';
//import { Function } from './Component/Javascriptfunction/Function';
//import { Button } from './Component/Button/Button';
//import MyButton from './Component/Mybutton/MyButton';
//import { MyHeader } from './Component/MyHeader';
//import logo from './reactlogo.jpg'
//import { ListRendering } from './Component/rendering/ListRendering';
//let isLoggedIn = false;
/*function NewButton() {
  return (
    <div>

      <h1>Hii,Welcome to React</h1>
      <button>I am a button </button>
    </div>
  )
}
const user = {
  name: "react",
  imageSize: 90,
  borderRadius: 50,

}*/

export default function App() {


  //const [username, setUserName] = useState('Guest')
  //const [isLoggedIn, setIsLoggedIn] = useState(false)
  //function toggleButton() {

    //if (isLoggedIn === true) {
      //setIsLoggedIn(false)
      //setUserName("Guest")

    //}
    //else {
     // setIsLoggedIn(true)
     // setUserName("Vaishnavi")
    //}
 // }
  //let headerText, buttonText1;

  //if (isLoggedIn === true) {
    //headerText = "I want to login"

    //buttonText1 = "Logout"
  //}
  //else {
   // headerText = "I want to logout"

    //buttonText1 = "Login"
  //}

  return (
   /* <DisplayOne/>*/
   <>
   <Form/>

    
    </>
    /*<>
    <DisplayOne/>
    <Home/>
  <TaskTwo/>
  <TaskTwo/>
    <Task/>
   <Function/>
    <Button name="vaishnavi"/>
    <img className="Avtar" src={logo} alt={'Photo of ' + user.name} />
    <NewButton/>

      <MyHeader upperText={username} />

      <h1>{headerText}</h1>
      
      <MyButton buttonText2={buttonText1} toggleButton={toggleButton} />
      <ListRendering/>
      
    </>*/
  );
}

