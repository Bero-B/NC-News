import { useSearchParams } from "react-router-dom";
import ArticlesList from "../reusable/ArticlesList";

export function AllArticles (){
    const [searchParams, setSearchParams] = useSearchParams()
    const topic = searchParams.get('topic')
    return (
        <main>
            <p>Sort By</p>
            <select name="" id=""></select>
            <p>Order</p>
            <select name="" id=""></select>
            <ArticlesList topic={topic}/>
        </main>
    )
}