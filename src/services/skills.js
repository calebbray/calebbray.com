import config from 'config';

export const getSkills = () => {
  return fetch(`${config.calebApi}/skills`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(json => json)
    .catch(err => {
      throw new Error(err.message);
    });
};
