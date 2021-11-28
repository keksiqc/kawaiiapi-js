const axios = require('axios');

class Kawaii {
    constructor(token) {
        this.token = token;
        this.url = "https://kawaii.red/api";
    }

    async get(main, endpoint, f=[]) {
        const res = await axios.get(`${this.url}/${main}/${endpoint}/token=${this.token}&filter=${f}/`).catch(() => null);
        if (res === null) return null;
        else return res.data["response"];
    }

    async endpoints(main) {
        const res = await axios.get(`${this.url}/${main}/endpoints/token=${this.token}/`).catch(() => null);
        if (res === null) return null;
        else return res.data["response"]
    }
}

module.exports = Kawaii
