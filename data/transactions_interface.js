import moment from 'vendor/moment';

const SCHEMA = [
  {
    incurredDate: 'date',
    amount:       'decimal'
    name:         'string',

    account:      'string',

    approximate:  'bool',
    pending:      'bool',
    cleared:      'bool',
    clearedDate:  'date'

    detail: {
      referenceNumber: 'string'
      manual:          'bool',
      recurring:       'bool'
    },

    notes:        'string'
  }
];

const COMPUTED = {
  balance: 'decimal'
};

let TransactionsInterface = {
  get: function () {
    // @todo localStorage
    return [
      {
        incurredDate: moment('2014-04-20'),
        amount:       100.11,
        name:         "Dunkies",
        account:      "CDEF",
        approximate:  false,
        pending:      false,
        cleared:      true,
        clearedDate:  moment('2014-04-20')
      },
      {
        incurredDate: moment('2014-04-21'),
        amount:       200.22,
        name:         "Panera",
        account:      "CDEF",
        approximate:  false,
        pending:      false,
        cleared:      true,
        clearedDate:  moment('2014-04-21')
      }
    ];
  }
};

export default TransactionsInterface;
