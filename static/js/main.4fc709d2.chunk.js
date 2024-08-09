(this["webpackJsonpbook-tracker"]=this["webpackJsonpbook-tracker"]||[]).push([[0],{22:function(e,o,n){},27:function(e,o,n){"use strict";n.r(o);var t=n(0),r=n.n(t),a=n(11),s=n.n(a),i=(n(22),n(3)),d=n(31),p=n(16),l=n(2);const g={spooky:[{id:"spooky-1",backgroundImage:"url(/spines/spooky-1.png)"},{id:"spooky-2",backgroundImage:"url(/spines/spooky-2.png)"},{id:"spooky-3",backgroundImage:"url(/spines/spooky-3.png)"},{id:"spooky-4",backgroundImage:"url(/spines/spooky-4.png)"},{id:"spooky-5",backgroundImage:"url(/spines/spooky-5.png)"},{id:"spooky-6",backgroundImage:"url(/spines/spooky-6.png)"},{id:"spooky-7",backgroundImage:"url(/spines/spooky-7.png)"},{id:"spooky-8",backgroundImage:"url(/spines/spooky-8.png)"},{id:"spooky-9",backgroundImage:"url(/spines/spooky-9.png)"},{id:"spooky-10",backgroundImage:"url(/spines/spooky-10.png)"}],soft:[{id:"soft-1",backgroundImage:"url(/spines/soft-1.png)"},{id:"soft-2",backgroundImage:"url(/spines/soft-2.png)"},{id:"soft-3",backgroundImage:"url(/spines/soft-3.png)"},{id:"soft-4",backgroundImage:"url(/spines/soft-4.png)"},{id:"soft-5",backgroundImage:"url(/spines/soft-5.png)"},{id:"soft-6",backgroundImage:"url(/spines/soft-6.png)"},{id:"soft-7",backgroundImage:"url(/spines/soft-7.png)"},{id:"soft-8",backgroundImage:"url(/spines/soft-8.png)"},{id:"soft-9",backgroundImage:"url(/spines/soft-9.png)"},{id:"soft-10",backgroundImage:"url(/spines/soft-10.png)"},{id:"soft-11",backgroundImage:"url(/spines/soft-11.png)"},{id:"soft-12",backgroundImage:"url(/spines/soft-12.png)"},{id:"soft-13",backgroundImage:"url(/spines/soft-13.png)"},{id:"soft-14",backgroundImage:"url(/spines/soft-14.png)"}],colorful:[{id:"colorful-1",backgroundImage:"url(/spines/colorful-1.png)"},{id:"colorful-2",backgroundImage:"url(/spines/colorful-2.png)"},{id:"colorful-3",backgroundImage:"url(/spines/colorful-3.png)"},{id:"colorful-4",backgroundImage:"url(/spines/colorful-4.png)"},{id:"colorful-5",backgroundImage:"url(/spines/colorful-5.png)"},{id:"colorful-6",backgroundImage:"url(/spines/colorful-6.png)"},{id:"colorful-7",backgroundImage:"url(/spines/colorful-7.png)"}],fantasy:[{id:"fantasy-1",backgroundImage:"url(/spines/fantasy-1.png)"},{id:"fantasy-2",backgroundImage:"url(/spines/fantasy-2.png)"},{id:"fantasy-3",backgroundImage:"url(/spines/fantasy-3.png)"},{id:"fantasy-4",backgroundImage:"url(/spines/fantasy-4.png)"},{id:"fantasy-5",backgroundImage:"url(/spines/fantasy-5.png)"},{id:"fantasy-6",backgroundImage:"url(/spines/fantasy-6.png)"},{id:"fantasy-7",backgroundImage:"url(/spines/fantasy-7.png)"},{id:"fantasy-8",backgroundImage:"url(/spines/fantasy-8.png)"},{id:"fantasy-9",backgroundImage:"url(/spines/fantasy-9.png)"},{id:"fantasy-10",backgroundImage:"url(/spines/fantasy-10.png)"},{id:"fantasy-11",backgroundImage:"url(/spines/fantasy-11.png)"},{id:"fantasy-12",backgroundImage:"url(/spines/fantasy-12.png)"},{id:"fantasy-13",backgroundImage:"url(/spines/fantasy-13.png)"}]},c=i.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`,u=i.a.p`
  color: red;
  margin-top: 10px;
`,b=e=>{let{books:o,onBookClick:n}=e;return Object(l.jsx)(f,{children:Object(l.jsx)(k,{children:o.map(((e,o)=>Object(l.jsx)(x,{style:{...e.spineStyle,left:`${e.left}px`,top:`${e.top}px`},onClick:()=>n(o),children:Object(l.jsx)(m,{children:e.title})},o)))})})},f=i.a.div`
  width: 100%;
  max-width: 800px;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  overflow: auto;
`,k=i.a.div`
  position: relative;
  width: 100%;
  height: 500px; /* Adjust this value to make the bookshelf taller */
  background-image: url('/bookshelf.jpg'); /* Ensure this path is correct */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`,x=i.a.div`
  width: ${160}px;
  height: ${70}px; /* Adjust height */
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center content */
  position: absolute;
  background-size: cover;
  background-position: center;
  background-image: ${e=>e.style.backgroundImage};
  margin: 0; /* Remove margin */
  padding: 0; /* Remove padding */
  cursor: pointer;
  overflow: hidden; /* Ensure text stays within the book spine */
`,m=i.a.h3`
  font-size: 12px; /* Smaller font size for longer titles */
  margin: 0;
  padding: 0;
  transform: rotate(-90deg);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%) rotate(-90deg); /* Center and rotate */
  width: 100%; /* Ensure the width does not exceed the book width */
  text-align: center; /* Center the text */
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
`,h=e=>{let{addBook:o}=e;const[n,r]=Object(t.useState)(""),[a,s]=Object(t.useState)(""),[i,d]=Object(t.useState)("spooky");return Object(l.jsxs)(y,{onSubmit:e=>{e.preventDefault(),n&&i&&(o({title:n,fullTitle:a,theme:i}),r(""),s(""),d("spooky"))},children:[Object(l.jsx)(j,{type:"text",placeholder:"Book Spine Title",value:n,onChange:e=>r(e.target.value)}),Object(l.jsx)(j,{type:"text",placeholder:"Full Book Title",value:a,onChange:e=>s(e.target.value)}),Object(l.jsx)(I,{value:i,onChange:e=>d(e.target.value),children:Object.keys(g).map((e=>Object(l.jsx)("option",{value:e,children:e},e)))}),Object(l.jsx)(v,{type:"submit",children:"Add Book"})]})},y=i.a.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 100%;
  max-width: 600px;
`,j=i.a.input`
  margin: 5px 0;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
`,I=i.a.select`
  margin: 5px 0;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
`,v=i.a.button`
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 10px;
  &:hover {
    background-color: #45a049;
  }
`,O=i.b`
  0% {
    transform: scale(0.9) rotateY(-90deg);
    opacity: 0;
  }
  50% {
    transform: scale(1) rotateY(0deg);
    opacity: 0.5;
  }
  100% {
    transform: scale(1) rotateY(0deg);
    opacity: 1;
  }
`,w=i.a.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`,C=i.a.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 500px;
  width: 90%;
  position: relative;
  animation: ${O} 0.6s ease-out;
`,S=i.a.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`,z=i.a.input`
  width: 80%;
  margin: 20px 0;
  -webkit-appearance: none;
  height: 5px;
  background: #ddd;
  outline: none;
  border-radius: 5px;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    background: #4caf50;
    cursor: pointer;
    border-radius: 50%;
  }
  ::-moz-range-thumb {
    width: 15px;
    height: 15px;
    background: #4caf50;
    cursor: pointer;
    border-radius: 50%;
  }
`,B=i.a.p`
  font-size: 16px;
  margin: 10px 0;
`,E=i.a.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 20px;
  &:hover {
    background-color: #45a049;
  }
`,T=i.a.button`
  padding: 10px 20px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 10px;
  &:hover {
    background-color: darkred;
  }
`;var $=()=>{const[e,o]=Object(t.useState)([]),[n,r]=Object(t.useState)(""),[a,s]=Object(t.useState)(null);Object(t.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("books"));e&&o(e)}),[]),Object(t.useEffect)((()=>{localStorage.setItem("books",JSON.stringify(e))}),[e]);const i=e=>{let o,n,t;e.length<10?(o=200,n=104,t=10):e.length<24?(o=160,n=190,t=14):e.length<38?(o=160,n=295,t=14):e.length<52&&(o=160,n=400,t=14);return{left:o+25*(e.length%t),top:n}},f=e=>{const o=g[e];return o?o[Math.floor(Math.random()*o.length)]:null};return Object(l.jsx)(d.a,{backend:p.a,children:Object(l.jsxs)(c,{children:[Object(l.jsx)(b,{books:e,onBookClick:s}),Object(l.jsx)(h,{addBook:n=>{if(e.length>=52)return void r("Cannot add any more books.");const t=i(e),a=f(n.theme);a?(o([...e,{...n,...t,spineStyle:a,progress:0}]),r("")):r("Invalid theme selected.")}}),n&&Object(l.jsx)(u,{children:n}),null!==a&&Object(l.jsx)(w,{onClick:()=>s(null),children:Object(l.jsxs)(C,{onClick:e=>e.stopPropagation(),children:[Object(l.jsx)(S,{children:e[a].fullTitle}),Object(l.jsx)("p",{children:"Adjust your reading progress:"}),Object(l.jsx)(z,{type:"range",min:"0",max:"100",value:e[a].progress||0,onChange:n=>((n,t)=>{const r=e.map(((e,o)=>o===n?{...e,progress:t}:e));o(r)})(a,n.target.value)}),Object(l.jsxs)(B,{children:[e[a].progress||0,"%"]}),Object(l.jsx)(E,{onClick:()=>s(null),children:"Close"}),Object(l.jsx)(T,{onClick:()=>{(n=>{const t=e.filter(((e,o)=>o!==n)),a=t.map(((e,o)=>({...e,...i(t.slice(0,o))})));o(a),r("")})(a),s(null)},children:"Delete"})]})})]})})};var F=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((o=>{let{getCLS:n,getFID:t,getFCP:r,getLCP:a,getTTFB:s}=o;n(e),t(e),r(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)($,{})}),document.getElementById("root")),F()}},[[27,1,2]]]);
//# sourceMappingURL=main.4fc709d2.chunk.js.map