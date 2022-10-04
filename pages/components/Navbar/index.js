import Link from 'next/link'

export function Navbar() {

  return (
    <div>
      <nav>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/dashboard'>Dashboard</a></li>
          <li><a href='/product'>Product</a></li>
        </ul>
      </nav>
    </div>
  );
}