import { useContext, useState } from "react";
import axios from "@/utils/axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthContext";
import { useToast } from '@chakra-ui/react'

const AuthProvider = ({ children }: any) => {
  const toast = useToast()
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(localStorage.getItem('access-token'));

  const register = async (data: any) => {
    try {
      const res = await axios.post("/api/register", {
        ...data,
      });
      if (res.data) {
        toast({
          title: 'Register',
          description: res.data.message,
          status: 'success',
          position: 'top-right',
          duration: 3000,
          isClosable: true,
        })
        navigate("/sign-in");
        return;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const loginAuth = async (data: any) => {
    try {
      const res = await axios.post("/api/login", {
        ...data,
      });
      if (res.data !== undefined) {
        localStorage.setItem('access-token', res.data.data.token);
        setAccessToken(res.data.data.token)
        navigate("/");
        return;
      }
    } catch (e) {
        setAccessToken(null)
        console.log(e);
    }
  };

  const logoutAuth = async () => {
    try {
      localStorage.removeItem("access-token")
      setAccessToken(null)
      navigate("/sign-in");
      return;
    } catch (e) {
      setAccessToken(null)
      console.log(e);
    }
  };

  return (
    <AuthContext.Provider value={{ accessToken, register, loginAuth, logoutAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};