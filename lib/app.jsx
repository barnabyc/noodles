import _ from 'vendor/underscore';

import {
  transformAccounts,
  transformTransactions
} from 'data/transform';

import Header         from 'lib/table/header';
import Row            from 'lib/table/row';
import Footer         from 'lib/table/footer';
import NewTransaction from 'lib/new_transaction';

const App = React.createClass({
  propTypes: {
    items:    React.PropTypes.array,
    accounts: React.PropTypes.array
  },

  getInitialState: function () {
    return {
      items: [],
      controlItemIdx: null
    }
  },

  render: function () {
    const { accounts } = this.props;
    const {
      items,
      controlItemIdx,
      showNewTransaction
    } = this.state;

    const rows = items.map((item, idx) => {
      let control;

      if (this.state.controlItemIdx === idx) {
        control = (
          <span className="control">
            <a onClick={_.partial(this.handleClickInsertAbove, idx)}>Up</a>
            <a onClick={_.partial(this.handleClickInsertBelow, idx)}>Dn</a>
          </span>
        );
      }

      return (
        <Row key={idx}
          item={item}
          accounts={accounts}
          onMouseEnter={_.partial(this.handleMouseEnter, idx)}
          onMouseLeave={this.handleMouseLeave}>

          {control}

        </Row>
      );
    });

    if (showNewTransaction) {
      rows.splice(showNewTransaction,0,<NewTransaction accounts={accounts} onSave={this.handleSaveTransaction} />)
    }

    return (
      <table className="transactions">
        <Header items={items} accounts={accounts} />

        <tbody>
          {rows}
        </tbody>

        <Footer items={items} accounts={accounts} />
      </table>
    );
  },

  componentWillReceiveProps: function (nextProps) {
    this.transformItems(nextProps.items);
  },

  componentWillMount: function () {
    this.transformItems(this.props.items);
  },

  transformItems: function (items) {
    const { accounts } = this.props;

    const keyedAccountBalances = transformAccounts( accounts );
    const transformedItems     = transformTransactions( items, keyedAccountBalances );

    this.setState({
      items: transformedItems
    });

  },

  handleMouseEnter: function (idx) {
    this.setState({
      controlItemIdx: idx
    });
  },

  handleMouseLeave: function () {
    this.setState({
      controlItemIdx: null
    });
  },

  handleClickInsertAbove: function (idx) {
    this.setState({
      showNewTransaction: idx-1
    });
  },

  handleClickInsertBelow: function (idx) {
    this.setState({
      showNewTransaction: idx+1
    });
  },

  handleSaveTransaction: function (transaction) {
    this.setState({
      showNewTransaction: null
    });

    let updatedItems = this.props.items.concat();
    const insertIndex = this.state.showNewTransaction;

    updatedItems.splice(insertIndex, 0, transaction);
    this.setProps({
      items: updatedItems
    });
  }
});

export default App;
