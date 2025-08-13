import React from "react"
import AuthLayouts from "../../components/Layouts/AuthLayouts";  

const Login = () => {
  return (
    <AuthLayouts>
        <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
            <h3 className="text-xl font-semibold">Welcome Back!</h3>
            <p className="text-xs">Please enter your credentials to Log In.</p>
        </div>
    </AuthLayouts>
  )
}

export default Login