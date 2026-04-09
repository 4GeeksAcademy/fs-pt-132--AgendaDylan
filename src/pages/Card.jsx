import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const Card = ({ name, phone, email, adress , cid }) => {
//   para que uso el navigate
    const navigate = useNavigate()
    const {store,dispatch} = useGlobalReducer() 
//   para que necesito comparar id 
  const handleNavigate = (id) =>{
    console.log(id)
    dispatch({
        type: 'selectedContact',
        payload:{

            id
        }
    })


  }
    return (

        <div className="card" >
            <p>{name}</p>
            <p>{phone}</p>
            <p>{email}</p>
            <p>{adress}</p>
            <button className="btn btn-success" onClick={()=>handleNavigate (cid)} > edit </button>
        </div >
    )
}

export default Card;


