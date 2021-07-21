import React from 'react'

const ExpenseFilter=(props)=>{
    const dropdownHandler = (event)=>{
        console.log(event.target.value);
        props.onChangeFilter(event.target.value);
    }
    return(
        <div>
            <div>
                <label>Filter by year</label>
                <select onChange={dropdownHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;