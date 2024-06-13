'use client'
import DashboardHero from '@/app/components/Admin/DashboardHero'
import AllUsers from '@/app/components/Admin/Users/AllUsers'
import AdminSidebar from '@/app/components/Admin/sidebar/AdminSidebar'
import AdminProtected from '@/app/hooks/adminProtected'
import Heading from '@/app/utils/Heading'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div>
            <AdminProtected>
                <Heading
                    title='BrainyPath - Admin'
                    description='BrainyPath is a platform for students to learning'
                    keywords='Programming, MERN, Redux, Machine Learning'
                />
                <div className='flex h-[200vh]'>
                    <div className='1500px:w-[16%] w-1/5'>
                        <AdminSidebar />
                    </div>
                    <div className='w-[85%]'>
                        <DashboardHero />
                        <AllUsers isTeam={true}/>
                    </div>
                </div>
            </AdminProtected>
        </div>
    )
}

export default page