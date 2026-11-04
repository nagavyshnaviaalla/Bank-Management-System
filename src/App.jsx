import AccountSummary from './components/AccountSummary';
import TransactionList from './components/TransactionList';

function App() {
  return (
    <div>
      <h1>Bank Management System</h1>
      <AccountSummary />
      <TransactionList />
    </div>
  );
}

export default App;