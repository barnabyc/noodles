let Row = React.createClass({
  propTypes: {
    items: React.PropTypes.array
  },

  render: () => {
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

  render: () => {
    return (
      <td>{item}</td>
    );
  }
});

export default Row;
