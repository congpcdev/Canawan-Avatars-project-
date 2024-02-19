import React, { useMemo, useRef } from "react";
import { hexToRgb, rgbToHex } from "../../../utils";
import classNames from "classnames";

type Props = {
  value: string | number[];
  onChange: (values: { hex: string; rgb: number[]; name?: string }) => void;
  className?: string;
  name?: string;
};

export const ColorPicker = ({
  value = "#000000",
  onChange,
  className,
  name,
}: Props) => {
  const refInput = useRef<HTMLInputElement>(null);

  const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectValue = e.target.value;
    onChange({
      hex: selectValue,
      rgb: hexToRgb(selectValue),
      name,
    });
  };

  const convertValue: string = useMemo(() => {
    if (Array.isArray(value) && value.length === 3) {
      //   const [r, g, b] = value.match(/\d+/g) || [];
      return rgbToHex(value);
    }
    return value as string;
  }, [value]);
  return (
    <div
      className={classNames(
        "p-1 border border-gray-300 rounded-md cursor-pointer relative",
        className
      )}
    >
      <input
        type="color"
        ref={refInput}
        value={convertValue}
        onChange={handleChangeColor}
        className="w-full h-full"
      />
      {/* <div
        onClick={handleClick}
        style={{
          backgroundColor: convertValue,
        }}
        className={`w-full h-full`}
      ></div> */}
    </div>
  );
};

export default ColorPicker;
