import getOneTask from './getOneTask.js';

export default async function addLabel(token, task, taskId, labelId) {
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