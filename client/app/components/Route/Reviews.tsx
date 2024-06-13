import React from 'react'
import Image from 'next/image'
import { styles } from '@/app/styles/style'
import ReviewCard from '../Review/ReviewCard'

type Props = {}

export const reviews = [
  {
    name: "Sarah Kortney",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    profession: "Software Development Student | University of Toronto",
    comment: "BrainyPath has transformed my learning experience. The video lessons are clear and engaging, and the source code examples make practical learning easy. The flexibility of self-paced courses fits perfectly with my busy schedule. The support from instructors is outstanding. BrainyPath is truly a game-changer in education!",
  },
  {
    name: "James Lee",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    profession: "Web Development Professional | Hengkong ltd.",
    comment: "The flexibility of BrainyPath’s courses is what stands out the most. I can balance my studies with my job effortlessly. The video lessons are detailed and the source code examples are incredibly useful. The instructors are always available to help with any questions. BrainyPath has made advancing my career much more attainable.The support from instructors is outstanding. BrainyPath is truly a game-changer in education! ",
  },
  {
    name: "David Miller",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Marketing Specialist | Techwise Inc.",
    comment: "BrainyPath offers a fantastic learning experience. The courses are comprehensive and the video lessons are easy to follow. I appreciate the real-time support from instructors and the practical examples provided. The platform is intuitive and makes learning fun. BrainyPath is the best educational platform I have come across. I highly recommend it to anyone looking to expand their knowledge and skills. The range of subjects and depth of content available is truly impressive. I am grateful for the opportunity to learn with BrainyPath.",
  },
  {
    name: "Emily Johnson",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    profession: "Graphic Design Student | Univerity of British Columbia",
    comment: "I love how BrainyPath combines high-quality video lessons with practical examples. It’s a perfect mix for understanding and applying new concepts. The platform is user-friendly and the support team is always helpful. Learning has never been so enjoyable and effective. I highly recommend BrainyPath to anyone looking to expand their knowledge.",
  },
  {
    name: "Michael Smith",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    profession: "Web Developer | Hengkong ltd.",
    comment: "BrainyPath has been an incredible resource for my learning journey. The video lessons are concise and informative, and the source code examples have been instrumental in helping me grasp complex concepts. The ability to learn at my own pace has been invaluable, allowing me to delve deeper into topics that interest me the most. The support from instructors has been exemplary, always providing timely assistance whenever I've had questions. I'm grateful for the opportunity to learn and grow with BrainyPath.",
  }
]

const Reviews = (props: Props) => {
  return (
    <div className='w-[90%] 800px:w-[85%] m-auto '>
      <br />
      <div className='w-full 800px:flex items-center'>
        <div className='800px:w-[50%] w-full'>
          <Image
            src={require("../../../public/assets/hero2.png")}
            alt='business'
            width={550}
            height={500}
          />
        </div>
        <div className='800px:w-[50%] w-full'>
          <h3 className={`${styles.title} 800px:!text-[40px]`}>
            Our Students Are Our <span className='text-[#1874C4]'>Strength</span> {" "}
            <br />
            See What They Say About Us
          </h3>
          <br />
          <p className={styles.label}>
          features testimonials that underscore the transformative impact of BrainyPath is engaging lessons and flexible learning options. These testimonials highlight our commitment to empowering students to pursue their educational goals at their own pace, fostering a supportive environment where learning flourishes. BrainyPath stands as a trusted ally, facilitating meaningful educational experiences for every learner.
          </p>
        </div>
      </div>
      <br />
        <br />
      <div className='grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0 md:[&>*:nth-child(3)]:!mt-[-60px] md:[&>*:nth-child(6)]:!mt-[-40px]'>
        {
          reviews && reviews.map((i, index) => <ReviewCard item={i} key={index} />)
        }
      </div>
    </div>
  )
}

export default Reviews