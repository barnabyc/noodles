import transform from 'lib/transform';

import Header    from 'lib/table/header';
import Row       from 'lib/table/row';
import Footer    from 'lib/table/footer';

let App = React.createClass({
  propTypes: {
    items: React.PropTypes.array
  },

  getInitialState: {
    items: []
  }

  render: () => {
    let { items } = this.state;

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

  componentWillMount: () => {
    let { items } = this.props;
    let transformedItems = transform( items );

    this.setState({ items: transformedItems });
  }
});

export default App;

