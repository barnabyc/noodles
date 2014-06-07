import moment from 'vendor/moment';

const SCHEMA = [
  {
    incurredDate: 'date',
    amount:       'decimal',
    name:         'string',

    account:      'string',

    approximate:  'bool',
    pending:      'bool',
    cleared:      'bool',
    clearedDate:  'date',

    detail: {
      referenceNumber: 'string',
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
    return localStorage.getItem('transactions');
  },
  set: function (data) {
    // @todo finish
    // localStorage.setItem('transactions', data);
    localStorage.setItem('transactions', [
      {
        incurredDate: moment('2014-04-20'),
        amount:       -100.11,
        name:         "Dunkies",
        account:      "CDEF",
        approximate:  false,
        pending:      false,
        cleared:      true,
        clearedDate:  moment('2014-04-20')
      },
      {
        incurredDate: moment('2014-04-21'),
        amount:       -200.22,
        name:         "Panera",
        account:      "CDEF",
        approximate:  false,
        pending:      false,
        cleared:      true,
        clearedDate:  moment('2014-04-21')
      },
      {
        incurredDate: moment('2014-04-21'),
        amount:       -700.07,
        name:         "Williams",
        account:      "1234",
        approximate:  false,
        pending:      false,
        cleared:      true,
        clearedDate:  moment('2014-04-24')
      },
      {
        incurredDate: moment('2014-04-26'),
        amount:       400.00,
        name:         "Payroll",
        account:      "CDEF",
        approximate:  false,
        pending:      false,
        cleared:      true,
        clearedDate:  moment('2014-04-26')
      },
      {
        incurredDate: moment('2014-04-28'),
        amount:       -390.00,
        name:         "Heating Oil",
        account:      "QQQQ",
        approximate:  false,
        pending:      false,
        cleared:      true,
        clearedDate:  moment('2014-04-28')
      }
    ])
  }
};

export default TransactionsInterface;
