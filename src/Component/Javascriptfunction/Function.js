export const Function=()=>{
    const student1=[4,5,6,78,9] ;

    /*let b= student1.map((s)=>{
    return s>50
    }
    )
    console.log(b)

    let c=student1.filter((f)=>{
        return f>50
    }
    )
    console.log(c)*/
    let d=student1.reduce((m,n)=>{
        console.log('total', m);
        return m+n
    }
    )
    console.log(d)
    return(
         <></>
    )
}