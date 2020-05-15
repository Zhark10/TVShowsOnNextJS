import React from 'react';

const useCheckErrors = inputText => {
  const [errorIndex, setErrorIndex] = React.useState(-1);
  const errorMessages = [
    'F#CK! Too many letters!',
    'Don`t do this anymore please!',
  ];

  React.useEffect(() => {
    if (inputText && inputText.length > 15) {
      const timeout = setTimeout(() => {
        setErrorIndex(current => current + 1);
      }, 2000);
      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [inputText]);

  React.useEffect(() => {
    if (errorIndex <= errorMessages.length - 1) {
      setErrorIndex(-1);
    }
  }, [errorIndex]);

  return errorMessages[errorIndex];
};

export default useCheckErrors;
