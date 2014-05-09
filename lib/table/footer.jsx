import _ from 'vendor/underscore';

let total = (array, property) => {
  return _.reduce(array, (datum, acc) => {
    return acc + datum[ property ];
  }, 0);
};

let numUniq = (array, property) => {
  return _.uniq(_.pluck(array, property)).length;
};

let Footer = React.createClass({
  propTypes: {
    items:    React.PropTypes.array,
    accounts: React.PropTypes.array
  },

  render: function () {
    let { items, accounts } = this.props;

    return (
      <tfoot>
        <tr>
          <td></td>
          <td>{total(items, 'credit')}</td>
          <td>{total(items, 'debit')}</td>
          <td>{numUniq(items, 'name')}</td>

          {accounts && accounts.map((account) => {
            return <td>{total(items,account.accountNumber)}</td>
          })}

          <td>{numUniq(items, 'detail')}</td>
          <td>{numUniq(items, 'notes')}</td>
        </tr>
      </tfoot>
    );
  }
});

export default Footer;

