export const date = new Date().toISOString();

export const transactions = [
  {
    id: 1,
    createTime: String(date),
    changeTime: String(date),
    status: 'active',
    side: 'buy',
    price: 7.99,
    amount: 500,
    instrument: '0'
  },
  {
    id: 2,
    createTime: String(date),
    changeTime: String(date),
    status: 'closed',
    side: 'sell',
    price: 7.99,
    amount: 500,
    instrument: '0'
  },
  {
    id: 3,
    createTime: String(date),
    changeTime: String(date),
    status: 'active',
    side: 'sell',
    price: 7.99,
    amount: 500,
    instrument: '0'
  },
  {
    id: 4,
    createTime: String(date),
    changeTime: String(date),
    status: 'cancelled',
    side: 'buy',
    price: 7.99,
    amount: 500,
    instrument: '0'
  }
];
