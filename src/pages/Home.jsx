import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import contactapi from "../services/componentesApi.js";
import Card from "./Card.jsx";



export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	useEffect(() => {
		console.log("Se ejecuta Home");
		//  el then despues de ejecutar la funcion get user y crear el usuario me modificas el valor del store
		// con dispacth
		// quiero preguntar payload es un objeto que me guarda la informacion en  data
		contactapi.getUser().then(data => dispatch({
			type: "updateContactData",
			payload: {

				data
			}
		})

		);
	}, [])
	// porque en contacts quiero saber es porque la api guarda ahi mis contactos que cree
	return (
		<div className="text-center mt-5">

			{store.contactsData.contacts?.map(el => <Card key={el.id} name={el.name} phone={el.phone} email={el.email} adress={el.adress} />)}

		</div>

	);


}; 