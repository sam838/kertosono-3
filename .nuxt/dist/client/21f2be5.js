(window.webpackJsonp=window.webpackJsonp||[]).push([[62,13,29,32],{367:function(t,e,n){var content=n(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("3816dc61",content,!0,{sourceMap:!1})},368:function(t,e,n){"use strict";n(367)},369:function(t,e,n){var o=n(56)(!1);o.push([t.i,'.offcanvas-navigation ul{padding-left:0}.offcanvas-navigation ul li{border-bottom:1px solid hsla(0,0%,100%,.15)}.offcanvas-navigation ul li.menu-item-has-children .sub-menu{height:0;opacity:0;transition:.3s;visibility:hidden}.offcanvas-navigation ul li.menu-item-has-children.active>.sub-menu{height:100%;opacity:1;visibility:visible;padding-left:0}.offcanvas-navigation ul li a{color:#fff;font-size:16px;font-weight:500;padding:10px 0;display:block}.offcanvas-navigation ul li a:hover{color:#1292ee}.offcanvas-navigation ul.sub-menu{margin-left:15px;transition:.4s}.offcanvas-navigation ul.sub-menu li{list-style:none;border:none}.offcanvas-navigation ul.sub-menu li a{color:#fff;font-weight:400}.offcanvas-navigation ul.sub-menu li a:hover{color:#1292ee}.offcanvas-navigation ul.sub-menu li .sub-menu li a{font-size:13px;padding:5px 0}.offcanvas-navigation ul li.menu-item-has-children{position:relative;display:block}.offcanvas-navigation ul li.menu-item-has-children a{display:inline-block}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand i:before{transform:rotate(0)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand{top:5px;right:0;width:35px;height:35px;cursor:pointer;line-height:35px;position:absolute;text-align:center;background-color:hsla(0,0%,100%,.1)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand:hover{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i{display:block;border-bottom:1px solid #fff;position:relative;width:10px;text-align:center;top:50%;left:50%;transform:translate(-50%,-50%)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i:before{width:100%;content:"";border-bottom:1px solid #fff;display:block;position:absolute;top:0;transform:rotate(90deg);transition:.4s}',""]),t.exports=o},370:function(t,e,n){"use strict";n.r(e);var o={name:"MobileNavMenu",mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),e=t.querySelectorAll(".sub-menu"),n=t.querySelectorAll("a"),i=0;i<e.length;i++)e[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var o=t.querySelectorAll(".menu-expand"),r=o.length,l=0;l<r;l++)o[l].addEventListener("click",(function(t){d(t)}));for(var c=0;c<n.length;c++)n[c].addEventListener("click",(function(){m()}));var d=function(t){t.currentTarget.parentElement.classList.toggle("active")},m=function(){var t=document.querySelector("#offcanvas-mobile-menu");null==t||t.classList.remove("active")}}},r=(n(368),n(54)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mobile-navigation"},[e("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[e("ul",[e("li",[e("n-link",{attrs:{to:"/"}},[t._v("Beranda")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/about"}},[t._v("Tentang")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/unit"}},[t._v("Unit")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/news"}},[t._v("Berita")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/ppdb"}},[t._v("PPDB")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/career"}},[t._v("Karir")])],1)])])])}),[],!1,null,null,null);e.default=component.exports},371:function(t,e,n){"use strict";n.r(e);n(1),n(47),n(55);var o={components:{MobileNavigation:function(){return Promise.resolve().then(n.bind(null,370))}},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},r=n(54),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"popup-mobile-menu popup-mobile-visiable",attrs:{id:"offcanvas-menu"}},[e("div",{staticClass:"mobile-menu-overlay",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}}),t._v(" "),e("div",{staticClass:"inner custom-scrollbar"},[e("div",{staticClass:"mobile-header"},[e("div",{staticClass:"logo"},[e("n-link",{staticStyle:{color:"white"},attrs:{to:"/"}},[e("img",{staticClass:"dark-logo",attrs:{src:"/images/logo/yoga-logo.png",alt:"site logo"}})])],1),t._v(" "),e("button",{staticClass:"mobile-close-btn",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}})]),t._v(" "),e("div",{staticClass:"menu-content"},[e("MobileNavigation")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MobileNavigation:n(370).default})},372:function(t,e,n){"use strict";n.r(e);var o={props:["items","title","backgroundUrl"]},r=n(54),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-title-section section-padding-top bg-cover",style:{backgroundImage:"url(".concat(t.backgroundUrl,")")},attrs:{"data-overlay":"0.7"}},[e("div",{staticClass:"page-title"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[t._v(t._s(t.title))])])]),t._v(" "),e("div",{staticClass:"page-breadcrumb position-static"},[e("div",{staticClass:"container"},[e("b-breadcrumb",{staticClass:"page-breadcrumb",attrs:{items:t.items}})],1)])])}),[],!1,null,null,null);e.default=component.exports},380:function(t){t.exports=JSON.parse('[{"id":1,"title":"How your sales can work together in account-based marketing","slug":"how-your-sales-can-work-together-in-account-based-marketing","date":"Apr 06, 2021","view":70,"imgSrc":"/images/blog/370/blog-1.jpg","desc":"We\'ve always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","comment":8,"categories":["marketing","business","branding"],"tags":["marketing","business"]},{"id":2,"title":"The six things marketers need to understand about DTC marketing","slug":"the-six-things-marketers-need-to-understand-about-dtc-marketing","date":"Jun 26, 2021","view":92,"imgSrc":"/images/blog/370/blog-2.jpg","desc":"We\'ve always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","comment":9,"categories":["agency","digital"],"tags":["agency","digital"]},{"id":3,"title":"Eleven top tips for developing agile marketing","slug":"eleven-top-tips-for-developing-agile-marketing","date":"May 16, 2021","view":55,"imgSrc":"/images/blog/370/blog-3.jpg","desc":"We\'ve always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","comment":15,"categories":["branding","business"],"tags":["branding","business"]},{"id":4,"title":"A guide to latest trends product for this summer","slug":"a-guide-to-latest-trends-product-for-this-summer","date":"Feb 14, 2021","view":36,"imgSrc":"/images/blog/370/blog-4.jpg","desc":"We\'ve always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","comment":40,"categories":["marketing","business"],"tags":["marketing","business"]},{"id":5,"title":"New winter collection with discount for this summer","slug":"new-winter-collection-with-discount-for-this-summer","date":"Aug 26, 2021","view":46,"imgSrc":"/images/blog/370/blog-5.jpg","desc":"We\'ve always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","comment":32,"categories":["agency","digital"],"tags":["agency","digital"]},{"id":6,"title":"Make your store stand out from the others by business","slug":"make-your-store-stand-out-from-the-others-by-business","date":"Jun 22, 2021","view":34,"imgSrc":"/images/blog/370/blog-6.jpg","desc":"We\'ve always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","comment":64,"categories":["branding","business"],"tags":["branding","business"]}]')},463:function(t,e,n){"use strict";n.r(e);n(1),n(47),n(55),n(380);var o={components:{OffCanvasMobileMenu:function(){return Promise.resolve().then(n.bind(null,371))},BreadcrumbOne:function(){return Promise.resolve().then(n.bind(null,372))}},data:function(){return{newsData:[{imgSrc:"/images/home/news-detail.png",title:"SDK St. Yusup Tropodo Sambut Bersama Masa Pertobatan Melalui Ibadat Prapaskah",author:"Admin",date:"4 Maret 2022",desc:"Memasuki Masa Prapaskah, SDK St. Yusup Tropodo menyelenggarakan ibadat untuk mengajak para siswa dalam menyambut masa pertobatan. Ibadat ini diselenggarakan secara daring pada Selasa, 1 Maret 2022 lalu. Megambil tema “Bersatu dengan Yesus dalam Ekaristi”, kegiatan Ibadat ini melibatkan seluruh siswa dari kelas 1 hingga kelas 6 . Tema “Bersatu dengan Yesus dalam Ekaristi” ini diambil selaras dengan tema Keuskupan Surabaya, dimana kita sebagai Umat Katolik perlu kembali Bersatu dengan Yesus melalui Sakramen Ekaristi dimanapun berada. Meski merayakan Ekaristis dari rumah pun, diharapkan umat tetap dapat merasakan kesatuan dengan Kristus itu sendiri. Ibadat Prapaskah SDK St. Yusup Tropodo ini diselenggarakan dari pukul 07.00 – 10.00 dengan terbagi menjadi 3 sesi. Dalam Ibadat ini, para siswa diajak untuk mendengarkan Firman Tuhan, menyanyikan lagu, memahami pertobatan, membaca dan mendapatkan tugas ayat hafalan. Cara Hidup Jemaat Pertama yang tertuang dalam Kisah Para Rasul 2 : 41 -47 menjadi bahan perunangan siswa dalam menyambut masa Pra-paskah. Peserta yang hadir mencapai kurang lebih 500 siswa ini bersama-sama menyambut masa Prapraskah dengan antusias. Antusiasme siswa terlihat dari sikap mereka terhadap materi yang disampaikan. Tidak hanya itu, para siswa juga menyanyi serta memuji Tuhan dengan meriah. Pada dasarnya tujuan utama kegiatan Ibadat ini yakni agar siswa dapat mengenali, memahami, serta memaknai makna puasa-pantang dalam masa pertobatan. Para siswa juga diajak untuk menerapkan 5B dalam masa Pra-Paskah; yakni bertobat, berdoa, baca firman, berderma, dan berpuasa atau berpantang. "}],items:[{text:"Beranda",to:"/"},{text:"Berita",active:!0}]}},head:function(){return{title:"Detail Berita"}}},r=n(54),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-container"},[e("OffCanvasMobileMenu"),t._v(" "),e("BreadcrumbOne",{attrs:{items:t.items,title:"Berita",backgroundUrl:"/images/bg/news-banner.png"}}),t._v(" "),e("div",{staticClass:"section-padding fix"},[e("div",{staticClass:"container"},[e("div",{staticClass:"mtn-50"},[e("div",{staticClass:"order-lg-1 mt-50"},[e("div",{staticClass:"row row-cols-1 no-gutters"},t._l(t.newsData,(function(n,o){return e("div",{key:o,staticClass:"col mt-30"},[e("div",{staticClass:"blog-3 blog-details col",attrs:{"data-aos":"fade-up"}},[e("div",{staticClass:"info"},[e("div",{staticClass:"thumbnail"},[e("img",{staticClass:"w-100",attrs:{alt:"Blog Image",src:n.imgSrc}})]),t._v(" "),e("ul",{staticClass:"meta mb-0 mt-4"},[e("li",[e("i",{staticClass:"fal fa-pencil-alt"}),t._v("Ditulis oleh "+t._s(n.author)+", "+t._s(n.date)+"\n                  ")]),t._v(" "),t._m(0,!0)])]),t._v(" "),e("div",{staticClass:"info"},[e("h3",{staticClass:"title",staticStyle:{"text-align":"center"}},[t._v("\n                  "+t._s(n.title)+"\n                ")]),t._v(" "),e("div",{staticClass:"desc",staticStyle:{"text-align":"justify"}},[t._v("\n                 "+t._s(n.desc)+"\n                ")])])])])})),0)])])])])],1)}),[function(){var t=this,e=t._self._c;return e("li",{staticClass:"media"},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fas fa-share-alt"}),t._v("Bagikan Berita")]),t._v(" "),e("div",{staticClass:"list"},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-facebook-f",staticStyle:{"font-size":"24px"}})]),t._v(" "),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-twitter",staticStyle:{"font-size":"24px"}})]),t._v(" "),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-whatsapp-square",staticStyle:{"font-size":"24px"}})])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{OffCanvasMobileMenu:n(371).default,BreadcrumbOne:n(372).default})}}]);