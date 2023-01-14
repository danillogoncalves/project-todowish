import getOneTask from './getOneTask';

export default async function addLabel(token: any, task: any, taskId: any, labelId: any) {
  const theTask = await getOneTask(token, taskId);
  theTask.label_ids.push(labelId);
  const requestInfo = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: `{"content": "${task}", "label_ids": [${theTask.label_ids}]}`,
  };
  const url = `https://api.todoist.com/rest/v1/tasks/${taskId}`;
  const response = await fetch(url, requestInfo);
  console.log(response);
  return response;
};