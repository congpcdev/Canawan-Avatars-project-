import { useQuery } from "react-query";
import { getListBase } from "./fetch";

export function useQueryBaseList() {
  return useQuery({
    queryKey: ["BASE_LIST"],
    queryFn: getListBase,
    keepPreviousData: true,
    staleTime: 0,
    enabled: false,
    initialData: [
      {
        name: "base 1",
        url: "/assets/images/body/body.png",
        id: 1,
      },
    ],
  });
}
