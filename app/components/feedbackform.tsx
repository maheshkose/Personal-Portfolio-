'use client'
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'sonner'

const Feedbackform = () => {
    type data = {
        name:string,
        feedback:string
    }
    const [data, setdata] = useState({name:"",feedback:""});
    const handleChange = (e:any)=>{
        const {name,value} = e.target;
        setdata({...data,[name]:value});
    }
    console.log(data);
    
    const handlesubmit = async (e:any) => {
        e.preventDefault();
        const res = await axios.post('/api/feedback',data);
        console.log(res);
        
        if(res.data.success){
            toast.success(res.data.message);
            setdata({name:"",feedback:""});
        }else{
            toast.error(res.data.message);
        }
        
    } 
    const handlekeydown = (e:any)=>{
        const key = e.key;
        if (key === "Enter") {
            handlesubmit(e);
        }
    }
  return (
    <form action="" className='p-5 rounded-md flex gap-5 flex-col justify-around items-center dark:text-gray-200' onKeyDown={handlekeydown}>
          <input type="text" name='name' placeholder='Your Name' className='w-full h-auto text-lg py-2 px-4 border dark:border-gray-400/50 rounded-md outline-none' value={data.name} onChange={handleChange}/>
          <textarea name="feedback" placeholder='Your Feedback' className='w-full h-auto text-lg py-2 px-4 border dark:border-gray-400/50 rounded-md outline-none min-h-2' value={data.feedback} onChange={handleChange}>

          </textarea>
          <button type='submit' className='w-[70%] bg-yellow-600 py-2 rounded-md text-lg' onClick={handlesubmit}>Send Feedback</button>

          {/* <div onClick={()=>toast("toast has been created")}>toast</div> */}
    </form>
  )
}

export default Feedbackform