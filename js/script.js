const input=document.getElementById("userinputtext")
const button =document.getElementById("addbtn")
let item=0;
let itemdone=0

const setitemcount=(count , itemdone)=>{
    const itemcount=document.getElementById("items_count")
    itemcount.innerHTML=`${count} Items To Do <span id="itemscountheltext">[${itemdone} out of ${count} Done]</span>`
}

const showalert=(msg , type)=>{
    const alert=document.createElement("div")
    alert.classList.add('alert')
    if(type=="delete"){
        alert.classList.add("delete")
    }
    alert.innerText=msg
    const notificationcontainer=document.getElementById("notifications_containers")
    notificationcontainer.appendChild(alert)
    setTimeout(()=>{
        alert.classList.add("active")
    } , 1000)

    setTimeout(()=>{
        alert.classList.remove("active")
    } , 1100)

    setTimeout(()=>{
        alert.remove()
    },2200)
}
const additem=(text)=>{
   const main_box_wrapper=document.createElement("div")
   main_box_wrapper.classList.add("todo_item")
   const todoitemtext=document.createElement("div")
   todoitemtext.innerText=text
   main_box_wrapper.appendChild(todoitemtext)
   
   const deletediv=document.createElement("div")
   deletediv.classList.add("deleteee")
   const deleteicon=document.createElement("i")
   deleteicon.classList.add('fa-solid' , 'fa-trash' , 'iii')
   deletediv.appendChild(deleteicon)
   main_box_wrapper.appendChild(deletediv)
   deletediv.addEventListener("click" , (e)=>{
    showalert("Note Deleted" , "delete")
    const items=e.target.parentNode.parentNode;
    if(items.classList.contains("done")){
        itemdone--
    }
    item--;
    setitemcount(item , itemdone)

    items.remove()
    
   })
   
   const adddiv=document.createElement("div")
   deletediv.classList.add("deleteee" )
   const addicon=document.createElement("i")
   addicon.classList.add('fa-solid' , 'fa-check' , 'iii')
   adddiv.appendChild(addicon)
   main_box_wrapper.appendChild(adddiv)
   const todo_itemwrapper=document.getElementById("todo_itemwrapper").appendChild(main_box_wrapper)
   adddiv.addEventListener("click" , (e)=>{
    const item2=e.target.parentNode.parentNode;
    if(item2.classList.contains('done')){
        itemdone--;
        setitemcount(item , itemdone)
        item2.classList.remove("done")
        const icon=e.target;
        icon.classList.remove('fa-rotate-left')
        icon.classList.add('fa-check')
        showalert("Note Marked As UnDone")
    }
    else{
        itemdone++;
        setitemcount(item , itemdone)
        item2.classList.add("done")
        const icon=e.target;
        icon.classList.remove('fa-check')
        icon.classList.add('fa-rotate-left')
        showalert("Note Marked As Done")
    }
   })

}

button.addEventListener('click' , ()=>{
    notifications_containers.style.visibility="visible"
    const text=input.value;
    additem(text)
    showalert("Not Added")
    item++;
    setitemcount(item , itemdone)
    input.value="";
})