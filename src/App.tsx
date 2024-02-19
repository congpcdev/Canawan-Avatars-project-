import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { AppRoutes } from "./routing/app-route";

const queryClient = new QueryClient();
const App = () => {
  // const handleChangeOptions = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setOptions((prev: OptionsAvatar) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
};

export default App;
