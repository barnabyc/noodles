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
    items:    React.PropTypes.array.isRequired,
    accounts: React.PropTypes.array.isRequired
  },

  render: () => {
    let { items, accounts } = this.props;

    return (
      <tfoot>
        <tr>
          <th></th>
          <th>{total(items, 'credit')}</th>
          <th>{total(items, 'debit')}</th>
          <th>{numUniq(items, 'name')}</th>

          {accounts.map((account) => {
            return <th>{total(items,account.accountNumber)}</th>
          })}

          <th>{numUniq(items, 'detail')}</th>
          <th>{numUniq(items, 'notes')}</th>
        </tr>
      </tfoot>
    );
  }
});

export default Footer;

