import InputText from "@/components/inputs/InputText";
import { BsPersonCircle } from "react-icons/bs";

const PersonalDetailsForm = () => {
  // add react hook form
  return (
    <form className="grid grid-cols-2 gap-10">
      <InputText
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
        placeholder="Last Name"
        fullWidth
        backgroundInputColor="bg-tp-card-back"
      />
      <InputText
        placeholder="Username"
        className="col-span-2"
        fullWidth
        backgroundInputColor="bg-tp-card-back"
      />
      <InputText
        placeholder="Date of birth"
        className="col-span-2"
        fullWidth
        backgroundInputColor="bg-tp-card-back"
      />
    </form>
  );
};

export default PersonalDetailsForm;
