(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9701:function(e,r,a){Promise.resolve().then(a.bind(a,7096))},7096:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return Home}});var t=a(7437),s=a(2265),l=a(6691),c=a.n(l),o=a(1396),n=a.n(o);let ProductCard=e=>{let{product:r}=e;return r.churchUrl?(0,t.jsx)(n(),{href:r.churchUrl,passHref:!0,legacyBehavior:!0,children:(0,t.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:(0,t.jsxs)("div",{className:"group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full h-full",children:[(0,t.jsx)("div",{className:"relative w-full h-64",children:(0,t.jsx)("img",{src:r.imageUrl,alt:r.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"})}),(0,t.jsxs)("div",{className:"p-4",children:[(0,t.jsx)("h2",{className:"text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors",children:r.name}),r.churchName&&(0,t.jsx)("p",{className:"text-gray-600 mb-2",children:r.churchName.charAt(0).toUpperCase()+r.churchName.slice(1)}),(0,t.jsx)("p",{className:"text-gray-800 font-semibold",children:r.price})]})]})})}):(0,t.jsxs)("div",{className:"group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full h-full",children:[(0,t.jsx)("div",{className:"relative w-full h-64",children:(0,t.jsx)(c(),{src:r.imageUrl,alt:r.name,fill:!0,sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",priority:!0,className:"object-cover group-hover:scale-105 transition-transform duration-300"})}),(0,t.jsxs)("div",{className:"p-4",children:[(0,t.jsx)("h2",{className:"text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors",children:r.name}),r.churchName&&(0,t.jsx)("p",{className:"text-gray-600 mb-2",children:r.churchName.charAt(0).toUpperCase()+r.churchName.slice(1)}),(0,t.jsx)("p",{className:"text-gray-800 font-semibold",children:r.price})]})]})};var i=a(9543),h=a(1827),d=a(2549);let SearchBar=e=>{let{onSearch:r}=e,[a,l]=(0,s.useState)("");return(0,s.useEffect)(()=>{let e=setTimeout(()=>{r(a)},300);return()=>clearTimeout(e)},[a,r]),(0,t.jsxs)("div",{className:"relative w-full max-w-md",children:[(0,t.jsx)("input",{type:"text",placeholder:"Search products...",className:"w-full p-3 pl-12 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all",value:a,onChange:e=>l(e.target.value)}),(0,t.jsx)(h.Z,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",size:20}),a&&(0,t.jsx)("button",{onClick:()=>{l(""),r("")},className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:(0,t.jsx)(d.Z,{size:20})})]})},CategoryTabs=e=>{let{categories:r,selectedCategory:a,onSelectCategory:s}=e,formatChurchName=e=>e.toLowerCase().split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ");return(0,t.jsxs)("div",{className:"flex space-x-4 overflow-x-auto pb-2",children:[(0,t.jsx)("button",{className:"px-4 py-2 rounded-full text-sm font-medium transition-all ".concat(""===a?"bg-blue-500 text-white":"bg-gray-200 text-gray-800 hover:bg-gray-300"),onClick:()=>s(""),children:"All"}),r.map(e=>(0,t.jsx)("button",{className:"px-4 py-2 rounded-full text-sm font-medium transition-all ".concat(a===e?"bg-blue-500 text-white":"bg-gray-200 text-gray-800 hover:bg-gray-300"),onClick:()=>s(e),children:formatChurchName(e)},e))]})};function Home(){let[e,r]=(0,s.useState)([]),[a,l]=(0,s.useState)(""),[c,o]=(0,s.useState)("");(0,s.useEffect)(()=>{let fetchProducts=async()=>{try{let e=await fetch("".concat("https://churchmerch.replit.app","/api/products")),a=await e.json();r(a)}catch(e){console.error("Error fetching products:",e)}};fetchProducts()},[]);let n=Array.from(new Set(e.map(e=>e.churchName))),h=e.filter(e=>{let r=e.name.toLowerCase().includes(a.toLowerCase()),t=!c||e.churchName===c;return r&&t});return(0,t.jsxs)("div",{className:"min-h-screen bg-gray-100",children:[(0,t.jsx)(i.w,{}),(0,t.jsxs)("main",{className:"container mx-auto px-4 py-8",children:[(0,t.jsx)("div",{className:"mb-8",children:(0,t.jsx)(SearchBar,{onSearch:l})}),(0,t.jsx)(CategoryTabs,{categories:n,selectedCategory:c,onSelectCategory:o}),(0,t.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8",children:h.map(e=>(0,t.jsx)(ProductCard,{product:e},e.id))}),0===h.length&&(0,t.jsx)("div",{className:"text-center text-gray-500 mt-8",children:"No products found. Try adjusting your search or filters."})]})]})}},9543:function(e,r,a){"use strict";a.d(r,{w:function(){return Navbar}});var t=a(7437),s=a(1396),l=a.n(s),c=a(2242),o=a(8786);let Navbar=()=>(0,t.jsx)("nav",{className:"bg-white shadow-md",children:(0,t.jsxs)("div",{className:"container mx-auto px-4 py-3 flex justify-between items-center",children:[(0,t.jsxs)("div",{className:"flex space-x-4",children:[(0,t.jsx)(l(),{href:"/",passHref:!0,legacyBehavior:!0,children:(0,t.jsxs)("a",{className:"flex items-center space-x-2 text-gray-800 hover:text-gray-600 transition-colors",children:[(0,t.jsx)(c.Z,{size:24}),(0,t.jsx)("span",{className:"font-semibold",children:"Home"})]})}),(0,t.jsx)(l(),{href:"/about",passHref:!0,legacyBehavior:!0,children:(0,t.jsx)("a",{className:"flex items-center space-x-2 text-gray-800 hover:text-gray-600 transition-colors",children:(0,t.jsx)("span",{className:"font-semibold",children:"About"})})})]}),(0,t.jsx)(l(),{href:"/",passHref:!0,legacyBehavior:!0,children:(0,t.jsx)("a",{className:"text-gray-800 hover:text-gray-600 transition-colors",children:(0,t.jsx)(o.fGx,{size:24})})}),(0,t.jsx)("h1",{className:"text-2xl font-bold text-gray-800",children:"churchmerch"})]})})}},function(e){e.O(0,[467,851,499,971,472,744],function(){return e(e.s=9701)}),_N_E=e.O()}]);