import { useState } from "react"
function get_random_color() 
{
    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;
}
export function Botton(){
    
    let [backgc,setbackgc]=useState("red")
    document.body.style.background = backgc;
    return <><button onClick={()=>{
        setbackgc(get_random_color());
    }}></button></>
}