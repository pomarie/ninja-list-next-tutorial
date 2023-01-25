import Link from 'next/link'



const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Navbar</h1>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
        </nav>
    );
}

export default Navbar;