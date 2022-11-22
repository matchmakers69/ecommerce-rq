import { Box, Button } from "@mui/material";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInput from "components/ui/FormParts/ReactHookFormFields/TextInput";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { searchFormSchema } from "utils/validation/searchFormSchema";
import { useContext, useEffect } from "react";
import { SearchContext } from "context/SearchContext";

type SearchInputType = Pick<
  Yup.InferType<typeof searchFormSchema>,
  "filterValue"
>;

const SearchForm = () => {
  const { handleUpdateFilterValue } = useContext(SearchContext);
  const methods = useForm<SearchInputType>({
    mode: "onChange",
    resolver: yupResolver(searchFormSchema),
  });

  const {
    handleSubmit,
    reset,
    formState: { isValid, isSubmitting, isSubmitSuccessful },
  } = methods;

  useEffect(reset, [isSubmitSuccessful, reset]);
  const handleSearchSubmit: SubmitHandler<SearchInputType> = ({
    filterValue,
  }) => {
    handleUpdateFilterValue(filterValue);
  };

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit(handleSearchSubmit)}
        display="flex"
        alignItems="baseline"
        maxWidth="250px"
        minWidth="180px"
      >
        <Box height="45px" display="flex" flexDirection="column">
          <TextInput
            variant="standard"
            type="text"
            label="Start seach here"
            name="filterValue"
            placeholder="eg. laptop"
            fullWidth
          />
        </Box>
        <Box height="45px" display="flex" flexDirection="column">
          <Button
            disabled={!isValid || isSubmitting}
            type="submit"
            variant="contained"
          >
            Search
          </Button>
        </Box>
      </Box>
    </FormProvider>
  );
};

export default SearchForm;
