import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import UseAddtocart from "../../hooks/UseAddtocart";
import UseAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";


const CheckoutFrom = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transaction, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = UseAxiosSecure();
    const { user } = UseAuth();
    const [addcart, refetch] = UseAddtocart();
    const totalPrice = addcart.reduce((total, item) => total + parseFloat(item.price), 0)

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosSecure, totalPrice])


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error)
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.
            confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous'
                    }
                }
            })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // now save the payment in the database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartIds: addcart.map(item => item._id),
                    menuItemIds: addcart.map(item => item.menuId),
                    status: 'pending'
                }

                const res = await axiosSecure.post('/payment', payment);
                console.log('payment saved', res.data);
                refetch();
                if(res.data?.paymentResult?.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for the taka poisa",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }

            }
        }

    }

    return (
        <div className="px-12">
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="text-center">
                    <button className="bg-blue-600 px-24 py-3 rounded-md text-white text-2xl my-12" type="submit"
                        disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                    <p className=" text-red-600">{error}</p>
                    {transaction && <p className="text-green-600"> your transaction id: {transaction}</p>}
                </div>
            </form>
        </div>
    )

}

export default CheckoutFrom;