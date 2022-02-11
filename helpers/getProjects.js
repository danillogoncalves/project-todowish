export default async function getProjects(token) {
  const requestInfo = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };
  const url = 'https://api.todoist.com/rest/v1/projects';
  const response = await fetch(url, requestInfo);
  const data = await response.json();
  return data;
};
