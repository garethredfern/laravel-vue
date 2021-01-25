export const getError = (error) => {
  if (!error.response) {
    console.error(`API ${error.config.url} not found`);
  }
  if (error.response && process.env.NODE_ENV === "development") {
    console.error(error.response.data);
    console.error(error.response.status);
    console.error(error.response.headers);
  }
  if (error.response.data && error.response.data.errors) {
    return error.response.data.errors;
  }
  return "API Error, please try again.";
};
