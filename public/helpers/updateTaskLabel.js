export default async function updateTaskLabel(token, task, taskId, labelId) {
  const requestInfo = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: `{"content": "${task}", "label_ids": ["${labelId}"]}`,
  };
  const url = `https://api.todoist.com/rest/v1/tasks/${taskId}`;
  const response = await fetch(url, requestInfo);
  return response;
};