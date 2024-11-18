import { createContext, useContext, useReducer } from "react";

import { AuthState, AuthAction, AuthReducer } from "./auth.reducer";

let userData = null;
if (localStorage.getItem("user") !== "undefined") {
  userData = JSON.parse(localStorage.getItem("user-id")!);
}
const INITIAL_STATE: AuthState = {
  userId: userData,
};

type AuthContextType = {
  userId: number | null;
  username: string | null;
  authDispatch: React.Dispatch<AuthAction>;
  isAuthenticated: () => boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  //   const [profile, setProfile] = useState<UserProfileEntity | null>(null);

  const isAuthenticated = () => {
    if (state.userId) {
      return true;
    }
    return false;
  };

  //   useEffect(() => {
  //     const loadingData = async () => {
  //       if (state.userId) {
  //         try {
  //           const userProfile = await profileRepository.getUserProfile(
  //             state.userId
  //           );
  //           setProfile(userProfile);
  //         } catch (err) {
  //           dispatch({ type: "LOGIN_FAILURE" });
  //         }
  //       } else {
  //         authRepository.clearCredentials();
  //       }
  //     };
  //     loadingData();
  //   }, [state.userId]);

  return (
    <AuthContext.Provider
      value={{
        userId: state.userId,
        username: "asdas",
        authDispatch: dispatch,
        isAuthenticated,
        // profile: profile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
