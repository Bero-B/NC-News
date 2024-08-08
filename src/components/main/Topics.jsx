import { useEffect, useState } from "react"
import { getTopics } from "../../../api"
import "../../../css/Topics.css"
import { Link } from "react-router-dom"
export default function Topics(){
    const [topics, setTopics] = useState([])
    useEffect(() => {
        getTopics().then((topicsData) => {
            setTopics(topicsData)
        })
    }, [])
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