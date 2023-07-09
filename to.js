let txt1=document.getElementById("b");
let txt2=document.getElementById("b1");
function add(){
        txt2.innerHTML=txt2.innerHTML+`
        <div id="list">
            ${txt1.value}
            <button Class="del"><i class="fa-sharp fa-solid fa-trash"></i></button>
        </div>`
        let tasks=document.getElementsByClassName("del");
        for(i=0;i<tasks.length;i++)
        {
            tasks[i].onclick=function(){
                this.parentNode.remove();
            }
        }
        txt1.value=""
}