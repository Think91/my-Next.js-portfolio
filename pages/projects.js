import Link from "next/link";

export default () => (
  <div>
   <div id="nav">
         <Link href="/index">
      <a>Home</a>
    </Link><br />
    <Link href="/about">
      <a>About</a>
    </Link><br />
    <Link href="/projects">
      <a>Projects</a>
    </Link><br />
    <Link href="/contact">
      <a>Contact</a>
    </Link><br />
    </div>
    
    <h3>Projects</h3>

    <ul>
      <li> Snake game app - https://github.com/Think91 </li>
      <li> React weather app - https://github.com/Think91 </li>
      <li> Online store app - https://github.com/Think91 </li>
    </ul>
<style jsx>{`

#nav {
background: lightgray; }


`}</style>
  </div>
);
