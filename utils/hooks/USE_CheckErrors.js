import React from 'react';

const useCheckErrors = (inputText, setInputText) => {
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
    if (
      inputText &&
      inputText.length > 15 &&
      errorIndex <= errorMessages.length - 1
    ) {
      setInputText(errorMessages[errorIndex]);
    } else {
      setErrorIndex(-1);
      setInputText('');
    }
  }, [errorIndex]);
};

export default useCheckErrors;
