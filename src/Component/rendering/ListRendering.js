export const ListRendering = () => {
    const product = [
        { title: 'cabbage', isFruit: false , id: 1 },
        { title: 'gobiflower', isFruit: false ,id: 2 },
        { title: 'apple', isFruit: true , id: 3 },
        { title: 'mango', isFruit: true , id: 4 },
        { title: 'pineaaple', isFruit: true , id: 5 }
    ];
    let listitems = product.map(p => 
        <li key={p.id} style={{color:product.isFruit ? 'green' : 'brown'}}> {p.title}</li>
    
    )

    return (
        
        <ul>{listitems}</ul>
       
    )
}