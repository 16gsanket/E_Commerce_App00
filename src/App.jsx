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
import { FilterContextProvider } from "./context/FilterContextProvider";
import CreateOrder from "./Pages/CreateOrder";
import OrderPlaced from "./Pages/OrderPlaced";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Privacy from "./Pages/Privacy";

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
      {
        path: "/order/new",
        element: <CreateOrder />
      },
      {
        path:'/order-placed',
        element:<OrderPlaced />
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path:'/contact',
        element:<Contact />
      },
      {
        path:'/privacy',
        element:<Privacy />
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
    ],
  },
]);

function App() {
  return (
    <SidebarProvider>
      <FilterContextProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </FilterContextProvider>
    </SidebarProvider>
  );
}

export default App;
