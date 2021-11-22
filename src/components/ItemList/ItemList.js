import React from 'react'
import { useFirestore } from '../../firebase/useFirestore';
import Item from '../Item/Item';
import './ItemList.css';

function ItemList() {

    const {items} = useFirestore();
    
    return (
        <div className="item-list">
            
                {
                    items.map((item) => {
                        return(
                            <Item item={item} key={item.id}/>
                        )
                    })
                }
            
        </div>
    )
}

export default ItemList
