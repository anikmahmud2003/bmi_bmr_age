var result = document.getElementById("result");
function selected(){
  var select = document.getElementById("select");
  document.getElementById("inputfield").style.display = "flex";
  var bmi_input = document.getElementById("bmi_input");
  var bmr_male_input = document.getElementById("bmr_male_input");
  var bmr_female_input = document.getElementById("bmr_female_input");
  var age_input= document.getElementById("age_input");
  
  if(select.value=="bmi"){
    bmi_input.style.display = "flex";
    bmr_male_input.style.display= "none";
    bmr_female_input.style.display = "none";
    age_input.style.display = "none"
  }
  if(select.value=="bmr_male"){
    bmi_input.style.display = "none";
    bmr_male_input.style.display = "flex";
    bmr_female_input.style.display = "none";
    age_input.style.display = "none"
  }
  if(select.value=="bmr_female"){
    bmi_input.style.display = "none";
    bmr_male_input.style.display = "none";
    bmr_female_input.style.display = "flex";
    age_input.style.display = "none"
  }
  if(select.value=="age"){
    bmi_input.style.display = "none";
    bmr_male_input.style.display = "none";
    bmr_female_input.style.display = "none";
    age_input.style.display = "flex"
  }
}
//bmi submit handling 
document.getElementById("bmi_submit").addEventListener("click", ()=>{
  let weight = document.getElementById("weight_bmi").value;
  let height = document.getElementById("height_bmi").value;
  let bmi = (weight/(height*height)).toFixed(2);
  
  if(bmi<=18.5){
    console.log("you are under weight");
    result.innerHTML= "Your BMI is "+ bmi +" which is under weight";
  }
  
  if(bmi>=18.5 && bmi<=24.99){
    console.log("your bmi is normal");
    result.innerHTML= "Your BMI is "+ bmi +" which is normal";
  }
  
  if(bmi>=25 && bmi<=29.99){
    console.log("excessive weight");
    result.innerHTML= "Your BMI is "+ bmi +" which is over weight";
  }
  
  if(bmi>=30 && bmi<=34.99){
    console.log("1st stage of obesity");
    result.innerHTML= "Your BMI is "+ bmi +" which is 1st stage of obesity";
  }
  
  if(bmi>=35 && bmi<=39.99){
    console.log("2nd stage of obesity");
    result.innerHTML= "Your BMI is "+ bmi +" which is 2nd stage of obesity";
  }
  
  if(40<=bmi){
    console.log("3rd stage of obesity");
    result.innerHTML= "Your BMI is "+ bmi +" which is 3rd stage of obesity";
  }
  
  console.log(bmi);
});

//bmr male submit handling 
document.getElementById("bmr_male_submit").addEventListener("click", ()=>{
  let weight = document.getElementById("weight_bmr_male").value;
  let height = document.getElementById("height_bmr_male").value;
  let age = document.getElementById("age_bmr_male").value;
  let bmr_male = 88.362 + (weight*13.397) + (height*4.799) - (age*5.677);
  console.log(bmr_male);
  
  let bmr = bmr_male.toFixed(2);
  result.innerHTML = "Your BMR is " + bmr;

});

//bmr female submit handling 
document.getElementById("bmr_female_submit").addEventListener("click", ()=>{
  let weight = document.getElementById("weight_bmr_female").value;
  let height = document.getElementById("height_bmr_female").value;
  let age = document.getElementById("age_bmr_female").value;
  
  let bmr_female = 447.593 + (weight*9.247) + (height*3.098) - (age*4.330);
  console.log(bmr_female);
  let bmr = bmr_female.toFixed(2);
  result.innerHTML = "Your BMR is " + bmr;
});

//submit handling age
document.getElementById("age_submit").addEventListener("click", ()=>{
  let age = document.getElementById("age").value;
  
  let birth_year = age.slice(0,4);
  let birth_month = age.slice(5,7);
  let birth_day = age.slice(8,10)
  console.log(birth_year,birth_month,birth_day);
  
  const date = new Date();
  
  let n_year = date.getFullYear();
  let n_month = date.getMonth()+1;
  let n_day = date.getDate();

  
  if(n_day>=birth_day && n_month>= birth_month && n_year>= birth_year){
    
    var age_year = n_year - birth_year;
    var age_month = n_month - birth_month;
    var age_day = n_day - birth_day;
    
  }
  
  if(n_day  <= birth_day && n_month <= birth_month && n_year>= birth_year){
    
    n_year = n_year - 1;
    n_month = n_month + 11;
    n_day = n_day + 30;
    
    var age_year = n_year - birth_year;
    var age_month = n_month - birth_month;
    var age_day = n_day - birth_day;
    
  }
  
  if(n_day  >= birth_day && n_month <= birth_month && n_year>= birth_year){
    
    n_year = n_year - 1;
    n_month = n_month + 12;
    
    var age_year = n_year - birth_year;
    var age_month = n_month - birth_month;
    var age_day = n_day - birth_day;
    
  }
  if(n_day  <= birth_day && n_month >= birth_month && n_year>= birth_year){
    
    n_month = n_month - 1;
    n_day = n_day + 30;
    
    var age_year = n_year - birth_year;
    var age_month = n_month - birth_month;
    var age_day = n_day - birth_day;
    
  }
  
  result.innerHTML = age_day + " Days " + age_month + " Months " + age_year +" Years ";

});