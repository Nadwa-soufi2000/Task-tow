
let nameEle = document.getElementById('name')
let price = document.getElementById('price')
let desc = document.getElementById('desc')
let img = document.getElementById('img')
let select = document.getElementById('select')
let button = document.getElementById('submit')


let nameEleValue = nameEle.value;
let priceValue = price.value;
let descValue = desc.value;
let imgFile = img.files[0];
let selectValue = select.value;

nameEle.onchange = () => 
{
    nameEleValue = nameEle.value;
}

price.onchange = () => 
{
    priceValue = price.value;
}

desc.onchange = () => 
{
    descValue = desc.value;
}

img.onchange = () => 
{
    imgFile = img.files[0];
}

select.onchange = () => 
{
    selectValue = select.value;
}



button.onsubmit = (e) =>
{
    e.preventDefault();
    let Form = new FormData()
      Form.append("image" , imgFile)
    
    let obj = {
      "title" : nameEleValue ,
      "price" :priceValue,
      "description": descValue,
      "category": selectValue,
      "image" : Form
    }
    console.log(obj)

    axios.post("https://fakestoreapi.com/products" , obj)
    .then(response => {
        console.log(response.data)
    })
    .catch(err => {
        console.log(err)
    })
}

