import _ from 'vendor/underscore';

import {
  transformAccounts,
  transformTransactions
} from 'data/transform';

import Header from 'lib/table/header';
import Row    from 'lib/table/row';
import Footer from 'lib/table/footer';

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
      controlItemIdx
    } = this.state;



    const rows = items.map((item, idx) => {
      let control;

      if (this.state.controlItemIdx === idx) {
        control = <span className="control">kittens</span>
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

    return (
      <table>
        <Header items={items} accounts={accounts} />

        <tbody>{rows}</tbody>

        <Footer items={items} accounts={accounts} />
      </table>
    );
  },

  componentWillMount: function () {
    const { items, accounts } = this.props;

    const keyedAccountBalances = transformAccounts( accounts );
    const transformedItems     = transformTransactions( items, keyedAccountBalances );

    this.setState({
      items: transformedItems
    });
  },

  handleMouseEnter: function (idx) {
    console.log('~~~ handleMouseEnter',idx);
    this.setState({
      controlItemIdx: idx
    });
  },

  handleMouseLeave: function () {
    console.log('~~~ handleMouseLeave');
    this.setState({
      controlItemIdx: null
    });
  }
});

export default App;
