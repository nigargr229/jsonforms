 username = document.forms['objectForm']['userName'],
 userSurname = document.forms['objectForm']['userSurname'],
 userBirthday = document.forms['objectForm']['userBirthday'],
 userEmail =  document.forms['objectForm']['userEmail'],
 deleteIdValue =  document.getElementById('deleteId');



let personArray = [];
let personId =0;

const letters = /^['a-z']*$/i,
      onlyNumber = /^[0-9]*$/,
      dateFormat = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/,
      emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
const myForm =  document.getElementById('myForm');

let personListContainer = document.getElementById('personList');

function checkInput()
{

 if(username.value == '' || userSurname.value == '' || userBirthday.value == '' || userEmail.value == '')
 {
   myForm.innerHTML = 'INPUTS ARE EMPTY';
   myForm.classList.remove('d-none');
  
   cleanInput(username);
   cleanInput(userSurname);
   cleanInput(userBirthday);
   cleanInput(userEmail);
   return false;
 }
 else if(!username.value.match(letters) || !userSurname.value.match(letters))
 {
  myForm.innerHTML = 'PLEASE ENTER ONLY TEXT';
  myForm.classList.remove('d-none');
 
  cleanInput(username);
  cleanInput(userSurname);
  cleanInput(userBirthday);
  cleanInput(userEmail);
  return false; 
 }

 else if(!userBirthday.value.match(dateFormat))
 {
  myForm.innerHTML = 'DATE EXAMPLE: 09-01-2000';
  myForm.classList.remove('d-none');
 
  cleanInput(username);
  cleanInput(userSurname);
  cleanInput(userBirthday);
  cleanInput(userEmail);
 }

 else if(!userEmail.value.match(emailFormat))
 {
  myForm.innerHTML = 'EMAIL EXAMPLE: code@code.com';
  myForm.classList.remove('d-none');
 
  cleanInput(username);
  cleanInput(userSurname);
  cleanInput(userBirthday);
  cleanInput(userEmail);
 }
 else
 {
  
 function Person(id, name, surname, birthday,  email)
 {
   this.id = id;
   this.name = name;
   this.surname = surname;
   this.birthday = birthday;
   this.age = function()
   {
    let birtdayYear =  Number(this.birthday.substr(this.birthday.length - 4));
    let ourDate = new Date();
    let nowYear = ourDate.getFullYear();
    return  Number(nowYear) - birtdayYear;
   }
   this.email = email;
 }

     personId +=1;
 

 
let newPerson = new Person(personId, username.value, userSurname.value, userBirthday.value,  userEmail.value);

   personArray.push(newPerson);
   

   let newList = document.createElement('UL');
       newList.classList.add('list-group');
       newList.classList.add('mt-3');
      
    personArray.forEach(element =>
      {
        if(personArray.length > 1)
        {
         personList.removeChild(personList.childNodes[0]);
        }
        let node = document.createElement('LI');
            node.classList.add('list-group-item')
        let textNode = document.createTextNode(element.id + '. ' + element.name + ' ' + element.surname + ' ' + element.age() + ' ' + element.email);
        node.appendChild(textNode);
    
        newList.appendChild(node);
    
        personList.appendChild(newList);
      });

  
 cleanInput(username);
 cleanInput(userSurname);
 cleanInput(userBirthday);
 cleanInput(userEmail);

 myForm.classList.add('d-none');
  return false;
 }

 return false;
}



function deleteId()
{
  let idValue = deleteIdValue.value;
  if(!idValue.match(onlyNumber))
  {
    myForm.innerHTML = 'PLEASE ENTER ONLY NUMBER';
    myForm.classList.remove('d-none');  
  }
  else if(idValue < 0)
  {
    myForm.innerHTML = 'ID IS BIGGER THAN ZERO';
    myForm.classList.remove('d-none'); 
  }
  else if(personArray.length == 0)
  {
    myForm.innerHTML = 'TRY AGAIN';
    myForm.classList.remove('d-none');
  }

  else
  {
    personArray.forEach(element =>
      {
        if(idValue == element.id)
        {
    
          let index = personArray.indexOf(element);
          console.log(index);
        
          personArray.splice(index, 1);
       
          personList.innerHTML = '';
        
          let newList =  document.createElement('UL');
              newList.classList.add('list-group');
              newList.classList.add('mt-3');
  
              personArray.forEach(item => 
                {
                  let node =  document.createElement('LI');
                      node.classList.add('list-group-item');
                  let textNode = document.createTextNode(item.id + '. ' + item.name + ' ' + item.surname + ' ' + item.age() + ' ' + item.email)
                      node.appendChild(textNode);
                      newList.appendChild(node);
                      personList.appendChild(newList);
                })
        }
        cleanInput(deleteIdValue);
    
        alertForm.classList.add('d-none');
    
      });
  }
 
  
}


function sortForId()
{

  personArray.sort(function(a, b){ return a.id - b.id});
  
  let newList = document.createElement('UL');
       newList.classList.add('list-group');
       newList.classList.add('mt-3');
      
    personArray.forEach(element =>
      {
        if(personArray.length > 1)
        {
          personList.removeChild(personListContainer.childNodes[0]);
        }
        let node = document.createElement('LI');
            node.classList.add('list-group-item')
        let textNode = document.createTextNode(element.id + '. ' + element.name + ' ' + element.surname + ' ' + element.age() + ' ' + element.email);
        node.appendChild(textNode);
        newList.appendChild(node);
        personList.appendChild(newList);
      });
     
    myForm.classList.add('d-none');
}
function sortForName()
{
 if(personArray.length > 1)
 {
  personArray.sort(function(a,b)
  {
    let firstElement = a.name.toLowerCase();
    let secondElement = b.name.toLowerCase();
    if(firstElement < secondElement)
    {
      return -1;
    }
    if(firstElement > secondElement)
    {
      return 1;
    }

    return 0;
  })
let newList = document.createElement('UL');
    newList.classList.add('list-group');
    newList.classList.add('mt-3');
   
 personArray.forEach(element =>
   {
     if(personArray.length > 1)
     {
       personList.removeChild(personList.childNodes[0]);
     }
     let node = document.createElement('LI');
         node.classList.add('list-group-item')
     let textNode = document.createTextNode(element.id + '. ' + element.name + ' ' + element.surname + ' ' + element.age() + ' ' + element.email);
     node.appendChild(textNode);
     newList.appendChild(node);
     personList.appendChild(newList);
   });
 }
}


function sortForSurname()
{
  if(personArray.length > 1)
  {
   personArray.sort(function(a,b)
   {
     let firstElement = a.surname.toLowerCase();
     let secondElement = b.surname.toLowerCase();
     if(firstElement < secondElement)
     {
       return -1;
     }
     if(firstElement > secondElement)
     {
       return 1;
     }
 
     return 0;
   })
 let newList = document.createElement('UL');
     newList.classList.add('list-group');
     newList.classList.add('mt-3');
    
  personArray.forEach(element =>
    {
      if(personArray.length > 1)
      {
        personList.removeChild(personList.childNodes[0]);
      }
      let none = document.createElement('LI');
          none.classList.add('list-group-item')
      let textNone = document.createTextNone(element.id + '. ' + element.name + ' ' + element.surname + ' ' + element.age() + ' ' + element.email);
      node.appendChild(textNone);
      newList.appendChild(none);
      personList.appendChild(newList);
    });
  }

   myForm.classList.create('d-none');
}

function cleanInput(item){item.value = ''};
