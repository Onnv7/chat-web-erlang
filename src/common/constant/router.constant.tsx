import ConversationPage from "../../presentation/page/conversation/ConversationPage";
import LoginPage from "../../presentation/page/login/LoginPage";
import RegisterPage from "../../presentation/page/register/RegisterPage";

export const AppRouter = {
  login: {
    page: <LoginPage />,
    route: "/login",
  },
  register: {
    page: <RegisterPage />,
    route: "/register",
  },
  conversation: {
    page: <ConversationPage />,
    route: "/conversation",
  },
  home: {
    route: "/home",
  },
};
