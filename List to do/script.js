 const userList = document.getElementById("inputListToShowTask")

document.getElementById("addTaskBtn").addEventListener("click", taskAddtoList)
document.getElementById("findTaskbtn").addEventListener("change", findTask)

function taskAddtoList(){
    
    let userInput = inputBar.value
    console.log(userInput)
    userList.innerHTML +=    `  <li class="list-group-item mt-5 d-flex justify-content-between align-items-center">
    ${userInput}
    <button type="button" id="removeTaskBtn" class="btn btn-outline-danger btn-sm ml-2">Remove</button>
    </li>`
    inputBar.value = ""
    document.getElementById("removeTaskBtn").addEventListener("click", removeTask)
}



function findTask(){
    console.log(inputBar.value)
}

function removeTask (){
    confirm("Are you suerly want to remove it")
    // alert("ahaa")
}


