let calc = function(){
    var a=parseInt(document.querySelector("#val1").value)
    var b=parseInt(document.querySelector("#val2").value)
    var act= document.querySelector("#oper").value
    var ans
    if(act=="Add"){
        ans=a+b
    }
    else if(act=="su"){
        ans=a-b
    }
    else if(act=="mu"){
        ans=a*b
    }
    else{
        ans=a/b
    }
    console.log(ans)
    document.querySelector(".ans").innerHTML=ans
}