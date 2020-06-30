const PORT_SERVER = 3005;
const URL_SERVER =  `http://localhost:${PORT_SERVER}`;


export default  get = (URI) =>{
    return new Promise ((resolve , reject )=>{
        fetch(URL_SERVER + URI).then(res => res.json())
        .then(res => resolve(res))
        .catch(error => reject(error))
    });
}


export default post = (URI, data) =>{
    return new Promise ((resolve , reject)=>{
        fetch(URL_SERVER + URI, {
            body: JSON.stringify(data),
            method: 'POST',
           headers: { 'Content-Type' : 'application/json' } 
        }).then( res => res.json())
        .then(res => resolve(res))
        .catch(error => reject(error));
    });
}



