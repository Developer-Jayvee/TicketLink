import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import RouterPaths from "./app/router";

const queryClient = new QueryClient();
export default function App() {
  return (
    <> 
      <QueryClientProvider client={queryClient}>
        <RouterPaths/>
      </QueryClientProvider>
    </>
  );
}
