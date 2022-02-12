export default async function getLabels(token) {
  const requestInfo = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };
  const url = 'https://api.todoist.com/rest/v1/labels';
  const response = await fetch(url, requestInfo);
  const data = await response.json();
  return data;
};