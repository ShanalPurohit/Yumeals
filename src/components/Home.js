import React, { useState, useEffect } from "react";
import axios from "axios";
import './Home.css'

function Home() {
    const [meals, setMeals] = useState([]);
    const [search, searchData] = useState("");

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then((result) => {
            setMeals(result.data.meals)
        })
    }, [search])

    return (
        <div className="home1">
            <input type="text" placeholder="Type a meal name" className="search" value={search} onChange={(e) => searchData(e.target.value)} />
            <div className="row">
                <div className="container1">
                    {
                        meals.map((item) =>
                            <div key={meals.idMeal}>
                                <img className="img1" src={item.strMealThumb} alt=""/>
                                <h4>Category:{item.strCategory}</h4>
                                <h3 className="title">{item.strMeal}</h3>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;