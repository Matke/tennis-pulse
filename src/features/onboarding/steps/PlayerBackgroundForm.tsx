// components
import InputText from "@/components/inputs/InputText";
import Textarea from "@/components/inputs/Textarea";
import ReactFlagsSelect from "react-flags-select";
// types
import {
  userProfileInitialData,
  type UserProfileData,
} from "@/types/authTypes";
// hooks
import { useStepsForm } from "@/features/onboarding/useStepsForm";
import { Controller, useForm } from "react-hook-form";

const PlayerBackgroundForm = () => {
  const { handleNext, setFormData, formData } = useStepsForm();
  const { register, handleSubmit, control } = useForm();

  const onPlayerBackgroundFormSubmit = (data: Partial<UserProfileData>) => {
    setFormData((prevStepFormData) => ({ ...prevStepFormData, ...data }));
    handleNext();
  };

  return (
    <form
      id="onboarding-form"
      className="grid grid-cols-2 gap-8"
      onSubmit={handleSubmit(onPlayerBackgroundFormSubmit)}
    >
      <Controller
        control={control}
        name="nationality"
        defaultValue={
          formData.nationality || userProfileInitialData.nationality
        } // to avoid error component is changing uncontrolled input to be controlled there must be a default value
        render={({ field }) => (
          <ReactFlagsSelect
            selected={field.value}
            onSelect={field.onChange}
            placeholder="Select a language"
            className="col-span-2"
            selectButtonClassName="!text-white !border !border-charcoal-600 !ring-charcoal-600 !outline-none"
            searchPlaceholder="Search your country"
            searchable
          />
        )}
      />

      <InputText
        type="number"
        placeholder="Height"
        fullWidth
        backgroundInputColor="bg-tp-card-back"
        inputFieldText="cm"
        defaultValue={formData.height || userProfileInitialData.height || ""}
        // removes default input type number spin button
        inputClass="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none appearance-none"
        {...register("height")}
      />
      <InputText
        type="number"
        placeholder="Weight"
        className=""
        fullWidth
        backgroundInputColor="bg-tp-card-back"
        inputFieldText="kg"
        defaultValue={formData.weight || userProfileInitialData.weight || ""}
        // removes default input type number spin button
        inputClass="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none appearance-none"
        {...register("weight")}
      />
      <Textarea
        placeholder="Biography"
        className="col-span-2"
        fullWidth
        disableResize
        backgroundInputColor="bg-tp-card-back"
        defaultValue={formData.bio || userProfileInitialData.bio || ""}
        {...register("bio")}
      />
    </form>
  );
};

export default PlayerBackgroundForm;
