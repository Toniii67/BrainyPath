'use client'
import React from 'react'
import AdminSidebar from '../../components/Admin/sidebar/AdminSidebar'
import Heading from '@/app/utils/Heading'
import CreateCourse from '../../components/Admin/Course/CreateCourse'
import DashboardHeader from '@/app/components/Admin/DashboardHeader'

type Props = {}

const page = (props: Props) => {
    return (
        <div>
            <Heading 
                title='BrainyPath - Admin'
                description='BrainyPath is a platform for student to learning'
                keywords='Programming, MERN, Redux, Machine Learning, Data Science'
            />
            <div className='flex'>
                <div className='1500px:w-[16%] w-1/5'>
                    <AdminSidebar />
                </div>
                <div className='w-[85%]'>
                    <DashboardHeader />
                    <CreateCourse />
                </div>
            </div>
        </div>
    )
}

export default page