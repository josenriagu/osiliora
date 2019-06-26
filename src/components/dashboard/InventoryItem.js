import React from 'react';
import { InventoryItemDiv } from '../../styled/dashboardStyles';

// define categories
const category = ["Fruits", "Vegetables", "Meats", "Grains", "Spices", "Utensils", "Dishware", "Appliances"]

export default function InventoryItem({ index, item, onEdit, onDelete }) {
   return (
      <InventoryItemDiv>
         <div>
            <p>{category[item.categoryId - 1]}</p>
            {
               item.qty === 0 ? <p>Out of Stock</p> :
               item.qty <= 5 && item.categoryId !== 8 ? <p>Item low in stock</p> :
               null
            }
         </div>
         <div>
            <h4>{item.name}</h4>
            <h5>{item.description}</h5>
            <p>Quantity left: <span>{item.qty} {item.units}</span></p>
         </div>
         <div>
            <img
               onClick={() => onEdit(item.itemId)}
               src="/assets/images/pencil.png"
               alt="edit"
            />
            <img
               onClick={() => onDelete(item.itemId)}
               src="/assets/images/delete.png"
               alt="delete"
            />
         </div>
      </InventoryItemDiv>
   );
}