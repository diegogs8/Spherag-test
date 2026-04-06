import { Estate } from "@domain/model/Estate";
import { httpClient } from "@infrastructure/api/httpClient";

export const getEstates = async (): Promise<Estate[]> => {
  const response = await httpClient.get<Estate[]>('https://apicore.spherag.com/System/List');
  return response.data;
};