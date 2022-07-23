

export const SetItem=(data)=>{
    localStorage.setItem("token", JSON.stringify(data))
}

export const GetItem=()=>{
    // localStorage.clear()
   var data= localStorage.getItem("token");
   console.log(data)
    return data
}

export const ClearlocalStorage=()=>[
localStorage.clear()
]
