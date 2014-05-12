import _ from 'vendor/underscore';

let Row = React.createClass({
  propTypes: {
    items: React.PropTypes.array
  },

  render: function () {
    let { item, accounts } = this.props;

    let credit;
    let debit;
    if (item.amount > 0) credit = item.amount;
    else if (item.amount <= 0) debit = Math.abs(item.amount);

    let detail;
    if (item.detail) {
      detail = _.values(item.detail).join(', ');
    }

    return (
      <tr>
        <td>{item.incurredDate.format('M/D')}</td>
        <td>{credit}</td>
        <td>{debit}</td>
        <td>{item.name}</td>

        {accounts && accounts.map((account) => {
          let val;

          if (account.accountNumber == item.account) {
           val = item.balance;
          }

          return <td>{val}</td>
        })}

        <td>{detail}</td>
        <td>{item.notes}</td>
      </tr>
    );
  }
});

export default Row;
