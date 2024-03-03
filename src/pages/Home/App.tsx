import { useState } from 'react';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState<string[]>([]);
  const [newExpense, setNewExpense] = useState<string>('');
  const [totalExpenses, setTotalExpenses] = useState<number>(0);

  const handleAddExpense = () => {
    if (newExpense.trim() !== '') {
      setExpenses([...expenses, newExpense]);
      setTotalExpenses(totalExpenses + parseFloat(newExpense));
      setNewExpense('');
    }
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <div>
        <input
          type="number"
          value={newExpense}
          onChange={(e) => setNewExpense(e.target.value)}
          placeholder="Enter expense amount"
        />
        <button onClick={handleAddExpense}>Add Expense</button>
      </div>
      <h2>Total Expenses: ${totalExpenses.toFixed(2)}</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>{expense}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;