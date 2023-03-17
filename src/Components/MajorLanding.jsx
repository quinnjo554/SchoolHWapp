import React, { useEffect, useState } from 'react'
import { getImage, getMajorByName } from '../api'
import { useParams } from 'react-router-dom';
import { getClassByMajorId } from '../api';
function MajorLanding(props) {

const [url,setUrl] = useState("");
const [classes, setClasses] = useState([]);
const [majorId, setMajorId] = useState(0);
const { majorName } = useParams();


useEffect(()=>{
  async function getData(){
    const id = await getMajorByName(majorName)
    if(id){
      setMajorId(id[0].id);
      const data = await getClassByMajorId(majorId);
      if(data){
        setClasses(data);
      }
        
    }
  }
  getData()
},[])

//get image from api
useEffect(()=>{
  async function imageUrl(){
      const data = await getImage(majorName)
      if(data){
          setUrl(data.photos[0].src.original);
          console.log(data.photos[0].src.original)
      }
  }   
  imageUrl();
  },[majorName])


//get classes from api



  return (
    <div className=' z-10 w-screen h-96'>
      {url ? <img loading='lazy' width="300" height="300" src={url}></img> : <p>Loading</p>}
      <ul className='inline w-max overflow-y-scroll h-96'>
        {classes.map((value)=>{ //make a box and add the value.class_name as a prop
          return <li key={value.class_id}>{value.class_name}</li>
        })}
      </ul>
      </div>
  )
}

export default MajorLanding