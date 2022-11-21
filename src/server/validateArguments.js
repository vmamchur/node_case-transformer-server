const availableCases = ['SNAKE', 'KEBAB', 'CAMEL', 'PASCAL', 'UPPER'];

const validateArguments = (args) => {
  const { text, toCase } = args;
  const errors = [];

  if (!text.length) {
    errors.push({
      message: 'Text to convert is required. '
        + 'Correct request is: "/<TEXT_TO_CONVERT>?toCase=<CASE_NAME>".',
    });
  }

  if (!toCase) {
    errors.push({
      message: '"toCase" query param is required. '
        + 'Correct request is: "/<TEXT_TO_CONVERT>?toCase=<CASE_NAME>".',
    });
  } else if (!availableCases.includes(toCase)) {
    errors.push({
      message: 'This case is not supported. '
        + 'Available cases: SNAKE, KEBAB, CAMEL, PASCAL, UPPER.',
    });
  }

  if (errors.length) {
    const error = new Error('Validation errors');

    error.errors = errors;

    throw error;
  }

  return {
    text,
    toCase,
  };
};

module.exports = { validateArguments };