let nameInput = document.getElementById('name')
let emailInput = document.getElementById('email')
let phoneInput = document.getElementById('phone')
let ageInput = document.getElementById('age')
let passInput = document.getElementById('password')
let rePassInput = document.getElementById('repassword')
let submitBtn = document.getElementById('submitBtn')
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

// function validationInputs(input){
//     text=input.value
//     regx={
//       signUpName: /^([A-Z]|[a-z])+\w? ?\w{1,}$/,
//       signUpEmail: /^[A-Z]?(\w|\.){1,}\@gmail.com$/,
//       signUpPassword: /^([A-Z]|[a-z])+(\w|\.| |@){8,}$/,
//       signInEmail:/^[A-Z]?(\w|\.){1,}\@gmail.com$/,
//       signInPassword:/^([A-Z]|[a-z])+(\w|\.| |@){8,}$/,
//     };
//     if(regx[elemnt.id].test(text)){
//       elemnt.classList.add("is-valid")
//       elemnt.classList.remove("is-invalid")
//       return true
//     }else{
//       elemnt.classList.add("is-invalid")
//       elemnt.classList.remove("is-valid")
//       return false
//     }
//     }
//     if(closebox_modal){
//       closebox_modal.addEventListener('click',function(e){
//         box_modal.classList.add('d-none')
//       })
//     }

    function validationInputs(elemnt){
        let text=elemnt.value
         regx={
             inputName: /^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/,
             inputEmail: /^[a-z0-9!#$%&'*+/=?^_{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
             inputPhone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
             inputAge: /^([1-7][0-9]|80)$/,
             inputPassword: /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/,
             inputRepassword: /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/,
         };
         if(regx[elemnt.id].test(text)){
           elemnt.classList.add("is-valid")
           elemnt.classList.remove("is-invalid")
           return true
         }else{
           elemnt.classList.add("is-invalid")
           elemnt.classList.remove("is-valid")
           return false
         }
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
