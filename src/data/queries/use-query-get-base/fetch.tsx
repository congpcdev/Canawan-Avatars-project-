import axiosInstance from "../../../utils/fetcher";

export const getListBase = async (): Promise<any> => {
  const response = await axiosInstance.get("api/v1/base");

  return response?.data;
};
