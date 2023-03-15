export async function getImage(query){



}



export async function getMajorByName(name){
    try{
    const response = await fetch(`http://127.0.0.1:8000/majors/`); 
    const data = await response.json();
    console.log(data)
    return data
    }
    catch(error){
        console.log(error)
        return "Error"
    }
}

