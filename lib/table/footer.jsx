import _ from 'vendor/underscore';

let total = (array, property) => {
  return _.reduce(array, (datum, acc) => {
    return acc + datum[ property ];
  }, 0);
};

let uniqs = (array, property) => {
  return _.uniq(_.pluck(array, property)).length;
};

let Footer = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },

  render: () => {
    let { data } = this.props;

    return (
      <tfoot>
        <tr>
          <th></th>
          <th>{total(data, 'credit')}</th>
          <th>{total(data, 'debit')}</th>
          <th>{uniqs(data, 'name')}</th>

          {/* @todo map over accounts */}
          <th>{total(data, 'citizensAmount')}</th>
          <th>{total(data, 'his1Amount')}</th>
          <th>{total(data, 'his2Amount')}</th>
          <th>{total(data, 'simpleAmount')}</th>

          <th>{uniqs(data, 'detail')}</th>
          <th>{uniqs(data, 'notes')}</th>
        </tr>
      </tfoot>
    );
  }
});

export default Footer;

