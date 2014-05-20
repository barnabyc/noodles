let NewTransaction = React.createClass({
  propTypes: {
    position: React.PropTypes.number
  },

  render: function () {
    return (
      <tr>
        <td><input type="text" placeholder="date" /></td>
        <td><input type="text" placeholder="credit" /></td>
        <td><input type="text" placeholder="debit" /></td>
        <td><input type="text" placeholder="name" /></td>

        {accounts && accounts.map((account) => {
          return <td><input type="radio" name="account" /></td>
        })}

        <td>-</td>
        <td><input type="text" placeholder="notes" /></td>
      </tr>
    );
  }
});

export default NewTransaction;

