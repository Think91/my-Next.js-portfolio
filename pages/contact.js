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
    
    <h3>Contact details</h3>

    <h4>Email</h4>
    <ul>
      <li>thinkbooi@gmail.com</li>
    </ul>

    <h4>LinkedIN</h4>
    <ul>
      <a href="linkedin.com/in/LwaziThinkBooi">LinkedIn</a>
    </ul>

    <h4>Github</h4>
    <ul>
      <a href="github.com/Think91">GitHub</a>
    </ul>

    <h4>Cell</h4>
    <ul>
        <li>079-541-7137</li>
        <li>067-298-5367</li>
    </ul>
    <style jsx>{`

#nav {
background: lightgray; }


`}</style>
  </div>
);
