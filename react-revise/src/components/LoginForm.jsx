import React from "react";
import { useForm } from "react-hook-form";

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
    <form className="text-slate-100" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="text-slate-100">First Name</label>
        <input {...register("firstName")} />
      </div>
      <div>
        <label className="text-slate-50">Last Name</label>
        <input {...register("lastName")} />
      </div>
      <input type="submit" />
    </form>
    </>
  );
}

export default LoginForm;
