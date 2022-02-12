export default async function createNewTask(token, name, number) {
  const requestInfo = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: `{"name": "${name}", "color": "${number}"}`,
  };
  const url = 'https://api.todoist.com/rest/v1/labels';
  const response = await fetch(url, requestInfo);
  return response;
};
