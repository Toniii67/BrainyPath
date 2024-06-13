import React from 'react'
import { styles } from '../styles/style'

type Props = {}

const About = (props: Props) => {
    return (
        <div className='dark:text-white text-black'>
            <br />
            <h1 className={`${styles.title} 800px:!text-[45px]`}>
                What is <span className='text-[#1874C4]'>BrainyPath?</span>
            </h1>
            <br />
            <div className='w-[95%] 800px:w-[85%] m-auto'>
                <p className='text-[18px] font-Poppins'>
                    Welcome to BrainyPath, your go-to site for online education. We aim to make learning easy, fun, and personalized for everyone. Using technology, we create a unique educational experience tailored to individual needs. We offer many courses in different subjects to help you reach your goals. Join us and make learning a passionate journey.
                    <br />
                    <br />
                    Our team at BrainyPath includes expert instructors with a love for teaching. Each course is designed by professionals to ensure top-quality content. Our teachers are here to provide the tools and support you need to succeed. We regularly update our courses to keep up with the latest trends in education and technology. This way, our students always get the most current and useful information.
                    <br />
                    <br />
                    Our platform is user-friendly, making it easy to navigate and choose courses. We use advanced technology to create interactive and engaging lessons. With video lessons, quizzes, and real-time feedback, BrainyPath enhances the learning experience. We aim to create a supportive environment where every student can thrive. Our tools are designed to make learning effective and enjoyable.
                    <br />
                    <br />
                    We understand the need for flexibility in today is busy world. That is why we offer different learning options to suit various schedules. Whether you like to learn at your own pace or join live classes, we have you covered. We believe education should be accessible to everyone, no matter where they are. Our goal is to remove barriers and provide quality education for all.
                    <br />
                    <br />
                    At BrainyPath, community is key. Our students come from all over the world, and we celebrate this diversity. We promote collaboration through forums, group projects, and other interactive features. By connecting learners globally, we create a vibrant community. BrainyPath is more than an educational platform; it is a family dedicated to lifelong learning.
                </p>
                <br />
                <span className='text-[22px] text-[#1874C4]'>BrainyPath</span>
                <h5 className='text-[18px] font-Poppins'>
                    Group - 3
                </h5>
                <br />
                <br />
            </div>
        </div>
    )
}

export default About