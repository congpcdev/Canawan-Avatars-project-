import { useQuery } from "react-query";
import { getBaseDetail } from "./fetch";
import { hexToRgb } from "../../../utils";

export function useQueryGetBaseDetail(id: any) {
  return useQuery({
    queryKey: ["BASE_DETAIL", id],
    queryFn: getBaseDetail,
    keepPreviousData: true,
    staleTime: 0,
    enabled: false,
    initialData: {
      name: "base 1",
      url: "/assets/images/body.png",
      id: 1,
      options: {
        base: "/assets/images/body/body.png",
        hair: "/assets/images/hair/hair-1.png",
        eyes: "/assets/images/eyes/eyes-3.png",
        mouth: "/assets/images/mouth/mouth-1.png",
        accessory: "/assets/images/accessory/accessory-3.png",
        shirt: "/assets/images/shirt/shirt-1.png",
        hand: "/assets/images/hand/hand-1.png",
        background: hexToRgb("#ffffff"),
        color: hexToRgb("#20bcd4"),
      },
    },
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
