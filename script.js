const btn=document.getElementById("btn");
const colorCode=document.getElementById("colorCode")
function getRandomColor(){
    const letter='0132456789'
    let color='#'
    for(let i=0;i<6;i++){
        color+=letter[Math.floor(Math.random()*16)]
    }
    return color
}
btn.addEventListener("click",function()
{
    const newColor=getRandomColor()
    document.body.style.backgroundColor=newColor
    colorCode.textContent="CurrentColor:"+newColor
})