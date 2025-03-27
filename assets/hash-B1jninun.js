(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const m of l.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function o(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=o(s);fetch(s.href,l)}})();const b=()=>`
    <footer class="bg-gray-200 p-4 text-center">
      <p>&copy; 2024 항해플러스. All rights reserved.</p>
    </footer>
  `,p=()=>`
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
`,d=e=>{window.history.pushState(null,null,`${i.basePath}${e}`),h()},c={get(e){return JSON.parse(localStorage.getItem(e))},set(e,t){return localStorage.setItem(e,t)},remove(e){return localStorage.removeItem(e)}};let a={};const n={login(e){a={username:e,email:"",bio:""},c.set("user",JSON.stringify(a))},logout(){a=null,c.remove("user")},getUserState(){return a||(a=c.get("user")),a},getUserProfile(){return this.getUserState()},checkIsLoginStatus(){return!!this.getUserState()},updateUserProfile(e,t,o){a={username:e,email:t,bio:o},c.set("user",JSON.stringify(a))}},$=()=>{a=c.get("user")};$();const L=e=>{e&&(e.addEventListener("click",t=>{const o=t.target.closest("a");if(o){if(t.preventDefault(),o.id==="logout"){n.logout(),d("/login");return}d(o.pathname)}}),e.addEventListener("submit",t=>{if(t.preventDefault(),t.target.id==="login-form"){const o=t.target.elements.username.value;if(!o)return alert("사용자 이름을 입력해주세요.");n.login(o),d("/profile")}if(t.target.id==="profile-form"){const o=t.target.elements.username.value,r=t.target.elements.email.value,s=t.target.elements.bio.value;n.updateUserProfile(o,r,s),alert("프로필이 업데이트되었습니다.")}}))},h=()=>{const e=document.getElementById("root"),t=i.getRoute(),o=n.checkIsLoginStatus(),r=window.location.pathname;if(r==="/profile"&&!o)return d("/login");if(r==="/login"&&o)return d("/");const s=t[r]||p;if(e.innerHTML=s(),!i.isEventAttached)return i.isEventAttached=!0,L(e)};window.addEventListener("popstate",h);const x=()=>`
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
`,v=()=>{const e=n.getUserProfile();return`
  <div id="root">
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${w()}

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

        ${b()}
      </div>
    </div>
  </div>`},i={mode:"",basePath:"",isEventAttached:!1,getRoute(){return{[`${i.basePath}/`]:y,[`${i.basePath}/login`]:x,[`${i.basePath}/profile`]:v}}},w=()=>{const e=n.checkIsLoginStatus(),t=window.location.hash==="#/";return`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>

    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
      <li><a href="/" class="${t?"text-blue-600":"text-gray-600"} font-bold">홈</a></li>
      ${e?`<li><a href="/profile" class="${t?"text-gray-600":"text-blue-600"} font-bold">프로필</a></li>`:""}
      ${e?'<li><a id="logout" href="#" class="text-gray-600">로그아웃</a></li>':'<li><a href="/login" class="text-gray-600">로그인</a></li>'}
      </ul>
    </nav>
  `},P=[{username:"홍길동",time:"5분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{username:"김철수",time:"15분 전",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{username:"이영희",time:"30분 전",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{username:"박민수",time:"1시간 전",content:"주말에 등산 가실 분 계신가요? 함께 가요!"},{username:"정수연",time:"2시간 전",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}],S=P.map(e=>`
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
    ${w()}
    <main class="p-4">
      <div class="mb-4 bg-white rounded-lg shadow p-4">
        <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
        <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
      </div>
      <div class="space-y-4">
       ${S}
      </div>
    </main>

    ${b()}
  </div>
</div>
`,g="/front_5th_chapter1-1/",E={[`${g}#/`]:y,[`${g}#/login`]:x,[`${g}#/profile`]:v},u=e=>{console.log("moveToPag진입",`#${e}`),window.location.hash=`#${e}`,console.log("원호님!",window.location.hash)},A=e=>{const t=e.target.closest("a");if(t){if(e.preventDefault(),t.id==="logout"){n.logout(),u("/login");return}console.log("a태그 클릭",t.getAttribute("href")),console.log("target:",t),u(t.getAttribute("href"))}},I=e=>{if(e.preventDefault(),e.target.id==="login-form"){const t=e.target.elements.username.value;if(!t)return alert("사용자 이름을 입력해주세요.");console.log("로그인 폼 클릭"),n.login(t),u("/profile")}if(e.target.id==="profile-form"){const t=e.target.elements.username.value,o=e.target.elements.email.value,r=e.target.elements.bio.value;n.updateUserProfile(t,o,r),alert("프로필이 업데이트되었습니다.")}},f=()=>{console.log("렌더 함수 실행");const e=document.getElementById("root"),t=window.location.hash,o=n.checkIsLoginStatus();if(t==="#/profile"&&!o)return u("/login");if(t==="#/login"&&o)return u("/");const r=E[t]||p;e.innerHTML=r(),e.addEventListener("click",A),e.addEventListener("submit",I)};f();window.addEventListener("hashchange",f);const O=()=>{f()};O();
