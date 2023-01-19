
export default function Navbar(){
    return <nav className='nav'>
        <a href="/" className="site-title">Music Site</a>
        <ul>
            <li className='active'><a href="AboutUS">About US</a></li>
            <li><a href="/Pricing">Pricing</a></li>
            <li><a href="/Login">Login</a></li>
        </ul>
    </nav>
}
