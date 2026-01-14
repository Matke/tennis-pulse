import Typography from "@/components/text/Typography";
import { useStepsForm } from "@/features/onboarding/useStepsForm";
import {
  useCallback,
  useMemo,
  type Dispatch,
  type SetStateAction,
} from "react";
import { useDropzone } from "react-dropzone";

// dropzone base style
const baseStyle = {
  width: "110px",
  height: "110px",
  display: "flex",
  borderWidth: 2,
  borderRadius: "50%",
  borderColor: "var(--color-charcoal-600)",
  borderStyle: "dashed",
  color: "var(--color-charcoal-600)",
  outline: "none",
  transition: "border .24s ease-in-out",
  cursor: "pointer",
  background: "transparent",
  overflow: "hidden",
};

// dropzone states
const focusedStyle = {
  borderColor: "var(--color-tp-secondary)",
};

const acceptStyle = {
  borderColor: "var(--color-tp-tertiary)",
};

const rejectStyle = {
  borderColor: "var(--color-tp-warning)",
};

const ProfileImageUploader = ({
  setIsCropModalOpen,
}: {
  setIsCropModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { imageUrl, handleProfileImageSet } = useStepsForm();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (imageUrl) {
        console.log("In revoke");
        URL.revokeObjectURL(imageUrl);
      }

      const file = acceptedFiles[0];
      console.log(file);
      handleProfileImageSet(URL.createObjectURL(file));
      setIsCropModalOpen(true);
    },
    [imageUrl, handleProfileImageSet, setIsCropModalOpen],
  );

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({ accept: { "image/*": [] }, multiple: false, onDrop });

  // dropzone styles
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
      ...(imageUrl
        ? {
            borderStyle: "solid",
            borderColor: "#ffee5300",
          }
        : {}),
    }),
    [isFocused, isDragAccept, isDragReject, imageUrl],
  );

  return (
    <div {...getRootProps({ style })}>
      <input {...getInputProps()} />
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Profile preview"
          className="h-full w-full object-cover"
        />
      ) : (
        <Typography
          variant="label-small"
          className="text-charcoal-600 mx-auto self-center p-4"
        >
          Drop or click to upload image
        </Typography>
      )}
    </div>
  );
};

export default ProfileImageUploader;
