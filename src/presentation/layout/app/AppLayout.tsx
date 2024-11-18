import { Outlet } from "react-router-dom";
import SideMenuComponent from "./components/SideMenuComponent";

const AppLayout = () => {
  console.log("Appplayout");
  return (
    <>
      {/* <SocketProvider>
       <PeerProvider> */}

      <div className="h-[100vh] w-[100vw] bg-gray-200">
        <div className="flex size-full flex-row gap-2">
          <SideMenuComponent className="" />
          <div className="grow p-2">
            <Outlet />
          </div>
          {/* <BannerSubscribeComponent /> */}
        </div>
        <div></div>
      </div>
      {/* </PeerProvider>
    </SocketProvider> */}
    </>
  );
};

export default AppLayout;
