var jsonify = async res => (await res.json());

class API {

    static get_data(url) {
        return new Promise((resolve, reject) => {
            fetch(`/api/${url}`, {
                credentials: 'include',
            }).then(jsonify).then(resolve).catch(reject)
        })
    }
    static post_data(url, data) {
        return new Promise((resolve, reject) => {
            fetch(`/api/${url}`, {
                method: "POST",
                credentials: 'include',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(data)
            }).then(jsonify).then(resolve).catch(reject)
        })
    }

}

export default API