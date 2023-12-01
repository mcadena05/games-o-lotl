import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'cfb7ff3c97ce488295a06afaec4b2cf9'

    }
})