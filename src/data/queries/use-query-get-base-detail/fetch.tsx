import axiosInstance from "../../../utils/fetcher";

export const getBaseDetail = async (id: any): Promise<any> => {
  const response = await axiosInstance.get("api/v1/base/" + id);

  return response?.data;
};
