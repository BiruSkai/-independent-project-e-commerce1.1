import'./Category.css';
// import {useSelector} from "react-redux";
import {CategoryItem} from './CategoryItem';
import { productCategories } from '../../api/indexPaths';
import React, {useEffect, useState} from "react";
import CloseIcon from '@mui/icons-material/Close';

function Category({categoryActive, setCategoryActive}) {
       
        const [productList, setProductList] = useState([]);
        let categories = [];

        const fetchProductCategories = async() => {
                const data = await productCategories();
                // console.log(`await: ${data}`)
                
                for (let i=0; i < data.length; i++){
                        const product = {name:data[i].category_name, id:data[i].id};
                        console.log("dataLength: " + data.length)
                        // console.log("loop: " + product)
                        categories.push(product);
                }     

                setProductList(categories);

                return ;
        }    

        useEffect(() => {       
                fetchProductCategories();
        }, [])

        function closeCategory(){
                setCategoryActive(false)
        }

        return (
                productList === null ? "Loading" : 

                (
                        <div className="categoryContainer">
                                <div id="closeCategoryIcon" onClick={closeCategory}><CloseIcon fontSize='small' /></div>
                                <h4>Product Category:</h4>
                                <div className="categoryList">
                                        <ul>
                                                {productList.map((item) => {
                                                        return(
                                                                <li key={item.id}>
                                                                        <CategoryItem itemName={item.name} /> 
                                                                </li>
                                                        )})
                                                }
                                        </ul>
                                </div> 
                        </div>
                )
        )
}

export default Category;