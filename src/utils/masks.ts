const Masks = {
  validThru: [/\d/, /\d/, '/', /\d/, /\d/],
  card: [
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    [/\d/],
    [/\d/],
    [/\d/],
    [/\d/],
    ' ',
    [/\d/],
    [/\d/],
    [/\d/],
    [/\d/],
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ],
  phone: [
    '(',
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ],
};

export default Masks;
