import router from "@/router";

// Router
import { RouterProvider } from "react-router";

// Toaster
import ToastProvider from "@/utils/ToastProvider";

// flags
import "/node_modules/flag-icons/css/flag-icons.min.css";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastProvider />
    </div>
  );
}

export default App;
