const createUserCards = () => {
    document.body.insertAdjacentHTML('afterbegin', `
      <main class="profile__page">
        <div class="user__info">
          <div class="user__head">
            <img src="" alt="" class="user__img">
            <div class="head__info">
              <h2 class="user__name"></h2>
              <p class="user__title"></p>
            </div>
          </div>
          <button type="button" class="change__user">Trocar de usuário</button>
        </div>
        <ul class="repository">
        </ul>
      </main>
    `)
  }
  
async function renderUserRepositories(username) {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  const repositories = await response.json();
  const repositoryList = document.querySelector('.repository');

  await repositories.forEach((repo) => {
    const itemLi = `
      <li class="user__content">
        <h2 class="repo__name">${repo.name}</h2>
        <p class="repo__description">${repo.description}</p>
        <button type="button" class="repo__access" onclick="window.location.href='${repo.html_url}'">Repositório</button>
      </li>
    `;
    repositoryList.innerHTML += itemLi;
  });
}

  function renderUserData(userData) {
    const userImg = document.querySelector('.user__img');
    userImg.src = userData.avatar_url;
  
    const userName = document.querySelector('.user__name');
    userName.textContent = userData.name;
  
    const userTitle = document.querySelector('.user__title');
    userTitle.textContent = userData.bio;

  }
  
  async function handleUserChange() {
    const username = localStorage.getItem('username');
    const userDataResponse = await fetch(`https://api.github.com/users/${username}`);
    const userData = await userDataResponse.json();
    renderUserData(userData);
    await renderUserRepositories(username);
  }
  
  function handleNewSearch() {
    const button = document.querySelector('.change__user')
  
    button.addEventListener('click', () => {
      window.location.replace('../../')
    })
  }
  

  createUserCards();
  handleUserChange();
  handleNewSearch()
