import _      from 'vendor/underscore';
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
console.log('~~~ state',this.state);
    const { accounts } = this.props;
    const {
      incurredDate,
      amount,
      name,
      account,
      notes
    } = this.state;

    const credit = amount > 0 ? amount : null;
    const debit  = amount < 0 ? amount : null;

    return (
      <tr>
        <td><input value={incurredDate} onChange={_.partial(this.handleChange,'incurredDate')} type="text" placeholder="incurredDate" /></td>
        <td><input value={credit}       onChange={_.partial(this.handleChange,'amount')}       type="text" placeholder="credit" /></td>
        <td><input value={debit}        onChange={_.partial(this.handleChange,'amount')}       type="text" placeholder="debit" /></td>
        <td><input value={name}         onChange={_.partial(this.handleChange,'name')}         type="text" placeholder="name" /></td>

        {accounts && accounts.map((acct) => {
          const checked = acct.accountNumber === account;

          return <td><input checked={checked} value={acct.accountNumber} onChange={_.partial(this.handleChange,'account')} type="radio" name="account" /></td>
        })}

        <td>-</td>
        <td className="control-container">
          <input value={notes} onChange={_.partial(this.handleChange,'notes')} type="text" placeholder="notes" />
          <span className="control">
            <a onClick={this.handleClickSave}>Save</a>
            <a onClick={this.handleClickCancel}>Cancel</a>
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
  },

  handleClickCancel: function () {
    this.props.onCancel();
  }
});

export default NewTransaction;
