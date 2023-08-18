import { Colums, TransactionTable } from './Transaction.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <TransactionTable>
        <thead>
          <Colums>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </Colums>
        </thead>

        <tbody>
          {items.map(items => (
            <Colums key={items.id}>
              <td>{items.type}</td>
              <td>{items.amount}</td>
              <td>{items.currency}</td>
            </Colums>
          ))}
        </tbody>
      </TransactionTable>
    </div>
  );
};
