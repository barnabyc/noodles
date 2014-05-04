import _ from 'vendor/underscore';

let transformAccounts = (accounts) => {
  return computeInitialAccountBalances( accounts );
};

let keyedAccountBalances = (accounts) => {
  return _.reduce(accounts, (account, acc) => {
    acc[ account.accountNumber ] = account.initialBalances;

    return acc;
  }, {});
};

let transformTransactions = (items, keyedAccountBalances) => {
  return computeBalances( items, keyedAccountBalances );
};

let computeBalances = (items, keyedAccountBalances) => {
  let sorted = _.sortBy(items, 'incurredDate');
  let runningAccountBalances = _.clone(keyedAccountBalances);

  sorted.map((transaction) => {
    let {
      account
    } = transaction;

    if (!_.isNumber(transaction.amount)) transaction.amount = 0;

    runningAccountBalances[ account ] += transaction.amount;
    transaction.balance = runningAccountBalances[ account ];

    return transaction;
  });

  return computed;
};

export {
  transformTransactions,
  transformAccounts
};
