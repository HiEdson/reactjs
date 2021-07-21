import React from 'react'
import ExpenseForm from './ExpenseForm'
const NewExpense = () => {
    const onSaveEpenseHandler = (enteredExpense) => {
        const expenseData = {
            ...enteredExpense,
            id: Math.random.toString()
        };
        console.log(expenseData);
    }
    return <ExpenseForm onSaveEpenseDate = { onSaveEpenseHandler }
    />
}

export default NewExpense;