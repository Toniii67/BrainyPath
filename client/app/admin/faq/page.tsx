'use client'
import React from 'react'
import Heading from '@/app/utils/Heading'
import AdminSidebar from '@/app/components/Admin/sidebar/AdminSidebar'
import DashboardHeader from '@/app/components/Admin/DashboardHeader'
import EditFaq from '../../components/Admin/Customization/EditFaq'

type Props = {}

const page = ({params}:any) => {
    const id = params?.id;
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
                    <EditFaq />
                </div>
            </div>
        </div>
    )
}

export default page