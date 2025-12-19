import InputRadio from "@/components/inputs/InputRadio";
import InputSelect, {
  type InputSelectOption,
} from "@/components/inputs/InputSelect";
import InputText from "@/components/inputs/InputText";
import { useState } from "react";

const skillLevelOptions: InputSelectOption[] = [
  { label: "1.0", value: 1.0 },
  { label: "2.0", value: 2.0 },
  { label: "3.0", value: 3.0 },
  { label: "4.0", value: 4.0 },
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

const backhandTypeOptions: InputSelectOption[] = [
  { label: "One-handed", value: "one-h" },
  { label: "Two-handed", value: "two-h" },
  { label: "Slice", value: "slice" },
];

const forehandTypeOptions: InputSelectOption[] = [
  { label: "Flat", value: "flat" },
  { label: "Topspin", value: "topspin" },
  { label: "Moonball", value: "moonball" },
];

const PlayStyleForm = () => {
  const [backhandType, setBackhandType] = useState<string | "">("");
  const [forehandType, setForehandType] = useState<string | "">("");
  const [skillLevel, setSkillLevel] = useState<number | "">("");
  const [selectedRadio, setSelectedRadio] = useState("right");

  return (
    <form className="grid grid-cols-2 gap-8">
      <InputRadio
        data={dominantHandOptions}
        value={selectedRadio}
        onChange={setSelectedRadio}
        optionsContainer="border-none"
        direction="vertical"
      />
      <InputText
        type="text"
        placeholder="Racket"
        className="col-span-1"
        fullWidth
        backgroundInputColor="bg-tp-card-back"
      />
      <InputSelect
        id="backhandType"
        name="backhandType"
        label="Backhand type"
        options={backhandTypeOptions}
        value={backhandType}
        className="col-span-1 w-full"
        onChange={(e) => setBackhandType(e.target.value)}
        floatingLabelBackground="bg-tp-card-back"
        error=""
      />
      <InputSelect
        id="forehandType"
        name="forehandType"
        label="Forehand type"
        options={forehandTypeOptions}
        value={forehandType}
        className="col-span-1 w-full"
        onChange={(e) => setForehandType(e.target.value)}
        floatingLabelBackground="bg-tp-card-back"
        error=""
      />
      <InputSelect
        id="skillLevel"
        name="skillLevel"
        label="Skill Level"
        options={skillLevelOptions}
        value={skillLevel}
        className="col-span-2 w-full"
        onChange={(e) => setSkillLevel(Number(e.target.value))}
        floatingLabelBackground="bg-tp-card-back"
        error=""
      />
    </form>
  );
};

export default PlayStyleForm;
