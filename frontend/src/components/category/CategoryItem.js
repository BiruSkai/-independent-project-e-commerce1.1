import './CategoryItem.css';
import React from 'react';

export function CategoryItem ({itemName}){
        console.log(`data2: ${itemName}`)

        return (
        <div className="categoryItem">
                {itemName}
        </div>
        )
}