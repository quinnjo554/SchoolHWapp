export async function getImage(query){
    const APIKEY = "LpSPc7DbKH4AQPRJi4XHTEfEaseBtnzbMTN0BkzfsTDC5rx6mY0NEYRu"
    try{
        const response = await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
            headers: {
                'Authorization': APIKEY
            }
        }); 
        const data = await response.json();
        return data
    }
    catch(error){
        console.log(error)
        return "Error"
    }
}

export async function getMajorByName(name){
    try{
    const response = await fetch(`http://127.0.0.1:8000/majors/${name}/`); 
    const data = await response.json();
    return data
    }
    catch(error){
        console.log(error)
        return "Error"
    }
}


export async function getMajors(){
    try{
    const response = await fetch(`http://127.0.0.1:8000/majors/`); 
    const data = await response.json();
    return data
    }
    catch(error){
        console.log(error)
        return "Error"
    }
}

export async function getClassByMajorId(id){
    try{
    const response = await fetch(`http://127.0.0.1:8000/classes/${id}/`); 
    const data = await response.json();
    console.log(data)
    return data
    }
    catch(error){
        console.log(error)
        return "Error"
    }
}