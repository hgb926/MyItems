// ============== 전역 변수 영역 =============== //

const $body = document.body;
const $addPost = document.querySelector(".add");
const $post = document.querySelector(".post");
const $createNewPost = document.querySelector(".createNewPost");
const $cancle = document.querySelector('.cancle');
const $clear = document.querySelector('.clear')
const $newPost = document.querySelector('.imgs')



// ============== 함수 작성 영역 ================//

// 새글 작성
function addNewPost() {
  $createNewPost.classList.toggle('none')
  $body.classList.toggle('modal')
}

// 취소하기
function cancle() {
  $createNewPost.classList.add('none');
  $body.classList.toggle('modal')
}



// 게시글 추가
function createNew() {

  // 새 자식
  let element = $newPost.createElement('li');
  element.classList.add('post')
  const $newPostText = document.querySelector('.modalContents')
  element.textContent = $newPostText;
  console.log(element)

  cancle();
}








// ============== 함수 바인딩 영역 ================//

$clear.addEventListener('click', createNew)
$cancle.addEventListener('click', cancle)
$addPost.addEventListener('click', addNewPost)