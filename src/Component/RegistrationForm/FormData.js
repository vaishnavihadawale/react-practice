export const FormData=({fname,lname,Flag})=>{
   
    return(
        <div>
        {Flag && 
        <div>
        <h1>Thank you</h1>
        <h2>firstname:{fname}</h2>
        <h2>lastname:{lname}</h2>
        </div>
        }
        </div>
    )
}