const $ = (id) => document.getElementById(id)
let nam = $('nam')
let deposit = $('deposit')
let withdrawal = $('withdrawal')
let display = $('display')
let data = $('data')
let ownerName
let depositAmount
let withdrawalAmount


const init =  () => {
    const bankAccount= function(ownerName)  {
        let balance = 0
        let owner
              
        return {
            withdrawal: function(withdrawalAmount) {
                withdrawal.addEventListener('click', (e) =>{
                        e.preventDefault()
                        withdrawalAmount = parseInt(prompt("How much are you withdrawing?"))
                    if(withdrawalAmount > balance) {
                        alert('Withdrawal amount is greater than balance. Enter another amount')
                        
                    } else{
                    balance = balance - withdrawalAmount
                    p = document.createElement('p')
                    var balance2 = document.createTextNode('Balance: '+ balance)
                    p.appendChild(balance2)
                    document.getElementById('display').appendChild(p)
                    return balance  
                    }                   
                })    
                     
            }, deposit: function(depositAmount) {
                    deposit.addEventListener('click', (e) =>{
                        e.preventDefault()
                        depositAmount = parseInt(prompt("How much are you depositing?")) 
                    balance = balance + depositAmount
                    p = document.createElement('p')
                    var balance1 = document.createTextNode('Balance: '+ balance)
                    p.appendChild(balance1)
                    document.getElementById('display').appendChild(p)
                    })
                    return balance
            }, 
                getOwnerName: function () {
                    nam.addEventListener('click', (e) =>{
                        e.preventDefault()
                        ownerName = prompt("Enter your name")
                    p = document.createElement('p')
                    var ownerN = document.createTextNode('Name: '+ ownerName)
                    p.appendChild(ownerN)
                    document.getElementById('display').appendChild(p)
                    } )
                    return this
                } 
            } 
        } 
        const result = bankAccount(ownerName)
        return result        
}
var y = init()
y.getOwnerName()
y.deposit()
y.withdrawal()

