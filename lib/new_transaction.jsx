import moment from 'vendor/moment';

const NewTransaction = React.createClass({
  propTypes: {
    accounts: React.PropTypes.array,
    onSave:   React.PropTypes.func
  },

  getInitialState: function () {
    return { };
  },

  render: function () {
    const { accounts } = this.props;
    const {
      incurredDate,
      amount,
      name,
      acct,
      notes
    } = this.state;

    let credit = amount > 0 ? amount : null;
    let debit  = amount < 0 ? amount : null;

    return (
      <tr>
        <td><input value={incurredDate} onChange={_.partial(this.handleChange,'incurredDate')} type="text" placeholder="incurredDate" /></td>
        <td><input value={credit} onChange={_.partial(this.handleChange,'amount')} type="text" placeholder="credit" /></td>
        <td><input value={debit} onChange={_.partial(this.handleChange,'amount')} type="text" placeholder="debit" /></td>
        <td><input value={name} onChange={_.partial(this.handleChange,'name')} type="text" placeholder="name" /></td>

        {accounts && accounts.map((account) => {
          const checked = account.accountNumber === acct;

          return <td><input checked={checked} value={account.accountNumber} onChange={_.partial(this.handleChange,'account')} type="radio" name="account" /></td>
        })}

        <td>-</td>
        <td>
          <input value={notes} onChange={_.partial(this.handleChange,'notes')} type="text" placeholder="notes" />
          <span className="control">
            <a onClick={this.handleClickSave}>Save</a>
          </span>
        </td>
      </tr>
    );
  },

  handleChange: function (fieldName, ev) {
    let state = {};

    let value = ev.target.value;

    if (fieldName === 'incurredDate') value = moment(value);

    state[ fieldName ] = value;

    this.setState( state );
  },

  handleClickSave: function () {
    this.props.onSave( this.state );
  }
});

export default NewTransaction;
