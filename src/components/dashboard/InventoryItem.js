import React from 'react';
import { InventoryItemDiv } from '../../styled/dashboardStyles';

export default function InventoryItem({ category, item, onEdit, onDelete }) {
   return (
      <InventoryItemDiv>
         <section>
            <p>{category[item.categoryId]}</p>
            {
               item.qty === 0 ? <p>Out of Stock</p> :
               item.qty <= 5 && item.categoryId !== 8 ? <p>Low stock</p> :
               null
            }
         </section>
         <section>
            <div>
               <img src={item.imageUrl} alt={item.name} />
            </div>
            <h4>{item.name}</h4>
            <h5>{item.description}</h5>
            <p>Quantity left: <span>{item.qty} {item.units}</span></p>
         </section>
         <section>
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
         </section>
      </InventoryItemDiv>
   );
}