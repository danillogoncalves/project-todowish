export default async function updateTask(token, task, taskId) {
  const requestInfo = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: `{"content": "${task}"}`,
  };
  const url = `https://api.todoist.com/rest/v1/tasks/${taskId}`;
  const response = await fetch(url, requestInfo);
  return response;
};