'use client'
import React, { FC, useState } from 'react'
import Protected from '../hooks/useProtected'
import Heading from '@/app/utils/Heading'
import Header from '@/app/components/Header'
import Profile from '../components/Profile/Profile'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'

type Props = {}

const page: FC<Props> = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeItem, setActiveItem] = useState(5);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [route, setRoute] = useState('Login');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {user} = useSelector((state: any) => state.auth);

    return (
        <div className='min-h-screen'>
            <Protected>
                <Heading
                    title={`${user?.name} profile - BrainyPath`}
                    description='BrainyPath is a platform for learning and teaching online'
                    keywords='Programming, MERN, Machine Learning'
                />

                <Header
                    open={open}
                    setOpen={setOpen}
                    activeItem={activeItem}
                    setRoute={setRoute}
                    route={route}
                />
                <Profile user={user}/>
                <Footer />
            </Protected>
        </div>
    )
}

export default page
