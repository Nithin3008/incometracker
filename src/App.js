import AllReports from "./pages/AllReports";
import Expense from "./pages/Expense";
import Income from "./pages/Income";
import Savings from "./pages/Savings";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Welcome from "./pages/Welcome";
function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout></AppLayout>,
      children: [
        {
          path: "/",
          element: <Welcome></Welcome>,
        },
        {
          path: "/income",
          element: <Income></Income>,
        },
        { path: "/savings", element: <Savings></Savings> },
        { path: "/expense", element: <Expense></Expense> },
        {
          path: "/Allreports",
          element: <AllReports></AllReports>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
