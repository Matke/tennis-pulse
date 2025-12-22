// components
import InputRadio from "@/components/inputs/InputRadio";
import InputSelect, {
  type InputSelectOption,
} from "@/components/inputs/InputSelect";
import Tooltip from "@/components/tooltip/Tooltip";
import InputText from "@/components/inputs/InputText";
// icons
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useStepsForm } from "@/features/onboarding/useStepsForm";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import {
  userProfileInitialData,
  type UserProfileData,
} from "@/types/authTypes";

const skillLevelOptions: InputSelectOption[] = [
  { label: "1.0", value: 1.0 },
  { label: "2.0", value: 2.0 },
  { label: "2.5", value: 2.5 },
  { label: "3.0", value: 3.0 },
  { label: "3.5", value: 3.5 },
  { label: "4.0", value: 4.0 },
  { label: "4.5", value: 4.5 },
  { label: "5.0", value: 5.0 },
  { label: "6.0", value: 6.0 },
  { label: "7.0", value: 7.0 },
  { label: "8.0", value: 8.0 },
  { label: "9.0", value: 9.0 },
  { label: "10.0", value: 10.0 },
  { label: "11.0", value: 11.0 },
];

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

  // const [backhandType, setBackhandType] = useState<string | "">("one-handed");
  // const [forehandType, setForehandType] = useState<string | "">("flat");
  // const [skillLevel, setSkillLevel] = useState<number | "">("");
  // const [selectedRadio, setSelectedRadio] = useState("right");

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

      {/* Racket */}
      <InputText
        type="text"
        placeholder="Racket"
        className="col-span-3"
        fullWidth
        backgroundInputColor="bg-tp-card-back"
        {...register("racket")}
      />

      {/* Skill Level */}
      <div className="relative col-span-3 flex w-full items-center gap-2">
        <Controller
          control={control}
          name="skillLevel"
          defaultValue={
            formData.skillLevel || userProfileInitialData.skillLevel || ""
          } // to avoid error component is changing uncontrolled input to be controlled there must be a default value
          render={({ field }) => (
            <InputSelect
              id="skillLevel"
              name="skillLevel"
              label="UTR Skill Level"
              value={field.value}
              onChange={(e) => field.onChange(Number(e.target.value))}
              options={skillLevelOptions}
              className="flex-1"
              floatingLabelBackground="bg-tp-card-back"
              optGroupLabel="UTR Skill Level"
              error=""
            />
          )}
        />
        <Tooltip
          id="skill-level-tooltip"
          content={
            "UTR is a global rating that measures tennis skill based on real match results. Scale meaning: |1.0 - 2.0 Beginner| >> |3.0 - 4.0 Recreational| >> |5.0 - 6.0 Strong Club Player| >> |7.0 - 8.0 Advanced| >> |9.0 - 10.0 College Level| >> |11.0+ Professional / Elite|"
          }
          place="top"
          variant="dark"
        >
          <div
            data-tooltip-id="skill-level-tooltip"
            className="absolute right-7 z-10"
          >
            <IoIosInformationCircleOutline className="text-charcoal-600 h-7 w-7 cursor-pointer" />
          </div>
        </Tooltip>
      </div>
    </form>
  );
};

export default PlayStyleForm;
