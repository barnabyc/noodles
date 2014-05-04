// import _             from 'vendor/underscore';
// import { ajax }      from 'lib/transports';
// import parseBySchema from 'lib/parse_by_schema';

const SCHEMA = [
  {
    name:           'string',
    accountNumber:  'string',
    initialBalance: 'decimal'
  }
];

let AccountsInterface = {
  get: function () {
    // @todo localStorage
    return [
      {
        "name": "Citizens",
        "accountNumber": "1234",
        "initialBalance": "100.22"
      },
      {
        "name": "HIS 1",
        "accountNumber": "5678",
        "initialBalance": "40.12"
      },
      {
        "name": "HIS 2",
        "accountNumber": "90AB",
        "initialBalance": "7.75"
      },
      {
        "name": "Simple",
        "accountNumber": "CDEF",
        "initialBalance": "0.39"
      }
    ];
  }
};

export default AccountsInterface;
