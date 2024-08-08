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

export function getCommentsForArticle(id){
    return api.get(`/articles/${id}/comments`).then(({data}) => {
        return data.comments
    })
}
export function updateArticleVotes(id, vote) {
    return api.patch(`/articles/${id}`, {inc_votes: vote})
    .then(({data}) => {
        return data.article
    })
}
export function updateCommentVotes(id, vote){
    return api.patch(`/comments/${id}`, {inc_votes: vote})
    .then(({data}) => {
        return data.comment
    })
}

export function postCommentToArticle(articleId, user, commentText){
    return api.post(`/articles/${articleId}/comments`, {username: user, body: commentText})
    .then(({data}) => {
        return data
    })
}

export function getUserByUsername(username){
    return api.get(`/users/${username}`)
    .then(({data}) => {
        return data.user
    })
}
export function deleteComment(commentId) {
    return api.delete(`/comments/${commentId}`)
}