const input = (type) => {
  const input = document.createElement('input');
  input.type = type;

  return input;
};

const icon = () => {
  const i = document.createElement('i');
  i.className = 'fas fa-ellipsis-v icon';

  return i;
};

const li = (description) => {
  const li = document.createElement('li');
  const div = document.createElement('div');

  div.append(input('checkbox'), description);
  li.append(div, icon());

  li.className = 'list';
  div.className = 'checkbox-description-container';
  return li;
};

export {
  li,
  input,
  icon,
};