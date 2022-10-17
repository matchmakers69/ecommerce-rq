export const errorMessage = (error: unknown) => {
  const title =
    error instanceof Error
      ? error.message
      : "error connecting to server message";

  return title;
};
