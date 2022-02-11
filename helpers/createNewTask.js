export default async function createNewTask(token, task, projectID) {
  const id = await projectID[0].id;
  console.log(id);
  const requestInfo = {
    method: 'POST',
    data: {
      content: task
    },
    headers: {
      'Content-Type': 'application/json',
      'X-Request-Id': '$(uuidgen)',
      Authorization: `Bearer ${token}`,
    }
  };
  const url = 'https://api.todoist.com/rest/v1/tasks';
  await fetch(url, requestInfo);
};
