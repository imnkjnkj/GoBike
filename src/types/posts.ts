export interface IPostsDetail {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  coverImage: string;
  sapo: string;
  status: string;
  category: {
    id: number;
  };
  createdAt: Date;
  updatedAt: Date;
  user?: {
    email: string
  };
}
export interface IDashboarData {
  totalPages: number;
  totalElements: number;
  size: number;
  content?: IPostsDetail[];
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  pageable: {
    offset: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    unpaged: boolean;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
  };
  first: boolean;
  last: boolean;
  empty: boolean;
}

export interface INewsStore {
  dashboardData: IDashboarData;
  detailData: IPostsDetail;
}
