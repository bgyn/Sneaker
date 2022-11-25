const sliderwraperEl=document.querySelector(".sliderwrapper");
const menuItemsEl=document.querySelectorAll(".menuItem");
const product=[
    {
        id:1,
        title: "AIR FORCE",
        price: 119,
        colors: [
            {
                code :"black",
                img: "./img/air.png",
            },
            {
                code: "lightblue",
                img: "./img/air2.png",
            }
        ]
    },
    {
        id:2,
        title: "JORDAN",
        price: 249,
        colors: [
            {
                code :"white",
                img: "./img/jordan.png",
            },
            {
                code: "lightgreen",
                img: "./img/jordan2.png",
            }
        ]
    },
    {
        id:3,
        title: "BLAZERS",
        price: 499,
        colors: [
            {
                code :"white",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            }
        ]
    },
    {
        id:4,
        title: "CRATERS",
        price: 299,
        colors: [
            {
                code :"black",
                img: "./img/crater.png",
            },
            {
                code: "white",
                img: "./img/crater2.png",
            }
        ]
    },
    {
        id:5,
        title: "HIPPIE",
        price: 99,
        colors: [
            {
                code :"lightbrown",
                img: "./img/hippie.png",
            },
            {
                code: "darkgray",
                img: "./img/hippie2.png",
            }
        ]
    }
]

let chooseProduct = product[0];
const currentProductImage=document.querySelector(".productimg")
const currentProductTitle=document.querySelector(".producttitle");
const currentProductPrice=document.querySelector(".productprice");
const currentProductColor=document.querySelectorAll(".color");
const currentProductSize=document.querySelectorAll(".size");
const paymentEl=document.querySelector(".payment");
const checkoutBtnEl=document.querySelector(".checkoutbtn");
const closeBtnEl=document.querySelector(".closebtn");
const productBuyEl=document.querySelector(".productbtn");

menuItemsEl.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        // change product
        paymentEl.style.display="none";
        removeClass();
        sliderwraperEl.style.transform=`translate(${-100*index}vw)`;
        chooseProduct=product[index];
        currentProductTitle.textContent= product[index].title;
        currentProductPrice.textContent="$" +product[index].price;
        currentProductImage.src=chooseProduct.colors[0].img;
        currentProductColor.forEach((color,colorIndex)=>{
            color.style.backgroundColor=chooseProduct.colors[colorIndex].code;
            color.addEventListener("click",()=>{
                currentProductImage.src=chooseProduct.colors[colorIndex].img;
            })
        })
    })
})
function removeClass()
{
    currentProductSize.forEach((size)=>{
        size.classList.remove("active");
    })
}
currentProductSize.forEach((size)=>{
    size.addEventListener("click",()=>{
        removeClass();
        size.classList.add("active");
    })
})



productBuyEl.addEventListener("click",()=>{
    paymentEl.style.display="flex";
})
closeBtnEl.addEventListener("click",()=>{
    paymentEl.style.display="none";
})
