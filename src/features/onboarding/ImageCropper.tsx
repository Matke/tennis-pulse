import type { RadioItemProps } from "@/components/inputs/InputRadio";
import InputRadio from "@/components/inputs/InputRadio";
import InputSlider from "@/components/inputs/InputSlider";
import CropModal from "@/components/modals/CropModal";
import Typography from "@/components/text/Typography";
import { useStepsForm } from "@/features/onboarding/useStepsForm";
import type { UserProfileFormData } from "@/types/authTypes";
import getCroppedImg from "@/utils/common";
import {
  useCallback,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import Cropper from "react-easy-crop";
import { toast } from "react-hot-toast";

// number type for id or value inside InputRadio component
const aspectRatioOptions: RadioItemProps<number>[] = [
  {
    id: 1 / 1,
    name: "1/1",
    // description: "Square",
  },
  {
    id: 4 / 3,
    name: "4/3",
    // description: "Standard",
  },
  {
    id: 16 / 9,
    name: "16/9",
    // description: "Widescreen",
  },
];

const cropShapeOptions: RadioItemProps<"rect" | "round">[] = [
  {
    id: "round",
    name: "Circle",
  },
  {
    id: "rect",
    name: "Rectangle",
  },
];

type CropShape = (typeof cropShapeOptions)[number]["id"];

export type CropAreaData = {
  x: number;
  y: number;
  width: number;
  height: number;
};

const ImageCropper = ({
  setIsCropModalOpen,
}: {
  setIsCropModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  // context
  const { setFormData, imageUrl, handleProfileImageSet } = useStepsForm();

  // loading state
  const [isCropping, setIsCropping] = useState<boolean>(false);
  // cropper state
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);
  const [aspectRatio, setAspectRatio] = useState<number>(1 / 1);
  const [cropShape, setCropShape] = useState<CropShape>("round");
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<CropAreaData>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  // runs everytime crop shape position is changed
  const onCropComplete = (
    croppedArea: CropAreaData,
    croppedAreaPixels: CropAreaData,
  ) => {
    console.log(croppedArea);
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const convertToCroppedImage = useCallback(async () => {
    setIsCropping(true);
    try {
      const croppedImageBlob = await getCroppedImg(
        imageUrl,
        croppedAreaPixels,
        rotation,
      );

      const previewImage = URL.createObjectURL(croppedImageBlob);
      handleProfileImageSet(previewImage);

      const fileBlob = new File([croppedImageBlob], "profile-image.jpg", {
        type: "image/jpeg",
      });

      setFormData((prevStepFormData: UserProfileFormData) => ({
        ...prevStepFormData,
        profileImage: fileBlob,
      }));

      toast.success("All set! The profile image is ready.");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setIsCropping(false);
      setIsCropModalOpen(false);
    }
  }, [
    croppedAreaPixels,
    rotation,
    imageUrl,
    setFormData,
    handleProfileImageSet,
    setIsCropModalOpen,
  ]);

  if (!imageUrl) return null;

  return (
    <CropModal
      // title="Adjust your profile image"
      open={Boolean(imageUrl)}
      onClose={() => setIsCropModalOpen(false)}
      buttons={[
        {
          label: "Confirm",
          themeColor: "tertiary",
          buttonSize: "base",
          className: "w-full",
          loaderText: "Cropping image",
          disabled: isCropping,
          isLoading: isCropping,
          onClick: () => convertToCroppedImage(),
        },
        {
          label: "Cancel",
          themeColor: "warning",
          buttonSize: "base",
          className: "w-full",
          onClick: () => setIsCropModalOpen(false),
          disabled: isCropping,
        },
      ]}
    >
      <div className="grid w-full grid-cols-2">
        <div className="relative col-span-2 h-70 overflow-hidden rounded-sm">
          <Cropper
            image={imageUrl}
            crop={crop}
            zoom={zoom}
            rotation={rotation}
            aspect={aspectRatio}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            onRotationChange={setRotation}
            classes={{
              containerClassName: "rounded-xl",
              cropAreaClassName: "border-2 border-tp-typography",
            }}
            cropShape={cropShape}
            showGrid={false}
          />
        </div>
        <InputSlider
          value={zoom}
          min={1}
          max={3}
          steps={0.1}
          onChange={(zoom) => {
            if (Array.isArray(zoom)) return; // to omit ts error for passing number[] even though it only accepts number
            setZoom(zoom);
          }}
          mainContainerClassName="col-span-2 mt-5 flex-row items-center justify-center gap-5 px-3"
          // sliderClassName="w-1/9"
          labelIconContainer="w-1/5"
          label="Zoom"
        />
        <InputSlider
          value={rotation}
          min={0}
          max={360}
          steps={60}
          onChange={(rotation) => {
            if (Array.isArray(rotation)) return; // to omit ts error for passing number[] even though it only accepts number
            setRotation(rotation);
          }}
          mainContainerClassName="col-span-2 mt-1 flex-row items-center justify-center gap-5 px-3"
          // sliderClassName="w-1/9"
          labelIconContainer="w-1/5"
          label="Rotation"
        />

        <div className="col-span-2 -mt-1.5 flex w-full items-center px-3">
          <Typography
            variant="label"
            as={"span"}
            className="shrink-0 whitespace-nowrap"
          >
            Aspect ratio
          </Typography>
          <InputRadio
            legend="Aspect ratio"
            data={aspectRatioOptions}
            value={aspectRatio}
            onChange={setAspectRatio}
            optionsContainer="border-none"
            direction="horizontal"
            className="ml-1"
          />
        </div>
        <div className="-mt-1.5 flex w-full items-center px-3">
          <Typography
            variant="label"
            as={"span"}
            className="shrink-0 whitespace-nowrap"
          >
            Crop shape
          </Typography>
          <InputRadio
            legend="Crop shape"
            data={cropShapeOptions}
            value={cropShape}
            onChange={setCropShape}
            optionsContainer="border-none"
            direction="horizontal"
            className="ml-2.5"
          />
        </div>
      </div>
    </CropModal>
  );
};

export default ImageCropper;
