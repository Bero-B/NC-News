import { Link } from "react-router-dom"
import "../../../css/ArticleCard.css"
import { formatDate } from "../../../utils/utils"
export default function ArticleCard({article}){
    const {article_id, article_img_url, author, comment_count, created_at, title, topic} = article
    const formattedDate = formatDate(created_at)
    return (
        <section className="article-cards">
            <h4>{topic}</h4>
            <img className="article-img" src={article_img_url} alt="" />
            <div className="title-author-date-container">
                <Link className="links title" to={`/articles/${article_id}`}><h3>{title}</h3></Link>
                <div className="author-date-container article">
                    <h5 className="article-author">By {author}</h5>
                    <p className="article-date">Published {formattedDate}</p>
                </div>
            </div>
            
            
            
        </section>
    )
}