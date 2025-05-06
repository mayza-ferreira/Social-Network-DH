export type StrapiPaginationType = {
  total: number;
  pageCount: number;
  page: number;
  pageSize: number;
  
};

export type StrapiResultType<T> = {
  data: T[];
  meta:{
    pagination: StrapiPaginationType;
};}


