import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Введіть коректний email")
    .required("Email є обов'язковим полем"),
  password: yup
    .string()
    .required("Пароль є обов'язковим полем")
    .min(6, "Пароль повинен містити щонайменше 6 символів")
    .max(12, "Пароль повинен містити не більше 12 символів"),
});
