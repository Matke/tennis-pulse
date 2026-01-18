// types
import type { CropAreaData } from "@/features/onboarding/ImageCropper";
// helper for react easy crop
/**
 * Joins all classes strings
 * @param classes strings of tailwind classes
 * @returns concatenated classes
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const classNames = (...classes: any) =>
  classes.filter(Boolean).join(" ");

// hadnling only past dates
export function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

  const minutes = Math.floor(diff / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (diff < 60) return "just now";
  if (minutes < 60) return `${minutes} min ago`;
  if (hours < 24) return `${hours} hr ago`;
  return `${days} day${days > 1 ? "s" : ""} ago`;
}

// handling both future dates and past
export function getRelativeTimeFuture(input: string | Date): string {
  const date = typeof input === "string" ? new Date(input) : input;
  const now = new Date();
  const diffSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  const units: [Intl.RelativeTimeFormatUnit, number][] = [
    ["year", 60 * 60 * 24 * 365],
    ["month", 60 * 60 * 24 * 30],
    ["week", 60 * 60 * 24 * 7],
    ["day", 60 * 60 * 24],
    ["hour", 60 * 60],
    ["minute", 60],
    ["second", 1],
  ];

  for (const [unit, secondsInUnit] of units) {
    if (Math.abs(diffSeconds) >= secondsInUnit || unit === "second") {
      const value = Math.round(diffSeconds / secondsInUnit);
      return rtf.format(value, unit);
    }
  }

  return "just now";
}

// calculate age
export const calculateAge = (dateOfBirth: string) => {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDif = today.getMonth() - birthDate.getMonth();
  const dayDif = today.getDate() - birthDate.getDate();

  if (monthDif < 0 || (monthDif === 0 && dayDif < 0)) {
    age--;
  }
  return age;
};

/**
 *
 * @param degreeValue number - rotation
 * @returns how much to rotate image
 */
function getRadianAngle(degreeValue: number) {
  return (degreeValue * Math.PI) / 180;
}
/**
 *
 * @param url string
 * @returns New image
 */
const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous"); // this is only needed if image is hosted on CDN
    image.src = url;
  });

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 * @param {File} image - Image File url
 * @param {Object} pixelCrop - pixelCrop Object provided by react-easy-crop
 * @param {number} rotation - optional rotation parameter
 */
export default async function getCroppedImg(
  imageSrc: string | null,
  pixelCrop: CropAreaData,
  rotation = 0,
): Promise<Blob> {
  if (!imageSrc) throw new Error("Image does not exist!");

  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) throw new Error("Canvas does not exist!");

  const maxSize = Math.max(image.width, image.height);
  const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

  // set each dimensions to double largest dimension to allow for a safe area for the
  // image to rotate in without being clipped by canvas context
  canvas.width = safeArea;
  canvas.height = safeArea;

  // translate canvas context to a central location on image to allow rotating around the center.
  ctx.translate(safeArea / 2, safeArea / 2);
  ctx.rotate(getRadianAngle(rotation));
  ctx.translate(-safeArea / 2, -safeArea / 2);

  // draw rotated image and store data.
  ctx.drawImage(
    image,
    safeArea / 2 - image.width * 0.5,
    safeArea / 2 - image.height * 0.5,
  );
  const data = ctx.getImageData(0, 0, safeArea, safeArea);

  // set canvas width to final desired crop size - this will clear existing context
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  // paste generated rotate image with correct offsets for x,y crop values.
  ctx.putImageData(
    data,
    Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
    Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y),
  );

  // As Base64 string
  // return canvas.toDataURL('image/jpeg');

  // As a blob
  return new Promise((resolve) => {
    canvas.toBlob((file) => {
      if (!file) {
        console.error("Canvas is empty!");
        throw new Error("Cannot convert to blob! No file");
      }

      resolve(file);
    }, "image/jpeg");
  });
}

// replace with lodash in the future updates
export function debounce<T extends (...args: never[]) => unknown>(
  fn: T,
  delay: number,
) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>): Promise<Awaited<ReturnType<T>>> => {
    return new Promise((resolve, reject) => {
      if (timeoutId) clearTimeout(timeoutId);

      timeoutId = setTimeout(async () => {
        try {
          // Type cast to ensure the result is treated as the ReturnType
          const result = (await fn(...args)) as Awaited<ReturnType<T>>;
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }, delay);
    });
  };
}
