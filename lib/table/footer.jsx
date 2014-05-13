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
          <td>{total(items, 'amount')}</td>
          <td>{total(items, 'amount')}</td>
          <td>{numUniq(items, 'name')}</td>

          {accounts && accounts.map((account) => {
            return <td>{_.reduce(items,(memo, item) => {
              let val = 0;

              if (account.accountNumber === item.account) {
                val = item.amount;
              }

              return memo + val;
            },0)}</td>
          })}

          <td>{numUniq(items, 'detail')}</td>
          <td>{numUniq(items, 'notes')}</td>
        </tr>
      </tfoot>
    );
  }
});

export default Footer;

