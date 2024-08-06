import axios from "axios";
const api = axios.create({
    baseURL: "https://nc-news-7fn6.onrender.com/api"
})
export function getAllArticles(){
    return api.get("/articles").then(({data}) => {
       return data.articles
    })
}
export function getArticleById(id){
    return api.get(`/articles/${id}`).then(({data}) => {
        return data.article
    })
}
