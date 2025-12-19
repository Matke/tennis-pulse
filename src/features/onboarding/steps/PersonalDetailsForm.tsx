// components
import InputRadio from "@/components/inputs/InputRadio";
import InputText from "@/components/inputs/InputText";
import { useState } from "react";
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
  const [selectedRadio, setSelectedRadio] = useState("male");

  // add react hook form
  return (
    <form className="grid grid-cols-2 gap-9">
      <InputText
        type="text"
        placeholder="Username"
        className=""
        fullWidth
        backgroundInputColor="bg-tp-card-back"
      />
      {/* TODO: Change with input profile  */}
      {/* upload image component */}
      <div className="text-tp-typography row-span-2 flex items-center justify-center">
        <BsPersonCircle className="text-charcoal-800 h-30 w-30" />
      </div>
      <InputRadio
        data={genderOptions}
        value={selectedRadio}
        onChange={setSelectedRadio}
      />
      <InputText
        type="text"
        placeholder="First name"
        fullWidth
        className="col-span-2"
        backgroundInputColor="bg-tp-card-back"
      />
      <InputText
        type="text"
        placeholder="Last Name"
        fullWidth
        className="col-span-2"
        backgroundInputColor="bg-tp-card-back"
      />
    </form>
  );
};

export default PersonalDetailsForm;
