export const getError = (error) => {
  if (process.env.NODE_ENV === "development") {
    console.debug({ error });
  }
  return error.response && error.response.data.errors
    ? error.response.data.errors
    : error;
};
