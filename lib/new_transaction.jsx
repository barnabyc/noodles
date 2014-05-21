const NewTransaction = React.createClass({
  propTypes: {
    accounts: React.PropTypes.array
  },

  render: function () {
    const { accounts } = this.props;

    return (
      <tr>
        <td><input onChange={_.partial(this.handleChange,'date')} type="text" placeholder="date" /></td>
        <td><input onChange={_.partial(this.handleChange,'credit')} type="text" placeholder="credit" /></td>
        <td><input onChange={_.partial(this.handleChange,'debit')} type="text" placeholder="debit" /></td>
        <td><input onChange={_.partial(this.handleChange,'name')} type="text" placeholder="name" /></td>

        {accounts && accounts.map((account) => {
          return <td><input onChange={_.partial(this.handleChange,'account')} type="radio" name="account" /></td>
        })}

        <td>-</td>
        <td><input onChange={_.partial(this.handleChange,'notes')} type="text" placeholder="notes" /></td>
      </tr>
    );
  },

  handleChange: function (fieldName) {
    debugger;
  }
});

export default NewTransaction;
