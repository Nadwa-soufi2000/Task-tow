let parentCards = document.getElementById('parentcards')
let arrOfSavedProduct = []

console.log(arrOfSavedProduct)

if(localStorage.getItem('products'))
{
    arrOfSavedProduct = JSON.parse(localStorage.getItem("products"))
}

let ArrayOfObgects = [];


 axios.get("https://fakestoreapi.com/products")
    .then((response) => {
        console.log(response.data)
        ArrayOfObgects = response.data;
        console.log(ArrayOfObgects)
         for(let i=0 ; i< response.data.length ; i++)
          {
              parentCards.innerHTML +=
                 `<div class="cards">
                      <img src="${response.data[i].image}" alt=''/>
                      <h2>${response.data[i].title.slice(0 , 12)}</h2>
                      <div class='ineer'>
                          <p>${response.data[i].price}$</p>
                          <i class="fa-solid fa-store" data-value=${response.data[i]} id=${response.data[i].id}></i>
                     </div>
                 </div>` 

                document.getElementById(`${ArrayOfObgects[i].id}`).addEventListener('click' , function(e) {
                   arrOfSavedProduct.push(ArrayOfObgects[i]);
                   localStorage.setItem('products' , JSON.stringify(arrOfSavedProduct))
                   console.log(arrOfSavedProduct)
                   alert('product Added sucessfully')
                })
          }
     })
     .catch(err => {
        console.log(err)
    })







