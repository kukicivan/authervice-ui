import { IBetLines } from './bet-lines.interface';

export interface IBetTypes {
  id: number;
  timeStamp: number;
  gateId: string;
  betLines: Array<IBetLines>;
  gameId: null;
  typeId: number;
  specifiers: string;
  name: string;
  screenName: string;
  helpUri: string;
  rules: string;
  value: string;
  status: string;
  order: string;
}
