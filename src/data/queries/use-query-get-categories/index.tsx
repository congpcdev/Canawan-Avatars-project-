import { dataOptions } from "../../mockups/data-options";
import { getListCategories } from "./fetch";
import { useQuery } from "react-query";

export function useQueryCategories() {
  return useQuery({
    queryKey: ["CATEGORIES"],
    queryFn: getListCategories,
    keepPreviousData: true,
    staleTime: 0,
    enabled: false,
    initialData: dataOptions,
  });
  // }

  //   ["CATEGORIES"], () => getListCategories(), {
  //   keepPreviousData: true,
  //   staleTime: 0,
  //   enabled: false,
  //   // select: (responseData: any) => responseData?.data,
  //   // enabled: false,
  //   initialData: dataOptions,
  // });
}
