import axios from 'axios';


const api = axios.create({
    baseURL : process.env.API_BASE_URL,
    headers : {
        Authorization : `Bearer ${process.env.BACKEND_API_KEY}`,
    }
});

const fetchCategories = async () => await api.get('/api/cats')
const fetchArticles = async (queryString) => await api.get(`/api/articles?${queryString}`)
const fetchArticleBySlug = async (queryString) => await api.get(`/api/articles?${queryString}`)

export {fetchArticles, fetchCategories, fetchArticleBySlug}