// react hook form
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
// components
import InputDate from "@/components/inputs/InputDate";
import InputRadio, {
  type RadioItemProps,
} from "@/components/inputs/InputRadio";
import InputSlider from "@/components/inputs/InputSlider";
import InputText from "@/components/inputs/InputText";
// types
import type { CreateChallengeFormData } from "@/types/challengeTypes";

const matchFormat: RadioItemProps<number>[] = [
  {
    id: 1,
    name: "Best of 1",
    description: "Short and fast-paced matches where every stroke counts",
  },
  {
    id: 3,
    name: "Best of 3",
    description: "Balanced format that rewards adaptability and consistency",
  },
  {
    id: 5,
    name: "Best of 5",
    description: "Ultimate test of endurance, resilience and drama",
  },
];

const surfaceType: RadioItemProps<string>[] = [
  {
    id: "clay",
    name: "Clay",
    description:
      "Slower surface with high bounce, favoring physicality and long rallies",
  },
  {
    id: "hard",
    name: "Hard",
    description:
      "Fast and consistent-bounce surface offering balanced style of play",
  },
  {
    id: "grass",
    name: "Grass",
    description:
      "Very fast surface with low bounce, rewarding powerful serve and fast play",
  },
];

const CreateChallengeForm = () => {
  const { register, handleSubmit, control } =
    useForm<CreateChallengeFormData>();

  const onCreateChallengeFormSubmit: SubmitHandler<CreateChallengeFormData> = (
    data: CreateChallengeFormData,
  ) => {
    // temp log data
    console.log(data);
  };

  return (
    <form
      className="mt-2.5 grid w-full grid-cols-2 grid-rows-1 gap-x-5 gap-y-8 overflow-hidden py-6 pl-6"
      onSubmit={handleSubmit(onCreateChallengeFormSubmit)}
      id="create-challenge-form"
    >
      {/* Scheduled match date and time */}
      <InputDate
        type="datetime-local"
        placeholder="Schedule match start"
        fullWidth
        className="pr-4"
        backgroundInputColor="bg-charcoal-900/95"
        {...register("scheduledMatchTime")}
      />

      {/* Court or club name */}
      <InputText
        type="text"
        placeholder="Court or tennis club name"
        fullWidth
        className="pr-6"
        defaultValue={"TK "}
        backgroundInputColor="bg-charcoal-900/95"
        {...register("courtName")}
      />

      {/* Match format */}
      <Controller
        control={control}
        name="matchFormat"
        defaultValue={3}
        render={({ field }) => (
          <InputRadio
            data={matchFormat}
            value={field.value}
            onChange={field.onChange}
            optionsContainer="border-none"
            direction="vertical"
            radioGroupTitle="Match Format"
            // className="flex items-center justify-center"
          />
        )}
      />

      {/* Surface type */}
      <Controller
        control={control}
        name="surfaceType"
        defaultValue={"clay"}
        render={({ field }) => (
          <InputRadio
            data={surfaceType}
            value={field.value}
            onChange={field.onChange}
            optionsContainer="border-none"
            direction="vertical"
            radioGroupTitle="Surface Type"
            className="flex items-start justify-center"
          />
        )}
      />

      {/* Set length in games */}
      <Controller
        control={control}
        name="setLength"
        defaultValue={6}
        render={({ field }) => (
          <InputSlider
            value={field.value}
            onChange={(value) => field.onChange(value)}
            min={1}
            max={9}
            steps={1}
            showMarks
            mainContainerClassName="col-span-1 pr-6"
            labelIconContainer="text-lg"
            label="Set length (Games)"
            helperIconTooltipId="games-per-set"
            helperIconTooltipText="Determines the number of games needed to win a set. Increasing this number makes sets longer and gives players more time to recover from mistakes."
          />
        )}
      />

      {/* Deciding set tiebreak length */}
      <Controller
        control={control}
        name="matchTiebreakLength"
        defaultValue={7}
        render={({ field }) => (
          <InputSlider
            value={field.value}
            onChange={(value) => field.onChange(value)}
            min={1}
            max={10}
            steps={1}
            showMarks
            mainContainerClassName="col-span-1 pr-6"
            labelIconContainer="text-lg"
            label="Deciding set tiebreak length (Points)"
            helperIconTooltipId="match-tiebreak-length"
            helperIconTooltipText="The number of points required to win the tiebreak that decides the match when sets are tied. "
          />
        )}
      />
    </form>
  );
};

export default CreateChallengeForm;
