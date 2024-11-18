import { useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import { AppRouter } from "./common/constant/router.constant";
import { useAuthContext } from "./common/context/auth.context";
import { getUserIdLocal } from "./domain/usecase/app.usecase";
import AppLayout from "./presentation/layout/app/AppLayout";

const AppProviders = () => <></>;

function App() {
  const { userId, authDispatch } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userId) {
      const currentUserId = getUserIdLocal();
      if (currentUserId)
        authDispatch({ type: "LOGIN_SUCCESS", payload: currentUserId });
      else navigate(AppRouter.login.route);
    }
  }, []);
  return (
    <>
      <Routes>
        {/* <Route element={<AppProviders />}> */}
        {/* Sử dụng AppProviders */}
        <Route path="" element={<AppLayout />}>
          <Route
            path={AppRouter.conversation.route}
            element={AppRouter.conversation.page}
          />
        </Route>
        {/* <Route
            path={AppRouter.calling.route}
            element={AppRouter.calling.page}
          /> */}
        {/* <Route path="/video" element={<VideoPage />} />
          <Route path="/phone" element={<PhonePage />} /> */}
        {/* </Route> */}
        <Route path={AppRouter.login.route} element={AppRouter.login.page} />
        <Route
          path={AppRouter.register.route}
          element={AppRouter.register.page}
        />
      </Routes>
    </>
  );
}

export default App;
