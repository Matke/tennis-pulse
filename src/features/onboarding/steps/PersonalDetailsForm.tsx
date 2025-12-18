import InputText from "@/components/inputs/InputText";
import PulseLogo from "@/components/ui/PulseLogo";

const PersonalDetailsForm = () => {
  return (
    <div className="grid grid-cols-2 gap-10">
      <InputText
        placeholder="First name"
        fullWidth
        backgroundInputColor="bg-tp-card-back"
      />
      <div className="text-tp-typography row-span-2 flex items-center justify-center">
        Profile Image
      </div>
      <InputText
        placeholder="Last Name"
        fullWidth
        backgroundInputColor="bg-tp-card-back"
      />
      {/* upload image component */}
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
    </div>
  );
};

export default PersonalDetailsForm;
