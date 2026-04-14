import { useState } from "react"
import contactapi from "../services/componentesApi"
import { Link,useNavigate } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"

const Edit = () => {
    const navigate = useNavigate()
    const { store, dispatch } = useGlobalReducer()
    const [formdata, setFormData] = useState({
        name: store.selected?.name || "missing info",
        phone: store.selected?.phone || "missing info",
        email: store.selected?.email || "missing info",
        address: store.selected?.address || "missing info",
        id: store.selected?.id
    })
    const initialState = {
        name: "",
        phone: "",
        email: "",
        address: ""

    }
    const handleChange = e => {
        console.log(e.target.name, e.target.value)

        // duda tambien como va esto

        setFormData({ ...formdata, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault()
        console.log(formdata);
        contactapi.EditContact(formdata)
        setFormData(initialState);
        navigate("/home")
    }
    return (
        // pregunta para facu en que consiste los name para el crear contact
        <div>
            <h1> new contact</h1>
            <form onSubmit={handleSubmit}>
                <input className="form-control" name="name" onChange={handleChange} value={formdata.name} type="text" />
                <input className="form-control" name="phone" onChange={handleChange} value={formdata.phone} type="text" />
                <input className="form-control" name="email" onChange={handleChange} value={formdata.email} type="text" />
                <input className="form-control" name="address" onChange={handleChange} value={formdata.address} type="text" />
                <input className="form-control" type="submit" />
            </form>
            <Link className="btn btn-primary" to={'/home'}> cancelar     </Link>

        </div>

    )

}
export default Edit