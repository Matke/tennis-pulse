import { useState } from "react";
// components
import InputDate from "@/components/inputs/InputDate";
import ProfileImageUploader from "@/features/onboarding/ProfileImageUploader";
import ButtonIcon from "@/components/buttons/ButtonIcon";
import ImageCropper from "@/features/onboarding/ImageCropper";
import InputRadio, {
  type RadioItemProps,
} from "@/components/inputs/InputRadio";
import InputText from "@/components/inputs/InputText";
// hooks
import { useStepsForm } from "@/features/onboarding/useStepsForm";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { calculateAge } from "@/utils/common";
// types
import {
  userProfileInitialData,
  type Gender,
  type UserProfileFormData,
} from "@/types/authTypes";
// icons
import { RiImageEditFill } from "react-icons/ri";
// yup
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// picking only those value that are present in this step form for validation using utility type Pick
type PersonalDetailsFormData = Pick<
  UserProfileFormData,
  "userName" | "firstName" | "lastName" | "dateOfBirth" | "gender"
>;

const schema: yup.ObjectSchema<PersonalDetailsFormData> = yup.object({
  userName: yup
    .string()
    .trim()
    .required("Username is required")
    .min(5, "Username must be at least 5 characters"),
  firstName: yup
    .string()
    .trim()
    .required("First name is required")
    .matches(/^[a-zA-Z]+$/, "First name can contain only letters"),
  lastName: yup
    .string()
    .trim()
    .required("Last name is required")
    .matches(/^[a-zA-Z]+$/, "Last name can contain only letters"),
  dateOfBirth: yup
    .string()
    .required("Date of birth required")
    .test("is-valid-age", "You must be at least 10 years old", (value) => {
      if (!value) return false;
      const currentAge = calculateAge(value);

      return currentAge >= 10;
    })
    .test("is-alive", "How you are not dead?", (value) => {
      if (!value) return false;
      const currentAge = calculateAge(value);

      return currentAge <= 110;
    }),
  gender: yup
    .string()
    .required("Please select a gender")
    .oneOf(["male" as Gender, "female" as Gender], "Invalid gender selection"),
});

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

  const { handleNext, processStepFormData, formData, imageUrl } =
    useStepsForm();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, touchedFields }, // validation errors
  } = useForm<PersonalDetailsFormData>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onPersonalDetailsFormSubmit: SubmitHandler<
    Partial<UserProfileFormData>
  > = (data: Partial<UserProfileFormData>) => {
    // gather data from previous step form and append new data
    processStepFormData(data);

    handleNext();
  };

  return (
    <form
      id="onboarding-form"
      className="grid grid-cols-2 gap-9.5"
      onSubmit={handleSubmit(onPersonalDetailsFormSubmit)}
    >
      {/* Username */}
      <InputText
        type="text"
        placeholder="Username"
        className="self-center"
        fullWidth
        backgroundInputColor="bg-tp-card-back"
        defaultValue={formData.userName || userProfileInitialData.userName}
        required
        error={errors?.userName?.message}
        isValidField={touchedFields.userName && !errors?.userName?.message}
        {...register("userName")}
      />

      {/* Image  */}
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
        error={errors?.dateOfBirth?.message}
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
        error={errors?.firstName?.message}
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
        error={errors?.lastName?.message}
        {...register("lastName")}
      />

      {/* Adjust profile image - cropper */}
      {isCropModalOpen && imageUrl && (
        <ImageCropper setIsCropModalOpen={setIsCropModalOpen} />
      )}
    </form>
  );
};

export default PersonalDetailsForm;
