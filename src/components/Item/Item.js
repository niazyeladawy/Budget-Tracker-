import React, { useRef } from 'react';
import { useFirestore } from '../../firebase/useFirestore';
import './Item.css'

const Item = ({item}) => {
    
    const {deleteItem} = useFirestore();
    const delBtn = useRef();
    return (
        <div className="item"
            onMouseEnter={()=> (delBtn.current.style.display = "block")}
            onMouseLeave={()=> (delBtn.current.style.display = "none")}
        >
            <div className="item__title">
                <h3>{item.title}</h3>
            </div>
            <div className="item__info">
                <p className={item.amount >= 0 ? "income" : "expense"}>$ {Math.abs(item.amount)}</p>
                <p>{item.date}</p>
                <button onClick={()=> deleteItem(item.id)} className="item__delete" ref={delBtn}>delete</button>
            </div>
        </div>
    )
}

export default Item
