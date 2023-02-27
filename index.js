 let a = + document.getElementById('jacket-price').textContent;
 let b = + document.getElementById('sneakers-price').textContent;
 let c = + document.getElementById('jeans-price').textContent;
 let d = + document.getElementById('belt-price').textContent;
 let e=a+b+c+d;
 document.getElementById('total-all').innerHTML=e;





function price(){
        let f= a - (20/100*a);
        document.getElementById('jacket-price').innerHTML=f;
}

function price2(){
        let g= b - (20/100*b);
        document.getElementById('sneakers-price').innerHTML=g;
}

function price3(){
    let h= c - (20/100*c);
    document.getElementById('jeans-price').innerHTML=h;
}

function price4(){
    let i= d - (20/100*d);
    document.getElementById('belt-price').innerHTML=i;
}

function price5(){
    let j= e - (20/100*e);
    document.getElementById('total-all').innerHTML=j;
}



// function total () {
//     const all= document.querySelectorAll(".item-price");
//     const arr=Array.from(all);
//     arr.forEach((element) => {
//         const elementPrevState=element.textContent;
//         const newprice= + elementPrevState[0]-(20/100*elementPrevState[0]);
//                 element.textContent =`${newprice} ${elementPrevState[1]}`; 
//             });
//         }

document
.querySelector("button")
.addEventListener("click", () => total());
