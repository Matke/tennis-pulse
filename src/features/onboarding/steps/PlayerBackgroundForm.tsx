// components
import InputText from "@/components/inputs/InputText";
import Textarea from "@/components/inputs/Textarea";
import ReactFlagsSelect from "react-flags-select";
// types
import {
  userProfileInitialData,
  type UserProfileFormData,
} from "@/types/authTypes";
// hooks
import { useStepsForm } from "@/features/onboarding/useStepsForm";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
// yup
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// same as first step form picking only data that are present in this step
type PlayerBackgroundFormData = Pick<
  UserProfileFormData,
  "nationality" | "weight" | "height" | "bio"
>;

type OptionalPlayerBackgroundFormData = Partial<PlayerBackgroundFormData>;

const schema: yup.ObjectSchema<OptionalPlayerBackgroundFormData> = yup.object({
  nationality: yup.string().max(2, "Must be two characters"),
  weight: yup.number().moreThan(16, "Weight must be greater than 16"),
  height: yup.number().moreThan(16, "Height must be greater than 16"),
  bio: yup.string().max(1200, "Exceeded maximum number of characters"),
});

const PlayerBackgroundForm = () => {
  const { handleNext, processStepFormData, formData } = useStepsForm();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<OptionalPlayerBackgroundFormData>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onPlayerBackgroundFormSubmit: SubmitHandler<
    Partial<UserProfileFormData>
  > = (data: Partial<UserProfileFormData>) => {
    processStepFormData(data);
    handleNext();
  };

  return (
    <form
      id="onboarding-form"
      className="grid h-full grid-cols-2 gap-9"
      onSubmit={handleSubmit(onPlayerBackgroundFormSubmit)}
      noValidate // disables any default html validation so that it goes through yup
    >
      {/* Nationality */}
      <Controller
        control={control}
        name="nationality"
        defaultValue={
          formData.nationality || userProfileInitialData.nationality
        } // to avoid error component is changing uncontrolled input to be controlled there must be a default value
        render={({ field }) => (
          <ReactFlagsSelect
            selected={field.value ?? "RS"}
            onSelect={field.onChange}
            placeholder="Select a language"
            className="col-span-2"
            selectButtonClassName="!text-white !border !border-charcoal-600 !ring-charcoal-600 !outline-none"
            searchPlaceholder="Search your country"
            searchable
          />
        )}
      />

      {/* Height */}
      <InputText
        type="number"
        placeholder="Height"
        fullWidth
        backgroundInputColor="bg-tp-card-back"
        inputFieldText="cm"
        defaultValue={formData.height || userProfileInitialData.height || ""}
        // removes default input type number spin button
        inputClass="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none appearance-none"
        required
        error={errors?.height?.message}
        {...register("height", {
          setValueAs: (value) => (value === "" ? 0 : Number(value)),
        })} // by default all values are strings when using react hook form but here we need to ba a number in order not to convert it later
      />

      {/* Weight */}
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
        required
        error={errors?.weight?.message}
        {...register("weight", {
          setValueAs: (value) => (value === "" ? 0 : Number(value)),
        })}
      />

      {/* Bio */}
      <Textarea
        placeholder="Biography"
        className="col-span-2"
        fullWidth
        disableResize
        backgroundInputColor="bg-tp-card-back"
        defaultValue={formData.bio || userProfileInitialData.bio || ""}
        error={errors?.bio?.message}
        {...register("bio")}
      />
    </form>
  );
};

export default PlayerBackgroundForm;
