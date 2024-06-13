import React from 'react'
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  Label,
  YAxis,
  LabelList,
} from "recharts";
import Loader from '../../Loader/Loader';
import { useGetCoursesAnalyticsQuery } from '@/redux/features/analytics/analyticsApi';
import { styles } from '@/app/styles/style';

type Props = {}

const CourseAnalytics = (props: Props) => {
  const {data, isLoading, isError} = useGetCoursesAnalyticsQuery({});
  // const analyticsData = [
  //   {name: 'Jan', uv: 400},
  //   {name: 'Feb', uv: 300},
  //   {name: 'Mar', uv: 200},
  //   {name: 'Apr', uv: 278},
  //   {name: 'May', uv: 189},
  // ]
  const analyticsData: any = []

  data && data.courses.last12Months.forEach((item:any) => {
    analyticsData.push({
      name: item.month,
      uv: item.count,
    })
  })

  const minValue = 0;

  return (
    <>
    {
      isLoading ? (
        <Loader />
      ) : (
        <div className='h-screen'>
          <div className='mt-[50px] !ml-20'>
            <h1 className={`${styles.title} !text-start`}>
              Courses Analytics
            </h1>
            <p className={`${styles.label} !ml-[2px]`}>
              Last 12 months analytics data{" "}
            </p>
          </div>

          <div className='w-full h-[90%] flex items-center justify-center'>
            <ResponsiveContainer width="90%" height="90%">
              <BarChart width={150} height={300} data={analyticsData}>
                <XAxis dataKey="name">
                  <Label offset={0} position="insideBottom" />
                </XAxis>
                <YAxis domain={[minValue, "auto"]} />
                <Bar dataKey="uv" fill='#3faf82'>
                  <LabelList dataKey="uv" position="top" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )
    }
    </>
  )
}

export default CourseAnalytics