import { useGetCourseDetailsQuery } from '@/redux/features/courses/coursesApi';
import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader';
import Heading from '@/app/utils/Heading';
import Header from '../Header';
import Footer from '../Footer';
import CourseDetails from './CourseDetails';
import { useCreatePaymentIntentMutation, useGetStripePublishableKeyQuery } from '@/redux/features/orders/ordersApi';
import { loadStripe } from '@stripe/stripe-js';

type Props = {
    id: string;
}

const CourseDetailsPage = ({ id }: Props) => {
    const [route, setRoute] = useState("Login");
    const [open, setOpen] = useState(false);
    const { data, isLoading } = useGetCourseDetailsQuery(id);
    const { data: config } = useGetStripePublishableKeyQuery({});
    const [createPaymentIntent, { data: paymentIntentData }] = useCreatePaymentIntentMutation();
    const [stripePromise, setStripePromise] = useState<any>(null);
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        if (config) {
            const publishableKey = config?.publishableKey;
            setStripePromise(loadStripe(publishableKey));
        }
        if (data) {
            const amount = Math.round(data.course.price * 100);
            createPaymentIntent(amount);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [config, data])

    useEffect(() => {
        if (paymentIntentData) {
            setClientSecret(paymentIntentData?.client_secret);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [paymentIntentData])

    return (
        <>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <div>
                        <Heading
                            title={data.course.name + ' - BrainyPath'}
                            description='BrainyPath is a platform for learning and teaching online'
                            keywords={data?.course?.tags}
                        />
                        <Header
                            route={route}
                            setRoute={setRoute}
                            open={open}
                            setOpen={setOpen}
                            activeItem={1}
                        />
                        {
                            stripePromise && (
                                <CourseDetails data={data.course} stripePromise={stripePromise} clientSecret={clientSecret}
                                    setRoute={setRoute}
                                    setOpen={setOpen} />
                            )
                        }
                        <Footer />
                    </div>
                )
            }
        </>
    )
}

export default CourseDetailsPage;