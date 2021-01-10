export const getError = (error) => {
  console.debug({ error }); // remove in production
  return error.data && error.data.errors ? error.data.errors : error;
};
