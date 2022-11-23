import { InputAdornment, Button, FormControl, Box } from "@mui/material";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import TextInput from "components/ui/FormParts/ReactHookFormFields/TextInput";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { searchFormSchema } from "utils/validation/searchFormSchema";
import { useContext, useEffect } from "react";
import { SearchContext } from "context/SearchContext";
import { useNavigate } from "react-router-dom";
import * as S from "./SearchForm.styled";
import constants from "../../../../constants";

type SearchInputType = Pick<
  Yup.InferType<typeof searchFormSchema>,
  "filterValue"
>;

const SearchForm = () => {
  const { handleUpdateFilterValue } = useContext(SearchContext);
  const navigate = useNavigate();
  const methods = useForm<SearchInputType>({
    mode: "onChange",
    resolver: yupResolver(searchFormSchema),
  });

  const {
    handleSubmit,
    reset,
    register,
    formState: { isValid, isSubmitting, isSubmitSuccessful },
  } = methods;

  useEffect(reset, [isSubmitSuccessful, reset]);
  const handleSearchSubmit: SubmitHandler<SearchInputType> = ({
    filterValue,
  }) => {
    handleUpdateFilterValue(filterValue);
    navigate(`${constants.routes.SEARCH_PAGE}`);
  };

  return (
    <FormProvider {...methods}>
      <S.SearchFormWrapper>
        <Box
          component="form"
          autoComplete="off"
          onSubmit={handleSubmit(handleSearchSubmit)}
          width="100%"
        >
          <FormControl variant="outlined" fullWidth>
            <S.OutlinedInputWrapper
              type="text"
              placeholder="Search products here..."
              {...register("filterValue")}
              endAdornment={
                <InputAdornment position="end">
                  <Button
                    disabled={!isValid || isSubmitting}
                    type="submit"
                    variant="contained"
                    size="large"
                  >
                    Search
                  </Button>
                </InputAdornment>
              }
              startAdornment={
                <InputAdornment position="start">
                  <SearchTwoToneIcon fontSize="large" color="primary" />
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
      </S.SearchFormWrapper>
    </FormProvider>
  );
};

export default SearchForm;
