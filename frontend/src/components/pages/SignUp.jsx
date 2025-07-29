import React, { useState } from "react";
import catImage from "../../assets/png/cat-image-signup.jpg";
import Input from "../common/Input";
import Button from "../common/Button";
import google from "../../assets/svg/google.svg";
import apple from "../../assets/svg/apple.svg";
import X from "../../assets/svg/X.svg";

const SignUp = () => {
  const [signUpFormData, setSignUpFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <div className="w-full h-[600px] max-w-[1128px] border-2 border-solid border-ds-pink-100 rounded-ds-24 m-auto relative">
      <img
        src={catImage}
        alt="background-image"
        className="rounded-ds-24 w-full h-full object-cover"
      />

      <form className="bg-white flex flex-col gap-ds-12 border-2 border-solid border-ds-pink-100 w-[456px] rounded-ds-16 p-ds-24 absolute left-[40px] top-1/2 -translate-y-1/2 shadow-[-8px_8px_var(--color-ds-pink-100)]">
        <div className="flex flex-col justify-center items-center gap-ds-4">
          <p className="text-2xl font-bold text-ds-brand-primary">Sign Up </p>
          <p className="text-sm font-normal text-ds-gray-200">
            Enter your details to sign up
          </p>
        </div>
        <div className="flex justify-center items-center gap-ds-8">
          <div className="flex justify-center items-center w-[60px] h-[60px] bg-ds-brand-primary rounded-full border-1 border-solid border-ds-brand-primary cursor-pointer">
            <img src={google} alt="google-logo" />
          </div>
          <div className="flex justify-center items-center w-[60px] h-[60px] bg-ds-brand-primary rounded-full border-1 border-solid border-ds-brand-primary cursor-pointer">
            <img src={apple} alt="apple-logo" />
          </div>
          <div className="flex justify-center items-center w-[60px] h-[60px] bg-ds-brand-primary rounded-full border-1 border-solid border-ds-brand-primary cursor-pointer">
            <img src={X} alt="X-logo" />
          </div>
        </div>

        <div className="flex items-center gap-ds-18">
          <div className="flex-1 h-[1px] bg-ds-gray-100"></div>
          <span className="text-sm font-normal text-ds-gray-100">OR</span>
          <div className="flex-1 h-[1px] bg-ds-gray-100"></div>
        </div>
        <div className="flex flex-col gap-ds-12">
          <Input
            label="Email"
            placeholder="Enter your email"
            value={signUpFormData.email}
            onChange={(e) =>
              setSignUpFormData({ ...signUpFormData, email: e.target.value })
            }
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            value={signUpFormData.password}
            onChange={(e) =>
              setSignUpFormData({ ...signUpFormData, password: e.target.value })
            }
          />
          <Input
            label="Confirm Password"
            placeholder="Re-enter your password"
            value={signUpFormData.confirmPassword}
            onChange={(e) =>
              setSignUpFormData({
                ...signUpFormData,
                confirmPassword: e.target.value,
              })
            }
          />
          <div>
            <div className="flex items-center gap-ds-8">
              <input type="checkbox" />
              <p className="text-sm font-normal text-ds-gray-200">
                I agree with
                <span className="text-ds-brand-primary">Terms & Privacy</span>
              </p>
            </div>
          </div>
          <Button className="w-full">Sign Up</Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
