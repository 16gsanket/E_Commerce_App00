import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import SignIn from "./Pages/SignIn";
import Error from "./ui/Error";
import { SidebarProvider } from "./context/SidebarProvider ";
import Home from "./Pages/Home";
import Product from "./Pages/Product";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <SignIn />,
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path:"/product/:productId",
        element:<Product />,
      }
      // {
      //   path: "/order/:orderId",
      //   element: <Order />,
      //   loader:OrderLoader,
      //   errorElement:<Error/>,
      //   action:UpdatePriorityAction
      // },
      // {
      //   path: "/menu",
      //   element: <Menu />,
      //   errorElement: <Error />,
      //   loader: MenuLoader,
      // },
      // {
      //   path: "/cart",
      //   element: <Cart />,
      // },
      // {
      //   path: "/order/new",
      //   element: <CreateOrder />,
      //   action:CreateOrderAction
      // },
    ],
  },
]);

function App() {
  return (
    <SidebarProvider>
      <RouterProvider router={router} />
    </SidebarProvider>
  );
}

export default App;
