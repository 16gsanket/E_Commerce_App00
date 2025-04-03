import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Features/app/store";
import AppLayout from "./ui/AppLayout";
import SignIn from "./Pages/SignIn";
import Error from "./ui/Error";
import { SidebarProvider } from "./context/SidebarProvider ";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";

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
        element: <Home />,
      },
      {
        path: "/product/:productId",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
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
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </SidebarProvider>
  );
}

export default App;
