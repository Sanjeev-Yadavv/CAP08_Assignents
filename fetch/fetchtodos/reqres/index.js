let btn = document.getElementById("fetchButton");
btn.addEventListener("click",()=>{
  let container = document.getElementById("userContainer")
  container.innerHTML = ""
  fetchUsers()
})

function fetchUsers(){
  fetch("https://reqres.in/api/users")
  .then((res)=>{
    return res.json()
  })
  .then((data)=>{
    // console.log(data)
    displayData(data.data)
  })
}

function displayData(arr){
  let container = document.getElementById("userContainer")
  container.innerHTML = ""
  arr.forEach(ele => {
       let userCard = document.createElement("div")
       userCard.classList.add("user-card") 
       
       let userName = document.createElement("h2")
       userName.textContent = `Name - ${ele.first_name} ${ele.last_name}`

       let userEmail = document.createElement("p")
       userEmail.textContent = `Email - ${ele.email}`

       let userAvatar = document.createElement("img")
       userAvatar.src = ele.avatar

       userCard.append(userAvatar,userName,userEmail)
       container.append(userCard)
  });
}











// document.getElementById("fetchButton").addEventListener("click", fetchUsers);

// function fetchUsers() {
//   fetch("https://reqres.in/api/users")
//     .then(response => response.json())
//     .then(data => {
//       displayUsers(data.data);
//     })
//     .catch(error => console.log(error));
// }

// function displayUsers(users) {
//   const userContainer = document.getElementById("userContainer");
//   userContainer.innerHTML = "";

//   users.forEach(user => {
//     const userCard = document.createElement("div");
//     userCard.classList.add("user-card");

//     const userName = document.createElement("h2");
//     userName.textContent = `${user.first_name} ${user.last_name}`;

//     const userEmail = document.createElement("p");
//     userEmail.textContent = user.email;

//     const userAvatar = document.createElement("img");
//     userAvatar.src = user.avatar;
//     userAvatar.alt = `${user.first_name} ${user.last_name}`;

//     userCard.appendChild(userAvatar);
//     userCard.appendChild(userName);
//     userCard.appendChild(userEmail);

//     userContainer.appendChild(userCard);
//   });
// }
