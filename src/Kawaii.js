const axios = require('axios');

class Kawaii {
    constructor(token) {
        this.token = token
    }

    async get(main, endpoint, f=[]) {
        const res = await axios.get(`https://kawaii.red/api/${main}/${endpoint}/token=${this.token}&filter=${f}/`).catch(() => null);
        if (res === null) return null;
        else return res.data["response"];
    }

    async endpoints(main) {
        const res = await axios.get(`https://kawaii.red/api/${main}/endpoints/token=${this.token}/`).catch(() => null);
        if (res === null) return null;
        else return res.data["response"]
    }
}

module.exports = Kawaii