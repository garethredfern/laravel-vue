export const getError = (error) => {
  console.debug({ error }); // remove in production
  return error.response && error.response.data.errors
    ? error.response.data.errors
    : error;
};
