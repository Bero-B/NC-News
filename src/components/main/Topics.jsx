import { useEffect, useState } from "react"
import { getTopics } from "../../../api"
import "../../../css/Topics.css"
import { Link } from "react-router-dom"
import Loading from "../reusable/Loading"
import NotFoundAnimation from "../reusable/NotFoundAnimation"
export default function Topics(){
    const [topics, setTopics] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    useEffect(() => {
        getTopics()
        .then((topicsData) => {
            setIsError(false)
            setTopics(topicsData)
        })
        .catch(() => {
            console.log('inside catch')
            setIsError(true)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [])
  

    if(isError) {
       return <NotFoundAnimation/>
    }
    if (isLoading) {
        return <Loading/>
    }
    return (
        <section className="topics-section">
            <h1>Choose a topic below to read its related articles</h1>
            <ul className="topics-list">
                {topics.map((topic) => {
                    return (
                    <li className="topic-card" key={topic.description}>
                        <Link className="links topics" to={`/articles?topic=${topic.slug}`}>
                        <h2>{topic.slug}</h2>
                        <p>{topic.description}</p>
                        </Link>
                    </li>
                    )
                })}
            </ul>
        </section>
    )
}