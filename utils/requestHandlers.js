exports.handleSuccess = ({res, statusCode = 200, data = {}, msg = ''}) => {  
  res.status(statusCode).send({
    success: true,
    message: msg,
    data
  });
};

exports.handleError = ({res, statusCode = 200, data = {}, error = 'Error occurred'}) => {
  console.log(error.message);
  let err = error instanceof Error ? error.message : (error.msg || error);  
  res.status(statusCode).send({
    success: false,
    error: err,
    data
  });
};
