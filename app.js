let userArry=[]
function register(){
    let userName=document.getElementById('userName').value
    let userMail=document.getElementById('userMail').value
    let userCount=userArry.filter((x)=>{
        return x.Mail==userMail
    })
    console.log(userCount)
    if(userCount.length==0){
        let userObject={Name:userName,Mail:userMail}
        userArry.push(userObject)
        console.log(userArry)
    }
    else{
        console.log('invalid email..')
    }
    document.getElementById('userName').value=''
    document.getElementById('userMail').value=''
    
}



// let userArry=[]
// function register(){
//     let userName=document.getElementById('userName').value
//     let userMail=document.getElementById('userMail').value

//     let Obje={Name:userName,Mail:userMail}
//     userArry.push(Obje)
//     console.log(userArry)
// }

// let aarr=[1,2,3,4,5]
// aarr.pop()
// aarr.push(5)
// let res=aarr.unshift()
// console.log(aarr)
// console.log(res)