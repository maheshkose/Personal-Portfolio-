'use client'
import React, { useEffect, useState } from 'react'
import { feedback,contact } from '@/app/api/feedback/route'
import { toast } from 'sonner';
import { CardSmall } from '@/app/components/myUi/Card';
const page = () => {
    const [feedback, setFeedback] = useState<feedback[]>([]);
        const [contact, setContact] = useState<contact[]>([]);

        const getFeedbacks = async () => {
            try {
                const res = await fetch("/api/feedback");
                const data = await res.json();
                if (data.success) {
                    toast.success("Feedbacks fetched successfully");
                    setFeedback(data.feedbacks);
                }else{
                    toast.error(data.message || "Failed to fetch feedbacks");
                }
            } catch (error:any) {
                toast.error(error.message ||"An error occurred while fetching feedbacks");
            }
        }
        const getContacts = async () => {
            try {
                const res = await fetch("/api/contact");
                const data = await res.json();
                if (data.success) {
                    toast.success("Contacts fetched successfully");
                    setContact(data.contacts);
                }else{
                    toast.error(data.message || "Failed to fetch contacts");
                }
            } catch (error:any) {
                toast.error(error.message ||"An error occurred while fetching contacts");
            }
        }

        useEffect(() => {
            getFeedbacks();
            getContacts();
        }, [])
  return (
    <div className='w-full py-20 dark:bg-gray-900 px-5 lg:px-20 flex flex-col items-center justify-start gap-10 lg:justify-around'>
        <div className='w-full h-dvh overflow-y-scroll lg:bg-gray-100/90 lg:p-5 lg:shadow-gray-500 lg:shadow-sm lg:dark:bg-gray-800 rounded-2xl'>
            <h1 className='text-3xl text-yellow-500 font-extrabold py-2 px-5'>Feedbacks</h1>
            <div className='grid grid-cols-1 lg:grid-cols-[repeat(3,1fr)] justify-start items-start gap-10'>
                {feedback.map((f, index) => (
                <div key={index}>
                    <CardSmall name={f.name} feedback={f.feedback}/>
                    
                </div>
            ))}
            </div>
        </div>
        <div  className='w-full h-dvh overflow-y-scroll lg:bg-gray-100/90 lg:p-5 lg:shadow-gray-500 lg:shadow-sm lg:dark:bg-gray-800 rounded-2xl'>
            <h1 className='text-3xl text-yellow-500 font-extrabold py-2 px-5'>Contacts</h1>
            <div className='grid grid-cols-1 lg:grid-cols-[repeat(3,1fr)] justify-start items-start gap-10'>
                {contact.map((c, index) => (
                <div key={index}>
                    <CardSmall name={c.name} email={c.email} message={c.message}/>
                </div>
            ))}
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default page