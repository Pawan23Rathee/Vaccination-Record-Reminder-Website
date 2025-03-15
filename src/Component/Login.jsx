import { signInWithGoogle } from "../firebase";

const Login = ({ setUser }) => {
  const handleLogin = async () => {
    const user = await signInWithGoogle();
    setUser(user);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-blue-600 transition"
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
