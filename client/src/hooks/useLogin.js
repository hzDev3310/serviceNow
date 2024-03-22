import { usePost } from "../apis";
import { useLog, useUserID } from "../store";

const useLogin = (phoneNumber, password, code) => {
  const { postData, loading, error, responseData } = usePost();
  const { id, setId } = useUserID();
  const { seLogin} = useLog();
  const handleLogin = async () => {
    await postData("/auth/login", { phoneNumber, password });
    setId(responseData.userId);
    id != "" && seLogin();
  };
  return {
    responseData,
    handleLogin,
    loading,
    error: responseData?.message || error?.message||null
  };
};

export default useLogin;
