import React, { useState, useEffect } from "react";
import axios from "axios";
import './Categories.css'

function Categories() {
    const [categories, setcategories] = useState([]);

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php").then((result) => {
            setcategories(result.data.categories)
        })
    }, [])
    return (
        <div>
            <h1 class="heading">Categories</h1>
            <div className="categories1">
                {
                    categories.map((item) =>
                        <div>
                            <img className="img" src={item.strCategoryThumb} alt="" />
                            <h3 className="title">{item.strCategory}</h3>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Categories;