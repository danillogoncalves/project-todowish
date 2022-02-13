export default async function createNewTask(token, task) {
  const requestInfo = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: `{"content": "${task}"}`,
  };
  const url = 'https://api.todoist.com/rest/v1/tasks';
  const response = await fetch(url, requestInfo);
  return response;
};
