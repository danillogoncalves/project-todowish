export default async function deleteTasks(taskId, token) {
  const requestInfo = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };
  const url = `https://api.todoist.com/rest/v1/tasks/${taskId}`;
  const response = await fetch(url, requestInfo);
  return response;
};
