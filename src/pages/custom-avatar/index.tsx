import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Avatar, AvatarCategories } from "../../components";
import { dataOptions } from "../../data/mockups/data-options";
import { useQueryGetBaseDetail } from "../../data/queries/use-query-get-base-detail";
import { OptionsAvatar } from "../../interfaces/avatar";

const SIZE = 650;

export const CustomAvatar = () => {
  const params = useParams();
  const [options, setOptions] = useState<OptionsAvatar>({} as OptionsAvatar);
  const { data, isLoading } = useQueryGetBaseDetail(params.id);

  useEffect(() => {
    if (data) {
      setOptions(data.options);
    }
  }, [data]);

  return (
    <div className="flex gap-2 p-3 shadow-xl bg-base-100">
      {isLoading ? (
        <div className="flex items-center justify-center w-full h-full gap-3">
          <div className="loader-dual-ring"></div>
        </div>
      ) : null}
      <figure>
        <Avatar
          options={options}
          key={"avatar-canvas"}
          width={SIZE}
          height={SIZE}
        ></Avatar>
      </figure>
      <div className={`max-h-[${SIZE}px] overflow-auto flex-auto`}>
        <AvatarCategories
          value={options}
          data={dataOptions}
          onChange={(newOptionsValue: OptionsAvatar) =>
            setOptions({ ...newOptionsValue })
          }
        />
      </div>
    </div>
  );
};
