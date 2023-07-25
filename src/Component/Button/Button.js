export const Button = (props) => {
    const array = [9, 1, 2, 3, 4, 5,8,11]
    let b = array.map((value, index, array) => {
        return value - 1;
    }
    )
    let c = array.filter((a) => {
      return a>7;
    } )
    let o = array.reduce((d,m)=>{
         return d+m;
    })
   console.log(o)
    console.log(c)
    console.log(b)
    return (
        <>   
            <h1>Hello ,in React welcome {props.name}</h1>

        </>

    )
}