
const jsonify = async res => {
    try{
        return {data:await res.json(), status: res.status}
    }
    catch (e) {
        console.log(e)
        return {data: null, status: res.status}
    }
};

export default {
    request
}

function request(url, data) {
    return new Promise((resolve,reject)=>{
        fetch(`/api/${url}`, {
            method: data?"POST":"GET",
            credentials: 'include',
            headers: {
                'content-type': data?'application/json':undefined,
            },
            body: JSON.stringify(data)
        }).then(jsonify).then(resolve).catch(reject)
    })
}