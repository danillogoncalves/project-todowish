const getProjects = async () => {
  const requestInfo = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer a5a0ce723d7453794af29a0850bcde7ffbde7aa7',
    }
  };
  const url = 'https://api.todoist.com/rest/v1/projects';
  const response = await fetch(url, requestInfo);
  const data = await response.json();
  return data;
};

const getIdProject = async () => {
  const projectID = await getProjects();
  return projectID[0].id;
};

// console.log(getIdProject());

const TOKEN_API = 'a5a0ce723d7453794af29a0850bcde7ffbde7aa7';

const createNewTask = async (task, projectID) => {
  const id = await projectID;
  const requestInfo = {
    method: 'POST',
    data: {
      content: task
    },
    headers: {
      'Content-Type': 'application/json',
      'X-Request-Id': `${id}`,
      Authorization: `Bearer ${TOKEN_API}`,
    }
  };
  const url = 'https://api.todoist.com/rest/v1/tasks';
  await fetch(url, requestInfo);
};

createNewTask('Teste 1', getIdProject()).then();
// console.log(createNewTask(getIdProject));
