let Row = React.createClass({
  propTypes: {
    items: React.PropTypes.array
  },

  render: function () {
    let { items } = this.props;

    return (
      <tr>
        {items.map((item) => {
          return <Cell item={item} />
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
    return (
      <td>{item}</td>
    );
  }
});

export default Row;
