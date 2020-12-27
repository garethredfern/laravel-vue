export const getError = (error) => {
  console.debug({ error });
  return error.response.data.errors ? error.response.data.errors : error;
};
