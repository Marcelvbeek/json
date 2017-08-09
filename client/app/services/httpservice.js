export default class httpService {
    constructor() {

    }

    getHeaders() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    }

    getBody(data) {
        JSON.stringify(data)
    }

    getPostData(data) {
        return {
            method: 'POST',
            headers: this.getHeaders(),
            body: this.getBody(data)
        }
    }

    post(url, data) {
        return new Promise(function(resolve, reject) {
            resolve({
                token: 'Works!'
            })
        })
        //return fetch(url, this.getPostData(data));
    }
}