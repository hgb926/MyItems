// ============== 전역 변수 영역 =============== //

const $body = document.body;
const $addPost = document.querySelector(".add");
const $post = document.querySelector(".post");
const $createNewPost = document.querySelector(".createNewPost");
const $cancle = document.querySelector('.cancle');
const $clear = document.querySelector('.clear')

const $imgs = document.getElementById('imgs')




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

// 사진 추가되는 함수
function createNew() {
  const $post = document.createElement('li')
  $post.classList.add('post')
  $post.innerHTML = '<li class="post"><i class="far fa-images"></i></li>'
  $imgs.appendChild($post)
}





// ============== 함수 바인딩 영역 ================//
$addPost.addEventListener('click', addNewPost);
$cancle.addEventListener('click', cancle)
$clear.addEventListener('click', createNew)