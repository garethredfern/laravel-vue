export const getError = (error) => {
  console.debug({ error });
  return error.data.errors ? error.data.errors : error;
};
