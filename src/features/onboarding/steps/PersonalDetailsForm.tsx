// components
import InputDate from "@/components/inputs/InputDate";
import InputText from "@/components/inputs/InputText";
// icons
import { BsPersonCircle } from "react-icons/bs";

const PersonalDetailsForm = () => {
  // add react hook form
  return (
    <form className="grid grid-cols-2 gap-10">
      <InputText
        type="text"
        placeholder="First name"
        fullWidth
        backgroundInputColor="bg-tp-card-back"
      />
      {/* TODO: Change with input profile  */}
      {/* upload image component */}
      <div className="text-tp-typography row-span-2 flex items-center justify-center">
        <BsPersonCircle className="text-charcoal-800 h-30 w-30" />
      </div>
      <InputText
        type="text"
        placeholder="Last Name"
        fullWidth
        backgroundInputColor="bg-tp-card-back"
      />
      <InputText
        type="text"
        placeholder="Username"
        fullWidth
        className="col-span-2"
        backgroundInputColor="bg-tp-card-back"
      />
      <InputDate
        type="date"
        placeholder="Date of birth"
        fullWidth
        className="col-span-2"
        backgroundInputColor="bg-tp-card-back"
      />
    </form>
  );
};

export default PersonalDetailsForm;
