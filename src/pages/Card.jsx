const Card = ({name, phone, email, adress}) => {

    return (

        <div className = "card" >
    <p>{name}</p>
    <p>{phone}</p>
    <p>{email}</p>
    <p>{adress}</p>
    </div >
    )
}

export default Card;

    
