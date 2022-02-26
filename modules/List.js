const li = (description) => {
  const li = document.createElement('li');
  li.innerHTML = description;
  li.className = 'list';

  return li;
};

const input = (type) => {
  const input = document.createElement('input');
  input.type = type;

  return input;
};

const icon = () => {
  const p = document.createElement('i');
  p.innerHTML = 'icon';

  return p;
};

export {
  li,
  input,
  icon,
};