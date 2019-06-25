import React from 'react';
import { InventoryItemDiv } from '../../styled/dashboardStyles';

// define categories
const category = ["Fruits", "Vegetables", "Meats", "Grains", "Spices", "Utensils", "Dishware", "Appliances"]

export default function InventoryItem({ index, item, clickHandler }) {
   return (
      <InventoryItemDiv
         key={index}
         onClick={() => clickHandler(item.itemId)}
      >
         <div>
            <p>{item.itemId}</p>
            <p>{category[item.categoryId - 1]}</p>
         </div>
         <div>
            <h4>{item.name}</h4>
            <h5>{item.description}</h5>
            <p>Quantity left: <span>{item.qty} {item.units}</span></p>
         </div>
         <div>
            <img src="/assets/images/delete.png" alt="delete" />
         </div>
      </InventoryItemDiv>
   );
}