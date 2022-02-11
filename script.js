const getProjects = async () => {
  const requestInfo = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer 934509d71c8b03ad32cc2d84eed7585ee2991228',
    }
  };
  const url = 'https://api.todoist.com/rest/v1/projects';
  const response = await fetch(url, requestInfo);
  const data = await response.json();
  return data;
};

// getGenres().then((elemnet) => elemnet);

window.onload = async () => {
  const bolinha = await getProjects();
  bolinha.forEach((e) => {
    console.log(e);
    console.log(e.id);
    console.log(e.name);
  });
};

// fetch(url, {
//   method: 'GET',
//   headers: new Headers({
//     'Authorization': 'Bearer 934509d71c8b03ad32cc2d84eed7585ee2991228',
//   }),
// })