
export function titleString(string) {
  let newString = string.replace(/_/g, ' ');
  return newString.split(' ')
     .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
     .join(' ')
}

export function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}