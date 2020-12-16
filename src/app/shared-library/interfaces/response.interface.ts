export interface IResponse<T, K = { [key: string]: any }> {
  data: T;
  message: string;
  meta: K;
}
