import { key } from "../util/constans";
import { customAxios } from "../util/customAxios";

export const testAPI = async (characterId?: string) => {
  return await customAxios.get(
    `/v1/public/characters?${characterId ? characterId : ""}`,
    {
      params: {
        apikey: key,
      },
    }
  );
};
