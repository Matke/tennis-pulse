import { useState } from "react";
// components
import InputDate from "@/components/inputs/InputDate";
import InputRadio, {
  type RadioItemProps,
} from "@/components/inputs/InputRadio";
import InputText from "@/components/inputs/InputText";
// hooks
import { useStepsForm } from "@/features/onboarding/useStepsForm";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
// types
import {
  userProfileInitialData,
  type UserProfileFormData,
} from "@/types/authTypes";
import ButtonIcon from "@/components/buttons/ButtonIcon";
import { RiImageEditFill } from "react-icons/ri";
import ProfileImageUploader from "@/features/onboarding/ProfileImageUploader";
import ImageCropper from "@/features/onboarding/ImageCropper";

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

const PersonalDetailsForm = () => {
  const [isCropModalOpen, setIsCropModalOpen] = useState<boolean>(false);

  const { handleNext, setFormData, formData, imageUrl } = useStepsForm();
  const { register, handleSubmit, control } = useForm();

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
        required
        {...register("userName")}
      />

      <div className="flex items-center justify-center">
        <div className="container flex items-end justify-center">
          {/* React Dropzone */}
          <ProfileImageUploader setIsCropModalOpen={setIsCropModalOpen} />

          {/* Crop modal open button */}
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
        placeholder="First Name"
        fullWidth
        className="col-span-2"
        backgroundInputColor="bg-tp-card-back"
        defaultValue={formData.firstName}
        required
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
        required
        {...register("lastName")}
      />

      {isCropModalOpen && imageUrl && (
        <ImageCropper setIsCropModalOpen={setIsCropModalOpen} />
      )}
    </form>
  );
};

export default PersonalDetailsForm;
