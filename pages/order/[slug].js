import React from 'react';
import {useRouter} from 'next/router';

function OrderSearch() {

    const router = useRouter()
    const { slug } = router.query;




  return (
    <>This is the order id {slug}</>
  )
}

export default OrderSearch