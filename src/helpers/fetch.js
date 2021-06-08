
const baseUrl = process.env.REACT_APP_API_URL;

const fetchWithoutUid = (endPoint, data, method='GET')=>{
    const url = `${baseUrl}/${endPoint}`;
    return fetch(url,{
        method,
        headers:{
            'content-type': 'aplication/json'
        },
        body: JSON.stringify(data)
    });
}

export {
    fetchWithoutUid
}