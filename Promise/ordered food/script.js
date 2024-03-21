function getOrderedFood(){
    let getFoodItems = []
    let checkbox = document.querySelectorAll(".food:checked")
    checkbox.forEach(function(ele){
        getFoodItems.push(ele.value)
    })
    return getFoodItems
    
}
// getOrderedFood()
function orderId(){
    return Math.random()
}
function orderFood(){
    let orderFood = getOrderedFood()
    if(orderFood==0){
        alert("Please Select at Least One item")
    }
    else{
        let div = document.getElementById("order-food")
        let id = document.getElementById("order-id");
        id.textContent = ""
        div.innerHTML = ""
        new Promise (function(resolve,reject){
            let number = Math.floor(Math.random()*5)+1;
              setTimeout(function(){
                resolve()
                orderFood.forEach(function(ele){
          
                   let img = document.createElement("img")
                   if(ele === "Momos"){
                    img.src = "https://www.bing.com/th?id=OIP._tgM80_g7K1ymkC1gpvxZAHaE8&w=146&h=120&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
                   }
                  else if(ele === "Burger"){
                    img.src = "https://th.bing.com/th?id=OIP.H07SGPpx-swRy0WfmnDIdwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
                  }
                  else if(ele === "Fries"){
                    img.src = "https://media.istockphoto.com/id/502893771/photo/french-fries-12.webp?b=1&s=170667a&w=0&k=20&c=hnWJADtmfvPDzo471IfYVCfKIn992xm8gjILkJD7e8o="
                  }
                  else{
                    img.src = "https://media.istockphoto.com/id/1361569276/photo/paneer-tikka-skewers-indian-vegetarian-appetizer.webp?b=1&s=170667a&w=0&k=20&c=ePFG0mSKOfOBBx5eQs98kIt-XvVVmHMvTDw1f0POGUE="
                  }
                    let p1 = document.createElement("p")
                    // p1.textContent = ele;
                    p1.appendChild(img)
                    div.append(p1)
                    id.textContent = ` Your Order Id is: ${orderId()}`
                    
                })
              },number*1000)
        })
    }
}










