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
      items:    [],
      accounts: []
    }
  },

  render: function () {
    let { items, accounts } = this.state;

    return (
      <div>
        <Header />

        {items.map((item) => {
          return Row({ item: item });
        })}

        <Footer />
      </div>
    );
  },

  componentWillMount: function () {
    let { items, accounts } = this.props;

    let transformedAccounts = transformAccounts( accounts );
    let transformedItems    = transformTransactions( items, transformedAccounts );

    this.setState({
      items:    transformedItems,
      accounts: transformedAccounts
    });
  }
});

export default App;
