import { EnvelopeSimple, LockKey } from "phosphor-react";
import ImgLogin from "../assets/innovation-animate.svg"

function LoginPage() {
  return (
    <div className="w-full h-screen flex">
      <div className="bg-linear-65 from-purple-700 to-pink-500 w-1/2 h-full flex items-center justify-center flex-col text-white" name="esquerda">
        <img src={ImgLogin} alt="Imagem de Login." className="w-[350px]" />
        <h1 className="text-3xl font-bold mb-4">Secure Login Portal.</h1>

        <p className="text-center">Acess your dashboard securely with our procted login <br /> system. Your data is encrypted and secure.
        </p>
      </div>
      <div className="bg-white w-1/2 h-full text-center flex flex-col justify-center items-center gap-4 " name="direita">
        <h1 className="text-3xl font-bold">Welcome back!</h1>
        <p className="text-gray-500">Enter your details to sign in to your account</p>


        <form className="w-full flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col text-left w-3/5">
            <label htmlFor="email">Email</label>
            <label htmlFor className="border-2 flex items-center border-gray-300 px-4 py-1 gap-3 rounded-md  focus-within:border-blue-600">
              <EnvelopeSimple size={20}
                className="text-gray-400" />
              <input
                type="email"
                name="Email"
                id="email"
                className="outline-none"
                placeholder="name@example.com"
              />
            </label>
          </div>

          <div className="flex flex-col text-left w-3/5">
             <label htmlFor="password">Password</label>
            <label htmlFor className="flex items-center border-2 border-gray-300 px-4 py-1 gap-3 rounded-md focus-within:border-blue-600">
              <LockKey size={20}
                className="text-gray-400" />
              <input
                type="password"
                name="Password"
                id="password"
                className="outline-none"
                placeholder="********"
              />
            </label>
          </div>

          <button className="text-white bg-linear-65 from-pink-500 to-purple-700 w-3/5 py-2 rounded-md cursor-pointer hover:transition-all hover:transform hover:scale-105 duration-500">SIGN IN</button>
        
        </form>
      </div>
    </div>
  );
}

export default LoginPage;