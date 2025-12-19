import { useState } from "react";
// components
import InputText from "@/components/inputs/InputText";
import Textarea from "@/components/inputs/Textarea";
import ReactFlagsSelect from "react-flags-select";
import InputDate from "@/components/inputs/InputDate";

const PlayerBackgroundForm = () => {
  const [selected, setSelected] = useState("RS");

  return (
    <form className="grid grid-cols-2 gap-8">
      <ReactFlagsSelect
        selected={selected}
        onSelect={(code) => setSelected(code)}
        placeholder="Select a language"
        className="col-span-2 mt-6"
        selectButtonClassName="!text-white !border !border-charcoal-600 !ring-charcoal-600 !outline-none"
        searchPlaceholder="Search your country"
        searchable
      />
      <InputDate
        type="date"
        placeholder="Date of birth"
        fullWidth
        className="col-span-2"
        backgroundInputColor="bg-tp-card-back"
      />
      <InputText
        type="number"
        placeholder="Height"
        fullWidth
        backgroundInputColor="bg-tp-card-back"
        // removes default input type number spin button
        inputClass="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none appearance-none"
      />
      <InputText
        type="number"
        placeholder="Weight"
        className=""
        fullWidth
        backgroundInputColor="bg-tp-card-back"
        // removes default input type number spin button
        inputClass="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none appearance-none"
      />
      <Textarea
        placeholder="Biography"
        className="col-span-2"
        fullWidth
        disableResize
        cols={3}
        rows={3}
        backgroundInputColor="bg-tp-card-back"
      />
    </form>
  );
};

export default PlayerBackgroundForm;
