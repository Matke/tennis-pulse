// components
import InputRadio from "@/components/inputs/InputRadio";
// import InputSelect, {
//   type InputSelectOption,
// } from "@/components/inputs/InputSelect";
// import Tooltip from "@/components/tooltip/Tooltip";
import InputText from "@/components/inputs/InputText";
// icons
// import { IoIosInformationCircleOutline } from "react-icons/io";
import { useStepsForm } from "@/features/onboarding/useStepsForm";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import {
  userProfileInitialData,
  type UserProfileData,
} from "@/types/authTypes";
import InputSlider from "@/components/inputs/InputSlider";

const dominantHandOptions = [
  {
    id: "right",
    name: "Right-handed",
  },
  {
    id: "left",
    name: "Left-handed",
  },
];

const backhandTypeOptions = [
  { id: "one-handed", name: "One-handed" },
  { id: "two-handed", name: "Two-handed" },
  { id: "slice", name: "Slice" },
];

const forehandTypeOptions = [
  { id: "flat", name: "Flat" },
  { id: "topspin", name: "Topspin" },
  { id: "moonball", name: "Moonball" },
];

const PlayStyleForm = () => {
  const { handleNext, setFormData, formData } = useStepsForm();
  const { register, handleSubmit, control } = useForm();

  const onPlayStyleFormSubmit: SubmitHandler<Partial<UserProfileData>> = (
    data: Partial<UserProfileData>,
  ) => {
    // gather data from previous step form and append new data
    setFormData((prevStepFormData) => ({ ...prevStepFormData, ...data }));

    handleNext();
  };

  return (
    <form
      id="onboarding-form"
      className="grid grid-cols-3 gap-8"
      onSubmit={handleSubmit(onPlayStyleFormSubmit)}
    >
      {/* Dominant hand */}
      <Controller
        control={control}
        name="dominantHand"
        defaultValue={
          formData.dominantHand || userProfileInitialData.dominantHand
        } // to avoid error component is changing uncontrolled input to be controlled there must be a default value
        render={({ field }) => (
          <InputRadio
            data={dominantHandOptions}
            value={field.value}
            onChange={field.onChange}
            optionsContainer="border-none"
            direction="vertical"
            radioGroupTitle="Dominant Hand"
          />
        )}
      />

      {/* Backhand type */}
      <Controller
        control={control}
        name="backhandType"
        defaultValue={
          formData.backhandType || userProfileInitialData.backhandType
        } // to avoid error component is changing uncontrolled input to be controlled there must be a default value
        render={({ field }) => (
          <InputRadio
            data={backhandTypeOptions}
            value={field.value}
            onChange={field.onChange}
            optionsContainer="border-none"
            direction="vertical"
            radioGroupTitle="Backhand Type"
          />
        )}
      />

      {/* Forehand type */}
      <Controller
        control={control}
        name="forehandType"
        defaultValue={
          formData.forehandType || userProfileInitialData.forehandType
        } // to avoid error component is changing uncontrolled input to be controlled there must be a default value
        render={({ field }) => (
          <InputRadio
            data={forehandTypeOptions}
            value={field.value}
            onChange={field.onChange}
            optionsContainer="border-none"
            direction="vertical"
            radioGroupTitle="Forehand Type"
          />
        )}
      />

      {/* UTR */}
      <Controller
        control={control}
        name="skillLevel"
        defaultValue={formData.skillLevel || userProfileInitialData.skillLevel} // to avoid error component is changing uncontrolled input to be controlled there must be a default value
        render={({ field }) => (
          <InputSlider
            value={field.value}
            onChange={(value) => field.onChange(value)}
            mainContainerClassName="col-span-3"
            showMarks
            label="UTR Skill Level"
            helperIconTooltipText="UTR is a global rating that measures tennis skill based on real match results. Scale meaning: |1.0 - 2.0 Beginner| >> |3.0 - 4.0 Recreational| >> |5.0 - 6.0 Strong Club Player| >> |7.0 - 8.0 Advanced| >> |9.0 - 10.0 College Level| >> |11.0+ Professional / Elite|"
            helperIconTooltipId="utr-skill-level"
          />
        )}
      />

      {/* Racket */}
      <InputText
        type="text"
        placeholder="Racket"
        className="col-span-3"
        fullWidth
        backgroundInputColor="bg-tp-card-back"
        {...register("racket")}
      />
    </form>
  );
};

export default PlayStyleForm;
