const contactapi = {};
const url = 'https://playground.4geeks.com/contact';



contactapi.getUser = async () => {
    try {
        console.log("Llamando a la API...");
        const resp = await fetch(url + '/agendas/Gaby');
        if (resp.status == 404) return contactapi.createAgenda();
        if (!resp.ok) throw new Error('Error getting agenda');
        const data = await resp.json();
        return data

    }
    catch (error) {

    console.log(error);


    }
}

contactapi.createAgenda = async ()=>{

try {
   const resp= await fetch(url+'/agendas/Gaby',{
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    }
   })
    if (!resp.ok) throw new Error ('error getting agenda')
        const data =  await resp.json ();
    return data;

} catch (error) {
    console.log(error);
    
    
}
}
export default contactapi;