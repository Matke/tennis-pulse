// Toaster
import ToastProvider from "@/utils/ToastProvider";

// flags styles
import "/node_modules/flag-icons/css/flag-icons.min.css";

// router
import AppRouter from "@/Router";

// tanstack query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <AppRouter />

        <ToastProvider />
      </QueryClientProvider>
    </div>
  );
}

export default App;
