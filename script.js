
document.addEventListener('DOMContentLoaded', function () {
  const commentsContainer = document.querySelector('.comments');
  const comments = document.querySelectorAll('.comment');
  let commentsArray = [];

  function addEventListenersToNums() {
    let nums = document.querySelectorAll('.num');
    console.log(nums);

    nums.forEach(function (num) {
      num.addEventListener('click', () => {
        console.log(num);
      })
    })
  }

  function HTMLToNode(HTMLstring) {
    const div = document.createElement('div');
    div.innerHTML = HTMLstring.trim();

    for (let i = 0; i < div.childNodes.length; i++) {
      if (div.childNodes[i].nodeType != 3) {
        commentsContainer.appendChild(div.childNodes[i]);
      }
    }
    addEventListenersToNums();
  }

  HTMLToNode(comments[0].innerHTML);
  console.log(typeof comments[0].innerHTML);

  comments.forEach((element, index, array) => {
    let likes = document.querySelector(`.comment:nth-child(${index + 1}) .likes`)
    console.log(likes.innerHTML);
    let dislikes = document.querySelector(`.comment:nth-child(${index + 1}) .dislikes`)
    console.log(dislikes.innerHTML);
  })

})
