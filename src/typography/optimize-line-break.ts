const optimizeLineBreak = (str: string): string => {
  const tokens = str.split(' ');

  if (tokens.length < 3) {
    return str;
  }

  const lastToken = tokens.pop();

  return `${tokens.join(' ')}\u00A0${lastToken}`;
};

export default optimizeLineBreak;
