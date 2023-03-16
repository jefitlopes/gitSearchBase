const createPage = () => {
    document.body.insertAdjacentHTML('afterbegin', `
    <main class="error__body">
    <div class="error__message">
      <h2 class="title__error">Ooops!</h2>
      <p class="text__error">Não encontramos o usuário que você procurou, vamos tentar novamente</p>
      <a href="../../" class="new__search">Nova Busca</a>
    </div>
    <div class="img__error">
      <img src="../assets/img/.png" alt="" class="error__image">
      <div class="pink__img"></div>
      <div class="purple__img"></div>
    </div>
  </main>
    `) 
 }
 createPage()