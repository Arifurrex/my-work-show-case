const allCardsInformation = [
    {
     link:"https://flexbox-arifur.netlify.app/",
     img:"image/card-showcare-image/flex-image.png",
     title:"all about flexbox css",
     date:"12 december 2024",
     view:"3000"
    },
    {
        link:"https://grid-arifur.netlify.app/",
        img:"image/card-showcare-image/grid.png",
        title:"all about gird css",
        date:"12 december 2024",
        view:"200"
    },
    {
        link:"https://web-template-by-grid-arifur.netlify.app/",
        img:"image/card-showcare-image/grid-template.png",
        title:"grid-template",
        date:"12 december 2024",
        view:"100"
    },
    {
        link:"https://superheroreturn-arifur.netlify.app/",
        img:"image/card-showcare-image/superHeroCss.png",
        title:"card 3d effect",
        date:"12 december 2024",
        view:"200"
    },
    {
        link:"https://particle-canvas-arifur.netlify.app/",
        img:"image/card-showcare-image/particleJs.png",
        title:"particle Js",
        date:"12 december 2024",
        view:"200"
    },
    {
        link:"https://responsivetailwindcss-arifur2.netlify.app/",
        img:"image/card-showcare-image/tailwindCssResponsive.png",
        title:"responsive tailwind css",
        date:"12 december 2024",
        view:"1200"
    },
    {
        link:"https://card-js-arifur.netlify.app/",
        img:"image/card-showcare-image/cardJs.png",
        title:" card js",
        date:"12 december 2024",
        view:"200"
    },
    {
        link:"https://timer-js-arifur.netlify.app/",
        img:"image/card-showcare-image/timer js.png",
        title:"javascript timer",
        date:"12 may 2024",
        view:"1500"
    },
    {
        link:"https://single-page-shoe.netlify.app/",
        img:"image/card-showcare-image/single page shoe.png",
        title:"single page shoe",
        date:"2 may 2023",
        view:"1000"
    },
    {
        link:"https://tagjs-arifur.netlify.app/",
        img:"image/card-showcare-image/tag js.png",
        title:"tag js",
        date:"21 june 2023",
        view:"1020"
    },
    {
        link:"https://tabbed-content-arifur.netlify.app/",
        img:"image/card-showcare-image/tabbed content js.png",
        title:"tabbed content js",
        date:"21 june 2021",
        view:"1020"
    },
    {
        link:"https://treeview-navigation-arifur.netlify.app/",
        img:"image/card-showcare-image/treeview navigation.png",
        title:"tree view navigation",
        date:"1 october 2021",
        view:"120"
    },
    {
        link:"https://sticky-nav-arifur.netlify.app/",
        img:"image/card-showcare-image/sticky navigation.png",
        title:"sticky navigation js",
        date:"1 october 2019",
        view:"120"
    },
    {
        link:"https://cope-this-code-for-web-template.netlify.app/",
        img:"image/card-showcare-image/cope this code for template.png",
        title:"cope this code for web template",
        date:"21 june 2021",
        view:"1020"
    },
    {
        link:"https://splite-screen.netlify.app/",
        img:"image/card-showcare-image/splite screen.png",
        title:"splite screen",
        date:"1 june 2019",
        view:"20"
    },
    {
        link:"https://social-proof-frontendmentor-arifur.netlify.app/",
        img:"image/card-showcare-image/social proof frontendmentor.png",
        title:"social proof frontendmentor",
        date:"1 april 2021",
        view:"200"
    },
    {
        link:"https://myprotfoli2019.netlify.app/",
        img:"image/card-showcare-image/myprotfoli2019.png",
        title:"myprotfoli2019.png",
        date:"1 january 2019",
        view:"400"
    },
    {
        link:"https://card3d-arifur.netlify.app/",
        img:"image/card-showcare-image/card3d.png",
        title:"card 3d ",
        date:"2 january 2019",
        view:"10"
    },
    {
        link:"https://responsivelayoutone-arifur.netlify.app/",
        img:"image/card-showcare-image/responsive layout.png",
        title:"responsive layout ",
        date:"12 july 2020",
        view:"100"
    },
    {
        link:"https://carasoul-js.netlify.app/",
        img:"image/card-showcare-image/carasoul js.png",
        title:"carasoul js ",
        date:"22 june 2020",
        view:"120"
    },
    {
        link:"https://medilab-svg-arifur.netlify.app/",
        img:"image/card-showcare-image/medilabsvg.png",
        title:"madi lab svg",
        date:"2 june 2020",
        view:"20"
    },
    {
        link:"https://mandrial-arifur.netlify.app/",
        img:"image/card-showcare-image/mandrial.png",
        title:"mandrial grid",
        date:"21 june 2020",
        view:"210"
    },
    {
        link:"https://anjuman-navigation-arifur.netlify.app/",
        img:"image/card-showcare-image/anjuman-navigation.png",
        title:"anjuman-navigation",
        date:"21 june 2022",
        view:"1110"
    },
    {
        link:"https://hero-banner-swipperjs-arifur.netlify.app/",
        img:"image/card-showcare-image/swipperjs-hero-banner.png",
        title:"swiperjs hero banner",
        date:"21 february 2023",
        view:"1102"
    },
    {
        link:"https://agency-arifur.netlify.app/",
        img:"image/card-showcare-image/agency.png",
        title:"agency single page",
        date:"3 november 2023",
        view:"402"
    },
    {
        link:"https://card-designe.netlify.app/",
        img:"image/card-showcare-image/card-designe.png",
        title:"card-designe",
        date:"13 october 2023",
        view:"02"
    },
]
const cards = document.querySelector('.cards');

const makeHtml= (data)=>{
    return(`<div class="card md:w-32">
    <img src="${data.img}" alt="" class="card-image">
    <div class="card-details proza-libre-medium">
        <h3 class="card-title inter-body-text"><a href="${data.link}" loading="lazy">${data.title}</a></h3>
        <div class="card-information">
            <div class="card-date inter-subheading">${data.date}</div>
            <div class="card-view inter-subheading">${data.view}</div>
        </div>
    </div>
</div>  
      
    `)
}

cards.innerHTML = allCardsInformation.map(x=>{
    let insideHtml = makeHtml(x);
    return insideHtml;
  }).join(" ");