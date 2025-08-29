
const loveContainer = document.getElementById('love-container')
let love  = 0;
const coinContainer = document.getElementById('coin-container')
let num =  parseInt(coinContainer.innerText);
 const callHistory = []

// change item
const cardLove = document.getElementById('card-1')

const callBtn = document.getElementById('call-btn-1')

//love icon
cardLove.addEventListener('click', function(){
    
    love = love + 1;
    loveContainer.innerText = love

})
// copy btn
// 
//call



callBtn.addEventListener('click', function(){
      
    if(num < 20){
        alert('you dont have enough coins. you need at least 20 coins to make a call.')
        return
    }
     num -= 20;
       coinContainer.innerText = num;
       alert('calling National Emergency service 999')

        const data = {
        name: 'National Emergency Number',
        number: 999,
       date:new Date().toLocaleTimeString()
    }
    callHistory.push(data)
    const historyContainer = document.getElementById('history-container')
    const div = document.createElement("div")
        div.innerHTML=`
                   <div class="bg-[#fafafa] flex justify-between items-center my-3 px-3">
                        <div class="">
                            <h1class=" font-bold" >${data.name}</h1>
                            <p>${data.number}</p>
                        </div>
                        <p>${data.date}</p>
                    </div> `
    historyContainer.appendChild(div)
})

//card 2
const cardLove2 = document.getElementById('card-btn-2')

const callBtn2 = document.getElementById('call-btn-2')
//const loveContainer = document.getElementById('love-container')
let love2  = 0;
//love icon
cardLove2.addEventListener('click', function(){
    
    love2 = love2 + 1;
    loveContainer.innerText = love2

})
// copy btn
// 
//call



callBtn2.addEventListener('click', function(){
      
    if(num < 20){
        alert('you dont have enough coins. you need at least 20 coins to make a call.')
        return
    }
     num -= 20;
       coinContainer.innerText = num;
       alert('calling Police Helpline service 999')

        const data = {
        name: 'Police Helpline Number',
        number: 999,
       date:new Date().toLocaleTimeString()
    }
    callHistory.push(data)
    const historyContainer = document.getElementById('history-container')
    const div = document.createElement("div")
        div.innerHTML=`
                   <div class="bg-[#fafafa] flex justify-between items-center my-3 px-3">
                        <div class="">
                            <h1class=" text-xl font-bold" >${data.name}</h1>
                            <p>${data.number}</p>
                        </div>
                        <p>${data.date}</p>
                    </div> `
    historyContainer.appendChild(div)
})

// clear-btn
const clearBtn = document.getElementById('clear-btn')
const historyContainer = document.getElementById('history-container')
clearBtn.addEventListener('click', function(){
    historyContainer.innerHTML = ''
    callHistory.length = 0
})