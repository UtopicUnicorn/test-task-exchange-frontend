export interface TransactionInterface {
  id?: number;
  createTime?: Date; //date will mount on server
  changeTime?: Date; //date will mount on server
  status?: string; //status will mount on server
  instrument: string;
  side: string;
  amount: number;
  price: number;
}
