// import PropTypes from "prop-types";
import {
  Table,
  TableHead,
  HeadItem,
  TableItem,
  TableRow,
} from "./TransactionHistory.styled";

function TransactionHistory({ items }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <HeadItem>Type</HeadItem>
          <HeadItem>Amount</HeadItem>
          <HeadItem>Currency</HeadItem>
        </TableRow>
      </TableHead>
      <tbody>
        {items.map(({ type, amount, currency, id }) => {
          return (
            <TableRow key={id}>
              <TableItem>{type}</TableItem>
              <TableItem>{amount}</TableItem>
              <TableItem>{currency}</TableItem>
            </TableRow>
          );
        })}
      </tbody>
    </Table>
  );
}
export default TransactionHistory;
