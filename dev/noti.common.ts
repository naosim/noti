interface Response {
  result: {status: string; error_message: string};
  data: any;
}


interface CallbackResult<S, F> {
  onSuccess:(S)=>void;
  onFailure:(F)=>void;
}

interface Common {
  createSuccessMessage: (data: any) => Response;
  createFailureMessage: (status: string, error_message: string) => Response;
}

exports.createSuccessMessage = (data: any): Response => {
  return {
    result: {
      status: 'ok',
      error_message: null
    },
    data: data
  };
};

exports.createFailureMessage = (status: string, error_message: string): Response => {
  return {
    result: {
      status: status,
      error_message: error_message
    },
    data: null
  };
};
