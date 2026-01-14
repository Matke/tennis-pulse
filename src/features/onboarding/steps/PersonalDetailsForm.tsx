import { useDropzone } from "react-dropzone";
import { useCallback, useMemo, useState } from "react";
// components
import InputDate from "@/components/inputs/InputDate";
import InputRadio, {
  type RadioItemProps,
} from "@/components/inputs/InputRadio";
import Typography from "@/components/text/Typography";
import InputText from "@/components/inputs/InputText";
// hooks
import { useStepsForm } from "@/features/onboarding/useStepsForm";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
// types
import {
  userProfileInitialData,
  type UserProfileFormData,
} from "@/types/authTypes";
// icons
import Cropper from "react-easy-crop";
import CropModal from "@/components/modals/CropModal";
import ButtonIcon from "@/components/buttons/ButtonIcon";
import { RiImageEditFill } from "react-icons/ri";
import InputSlider from "@/components/inputs/InputSlider";
import getCroppedImg from "@/utils/common";
import { toast } from "react-hot-toast";

// dropzone base style
const baseStyle = {
  width: "110px",
  height: "110px",
  display: "flex",
  borderWidth: 2,
  borderRadius: "50%",
  borderColor: "var(--color-charcoal-600)",
  borderStyle: "dashed",
  color: "var(--color-charcoal-600)",
  outline: "none",
  transition: "border .24s ease-in-out",
  cursor: "pointer",
  background: "transparent",
  overflow: "hidden",
};

// dropzone states
const focusedStyle = {
  borderColor: "var(--color-tp-secondary)",
};

const acceptStyle = {
  borderColor: "var(--color-tp-tertiary)",
};

const rejectStyle = {
  borderColor: "var(--color-tp-warning)",
};

// gender radio options
const genderOptions: RadioItemProps<string>[] = [
  {
    id: "male",
    name: "Male",
  },
  {
    id: "female",
    name: "Female",
  },
];

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

const PersonalDetailsForm = () => {
  // const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);
  const [aspectRatio, setAspectRatio] = useState<number>(1 / 1);
  const [cropShape, setCropShape] = useState<CropShape>("round");
  const [isCropModalOpen, setIsCropModalOpen] = useState<boolean>(false);
  const [isCropping, setIsCropping] = useState<boolean>(false);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<CropAreaData>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const { handleNext, setFormData, formData, imageUrl, handleProfileImageSet } =
    useStepsForm();
  const { register, handleSubmit, control } = useForm();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (imageUrl) {
        console.log("In revoke");
        URL.revokeObjectURL(imageUrl);
      }

      const file = acceptedFiles[0];
      console.log(file);
      handleProfileImageSet(URL.createObjectURL(file));
      setIsCropModalOpen(true);
    },
    [imageUrl, handleProfileImageSet],
  );

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({ accept: { "image/*": [] }, multiple: false, onDrop });

  const onPersonalDetailsFormSubmit: SubmitHandler<
    Partial<UserProfileFormData>
  > = (data: Partial<UserProfileFormData>) => {
    // gather data from previous step form and append new data
    setFormData((prevStepFormData: UserProfileFormData) => ({
      ...prevStepFormData,
      ...data,
    }));

    handleNext();
  };

  // dropzone styles
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
      ...(imageUrl
        ? {
            borderStyle: "solid",
            borderColor: "#ffee5300",
          }
        : {}),
    }),
    [isFocused, isDragAccept, isDragReject, imageUrl],
  );

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
  ]);

  return (
    <form
      id="onboarding-form"
      className="grid grid-cols-2 gap-9"
      onSubmit={handleSubmit(onPersonalDetailsFormSubmit)}
    >
      {/* Username */}
      <InputText
        type="text"
        placeholder="Username"
        className="self-center"
        fullWidth
        backgroundInputColor="bg-tp-card-back"
        defaultValue={formData.userName}
        {...register("userName")}
        isValidField
      />

      <div className="flex items-center justify-center">
        <div className="container flex items-end justify-center">
          <div {...getRootProps({ style })}>
            <input {...getInputProps()} />
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Profile preview"
                className="h-full w-full object-cover"
              />
            ) : (
              <Typography
                variant="label-small"
                className="text-charcoal-600 mx-auto self-center p-4"
              >
                Drop or click to upload image
              </Typography>
            )}
          </div>
          {imageUrl && (
            <ButtonIcon
              onClick={() => setIsCropModalOpen(true)}
              themeColor="primary"
              variant="outlined"
              icon={<RiImageEditFill className="h-5 w-5" />}
              rounded
              hoverClass
              className="border-none"
              tooltipId="edit-profile-photo"
              tooltipContent="Adjust your profile photo"
              tooltipPlacement="bottom"
            />
          )}
        </div>
      </div>

      {/* Date of birth */}
      <InputDate
        type="date"
        placeholder="Date of birth"
        fullWidth
        className=""
        backgroundInputColor="bg-tp-card-back"
        defaultValue={
          formData.dateOfBirth || userProfileInitialData.dateOfBirth
        }
        {...register("dateOfBirth")}
      />

      {/* Gender */}
      <Controller
        control={control}
        name="gender"
        defaultValue={formData.gender || userProfileInitialData.gender} // to avoid error component is changing uncontrolled input to be controlled there must be a default value
        render={({ field }) => (
          <InputRadio
            data={genderOptions}
            value={field.value}
            onChange={field.onChange}
            className="self-end"
            optionsContainer="justify-center border-none"
            direction="horizontal"
          />
        )}
      />

      {/* First name */}
      <InputText
        type="text"
        placeholder="First name"
        fullWidth
        className="col-span-2"
        backgroundInputColor="bg-tp-card-back"
        defaultValue={formData.firstName}
        {...register("firstName")}
      />

      {/* Last name */}
      <InputText
        type="text"
        placeholder="Last Name"
        fullWidth
        className="col-span-2"
        backgroundInputColor="bg-tp-card-back"
        defaultValue={formData.lastName}
        {...register("lastName")}
      />

      {isCropModalOpen && imageUrl && (
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
      )}
    </form>
  );
};

export default PersonalDetailsForm;
