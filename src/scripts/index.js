const createPage = () => {
   document.body.insertAdjacentHTML('afterbegin', `
    <main class="git__site">
        <div class="purple__side">
            <h1 class="site__title">
            Git Search
            </h1>
            <h2 class="site__description">Encontre e se conecte com profissionais de forma rápida e fácil</h2>
            
        </div>
        <div class="grey__side">
            <h2 class="search__title">Procurar por um usuário</h2>
            <form class="search__form">
                <label class="search__label">Usuário github</label>
                <input type="text" class="search__input" placeholder="Digite um usuário do github aqui...">
                <button type="submit" class="btn__search">Ver perfil do github</button>
            </form>
        </div>
    </main>
   `) 
}
createPage()


const getUserProfile = async () => {
  const input = document.querySelector('.search__input');
  const username = input.value;
  const response = await fetch(`https://api.github.com/users/${username}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
  });
  const data = await response.json();
  console.log(data)
};

const searchUser = async () => {
  const form = document.querySelector('.search__form');
  const input = document.querySelector('.search__input');
  const username = input.value.trim();

  if (!username) {
      alert('Por favor, digite um nome de usuário.');
      return;
  }

  try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();

      if (response.ok) {
          localStorage.setItem('username', username);
          window.location.href = 'src/pages/profile.html';
      } else{
          window.location.href = 'src/pages/error.html'
      }
  } 
  catch (error) {
      window.location.href = 'src/pages/error.html';
  }
};

const form = document.querySelector('.search__form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  await searchUser();
});

getUserProfile();
