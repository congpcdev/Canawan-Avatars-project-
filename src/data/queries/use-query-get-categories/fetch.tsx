import axiosInstance from "../../../utils/fetcher";

export const getListCategories = async (): Promise<any> => {
  const response = await axiosInstance.get("api/v1/categories");

  return response?.data;
};
