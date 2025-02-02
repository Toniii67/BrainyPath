'use client'
import React, { useEffect } from 'react'
import CourseDetailsPage from '../../components/Course/CourseDetailsPage'
import { useLoadUserQuery } from '@/redux/features/api/apiSlice'
import { redirect } from 'next/navigation'
import Loader from '@/app/components/Loader/Loader'
import CourseContent from "../../components/Course/CourseContent"

type Props = {
    params: any
}

const page = ({params}: Props) => {
    const id = params.id;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {isLoading, error, data} = useLoadUserQuery(undefined, {});
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if(data){
            const isPurchased = data.user.courses.find((item:any) => item._id === id);
            if(!isPurchased){
                redirect("/");
            }
            if(error){
                redirect("/");
            }
        }
    }, [data, error, id])
    return (
        <>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <div>
                        <CourseContent id={id} user={data.user}/>
                    </div>
                )
            }
        </>
    )
}

export default page;