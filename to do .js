const adduserBtn = document.getElementById('addUser')
const usernameTextField = document.getElementById('username')


let userArray = []; //data store

adduserBtn.onclick = ()=>{
    //alert("Hello")
    const n = usernameTextField.value;
    //alert(name)
    userArray.push({'name':n});
    //console.log(userArray);
    savedata(userArray)
}

function savedata(userArray)
{
    //console.log(userArray)
    let str = JSON.stringify(userArray); //convert object to string
    // console.log(str)
    localStorage.setItem('users',str);
}
