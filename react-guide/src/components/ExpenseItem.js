import React,{useState} from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

//TO USE STATES, WE HAVE TO IMPORT IT FROM REACT 
function ExpenseItem(props) {
    //call only inside function
    const [title, setTitle] = useState(props.title);

    const clickedButton = () => {
        setTitle('Updated');
        console.log(title);
    };

    return (
        //JSX must have only one parent element
        <div className="expense-item">
            <ExpenseDate date={props.date} />
           <div className='expense-item__title '> {title}</div>
            <div className="expense-item__description">
                
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickedButton}>click me</button>
        </div>
    );
}

export default ExpenseItem;