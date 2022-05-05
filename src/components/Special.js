import React, { useState, useEffect } from "react";
import axios from "axios";
import './Special.css'

function Special() {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php").then((result) => {
            setMeals(result.data.meals)
        })
    }, [])

    return (
        <div className="special">
            <h1 className="special_heading">Special Meals</h1>
            <div className="row">
                <div className="special_container">
                    {
                        meals.map((item) =>
                            <div>
                                <img className="special_img" src={item.strMealThumb} alt=""/>
                                <h4 className="special_category">Category: {item.strCategory}</h4>
                                <h3 className="special_title">Meal Name: {item.strMeal}</h3>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Special;