import React from 'react';
import { InventoryItemDiv } from '../../styled/dashboardStyles';

// define categories
const category = ["Fruits", "Vegetables", "Meats", "Grains", "Spices", "Utensils", "Dishware", "Appliances"]

export default function InventoryItem({ index, item, clickHandler, onDelete }) {
   return (
      <InventoryItemDiv
         key={index}
      >
         <div>
            <p>{category[item.categoryId - 1]}</p>
         </div>
         <div>
            <h4>{item.name}</h4>
            <h5>{item.description}</h5>
            <p>Quantity left: <span>{item.qty} {item.units}</span></p>
         </div>
         <div>
            <img
               onClick={() => clickHandler(item.itemId)}
               src="/assets/images/pencil.png"
               alt="delete"
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