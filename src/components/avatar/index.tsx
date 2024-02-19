import classNames from "classnames";
import { useCallback, useEffect, useRef, useState } from "react";
import { OptionsAvatar } from "../../interfaces/avatar";
import { downloadBase64Image, hexToRgb } from "../../utils";

const defaultImages: OptionsAvatar = {
  base: "/assets/images/body/body.png",
  hair: "/assets/images/hair/hair-1.png",
  eyes: "/assets/images/eyes/eyes-1.png",
  mouth: "/assets/images/mouth/mouth-1.png",
  accessory: "/assets/images/accessory/accessory-1.png",
  shirt: "/assets/images/shirt/shirt-1.png",
  hand: "/assets/images/hand/hand-1.png",
  background: hexToRgb("#ffffff"),
  color: hexToRgb("#20bcd4"),
};

type AvatarProps = {
  options: OptionsAvatar;
  width?: number;
  height?: number;
  getImageUrl?: (img: HTMLImageElement, url: string) => void;
};
export const Avatar = ({
  width = 500,
  height = 500,
  options = defaultImages,
  getImageUrl,
}: AvatarProps) => {
  const [loading, setLoading] = useState(true);
  const [updateImages, setUpdateImages] = useState<OptionsAvatar>(options);
  const refImg = useRef<HTMLImageElement>(null);
  const refCanvas = useRef<HTMLCanvasElement>(null);

  const handleClickDownload = useCallback((type: "JPG/JPEG" | "PNG") => {
    if (!refCanvas.current) return;
    const canvas = refCanvas.current;
    if (type === "JPG/JPEG") {
      const dataURL = canvas.toDataURL("image/jpg", 1.0);
      downloadBase64Image(dataURL, "avatar-customize.jpg");
    } else {
      const dataURL = canvas.toDataURL("image/png");
      downloadBase64Image(dataURL, "avatar-customize.png");
    }
  }, []);

  useEffect(() => {
    if (!refCanvas.current) {
      return;
    }
    const loadedImages: any = {};
    const canvas = refCanvas.current;

    const ctx: any = canvas?.getContext("2d");
    const imagePromises = Object.keys(options)
      .filter((key) => !["background", "color"].includes(key))
      .map((key) => loadImage(key, options[key as keyof OptionsAvatar]));

    Promise.all(imagePromises)
      .then(() => {
        // Initial drawing
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw each part of the face
        Object.keys(loadedImages).forEach((part) => {
          ctx.drawImage(loadedImages[part], 0, 0, canvas.width, canvas.height);
          fillColor();
          setUpdateImages(loadedImages);
          setLoading(false);
        });
      })
      .catch((error) => {
        return console.error(error);
      })
      .finally(() => setLoading(false));

    // Object.keys(options).filter().map((key) => {
    //   if (key !== "background") {
    //     loadImage(key, options[key as keyof OptionsAvatar]);
    //   }

    // });

    // Function to load images
    function loadImage(part: any, src: any) {
      return new Promise((resolve: any, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedImages[part] = img;
          resolve(loadedImages);
        };
        img.onerror = (error) => reject(error);
      });
    }
    function fillColor() {
      ctx.imageSmoothingEnabled = true;

      // ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      // Get the image data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Define the color to change the image to
      const targetColor = options.color; // Red color for example

      // Loop through each pixel
      for (let i = 0; i < data.length; i += 4) {
        // Change the color of non-transparent pixels
        if (data[i + 3] > 0) {
          // Check if the pixel is not transparent
          // Apply color transformation here
          data[i] = targetColor[0]; // Red component
          data[i + 1] = targetColor[1]; // Green component
          data[i + 2] = targetColor[2]; // Blue component
        }
      }

      // Update the canvas with the modified image data
      ctx.putImageData(imageData, 0, 0);
    }
  }, [options]);

  useEffect(() => {
    if (refCanvas.current && refImg.current && !!updateImages) {
      const canvas = refCanvas.current;

      const dataURL = canvas.toDataURL();
      const img = new Image();
      refImg.current.src = dataURL;

      img.src = dataURL;
      getImageUrl?.(img, dataURL);
    }
  }, [getImageUrl, updateImages]);

  return (
    <div>
      <div className="hidden">
        <canvas ref={refCanvas} width={width} height={height}></canvas>
      </div>
      <div
        className={classNames(`w-${width} h-${height}`, {
          skeleton: loading,
        })}
      >
        <img ref={refImg} className="object-contain w-full h-full" />
      </div>
      <div className="mt-3 text-center">
        <div className="dropdown dropdown-top">
          <div tabIndex={0} role="button" className="m-1 btn">
            Download
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li id="JPG/JPEG" onClick={() => handleClickDownload("JPG/JPEG")}>
              <a>JPG/JPEG</a>
            </li>
            <li id="PNG" onClick={() => handleClickDownload("PNG")}>
              <a>PNG</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
