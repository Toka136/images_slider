let img_container=document.getElementById("img-container");
let container=document.getElementById("container");
let pervious=document.getElementById("pervious");
let next=document.getElementById("next");
let images=document.querySelectorAll(".img img")
let buttons =document.querySelectorAll(".but i");
function change(i)
{
   images.forEach((elem)=>
    {
        elem.classList.add("hidden");
    })
    images[i].classList.remove("hidden");
    for(let j=0;j<buttons.length;j++)
    {
        if(buttons[j].classList.contains("active")){
            buttons[j].classList.remove("active");
            break;
        }
    }
    buttons[i].classList.add("active");
    count=i;
    clearInterval(int);
    int=setInterval(slide, 5000);
}
function active(j)
{
    for(let i=0;i<buttons.length;i++)
        {
            if(buttons[i].classList.contains("active")){
                buttons[i].classList.remove("active");
                break;
            }
        }
        if(f)
         {
        buttons[j].classList.add("active");
        f=1;
         }
         else
         buttons[j].classList.add("active");
}
let count=0,f=0,f2=0;
let int=setInterval(slide, 5000);
let start;
function slide()
{
    count++;
    if(count>=4)
        {
            
            images[count-1].classList.add("hidden");
            count=0;
        }
        else
        {
            images[count-1].classList.add("hidden");
        }
        images[count].classList.remove("hidden");
        images[count].classList.add("animi");

        active(count);
        

}

function nextslide()
{   
     count++;
    if(count>=4)
    {
       
        images[count-1].classList.add("hidden");
         count=0;
    }
    else
    {
        images[count-1].classList.add("hidden");
    }
    images[count].classList.remove("hidden");
    images[count].classList.add("animi");

    active(count);
    clearInterval(int);
    int=setInterval(slide, 5000);
}
function prevslide()
{
   
       count--;
        if(count<0)
        {
            images[0].classList.add("hidden");
            count=3;
        }
        
        else
        {
            // images[count+1].classList.add("animi");
            images[count+1].classList.add("hidden");
        }
        active(count);
        
        images[count].classList.remove("hidden");
        images[count].classList.add("animi");
        clearInterval(int);
        int=setInterval(slide, 5000);
   
    
}
function stop ()
{
    // console.log("in");
    clearInterval(int);
    f2=0;
}
function stratslider()
{
    if(!f2)
    {
        f2=1;
    int=setInterval(slide, 5000);
    }
}
// container.ontouchstart = function()
// {
//     start = event.touches[0].clientX;
//     console.log(start);
//     stop()
// }
// container.ontouchmove=function()
// {
//     setTimeout("",6000);
//     let strat2=event.touches[0].clientX;
//     let dist= strat2 - start;
//     if(dist>150)
//     {
//         prevslide()
//     }
//     else
//     {
//         nextslide()
//     }
//     stratslider()
// }




