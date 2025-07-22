let parentCards = document.getElementById('parentcards')
let menu = document.querySelector('.menu')
let ul = document.querySelector('ul')
let picon = document.querySelector('.p-icon')

let arrOfSavedProduct = []

menu.onclick = () =>
{
    ul.classList.toggle('active')
    picon.classList.toggle('active2')

}

if(localStorage.getItem('products'))
{
    arrOfSavedProduct = JSON.parse(localStorage.getItem("products"))
}


let ArrayOfObjects = [];

 axios.get("https://fakestoreapi.com/products")
    .then((response) => {
        console.log(response.data)
        ArrayOfObjects = response.data;
        console.log(ArrayOfObjects)
         for(let i=0 ; i< ArrayOfObjects.length ; i++)
          {
              parentCards.innerHTML +=
                 `<div class="cards">
                      <img src="${ArrayOfObjects[i].image}" alt=''/>
                      <h2>${ArrayOfObjects[i].title.slice(0 , 12)}</h2>
                      <div class='ineer'>
                          <p>${ArrayOfObjects[i].price}$</p>
                          <i class="fa-solid fa-store" id=${ArrayOfObjects[i].id}></i>
                     </div>
                 </div>` 
          }

           ArrayOfObjects.forEach(element => {
               document.getElementById(element.id).addEventListener('click' , function() {
                   arrOfSavedProduct.push(element);
                   localStorage.setItem('products' , JSON.stringify(arrOfSavedProduct))
                   console.log(arrOfSavedProduct)
                   alert('product have been added sucessfully')
                })
             }); 
     })
     .catch(err => {
        console.log(err)
    })

    
         

           






