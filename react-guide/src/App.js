import ExpenseItem from './components/ExpenseItem';
import './App.css';

function App() {
  const expenses=[
    {title:"Arroz", date: new Date(2018, 10, 23), amount :20},
    {title:"farinha", date: new Date(2018, 10, 23), amount :25},
    {title:"massa de tomate", date: new Date(2018, 10, 23), amount :54.4},
  ];
  return (
    <div>
      <h1>New Item</h1>
      <ExpenseItem 
      title = {expenses[0].title} 
      date = {expenses[0].date}
        amount = {expenses[0].amount}>
      </ExpenseItem>

      <ExpenseItem 
      title = {expenses[1].title}
      date = {expenses[1].date}
      amount = {expenses[1].amount}>
      </ExpenseItem>

      <ExpenseItem 
      title = {expenses[2].title} 
      date = {expenses[2].date}
      amount = {expenses[2].amount}>
      </ExpenseItem>
      
      
    </div>
  )

}

export default App;
