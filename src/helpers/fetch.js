
const baseUrl = process.env.REACT_APP_API_URL;

const fetchWithoutUid = (endPoint, data, method='GET')=>{
    const url = `${baseUrl}/${endPoint}`;
   
    if(method === 'GET'){
        return fetch(url);
    }else{
    return fetch(url,{
        method,
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
        });
    }
}

export {
    fetchWithoutUid
}