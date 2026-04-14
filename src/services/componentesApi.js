const contactapi = {};
const url = 'https://playground.4geeks.com/contact';



contactapi.getUser = async () => {
    try {
        console.log("Llamando a la API...");
        const resp = await fetch(url + '/agendas/Dylan');
        if (resp.status == 404) return contactapi.createAgenda();
        if (!resp.ok) throw new Error('Error getting agenda');
        const data = await resp.json();
        return data

    }
    catch (error) {

        console.log(error);


    }
}

contactapi.createAgenda = async () => {

    try {
        const resp = await fetch(url + '/agendas/Dylan', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (!resp.ok) throw new Error('error getting agenda')
        const data = await resp.json();
        return data;

    } catch (error) {
        console.log(error);


    }
}
contactapi.createContact = async (crearContact) => {
    try {
        const resp = await fetch(url + '/agendas/Dylan/contacts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(crearContact)
        })
        if (!resp.ok) throw new Error('error getting agenda')
        const data = await resp.json();
        return data;

    } catch (error) {
        console.log(error);


    }
}
contactapi.EditContact = async (contactInfo) => {
    try {
        const resp = await fetch(url + '/agendas/Dylan/contacts/' + contactInfo.id, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contactInfo)
        })
        if (!resp.ok) throw new Error('error getting agenda')
        const data = await resp.json();
        return data;

    } catch (error) {
        console.log(error);


    }
}
contactapi.deleteContact = async (id) => {
    try {
        const resp = await fetch(url + '/agendas/Dylan/contacts/' + id, {
            method: "Delete",
            headers: {
                'Content-Type': 'application/json'
            },

        })
        if (!resp.ok)
            throw new Error('error getting agenda')
        

        
        

    } catch (error) {
        console.log(error);


    }
}
export default contactapi;