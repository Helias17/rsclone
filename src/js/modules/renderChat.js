export default (username, avatar) => {
  const messengerPostList = document.querySelector('.messenger__post-list');
  const userHasMessages = false;

  if (userHasMessages) {
    // show messages in chat
  } else {
    messengerPostList.classList.add('messenger__post-list_promo');
    messengerPostList.innerHTML = `
    <div class="messenger__promo">
    <div class="messenger__promo-avatar" style="background-image: url('${avatar}')"></div>
    <p class="messenger__promo-title">
      Write your first message to <span class="messenger__promo-name">${username}</span>
    </p>
    </div>
    `;
  }
};
