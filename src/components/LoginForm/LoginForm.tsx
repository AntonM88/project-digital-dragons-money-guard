import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import { loginFormSchema } from "../../schema/schema";
import { Icon } from "../Icon/Icon";

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({ resolver: yupResolver(loginFormSchema) });

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="wrapper">
      <div>
        <Icon name="logo" />
        <p>Money Guard</p>
      </div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input
            {...register("email", { required: true })}
            placeholder="E-mail"
          />
        </label>
        <label>
          <input
            {...register("password", { required: true })}
            placeholder="Password"
          />
        </label>
        <button type="submit">LOG IN</button>
        <Link to="/register">REGISTER</Link>
      </form>
    </div>
  );
};

export default LoginForm;
