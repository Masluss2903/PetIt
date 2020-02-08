var data = [
  {
    "sn":"S",
    "vaccineType":"PARVOVIROSIS",
    "vaccineDate":"15/01/2018",
    "vaccineDescription":"PARVOVIROSIS CANINA"

  },{
    "sn":"S",
    "vaccineType":"QUÍNTUPLE 1RA",
    "vaccineDate":"23/03/2018",
    "vaccineDescription":"PARVOVIROSIS/MOQUILLO/HEPATITIS/PARAINFLUENZA"
  },{
    "sn":"S",
    "vaccineType":"QUÍNTUPLE 2RA",
    "vaccineDate":"08/05/2019",
    "vaccineDescription":"PARVOVIROSIS/MOQUILLO/HEPATITIS/PARAINFLUENZA"
  },{
    "sn":"S",
    "vaccineType":"SEXTUPLE",
    "vaccineDate":"11/11/2019",
    "vaccineDescription":"LEPTOSPIROSIS CANINA"
  },{
    "sn":"N",
    "vaccineType":"TOS DE LAS PERRERAS",
    "vaccineDate":"2/02/2020",
    "vaccineDescription":"RABIA CANINA"
  }
];


var datoscartilla = {
  "petName":"Siri",
  "petGender":"Hembra",
  "petBirthDate":"01 de diciembre del 2017",
  "petBreed":"Golden Retriever",
  "petId":"986214554",
  "petColor":"Blanco",
  "petPic":"assets/JPEG/siri.jpg"
};
var datosCartillaOwner ={
    "petOwner":"María Martínez",
    "petAddress":"Av. Argómedo #6241,Villa altos del nilo,Guadalajara",
    "petPhone":"33-44-66-77-99",
};
var datosCartillaVet = {
  "petVetName":"Clínica Guau Vet",
};

$(document).ready(function() {
  llenarInfo()
  llenarInfoOwner()
  llenarInfoVet()
  llenarTabla();
});

function llenarInfo() {
  $.ajax({
    url:"http://localhost:8080/pet/1"
  }).then(function(datoscartilla){
    setLabelText('#petName', datoscartilla.name)
    setLabelText('#petGender', datoscartilla.gender)
    setLabelText('#petBirthDate', datoscartilla.birthday)
    setLabelText('#petBreed', datoscartilla.breed)
    setLabelText('#petId', datoscartilla.id)
    setLabelText('#petColor', datoscartilla.color);
    //$("#petPic").attr("src",datoscartilla.petPic);
  });

}

function llenarInfoOwner(){
  setLabelText('#petOwner', datosCartillaOwner.petOwner)
  setLabelText('#petAddress', datosCartillaOwner.petAddress)
  setLabelText('#petPhone', datosCartillaOwner.petPhone)
}

function llenarInfoVet(){
    setLabelText('#petVetName', datosCartillaVet.petVetName)
}

function setLabelText(labelId, labelText){
  $(labelId).empty()
  $(labelId).append(labelText)
}


function llenarTabla() {
  $('#table_vacunas').bootstrapTable({data:data})
}

function element(value){
  if(value === "S"){
    return value = '<i class="fas fa-check ok"></i>'
  } else{
    return value = '<i class="fas fa-times not"></i>'
  }
}
