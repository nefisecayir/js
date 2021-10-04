// *FUNCTIONS APPLICATION**

var balance = 2000;
var nameSurname = 'Nefise Çayır';

var deptA = {
    name: 'Nefise Çayır',
    deptNum: '123456789',
    balance : 2000,
    additionalDept: 1000
}

var deptB = {
    name: 'Bilal Çayır',
    deptNum: '987654321',
    balance : 2000,
    additionalDept: 1000
}

function withdrawal(dept, amount){
    console.log(`Hello, ${dept.name}!`);

    if(dept.balance >= amount){
        console.log('you can withdrawal your money');

        
    }else{
        var total = dept.balance + dept.additionalDept;
        console.log('total',total,'amount',amount)
        
        if(total >= amount){
            if(confirm('do want to use your additional dept?')){
                console.log('you can withdrawal your money');
            }else{
                console.log(`in ${dept.deptNum} dept, doesn't have ${amount}$`);
            }
        }else{
            console.log('sorry, not enough balance.')
        }
    }
}

withdrawal(deptA, 3000);
// withdrawal(deptB, 2000);