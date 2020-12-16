export interface IGetTable {
  type: 'leagues' | 'sport';
  id: string;
  highlighted?: boolean;
  pageNo?: number;
  pageSize?: number;
}
