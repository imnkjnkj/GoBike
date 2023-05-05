import { BikesCategory } from "../enums/common";

export interface IBikesStore {
  dashboardData: IDashboardData;
  detailData: IBikesDetail;
}
export interface IDashboardData {
  totalPages: number;
  totalElements: number;
  size: number;
  content: IBikesDetail[];
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
export interface IBikesDetail {
  id: number;
  name: string;
  thumbnail: string;
  images: String[];
  createdAt: Date;
  updatedAt: Date;
  categoryId: number;
  information: {
    paintMaterial?: string;
    handlebarStemMaterial?: string;
    handlebar?: string;
    saddleMaterial?: string;
    seatpost?: string;
    seatpostMaterial?: string;
    steel?: string;
    bicycleSaddleBrand?: string;
    features?: string;
    brand?: string;
  };
  suitableUser: {
    recommendedAge?: string;
    recommendedHeight?: string;
    bikeWeightLimit?: string;
    pillionWeightLimit?: string;
    sizeWeight?: string;
  };
  transmissionSystem: {
    shiftLever?: string;
    shiftLeverType?: string;
    crankset?: string;
    brakeSystem?: string;
    brakeLever?: string;
    brakeType?: string;
    cassette?: string;
    chain?: string;
    chainring?: string;
  };
  frame: {
    frame?: string;
    fuspension?: string;
  };
  wheelset: {
    wheelSize?: string;
    rim?: string;
    hub?: string;
    spoke?: string;
    tire?: string;
    valveType?: string;
    brand?: string;
  };
}
export interface IParamsFilterBikes {
  categoryId?: number

}