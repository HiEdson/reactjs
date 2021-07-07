import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'


function ExpenseItem(props) {
    return (
        //JSX must have only one parent element
        <div className="expense-item">
            <ExpenseDate date={props.date} />
           <div className='expense-item__title '> {props.title}</div>
            <div className="expense-item__description">
                
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;