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

    <h3>Let's collaborate!</h3>
    <p>
      Exceptionally creative and dependable Web Developer with a stellar and superbwork ethic. 
      Broadly and deeply knowledgeable in a wide variety of computer languages as well as the principles and techniques 
      of website construction and maintenance. Hard-working web developer with a flair for creating elegant solutions in 
      the least amount of time. Valuable team member, anthusiastic about building world class web applications. 
      Passionate about software architecture and cloud computing. Regular attendee of web developer meetups and hackathons.

      I've always sought out opportunities and challenges that are meaningful to me. 
      Although my professional path has taken many twists and turns- from being a car washer, to 
      delivering whatever needed to be transported using my grandfather's bakkie, to starting my own business and becoming an entrepreneur. 
      I have always had a passion for problem solving and lending a hand whenever needed. As a developer, I enjoy utilising my meticulous 
      and obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change how we 
      see the world. That is why I'm elated to make a huge impact at a high growth company.
    </p>

    <h3>Education</h3>
    <ul>
      <li> Hyperion Dev - Full Stack Web Development (2020-2020) </li>
      <li> Boston City Campus and Business College - CompTIA Project+ (2016-2017) </li>
      <li> Boston City Campus and Business College - Certified in Project Management (2015 - 2016){" "} </li>
    </ul>
    
    <h3>Passions</h3>
    <ul>
      <li>All things tech</li>
    </ul>
    <style jsx>{`

#nav {
background: lightgray; }


`}</style>
  </div>
);
