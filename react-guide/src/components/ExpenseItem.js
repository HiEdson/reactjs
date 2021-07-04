import './ExpenseItem.css'

function ExpenseItem (){
    return(
        //JSX must have only one parent element
        <div className="expense-item">
            <div>March, 28th</div>
            <div className="expense-item__description">
                <h2>Car insurance</h2>
                <div className="expense-item__price">29usd</div>
            </div>
        </div>
        
    );
}

export default ExpenseItem;