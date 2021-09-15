import Expenses from '../components/Budget/Expenses/Expenses';
import './Budget.css';

const Budget = () => {
  const expenses = [
    {
      id: 'expense-00011219',
      title: 'New Home TV',
      amount: 485,
      date: new Date(2019, 1, 26),
    },
    {
      id: 'expense-42091219',
      title: 'New Car Sterio',
      amount: 650,
      date: new Date(2020, 1, 26),
    },
    {
      id: 'expense-02011210',
      title: 'Car Insurance',
      amount: 234.5,
      date: new Date(2021, 2, 30),
    },
    {
      id: 'expense-02434811',
      title: 'Mobile Phone Installment',
      amount: 34.56,
      date: new Date(2021, 3, 2),
    }
  ]

  return (
    <div className="budget-page">
      <Expenses items={expenses} />
    </div>
  );
};

export default Budget;