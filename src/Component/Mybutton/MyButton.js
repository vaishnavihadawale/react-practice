const MyButton = ({ buttonText2, toggleButton }) => {
    let isLoggedIn = false;
    let dada='vaishu';
    
    return (
        <>
            <h1>welcome {isLoggedIn && 'vish'}</h1>
            <button onClick={toggleButton}>{buttonText2}</button>
        </>
    )

}
export default MyButton;