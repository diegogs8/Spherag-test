export interface PaginatedResponse<T> {
  items: T[];
  pageNumber: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface AtlasListItem {
  id: number;
  imei: string;
  name: string;
  isAtlasTwo: boolean;
  status: number;
  batteryPercentage: number;
  signalPercentage: number;
  expiredDate: string;
  mainProductType: number;
}

export interface AtlasDetail {
  imei: string;
  name: string;
  type: number;
  productTypeName: string;
  systemId: number;
  latitude: string;
  longitude: string;
  batteryPercentage: number;
  signalPercentage: number;
  expiredDate: string;
  atlasStatus: number;
  energyMode: number;
  connectors: Record<string, unknown>;
}