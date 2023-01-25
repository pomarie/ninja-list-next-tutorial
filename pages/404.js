import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {

        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [])


    return (
        <div className="not-found">
            <h1 style={{ "text-align": 'center' }} >Oops</h1>
            <h1 style={{ "text-align": 'center' }}>Page doesn't exist</h1>
            <p style={{ "text-align": 'center' }}>Go back to the <Link style={{ color: "#4979ff", "text-decoration": "underline", "text-align": 'center' }} href='/'>Homepage</Link></p>
        </div>
    );
}

export default NotFound;