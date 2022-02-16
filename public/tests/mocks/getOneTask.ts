export default async function getTasks(token, id) {
  const requestInfo = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };
  const url = `https://api.todoist.com/rest/v1/tasks/${id}`;
  const response = await fetch(url, requestInfo);
  const data = await response.json();
  return data;
};
