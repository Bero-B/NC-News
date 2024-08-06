import "../../../css/ArticleCard.css"
export default function ArticleCard({img, topic, title, author, commentCount, articleDate}){
    const parsedDateStr = new Date(articleDate)
    let day = parsedDateStr.getUTCDate()
    let month = parsedDateStr.getUTCMonth() + 1
    let year = parsedDateStr.getUTCFullYear()
    day = day < 10 ? `0` + day : day
    month = month < 10 ? '0' + month : month;
    return (
        <section className="article-cards">
            <img className="article-img" src={img} alt="" />
            <h4>{topic}</h4>
            <h3>{title}</h3>
            <h5>By {author}</h5>
            <p>Comments {commentCount}</p>
            <p>Published {`${day}-${month}-${year}`}</p>
        </section>
    )
}