import _ from 'vendor/underscore';

let transformAccounts = (accounts) => {
  return keyAccountBalances( accounts );
};

let keyAccountBalances = (accounts) => {
  return _.reduce(accounts, (acc, account) => {
    acc[ account.accountNumber ] = account.initialBalance;

    return acc;
  }, {});
};

let transformTransactions = (items, keyedAccountBalances) => {
  return computeBalances( items, keyedAccountBalances );
};

let computeBalances = (items, keyedAccountBalances) => {
  let sorted = _.sortBy(items, 'incurredDate');
  let runningAccountBalances = _.clone(keyedAccountBalances);

  let computed = sorted.map((transaction) => {
    let {
      account
    } = transaction;

    transaction.amount = parseFloat(transaction.amount);

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
