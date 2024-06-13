'use client'
import React, { FC, useState } from 'react'
import Heading from '../utils/Heading'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ/FAQ'

type Props = {}

const page:FC<Props> = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeItem, setActiveItem] = useState(3);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [route, setRoute] = useState("Login");
    return (
        <div className='min-h-screen'>
            <Heading
                title='FAQ - BrainyPath'
                description='All courses available on BrainyPath'
                keywords="BrainyPath, Online courses, Online learning, Online education" 
            />
            <Header 
                open={open}
                setOpen={setOpen}
                activeItem={activeItem}
                route={route}
                setRoute={setRoute}
            />
            <br />
            <FAQ />
            <Footer />
        </div>
    )
}

export default page