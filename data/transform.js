import _ from 'vendor/underscore';

let transformAccounts = (accounts) => {
  return computeInitialAccountBalances( accounts );
};

let computeInitialAccountBalances = (accounts) => {
  return _.reduce(accounts, (account, acc) => {
    acc[ account.accountNumber ] = account.initialBalances;

    return acc;
  }, {});
};

let transformTransactions = (items, accounts) => {
  let initialAccountBalances = transformAccounts( accounts );

  return computeBalances( items, initialAccountBalances );
};

let computeBalances = (items, initialAccountBalances) => {
  let sorted = _.sortBy(items, 'incurredDate');
  let runningAccountBalances = _.clone(initialAccountBalances);

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
