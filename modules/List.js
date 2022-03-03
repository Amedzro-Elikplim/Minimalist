const input = (type) => {
  const input = document.createElement('input');
  input.type = type;

  return input;
};

const icon = (name) => {
  const i = document.createElement('i');
  i.className = `${name} icon`;

  return i;
};

// export {
//   input,
//   icon,
// };

module.exports = {input, icon};