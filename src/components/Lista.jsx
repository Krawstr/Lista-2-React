const Lista = () => {
    const frutas = ["maca", "banana", "laranja", "uva"]
    
    return (
        <ol>
            {frutas.map(fruta => <li>{fruta}</li>)}
        </ol>
    )
    
}


export default Lista