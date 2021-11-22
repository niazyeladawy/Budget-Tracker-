import React, { useRef, useState } from 'react';
import { useFirestore } from '../../firebase/useFirestore';
import './Input.css';

const initialItem = { title: '', type: '', date: '' };

function Input() {
    const selectedOption = useRef(null)

    const [item, setItem] = useState(initialItem);
    const [amount, setAmount] = useState("");
    const {addItem} = useFirestore();

    const handleChange = ({ target }) => {
        setItem(
            {
                ...item,
                [target.name]: target.value,
                type: selectedOption.current.value,
            }
        )
    }

    const handelAmount = ({ target })=>{
        setAmount(target.value);
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        let actualAmount = selectedOption.current.value === "expense" ? -Math.abs(parseInt(amount)) : parseInt(amount);
        await addItem(item,actualAmount);
        setItem(initialItem);
        setAmount("");
    }

    return (
        <div className="input">
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" onChange={handleChange}  autoComplete="off" value={item.title}/>
                <input type="number" name="amount" placeholder="Amount" onChange={handelAmount} autoComplete="off" value={amount}/>
                <input type="date" name="date" placeholder="Date" onChange={handleChange}  autoComplete="off" value={item.date}/>

                <label htmlFor="type">Type</label>
                <select name="type" ref={selectedOption} onChange={handleChange}>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default Input
