
export const obfs = s => {
  const ttc = t => t.split('').map(c => c.charCodeAt(0));
  const bh = n => ('0' + Number(n).toString(16)).substr(-2);
  const atc = c => ttc(s).reduce((a,b) => a ^ b, c);

  return t => t.split('')
    .map(ttc)
    .map(atc)
    .map(bh)
    .join('');
};
  
export const unobfs = s => {
  const ttc = t => t.split('').map(c => c.charCodeAt(0));
  const atc = c => ttc(s).reduce((a,b) => a ^ b, c);
  return e => e.match(/.{1,2}/g)
    .map(hex => parseInt(hex, 16))
    .map(atc)
    .map(charCode => String.fromCharCode(charCode))
    .join('');
};

export const functin = 'function';