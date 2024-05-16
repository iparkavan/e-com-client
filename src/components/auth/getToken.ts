import { cookies } from 'next/headers';
import { useRouter } from 'next/navigation';
import React from 'react'

const getToken = () => {

  const router = useRouter()

  const token = cookies().get("access-token");

    if (!token) {
      return router.push("/login");
    }
}

export default getToken