// clear-btn
const clearBtn = document.getElementById('clear-btn')
const historyContainer = document.getElementById('history-container')
clearBtn.addEventListener('click', function(){
    historyContainer.innerHTML = ''
    callHistory.length = 0
})




//love icon
const loveContainer = document.getElementById('love-container')
let love  = 0;
document.getElementById('card-1')
.addEventListener('click', function(){
    
    love = love + 1;
    loveContainer.innerText = love

})
document.getElementById('card-btn-2')
.addEventListener('click', function(){
    love = love + 1;
    loveContainer.innerText = love
})
document.getElementById('card-btn-3')
.addEventListener('click', function(){
    love = love + 1;
    loveContainer.innerText = love
})
document.getElementById('card-btn-4')
.addEventListener('click', function(){
    love = love + 1;
    loveContainer.innerText = love
})
document.getElementById('card-btn-5')
.addEventListener('click', function(){
    love = love + 1;
    loveContainer.innerText = love
})
document.getElementById('card-btn-6')
.addEventListener('click', function(){
    love = love + 1;
    loveContainer.innerText = love
})






//call btn

const coinContainer = document.getElementById('coin-container')
let num =  parseInt(coinContainer.innerText);
 const callHistory = []

document.getElementById('call-btn-1')
.addEventListener('click', function(){
      
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
    
    const div = document.createElement("div")
        div.innerHTML=`
                  <div class="bg-[#fafafa] flex justify-between items-center my-3 px-3">
                        <div class="">
                            <h1 class="font-semibold text-[20px]">${data.name}</h1>
                            <p>${data.number}</p>
                        </div>
                        <p>${data.date}</p>
                    </div> `
    historyContainer.appendChild(div)
})
// call btn 2
document.getElementById('call-btn-2')
.addEventListener('click', function(){
      
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
    
    const div = document.createElement("div")
        div.innerHTML=`
                  <div class="bg-[#fafafa] flex justify-between items-center my-3 px-3">
                        <div class="">
                            <h1 class="font-semibold text-[20px]">${data.name}</h1>
                            <p>${data.number}</p>
                        </div>
                        <p>${data.date}</p>
                    </div> `
    historyContainer.appendChild(div)
})
// call btn 3
document.getElementById('call-btn-3')
.addEventListener('click', function(){
      
    if(num < 20){
        alert('you dont have enough coins. you need at least 20 coins to make a call.')
        return
    }
     num -= 20;
       coinContainer.innerText = num;
       alert('calling Fire service 999')

        const data = {
        name: 'Fire Service Number',
        number: 999,
       date:new Date().toLocaleTimeString()
    }
    callHistory.push(data)
    
    const div = document.createElement("div")
        div.innerHTML=`
                  <div class="bg-[#fafafa] flex justify-between items-center my-3 px-3">
                        <div class="">
                            <h1 class="font-semibold text-[20px]">${data.name}</h1>
                            <p>${data.number}</p>
                        </div>
                        <p>${data.date}</p>
                    </div> `
    historyContainer.appendChild(div)
})
// call btn 4
document.getElementById('call-btn-4')
.addEventListener('click', function(){
      
    if(num < 20){
        alert('you dont have enough coins. you need at least 20 coins to make a call.')
        return
    }
     num -= 20;
       coinContainer.innerText = num;
       alert('calling Ambulance service 1994-999999')

        const data = {
        name: 'Ambulance Service',
        number: 1994-999999,
       date:new Date().toLocaleTimeString()
    }
    callHistory.push(data)
    
    const div = document.createElement("div")
        div.innerHTML=`
                  <div class="bg-[#fafafa] flex justify-between items-center my-3 px-3">
                        <div class="">
                            <h1 class="font-semibold text-[20px]">${data.name}</h1>
                            <p>${data.number}</p>
                        </div>
                        <p>${data.date}</p>
                    </div> `
    historyContainer.appendChild(div)
})
// cal btn 5
document.getElementById('call-btn-5')
.addEventListener('click', function(){
      
    if(num < 20){
        alert('you dont have enough coins. you need at least 20 coins to make a call.')
        return
    }
     num -= 20;
       coinContainer.innerText = num;
       alert('calling Brac Helpline service 16445')

        const data = {
        name: 'Brac Helpline',
        number: 16445,
       date:new Date().toLocaleTimeString()
    }
    callHistory.push(data)
    
    const div = document.createElement("div")
        div.innerHTML=`
                  <div class="bg-[#fafafa] flex justify-between items-center my-3 px-3">
                        <div class="">
                            <h1 class="font-semibold text-[20px]">${data.name}</h1>
                            <p>${data.number}</p>
                        </div>
                        <p>${data.date}</p>
                    </div> `
    historyContainer.appendChild(div)
})
// call btn 6
document.getElementById('call-btn-6')
.addEventListener('click', function(){
      
    if(num < 20){
        alert('you dont have enough coins. you need at least 20 coins to make a call.')
        return
    }
     num -= 20;
       coinContainer.innerText = num;
       alert('calling Bangladesh Railway service 163')

        const data = {
        name: 'Bangladesh Railway Helpline',
        number: 163,
       date:new Date().toLocaleTimeString()
    }
    callHistory.push(data)
    
    const div = document.createElement("div")
        div.innerHTML=`
                  <div class="bg-[#fafafa] flex justify-between items-center my-3 px-3">
                        <div class="">
                            <h1 class="font-semibold text-[20px]">${data.name}</h1>
                            <p>${data.number}</p>
                        </div>
                        <p>${data.date}</p>
                    </div> `
    historyContainer.appendChild(div)
})

// copy btn 
const copyContainer = document.getElementById('copy-container')
let copyCount = 0
document.getElementById('copy-btn')
.addEventListener('click', function(){
    copyCount = copyCount + 1;
    copyContainer.innerText = copyCount
    const copyNumber = document.getElementById('number').innerText
    navigator.clipboard.writeText(copyNumber)
    alert('Number copied'  + copyNumber)
})

document.getElementById('copy-btn-2')
.addEventListener('click', function(){
    copyCount = copyCount + 1;
    copyContainer.innerText = copyCount;
    const copyNumber = document.getElementById('number-2').innerText
    navigator.clipboard.writeText(copyNumber)
    alert('Number copied'  + copyNumber)
})
document.getElementById('copy-btn-3')
.addEventListener('click', function(){
    copyCount = copyCount + 1;
    copyContainer.innerText = copyCount;
    const copyNumber = document.getElementById('number-3').innerText
    navigator.clipboard.writeText(copyNumber)
    alert('Number copied'  + copyNumber)
})
document.getElementById('copy-btn-4')
.addEventListener('click', function(){
    copyCount = copyCount + 1;
    copyContainer.innerText = copyCount;
    const copyNumber = document.getElementById('number-4').innerText
    navigator.clipboard.writeText(copyNumber)
    alert('Number copied'  + copyNumber)
})
document.getElementById('copy-btn-5')
.addEventListener('click', function(){
    copyCount = copyCount + 1;
    copyContainer.innerText = copyCount;
    const copyNumber = document.getElementById('number-5').innerText
    navigator.clipboard.writeText(copyNumber)
    alert('Number copied'  + copyNumber)
})
document.getElementById('copy-btn-6')
.addEventListener('click', function(){
    copyCount = copyCount + 1;
    copyContainer.innerText = copyCount;
    const copyNumber = document.getElementById('number-6').innerText
    navigator.clipboard.writeText(copyNumber)
    alert('Number copied'  + copyNumber)
})

 