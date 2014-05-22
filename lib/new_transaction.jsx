const NewTransaction = React.createClass({
  propTypes: {
    accounts: React.PropTypes.array
  },

  getInitialState: function () {
    return { };
  },

  render: function () {
    const { accounts } = this.props;
    const {
      date,
      credit,
      debit,
      name,
      accountNumber,
      notes
    } = this.state;

    return (
      <tr>
        <td><input value={date} onChange={_.partial(this.handleChange,'date')} type="text" placeholder="date" /></td>
        <td><input value={credit} onChange={_.partial(this.handleChange,'credit')} type="text" placeholder="credit" /></td>
        <td><input value={debit} onChange={_.partial(this.handleChange,'debit')} type="text" placeholder="debit" /></td>
        <td><input value={name} onChange={_.partial(this.handleChange,'name')} type="text" placeholder="name" /></td>

        {accounts && accounts.map((account) => {
          const checked = account.accountNumber === accountNumber;

          return <td><input checked={checked} value={account.accountNumber} onChange={_.partial(this.handleChange,'accountNumber')} type="radio" name="account" /></td>
        })}

        <td>-</td>
        <td><input value={notes} onChange={_.partial(this.handleChange,'notes')} type="text" placeholder="notes" /></td>
      </tr>
    );
  },

  handleChange: function (fieldName, ev) {
    let state = {};

    state[ fieldName ] = ev.target.value;

    this.setState( state );
  }
});

export default NewTransaction;
