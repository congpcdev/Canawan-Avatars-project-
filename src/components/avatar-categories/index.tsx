import classNames from "classnames";
import React, { useCallback } from "react";
import { OptionsAvatar } from "../../interfaces/avatar";
import ColorPicker from "../commons/color-picker";
import { useQueryCategories } from "../../data/queries/use-query-get-categories";

export type Categories = {
  id: string;
  name: keyof OptionsAvatar;
  options: {
    name: string;
    value: string;
  }[];
};
type Props = {
  data: Categories[];
  value: OptionsAvatar;
  onChange: (values: OptionsAvatar) => void;
  size?: number;
};

export const AvatarCategories = React.memo(({ onChange, value }: Props) => {
  const { data } = useQueryCategories();

  const handleChangeOptions = useCallback(
    (name: keyof OptionsAvatar, selectValue: string) => {
      onChange({
        ...value,
        [name]: selectValue,
      });
    },
    [onChange, value]
  );

  const handleChangeColor = ({ rgb, name }: any) => {
    // ctx.fillStyle = e.target.value;
    // console.log(e.target.value, "color");
    onChange({
      ...value,
      [name]: rgb,
    });
  };

  return (
    <div className="w-full ">
      <div className="flex flex-col gap-2 ">
        {data?.map((opt: Categories) => {
          return (
            <div className="flex flex-col w-full gap-2" key={opt.id}>
              <label className="font-semibold text-left capitalize">
                {opt.name}
              </label>
              <div className="flex flex-wrap gap-2">
                {opt.options.map(
                  (optChild: { name: string; value: string }) => {
                    const isActive =
                      optChild.value === value[opt.id as keyof OptionsAvatar];
                    return (
                      <div
                        key={optChild.value}
                        className={classNames(
                          "border border-gray-400 text-center shadow-sm rounded cursor-pointer",
                          {
                            ["!border-blue-500"]: isActive,
                          }
                        )}
                        onClick={() =>
                          handleChangeOptions(opt.name, optChild.value)
                        }
                      >
                        <div
                          style={{
                            backgroundImage: `url(${optChild.value})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "contain",
                          }}
                          className={`!w-14 !h-14`}
                        >
                          {/* {optChild.name}{" "} */}
                        </div>
                        {/* <img
                        src={optChild.value}
                        className="object-contain w-full h-full border rounded-sm"
                      ></img> */}
                        {/* <small> {optChild.name}</small>{" "} */}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          );
        })}

        <div className="flex gap-3">
          <div key={"color"} className="flex flex-col gap-2">
            <label
              className="font-semibold text-left capitalize"
              htmlFor={"bg"}
            >
              color
            </label>
            <ColorPicker
              value={value?.color || [0, 0, 0]}
              name="color"
              onChange={handleChangeColor}
              className="w-14 h-14"
            />
          </div>
          {/* <div key={"background"} className="flex flex-col gap-2">
              <label
                className="font-semibold text-left capitalize"
                htmlFor={"bg"}
              >
                Background
              </label>
              <ColorPicker
                name="background"
                value={value?.background || [0, 0, 0]}
                onChange={handleChangeColor}
                className="w-14 h-14"
              />
            </div> */}
        </div>
      </div>
    </div>
  );
});
