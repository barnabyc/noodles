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
