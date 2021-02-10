const salon={
    name:"The Fashion Pet",
    address:{
        street:"Av. University",
        number:"192-k"
    },
    hours:{
        open:"8:00 am",
        close:"5:00 pm"
    },
    pets:[ ]
    
}
/*
    name, age, breed, gender, service, owners name, contact phone
*/
//document.getElementById("pets").innerHTML=`
 //<p> ${salon.pets.name} </p>
 
//`;
//for(var i=0;i<5;i++){
    //document.write(salon.pets[i].name);
//}

document.getElementById("footer-text").innerHTML=`
    <p> ${salon.name}  </p>
    <p> ${salon.address.street}, ${salon.address.number} </p>
    <p> It opens from ${salon.hours.open} to ${salon.hours.close}</p>
`;
//create the Pet Class

class Pet{
    constructor(name,age,breed,gender,service,owner,phone){
        this.name=name;
        this.age=age;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.owner=owner;
        this.phone=phone;
    }
}

//create pets using the constructor
var scooby=new Pet("Scooby",50,"Dane","Male","Full Service", "Shaggy","555-555-5555");
var scrapy=new Pet("Scrapy",40,"Dane","Male","Shower","Shaggy","555-555-5555"); 
var speedy=new Pet("Speedy",80,"Mixed", "Male","Nails cut","Bugs","333-333-3333");
var butch=new Pet("Butch",20,"Pitbull","Male","Full Service","Matt","555-555-555");
var carl=new Pet("Carl",22,"Mixed","Female","Trim","Steve","444-444-444"); 

//push the pets into the array
//salon.pets=[scooby,scrapy,speedy,butch,carl];
salon.pets.push(scooby);
salon.pets.push(scrapy);
salon.pets.push(speedy);
salon.pets.push(butch);
salon.pets.push(carl);
console.log(salon.pets);

//create the function register
function register(){
    // get the info from the inputs
    var txtName=document.getElementById("petNameTxt");
    var txtAge=document.getElementById("petAgeTxt");
    var txtBreed=document.getElementById("petBreedTxt");
    var txtGender=document.getElementById("petGenderTxt");
    var txtService=document.getElementById("petServiceTxt");
    var txtOwner=document.getElementById("ownerNameTxt");
    var txtPhone=document.getElementById("ownerPhoneTxt");
    
    // create a generic object
    var thePet=new Pet(txtName.value,txtAge.value,txtBreed.value,txtGender.value,txtService.value,txtOwner.value,txtPhone.value);
    console.log(thePet);


    // push the pet into the array
    salon.pets.push(thePet);
    
    //display function
    display();
}