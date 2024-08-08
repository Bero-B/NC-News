import { useSearchParams } from "react-router-dom";
import ArticlesList from "../reusable/ArticlesList";
import "../../../css/AllArticles.css"

export function AllArticles (){
    const [searchParams, setSearchParams] = useSearchParams()
    const topic = searchParams.get('topic')
    const sortByQuery = searchParams.get('sort_by')
    const orderQuery = searchParams.get('order')

    function handleChange(e){
        const newParams = new URLSearchParams(searchParams)
        newParams.set(e.target.id, e.target.value)
        setSearchParams(newParams)
    }
    return (
        <main>
            <div className="filter-container">
            <p>Sort By</p>
            <label htmlFor="sort_by">
                <select onChange={handleChange} name="sort_by" id="sort_by">
                   <option  value="created_at" selected>Date</option>
                    <option value="comment_count">Comments</option>
                    <option value="votes">Votes</option>
                </select>
            </label>
            
            <p>Order</p>
            <label htmlFor="order">
                <select onChange={handleChange} name="order" id="order">
                    <option value="desc" selected>Descending</option>
                    <option value="asc">Ascending</option>
                </select>
            </label>
            </div>
            <ArticlesList topic={topic} sortByQuery={sortByQuery} orderQuery={orderQuery} />
        </main>
    )
}