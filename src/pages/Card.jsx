import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import EditContact from "./EditContact";
import contactapi from "../services/componentesApi";

const Card = ({ name, phone, email, address, cid }) => {
    //   para que uso el navigate
    const navigate = useNavigate()
    const { store, dispatch } = useGlobalReducer()
    //   para que necesito comparar id 
    const handleNavigate = (id) => {
        console.log(id)
        dispatch({
            type: 'selectedContact',
            payload: {

                id
            }
        })

        navigate('/editarcontacto');
    }
    const handleDelete =  async (cid) =>{
		await contactapi.deleteContact(cid)
		contactapi.getUser().then(data => dispatch({
                    type: "updateContactData",
                    data
                })
        
                );

	}
    return (

        <div className="card" >
            <p>{name}</p>
            <p>{phone}</p>
            <p>{email}</p>
            <p>{address}</p>
            <button className="btn btn-success" onClick={() => handleNavigate(cid)} > edit </button>
            <button className="btn btn-danger" onClick={() => handleDelete(cid)} > delete </button>
        </div >
    )
}

export default Card

