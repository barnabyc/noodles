import _             from 'vendor/underscore';
import { ajax }      from 'lib/transports';
import parseBySchema from 'lib/parse_by_schema';
import {
  transformTransactions,
  transformAccounts
} from 'data/transform';

const SCHEMA = [
  {
    name:           'string',
    accountNumber:  'string',
    initialBalance: 'decimal'
  }
];

let AccountsInterface = {
  get: function () {
    return {
      // transport: ajax,
      //=FEMOCK
      transport: function () {
        return new Y.Promise(function (resolve) {
          resolve([
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
            },
          ]);
        });
      },
      transform: function (resp) {
        let transform = _.compose(
          _.partial(parseBySchema, SCHEMA)
        );

        return transform( resp );
      },
      options: {
        uri: '/accounts',
        method: 'get'
      }
    }
  }
};

export default AccountsInterface;
