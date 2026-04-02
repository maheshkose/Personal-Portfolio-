"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "sonner";

const Contactform = () => {
  type data = {
    name: string;
    email: string;
    message: string;
  };
  const [data, setdata] = useState({ name: "", email: "", message: "" });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };
  console.log(data);

  const handlesubmit = async (e: any) => {
    e.preventDefault();
    const res = await axios.post("/api/contact", data);
    console.log(res);

    if (res.data.success) {
      toast.success(res.data.message);
      setdata({ name: "", email: "" , message: "" });
    } else {
      toast.error(res.data.message);
    }
  };

  const handlekeydown = (e:any)=>{
        const key = e.key;
        if (key === "Enter") {
            handlesubmit(e);
        }
    }
  return (
    <form
      action=""
      className="w-full lg:min-w-100 p-5 rounded-md flex gap-5 flex-col justify-around items-center"
      onKeyDown={handlekeydown}
    >
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
        className="w-full h-auto text-lg py-2 px-4 border dark:border-gray-400/50 rounded-md outline-none dark:text-gray-200"
      />
      <input
        type="email"
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="Your email"
        required
        className="w-full h-auto text-lg py-2 px-4 border dark:border-gray-400/50 rounded-md outline-none dark:text-gray-200"
      />
      <textarea
        name="message"
        value={data.message}
        onChange={handleChange}
        placeholder="Your message"
        required
        className="w-full h-auto text-lg py-2 px-4 border dark:border-gray-400/50 rounded-md outline-none min-h-2 dark:text-gray-200"
      ></textarea>
      <button
        type="submit"
        className="w-[70%] bg-yellow-600 py-2 rounded-md text-lg"
        onClick={handlesubmit}
      >
        Send Message
      </button>
    </form>
  );
};

export default Contactform;
