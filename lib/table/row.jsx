import _ from 'vendor/underscore';

let Row = React.createClass({
  propTypes: {
    items: React.PropTypes.array
  },

  render: function () {
    let { item } = this.props;

    return (
      <tr>
        {_.keys(item).map((key) => {
          return <Cell item={item[key]} />
        })}
      </tr>
    );
  }
});

let Cell = React.createClass({
  propTypes: {
    item: React.PropTypes.object
  },

  render: function () {
    let { item } = this.props;

    return (
      <td>{item}</td>
    );
  }
});

export default Row;
