import { signIn } from "next-auth/react";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import SignInButton from "./SignInButton";
import Link from "next/link";

const SignInForm: FC = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const { email, password } = data;

      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      console.log(result);
      setIsLoading(false);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-sltae-900 dark:text-slate-400 max-w-sm mx-auto"
    >
      <div className="w-1/2 mx-auto flex flex-col items-center gap-4 mb-4">
        <div className="">
          <label>Email:</label>
          <br />
          <input className="rounded-md py-2 px-2" type="email" {...register("email", { required: true })} />
          {errors.email && <span>Email is required</span>}
        </div>
        <div>
          <label>Password:</label>
          <br />
          <input
            type="password"
            className="py-2 px-2 rounded-md"
            {...register("password", { required: true })}
          />
          {errors.password && <span>Password is required</span>}
        </div>
      </div>
      <div className="text-center">
        <SignInButton onSubmit={() => onSubmit} isLoading={isLoading} />
      </div>
    </form>
  );
};

export default SignInForm;
