import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";
import Sidebar from "../Components/Sidebar";

function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div className="relative">
      <div className="grid h-screen grid-rows-[auto_1fr_auto] w-[100dvw] max-w-[1400px] relative">
        {isLoading && <Loader />}
        {/* {true && <Loader />} */}
        <Header />

        <div className="overflow-auto">
          <main className=" h-[91dvh] w-full overflow-x-hidden">
            <Outlet />
          </main>
        </div>

        {/* <CartOverview /> */}
      </div>
     <Sidebar />
    </div>
  );
}

export default AppLayout;
