'use client'
import React from 'react'
import DashboardHero from '@/app/components/Admin/DashboardHero'
import AdminSidebar from '@/app/components/Admin/sidebar/AdminSidebar'
import AdminProtected from '@/app/hooks/adminProtected'
import Heading from '@/app/utils/Heading'
import AllUsers from '../../components/Admin/Users/AllUsers'

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
                <div className='flex h-screen'>
                    <div className='1500px:w-[16%] w-1/5'>
                        <AdminSidebar />
                    </div>
                    <div className='w-[85%]'>
                        <DashboardHero />
                        <AllUsers isTeam={false}/>
                    </div>
                </div>
            </AdminProtected>
        </div>
    )
}

export default page