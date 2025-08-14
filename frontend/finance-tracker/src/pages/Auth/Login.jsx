import React from "react"
import AuthLayouts from "../../components/Layouts/AuthLayouts";  

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {

  }

  return (
    <AuthLayouts>
        <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
            <h3 className="text-xl font-semibold">Welcome Back!</h3>
            <p className="text-xs">
              Please enter your credentials to Log In.
            </p>

            <form onSubmit={handleLogin}>
              <Input
                value={email}
                onChange={({target}) => setEmail(target.value)}
                label="Email Address"
                placeholder="youremail@example.com"
                type="text"
              />
            </form>
        </div>
    </AuthLayouts>
  )
}

export default Login