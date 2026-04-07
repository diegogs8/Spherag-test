import { AtlasDetail, AtlasListItem, PaginatedResponse } from "@domain/model/Atlas";
import { httpClient } from "@infrastructure/api/httpClient";

export const getAtlases = async (
  estateId: number, 
  page: number = 1, 
  limit: number = 10
): Promise<PaginatedResponse<AtlasListItem>> => {
  const response = await httpClient.get<PaginatedResponse<AtlasListItem>>(
    `https://apicore.spherag.com/systems/${estateId}/Atlas/?Init=${page}&Limit=${limit}`
  );
  return response.data;
};

export const getAtlasDetail = async (estateId: number, imei: string): Promise<AtlasDetail> => {
  const response = await httpClient.get<AtlasDetail>(
    `https://apicore.spherag.com/systems/${estateId}/Atlas/${imei}`
  );
  return response.data;
};