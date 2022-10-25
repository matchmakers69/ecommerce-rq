// import NotFound from "components/NotFound";
// import HeywoodFooter from "components/ui/footers/HeywoodFooter";
// import FloatingFooterContainer from "components/ui/footers/FloatingFooterContainer";
// import CurrencyStepperSlider from "components/ui/CurrencyStepperSlider";
// import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
// import { Box } from "@mui/system";
// import Button from "components/ui/buttons/Button";

// type NotFoundPageProps = {
//   hasHeywoodFooter?: boolean;
// };

// enum InputNames {
//   RETIREMENT_AGE = "retirementAge",
//   LUMP_SUM = "lumpSum",
// }

// type FormValues = Record<InputNames, string | number>;
// // type FormValues = {
// //   [key in InputNames]: string | number;
// // };

// const NotFoundPage = ({ hasHeywoodFooter }: NotFoundPageProps) => {
//   const methods = useForm<FormValues>();

//   const handleSliderData: SubmitHandler<FormValues> = (data) => {
//     const { lumpSum, retirementAge } = data;
//     // eslint-disable-next-line no-console
//     console.log(+lumpSum, +retirementAge);
//   };
//   if (hasHeywoodFooter) {
//     return (
//       <>
//         <NotFound />
//         <FloatingFooterContainer>
//           <HeywoodFooter />
//         </FloatingFooterContainer>
//       </>
//     );
//   }

//   return (
//     <>
//       <FormProvider {...methods}>
//         <Box
//           autoComplete="off"
//           onSubmit={methods.handleSubmit(handleSliderData)}
//           component="form"
//         >
//           <Box mb={3}>
//             <CurrencyStepperSlider
//               inputType="number"
//               label="Retirement age"
//               defaultValue={60}
//               name={InputNames.RETIREMENT_AGE}
//               stepValue={1}
//             />
//           </Box>
//           <Box>
//             <CurrencyStepperSlider
//               inputType="currency"
//               isCurrencyField
//               label="Lump sum"
//               defaultValue={30}
//               name={InputNames.LUMP_SUM}
//               stepValue={0.01}
//             />
//           </Box>
//           <Button type="submit">Send</Button>
//         </Box>
//       </FormProvider>
//       <NotFound />
//     </>
//   );
// };

// export default NotFoundPage;
