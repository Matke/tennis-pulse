import router from "@/router";

// Router
import { RouterProvider } from "react-router";

// Toaster
import ToastProvider from "@/utils/ToastProvider";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastProvider />
    </div>
  );
}

export default App;
