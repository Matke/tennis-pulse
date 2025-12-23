// components
import InputDate from "@/components/inputs/InputDate";
import InputRadio from "@/components/inputs/InputRadio";
import InputText from "@/components/inputs/InputText";
// hooks
import { useStepsForm } from "@/features/onboarding/useStepsForm";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
// types
import {
  userProfileInitialData,
  type UserProfileData,
} from "@/types/authTypes";
// icons
import { BsPersonCircle } from "react-icons/bs";

const genderOptions = [
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
  const { handleNext, setFormData, formData } = useStepsForm();
  const { register, handleSubmit, control } = useForm();

  const onPersonalDetailsFormSubmit: SubmitHandler<Partial<UserProfileData>> = (
    data: Partial<UserProfileData>,
  ) => {
    // gather data from previous step form and append new data
    setFormData((prevStepFormData) => ({ ...prevStepFormData, ...data }));

    handleNext();
  };

  return (
    <form
      id="onboarding-form"
      className="grid grid-cols-2 gap-9"
      onSubmit={handleSubmit(onPersonalDetailsFormSubmit)}
    >
      <InputText
        type="text"
        placeholder="Username"
        className="self-center"
        fullWidth
        backgroundInputColor="bg-tp-card-back"
        defaultValue={formData.username}
        {...register("username")}
      />
      {/* TODO: Change with input profile  */}
      {/* upload image component */}
      <div className="text-tp-typography flex items-center justify-center">
        <BsPersonCircle className="text-charcoal-800 h-20 w-20 scale-130" />
      </div>
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
      <InputText
        type="text"
        placeholder="First name"
        fullWidth
        className="col-span-2"
        backgroundInputColor="bg-tp-card-back"
        defaultValue={formData.firstName}
        {...register("firstName")}
      />
      <InputText
        type="text"
        placeholder="Last Name"
        fullWidth
        className="col-span-2"
        backgroundInputColor="bg-tp-card-back"
        defaultValue={formData.lastName}
        {...register("lastName")}
      />
    </form>
  );
};

export default PersonalDetailsForm;
