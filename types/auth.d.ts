export declare namespace Auth {
  type SignUpForm = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  type SignInForm = Pick<SignUpForm, "email" | "password">;

  type ForgetPasswordForm = Pick<SignInForm, "email">;
}
