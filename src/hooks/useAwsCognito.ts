// import useSnackbar from "./useSnackbar";
// import { useTranslation } from "react-i18next";
// import { AWS_ERROR } from "config/aws/errors/awsSubissionError";
// import {
//   awsRequestValidationCode,
//   awsResetPassword,
// } from "components/auth/aws/AwsForgotPasswordPanel/service/awsForgotPassword";
// import { useNavigate } from "react-router-dom";
// import constants from "../constants";

// type Mode = "signIn" | "codeRequest" | "passwordReset";
// type Input = {
//   mode: Mode;
// };

// const useAmplifyCognito = ({ mode }: Input) => {
//   const { snackSuccess, snackError } = useSnackbar();
//   const { t } = useTranslation();
//   const navigate = useNavigate();

//   // const handleSignIn = () => {};

//   const handleCodeRequest = async (email: string) => {
//     await awsRequestValidationCode(email);
//     // onForgotPasswordSubmitEmail(email); //to jest jako prop
//   };

//   const handleResetPassword = async (
//     email: string,
//     validationCode: string,
//     password: string
//   ) => {
//     await awsResetPassword(email, validationCode, password);
//     snackSuccess(t("forgotPassword.resetPasswordSubmitSuccess"));
//     navigate(constants.routes.HOME);
//   };

//   const handler = () => {
//     try {
//     } catch (error) {
//       console.error(error);
//       const forgotPasswordTranslationError = t(
//         "forgotPassword.resetPasswordSubmitError"
//       );
//       if (error instanceof Error && error.name in AWS_ERROR) {
//         snackError(t(AWS_ERROR[error.name]));
//       } else {
//         snackError(forgotPasswordTranslationError);
//       }
//     }
//   };

//   return handler;
// };

// export default useAmplifyCognito;
