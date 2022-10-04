import Link from 'next/link'

export function Navbar() {

  return (
    <div>
      <nav>
        <ul>
          <li><Link href='/'><a>Home</a></Link></li>
          <li><Link href='/dashboard'><a>Dashboard</a></Link></li>
          <li><Link href='/product'><a>Product</a></Link></li>
        </ul>
      </nav>
    </div>
  );
}