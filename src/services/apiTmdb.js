import api from "../config/api";

const params = {
    api_key: process.env.REACT_APP_API_KEY,
    language: 'pt-BR',
}

async function getPopular () {
    return await api.get('/movie/popular', { params })
        .then((response) => response.data)
}

export {
    getPopular,
}