import {useState} from 'react'
const data=[
    {
        id:1,
        name:'a'
    },
    {
        id:2,
        name:'b'
    },
    {
        id:3,
        name:'c'
    },
    {
        id:4,
        name:'d'
    }
]
export default function(){


{/* if the id is not in the array (filter.indexof()  will returnn -1 if id not present) it will push the id in array(filter) but if it was already there then it will remove the id (working as a toggle for checkbox) */}
    
const [filter,setFilter]=useState([])
function change(id){
 if(filter.indexOf(id)===-1){
    const newFilter=filter
    newFilter.push(id)
    setFilter(newFilter)
 }
 else{
    const newFilter=filter
    newFilter.splice(newFilter.indexOf(id),1)
    setFilter(newFilter)
    
 }
 
 console.log(filter)
}


    return(
        <div>
           { 
           data.map((val)=>{
                return(
                    <div>
                        <input
                    type='checkbox'
                    onClick={()=>change(val.id)}
                    checked={filter.indexOf(val.id)===-1?false:true}  >  
                    </input>
                    <span>{val.name}</span>
                    </div>
                    
                )
            })
        }
        </div>
    )
}