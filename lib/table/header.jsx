let Header = React.createClass({
  propTypes: {
    items:    React.PropTypes.array,
    accounts: React.PropTypes.object
  },

  render: function () {
    let { items, accounts } = this.props;

    return (
      <thead>
        <tr>
          <th>Date</th>
          <th>Credit</th>
          <th>Debit</th>
          <th>Name</th>

          {accounts && accounts.map((account) => {
            return <th>{account.name}</th>
          })}

          <th>Detail</th>
          <th>Notes</th>
        </tr>
      </thead>
    );
  }
});

export default Header;

