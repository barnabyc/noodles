import _ from 'vendor/underscore';

import {
  transformAccounts,
  transformTransactions
} from 'data/transform';

import Header from 'lib/table/header';
import Row    from 'lib/table/row';
import Footer from 'lib/table/footer';

let App = React.createClass({
  propTypes: {
    items:    React.PropTypes.array,
    accounts: React.PropTypes.array
  },

  getInitialState: function () {
    return {
      items: []
    }
  },

  render: function () {
    let { items } = this.state;
    let { accounts } = this.props;

    return (
      <table>
        <Header items={items} accounts={accounts} />

        {items.map((item, idx) => {
          return <Row item={item} accounts={accounts} onMouseEnter={_.partial(this.handleMouseEnter, idx)} />
        })}

        <Footer items={items} accounts={accounts} />
      </table>
    );
  },

  componentWillMount: function () {
    let { items, accounts } = this.props;

    let keyedAccountBalances = transformAccounts( accounts );
    let transformedItems     = transformTransactions( items, keyedAccountBalances );

    this.setState({
      items: transformedItems
    });
  },

  handleMouseEnter: function (idx) {
    console.log('~~~ handleMouseEnter, row: ', idx);
    // @todo show controls
  }
});

export default App;
