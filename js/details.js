let searchNme = document.getElementById('searchNme')
let category = document.getElementById('category')
let area = document.getElementById('area')
let ingredients = document.getElementById('ingredients')
let contactUs = document.getElementById('contactUs')

$('#open').on('click', function(){
    if($('#open').hasClass('fa-solid fa-bars')){
        $('#open').removeClass('fa-solid fa-bars')
        $('#open').addClass('fa-solid fa-close')
        $('.side-head').animate({marginLeft: "0px"}, 1000, function(){
            $('header').animate({marginLeft:'100px'})
        })
    }else{
        $('#open').removeClass('fa-solid fa-close')
        $('#open').addClass('fa-solid fa-bars')
        $('.side-head').animate({marginLeft: "-150px"}, 1000, function(){
            $('header').css('marginLeft','300px')
        })
   
        } 
})

let loading = document.querySelector('.loading')



let searchParam = location.search
let params = new URLSearchParams(searchParam)
let id = params.get('id')
console.log(id);


(async function(){
    $('.loader').fadeOut(1000, function(){
        $('.loading').fadeOut(1000)
    })
    
   let api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
   let data = await api.json()
   console.log(data.meals);
   displayDetails(data.meals)

})();


function displayDetails(dataDetail){
    let box = ''
    for(let i = 0; i < dataDetail.length; i++){
         box = `
        <div class="col-md-4">
                   <figure>
                    <img src="${dataDetail[i].strMealThumb}" class="w-100 rounded" alt="">
                    <h3 class="text-white">${dataDetail[i].strMeal}</h3>
                   </figure>
                </div>
                <div class="col-md-8">
                    <figcaption class="text-white">
                    <h3>Instructions</h3>
                    <p>${dataDetail[i].strInstructions}</p>
                    <h3>Area: <span>${dataDetail[i].strArea}</span></h3>
                    <h3>Category: <span>${dataDetail[i].strCategory}</span></h3>
                    <h3>area: <span>croatian</span></h3>
                </figcaption>
                <div class="sort d-flex gap-2">
                    <p></p>
                    <p>ahmed</p>
                    <p>ahmed</p>
                    <p>ahmed</p>
                    <p>ahmed</p>
                    <p>ahmed</p>
                </div>
                </div>
        `
    }
   
    document.getElementById('detailData').innerHTML = box
}


searchNme.addEventListener('click', function(){
    location.href = './search.html'
})

category.addEventListener('click', function(){
    location.href = './category.html'
})
area.addEventListener('click', function(){
    location.href = './area.html'
    console.log('hello');
})

ingredients.addEventListener('click', function(){
    location.href = './ingredients.html'
    console.log('hello');
})

contactUs.addEventListener('click', function(){
    location.href = './contact.html'
})