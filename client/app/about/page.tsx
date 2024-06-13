'use client'
import React, { FC, useState } from 'react'
import Heading from '../utils/Heading'
import Header from '../components/Header'
import About from './About'
import Footer from '../components/Footer'

type Props = {}

const page:FC<Props> = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeItem, setActiveItem] = useState(2);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [route, setRoute] = useState("Login");
    return (
        <div>
            <Heading
                title='About us - BrainyPath'
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
            <About />
            <Footer />
        </div>
    )
}

export default page