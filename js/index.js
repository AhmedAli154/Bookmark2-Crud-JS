var tbody = document.getElementById("tbodyy")
var siteinput =document.getElementById("Bookmarkinput")
var urlinput =document.getElementById("UrlInput")

//-------------------------------------------
var AddItem =[];
if(localStorage.getItem("name") !=null){
AddItem = JSON.parse(localStorage.getItem("name"));
displayItem();

}



function AddBookmark(){
    if (validationName()==true &&validationUrl()==true){
    var bookmarktable ={
    name:siteinput.value,
    url:urlinput.value,
    }
    
        AddItem.push(bookmarktable);
        localStorage.setItem("name",JSON.stringify(AddItem))
        console.log(AddItem)

        displayItem();
        emptyInput();
    }else{
            window.alert(`Site Name or Url is not valid, Please follow the rules below :

                 Site name must contain at least 3 characters

                Site URL must be a valid one`)  
    }



}
//--------------------------
function displayItem(){
    var displayy =" ";
    for(i=0;i<AddItem.length;i++){
        displayy+=`
        <tr>
    <td> ${AddItem[i].name}</td>
    <td >  ${AddItem [i].url} </td>
    <td> <a target="_blank"  href="${AddItem [i].url}"> <button class="btn  text-white bgg" id="visitButton"   > <i class="fa-solid fa-eye" style="color: #ffffff;"></i> visit</button> </td>
    <td> <button class="btn bggg  text-white " onclick="DeleteItem(${i})"><i class="fa-solid fa-trash-can" style="color: #ffffff;"></i>  Delete</button> </td>
        
        </tr>
        `
var ddd=AddItem [i].url ;
    
    }

    document.getElementById("tbodyy").innerHTML=displayy;
}
//-------------------------------
function DeleteItem(index){
    AddItem.splice(index,1)
    displayItem();
    localStorage.setItem("name",JSON.stringify(AddItem))

}
//----------------------

function validationName(){
           var nameinput= siteinput.value
        var validName = /^[A-Za-z]{3,}$/
    if(validName.test(nameinput)==true){
        siteinput.classList.add("is-valid")
        siteinput.classList.remove("is-invalid")
        return true
    }
    else{
        siteinput.classList.add("is-invalid")
        siteinput.classList.remove("is-valid")
        return false
    }
    }
    //-----------------------------
    function validationUrl(){
        var Urlinput= urlinput.value
     var validUrl = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/
 if(validUrl.test(Urlinput)==true){
    urlinput.classList.add("is-valid")
     urlinput.classList.remove("is-invalid")
     return true
 }
 else{
    urlinput.classList.add("is-invalid")
    urlinput.classList.remove("is-valid")
     return false
 }
 }
 //---------------------------------------
//  function openInNewTab() {
//     window.open( urlinput.value , '_blank').focus();
//   }
//  --------------------------------
function emptyInput(){
    siteinput.value=""
    urlinput.value =""  
}