import ModalBase from "@/components/modals/ModalBase";

// icons
import { IoMdInformationCircle } from "react-icons/io";

export type ConfirmationProps = {
  title: string;
  description?: string;
  openModal: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
  onClose: () => void;
  onConfirm: () => void;
};

const ConfirmationModal = ({
  title,
  description,
  openModal,
  isLoading,
  icon = <IoMdInformationCircle className="h-10 w-10" />,
  onClose,
  onConfirm, // pass it from parent
}: ConfirmationProps) => {
  return (
    <ModalBase
      title={title}
      description={description}
      open={openModal}
      onClose={onClose}
      icon={icon}
      buttons={[
        {
          label: "Yes",
          themeColor: "tertiary",
          buttonSize: "base",
          className: "w-full",
          isLoading: isLoading,
          onClick: onConfirm,
        },
        {
          label: "No",
          themeColor: "warning",
          buttonSize: "base",
          className: "w-full",
          onClick: onClose,
        },
      ]}
    />
  );
};

export default ConfirmationModal;
