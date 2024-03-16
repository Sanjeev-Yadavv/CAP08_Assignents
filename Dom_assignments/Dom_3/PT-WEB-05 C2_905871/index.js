// fill in javascript code here
// let arr = [1,2,3,4,5]
// localStorage.setItem("masai", JSON.stringify(arr))
let form = document.querySelector("form");
let tbody = document.querySelector("tbody")

form.addEventListener("submit", function(event){
    handleSubmit(event)
})
  
function handleSubmit(event){
  let arr = JSON.parse(localStorage.getItem("hospital")) || [];
  event.preventDefault()
    // console.log("submitted")
    let doctor = document.getElementById("name").value;
    
    let docID =  document.getElementById("docID").value;
    let spec  =  document.getElementById("dept").value;
    let exp   =  parseInt(document.getElementById("exp").value);
    let email =  document.getElementById("email").value;
    let mobile=  document.getElementById("mbl").value;
    let obj = {
          doctor        : doctor,
          docIDno       :  docID,
          specilization :  spec,
          experience    :  exp,
          emailID       :   email,
          mobileNo      :  mobile
    }

    // console.log(obj)
    arr.push(obj)
    localStorage.setItem("hospital", JSON.stringify(arr))
      ShowData()
  }

  function ShowData(){
    tbody.innerHTML = ""
    let arr = JSON.parse(localStorage.getItem("hospital")) || [];


    arr.forEach(function(ele,index){

      let role;
      if (ele.experience > 5) {
          role = "Senior";
      } else if (ele.experience <= 5 && ele.experience >= 2) {
          role = "Junior";
      } else {
          role = "Trainee";
      }
      let tr = document.createElement("tr");

      let td1 = document.createElement("td");
      td1.innerHTML = ele.doctor
      let td2 = document.createElement("td");
      td2.innerHTML = ele.docIDno
      let td3 = document.createElement("td");
      td3.innerHTML = ele.specilization
      let td4 = document.createElement('td');
        td4.innerHTML = ele.experience;
      let td5 = document.createElement("td");
      td5.innerHTML = ele.emailID
      let td6 = document.createElement("tr");
      td6.innerHTML = ele.mobileNo
      let td7 = document.createElement("td")
      td7.innerHTML = role
      let td8 = document.createElement("td");
      let dltbtn = document.createElement("button")
      dltbtn.innerHTML = "Delete"
      dltbtn.addEventListener("click", function(){
        DeleteTask(ele.docIDno)
      })



      td8.append(dltbtn)
      tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
      tbody.append(tr)

    })
  }

  function DeleteTask(id){
    let arr = JSON.parse(localStorage.getItem("hospital")) || [];
    arr = arr.filter(function(ele,index){
      return ele.docIDno!=id
    })
    localStorage.setItem("hospital",JSON.stringify(arr))
    ShowData();
  }