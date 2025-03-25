(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}})();const m=()=>`
    <footer class="bg-gray-200 p-4 text-center">
      <p>&copy; 2024 항해플러스. All rights reserved.</p>
    </footer>
  `,i={get(e){return JSON.parse(localStorage.getItem(e))},set(e,r){return localStorage.setItem(e,r)},remove(e){return localStorage.removeItem(e)}},n={login(e){return i.set("user",JSON.stringify({username:e,email:"",bio:""}))},logout(){return i.remove("user")},getUserProfile(){return i.get("user")},checkIsLoginStatus(){return!!i.get("user")},updateUserProfile(e,r,l){return i.set("user",JSON.stringify({username:e,email:r,bio:l}))}},f=()=>{const e=n.checkIsLoginStatus(),l=window.location.pathname==="/front_5th_chapter1-1/";return`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>

    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
      <li><a href="/" class="${l?"text-blue-600":"text-gray-600"} font-bold">홈</a></li>
      ${e?`<li><a href="/profile" class="${l?"text-gray-600":"text-blue-600"} font-bold">프로필</a></li>`:""}
      ${e?'<li><a id="logout" href="#" class="text-gray-600">로그아웃</a></li>':'<li><a href="/login" class="text-gray-600">로그인</a></li>'}
      </ul>
    </nav>
  `},b=[{username:"홍길동",time:"5분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{username:"김철수",time:"15분 전",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{username:"이영희",time:"30분 전",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{username:"박민수",time:"1시간 전",content:"주말에 등산 가실 분 계신가요? 함께 가요!"},{username:"정수연",time:"2시간 전",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}],p=b.map(e=>`
  <div class="bg-white rounded-lg shadow p-4">
    <div class="flex items-center mb-2">
      <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
      <div>
        <p class="font-bold">${e.username}</p>
        <p class="text-sm text-gray-500">${e.time}</p>
      </div>
    </div>
    <p>${e.content}</p>
    <div class="mt-2 flex justify-between text-gray-500">
      <button>좋아요</button>
      <button>댓글</button>
      <button>공유</button>
    </div>
  </div>
`).join(""),g=()=>`
<div class="bg-gray-100 min-h-screen flex justify-center">
  <div class="max-w-md w-full">
    ${f()}
    <main class="p-4">
      <div class="mb-4 bg-white rounded-lg shadow p-4">
        <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
        <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
      </div>
      <div class="space-y-4">
       ${p}
      </div>
    </main>

    ${m()}
  </div>
</div>
`,x=()=>{const e=n.getUserProfile();return`
  <div id="root">
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${f()}

        <main class="p-4">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
              내 프로필
            </h2>
            <form id="profile-form">
              <div class="mb-4">
                <label
                  for="username"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >사용자 이름</label
                >
                <input
                  type="text"
                  id="username"
                  name="username"
                  value="${(e==null?void 0:e.username)||""}"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-4">
                <label
                  for="email"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >이메일</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  value="${(e==null?void 0:e.email)||""}"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-6">
                <label
                  for="bio"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >자기소개</label
                >
                <textarea
                  id="bio"
                  name="bio"
                  rows="4"
                  class="w-full p-2 border rounded"
                >${(e==null?void 0:e.bio)||""}</textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-blue-600 text-white p-2 rounded font-bold"
              >
                프로필 업데이트
              </button>
            </form>
          </div>
        </main>

        ${m()}
      </div>
    </div>
  </div>`},h=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form id="login-form">
        <div class="mb-4">
          <input id="username" type="text" placeholder="사용자 이름" class="w-full p-2 border rounded">
        </div>
        <div class="mb-6">
          <input type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  </main>
`,v=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`,d="/front_5th_chapter1-1",y={[`${d}/`]:g,[`${d}/login`]:h,[`${d}/profile`]:x},c=e=>{window.history.pushState(null,null,[`${d}${e}`]),u()},u=()=>{const e=document.getElementById("root"),r=window.location.pathname;if(r==="/profile"&&!n.checkIsLoginStatus())return c("/login");if(r==="/login"&&n.checkIsLoginStatus())return c("/");const l=y[r]||v;e.innerHTML=l(),e.addEventListener("click",s=>{const t=s.target.closest("a");if(t){if(s.preventDefault(),t.id==="logout"){n.logout(),c("/login");return}c(t.pathname)}}),e.addEventListener("submit",s=>{if(s.preventDefault(),s.target.id==="login-form"){const t=s.target.elements.username.value;n.login(t),c("/profile")}if(s.target.id==="profile-form"){const t=s.target.elements.username.value,o=s.target.elements.email.value,a=s.target.elements.bio.value;n.updateUserProfile(t,o,a),alert("프로필이 업데이트되었습니다.")}})};window.addEventListener("popstate",u);const w=()=>{u()};w();
