import { usePost } from "../apis";
import { useUserID } from "../store";

const useLogin = (phoneNumber, password, code) => {
  const { postData, loading, error, responseData } = usePost();
  const {  setId } = useUserID();
  const handleLogin = async () => {
    await postData("/auth/login", { phoneNumber, password });
    setId(responseData.userId);
  };
  return {
    handleLogin,
    loading,
    error: responseData?.message || error,
  };
};

export default useLogin;
