const adduserBtn = document.getElementById('addUser')
const usernameTextField = document.getElementById('username')
const recordsDisplay = document.getElementById('records')
let edit_id = null;
const btnText = adduserBtn.innerText


let userArray = []; //data store
// data get storage

let objstr = localStorage.getItem('users')
//console.log(objstr)
if(objstr  != null){
    userArray =JSON.parse(objstr)//convert string data to object

}
//console.log(userArray)
displayData()
adduserBtn.onclick = ()=>{
    //alert("Hello")

    const n = usernameTextField.value;
    //alert(name)
    //update user
    if(edit_id != null){
        userArray.splice(edit_id,1,{
            'name':n
        })
        edit_id = null
    }else{
        userArray.push({'name':n});
        //console.log(userarray);
    }
    savedata(userArray)
    usernameTextField.value ="";
    adduserBtn.innerText = btnText
    
}

function savedata(userArray)
{
    //console.log(userArray)
    let str = JSON.stringify(userArray); //convert object to string
    // console.log(str)
    localStorage.setItem('users',str);
    displayData()
}

function displayData(){
    //console.log(userArray)
    let data = '';
    userArray.forEach((user,i)=>{
        //console.log(user)
        data += `<tr>
        <th>${i+1}</th>
        <td>${user.name}</td>
        <td><i class="btn text-white fa fa-edit btn-info mx-2" onclick='EditInfo(${i})'></i> <i class="btn btn-danger text-white fa fa-trash" onclick='DeleteInfo(${i})'></i></td>
        </tr>`;
        //console.log(data)
    })
    recordsDisplay.innerHTML = data;
}
function EditInfo(id){
    //alert(i)
    edit_id = id
    usernameTextField.value = userArray[id].name;
    adduserBtn.innerText = 'update user';
}
function DeleteInfo(id)
{
    userArray.splice(id,1);
    savedata(userArray);
}
