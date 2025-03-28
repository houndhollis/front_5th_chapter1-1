(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const b=()=>`
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
`,a=e=>{const t=l.isProduct?"/front_5th_chapter1-1":"";l.mode==="history"&&(window.history.pushState(null,null,`${t}${e}`),u()),l.mode==="hash"&&(window.location.hash=`#${e}`)},c={get(e){return JSON.parse(localStorage.getItem(e))},set(e,t){return localStorage.setItem(e,t)},remove(e){return localStorage.removeItem(e)}};let n={};const d={login(e){n={username:e,email:"",bio:""},c.set("user",JSON.stringify(n))},logout(){n=null,c.remove("user")},getUserState(){return n||(n=c.get("user")),n},getUserProfile(){return this.getUserState()},checkIsLoginStatus(){return!!this.getUserState()},updateUserProfile(e,t,s){n={username:e,email:t,bio:s},c.set("user",JSON.stringify(n))}},p=()=>{n=c.get("user")};p();const h=e=>{e&&(e.addEventListener("click",t=>{const s=t.target.closest("a");if(s){if(t.preventDefault(),s.id==="logout"){d.logout(),a("/login");return}l.mode==="history"?a(s.pathname):a(s.getAttribute("href"))}}),e.addEventListener("submit",t=>{if(t.preventDefault(),t.target.id==="login-form"){const s=t.target.elements.username.value;if(!s)return alert("사용자 이름을 입력해주세요.");d.login(s),a("/profile")}if(t.target.id==="profile-form"){const s=t.target.elements.username.value,i=t.target.elements.email.value,o=t.target.elements.bio.value;d.updateUserProfile(s,i,o),alert("프로필이 업데이트되었습니다.")}}))},u=()=>{const e=document.getElementById("root"),t=l.getRoute(),s=d.checkIsLoginStatus(),i=l.mode==="history"?window.location.pathname:window.location.hash||"#/";if(l.mode==="history"){if(i==="/profile"&&!s)return a("/login");if(i==="/login"&&s)return a("/")}else{if(i==="#/profile"&&!s)return a("/login");if(i==="#/login"&&s)return a("/")}const o=t[i]||b;if(e.innerHTML=o(),!l.isEventAttached)return l.isEventAttached=!0,h(e)};window.addEventListener("popstate",u);window.addEventListener("hashchange",u);const f=()=>`
    <footer class="bg-gray-200 p-4 text-center">
      <p>&copy; 2024 항해플러스. All rights reserved.</p>
    </footer>
  `,g=()=>{const e=d.checkIsLoginStatus(),t=location.href.split("/").length,s=location.href.split("/")[t-1]==="profile";return`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>

    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
      <li><a href="/" class="${s?"text-gray-600":"text-blue-600"} font-bold">홈</a></li>
      ${e?`<li><a href="/profile" class="${s?"text-blue-600":"text-gray-600"} font-bold">프로필</a></li>`:""}
      ${e?'<li><a id="logout" href="#" class="text-gray-600">로그아웃</a></li>':'<li><a href="/login" class="text-gray-600">로그인</a></li>'}
      </ul>
    </nav>
  `},x=[{username:"홍길동",time:"5분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{username:"김철수",time:"15분 전",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{username:"이영희",time:"30분 전",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{username:"박민수",time:"1시간 전",content:"주말에 등산 가실 분 계신가요? 함께 가요!"},{username:"정수연",time:"2시간 전",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}],v=x.map(e=>`
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
`).join(""),y=()=>`
<div class="bg-gray-100 min-h-screen flex justify-center">
  <div class="max-w-md w-full">
    ${g()}
    <main class="p-4">
      <div class="mb-4 bg-white rounded-lg shadow p-4">
        <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
        <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
      </div>
      <div class="space-y-4">
       ${v}
      </div>
    </main>

    ${f()}
  </div>
</div>
`,w=()=>`
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
`,P=()=>{const e=d.getUserProfile();return`
  <div id="root">
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${g()}

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

        ${f()}
      </div>
    </div>
  </div>`},l={mode:"",isProduct:"",isEventAttached:!1,getRoute(){const e=this.isProduct,t=this.mode;let s="";return e&&(s=t==="history"?"/front_5th_chapter1-1/":"#/"),e||(s=t==="history"?"/":"#/"),{[`${s}`]:y,[`${s}login`]:w,[`${s}profile`]:P}}},$=e=>{l.isProduct=!0,l.mode=e,u()};export{$ as r};
