import React, { useState } from 'react'

const ExpenseForm = (props) => {
  const [enteredInput, setValues] = useState({
    enteredTitle: '',
    enteredDate: '',
    enteredAmount: '',
  });
  //events here
  const changeTitle = event => {
    //update the desired values, we have to keep the ones we're not changing
    setValues((prevState) => {
      return { ...enteredInput, enteredTitle: event.target.value };
      // ...enteredInput,
      //enteredTitle: event.target.value,

    });
  }

  const changeDate = event => {
    //update the desired values, we have to keep the ones we're not changing
    setValues({
      ...enteredInput,
      enteredDate: event.target.value,
    });
  }

  const changeAmount = event => {
    //update the desired values, we have to keep the ones we're not changing
    setValues({
      ...enteredInput,
      enteredAmount: event.target.value,
    });
  }

  const submitHandler = (event) => {
    //we can prevent the default behav. of the form when its clicked.
    //we dont want it to load when the button is clicked
    event.preventDefault();
    props.onSaveEpenseDate(enteredInput);
    console.log(enteredInput);
    setValues({
      enteredTitle: '',
      enteredDate: '',
      enteredAmount: '',
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <label>Name</label>
      <input type="text" value={enteredInput.enteredTitle} onChange={changeTitle} />
      <label>Date</label>
      <input type="date" min="2019-01-01" max="2022-12-31" value={enteredInput.enteredDate} onChange={changeDate} />
      <label>Amount</label>
      <input type="number" min="0.01" step="0.01" value={enteredInput.enteredAmount} onChange={changeAmount} />
      <button type="submit">submit</button>

    </form>
  );
};

export default ExpenseForm;