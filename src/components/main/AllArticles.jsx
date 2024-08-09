import { useSearchParams } from "react-router-dom";
import ArticlesList from "../reusable/ArticlesList";
import "../../../css/AllArticles.css"
import { useState } from "react";

export function AllArticles (){
    const [searchParams, setSearchParams] = useSearchParams()
    const [page, setPage] = useState(1)
    const [totalArticles, setTotalArticles] = useState(0)
    const topic = searchParams.get('topic')
    const sortByQuery = searchParams.get('sort_by')
    const orderQuery = searchParams.get('order')
    const defaultArticlesPerPage = 10

    function handleChange(e){
        const newParams = new URLSearchParams(searchParams)
        newParams.set(e.target.id, e.target.value)
        setSearchParams(newParams)
    }
    function handleClick(e) {
        e.preventDefault()
        const buttonType = e.target.id
        if (buttonType === "next-page"){
            setPage((currPage) => {
                return currPage + 1
            })
        } else {
            setPage((currPage) => {
                return currPage - 1
            })
        }
    }
    return (
        <main>
            <div className="filter-container">
                <div className="filters">
                    <p>Sort By</p>
                    <label htmlFor="sort_by">
                        <select onChange={handleChange} name="sort_by" id="sort_by">
                        <option  value="created_at" defaultValue={"created_at"}>Date</option>
                            <option value="comment_count">Comments</option>
                            <option value="votes">Votes</option>
                        </select>
                    </label>
                </div>
                <div className="filters">
                <p>Order</p>
                    <label htmlFor="order">
                        <select onChange={handleChange} name="order" id="order">
                            <option value="desc" defaultValue={"desc"}>Descending</option>
                            <option value="asc">Ascending</option>
                        </select>
                    </label>
                </div>            
            </div>
            <ArticlesList page={page} setTotalArticles={setTotalArticles} topic={topic} sortByQuery={sortByQuery} orderQuery={orderQuery}  />
            <div className="pagination-container">
                {page > 1 ? <button id="previous-page" onClick={handleClick} className="page-buttons">Previous page</button> : null }
                <span className="page-number">{page}</span>  
                {defaultArticlesPerPage === totalArticles ? <button id="next-page" onClick={handleClick} className="page-buttons">Next page</button> : null }
                
            </div>
        </main>
    )
}