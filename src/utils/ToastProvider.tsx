import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      position="top-center"
      gutter={12}
      containerStyle={{ margin: "8px" }}
      toastOptions={{
        success: {
          duration: 3000,
          iconTheme: {
            primary: "var(--color-tp-tertiary)",
            secondary: "",
          },
        },
        error: {
          duration: 5000,
          iconTheme: {
            primary: "var(--color-tp-warning)",
            secondary: "",
          },
        },
        style: {
          fontSize: "16px",
          maxWidth: "500px",
          padding: "16px 24px",
          backgroundColor: "var(--color-tp-primary)",
          color: "var(--color-tp-typography-secondary)",
          border: "2px solid var(--color-tp-typography-secondary)",
        },
      }}
    />
  );
};

export default ToastProvider;
