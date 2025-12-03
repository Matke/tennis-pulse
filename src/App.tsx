// Toaster
import ToastProvider from "@/utils/ToastProvider";

// flags
import "/node_modules/flag-icons/css/flag-icons.min.css";
import AppRouter from "@/Router";

function App() {
  return (
    <div>
      <AppRouter />

      <ToastProvider />
    </div>
  );
}

export default App;
