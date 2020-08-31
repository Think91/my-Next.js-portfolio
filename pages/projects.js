import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Project from "../components/Project";
import projectsList from "../public/projects";
import Head from "next/head";

const projects = () => {
  return (
    <>
      <Head>
        <title> Projects | Lwazi Think Booi</title>
        <meta
          name='description'
          content='Here you can find a list of my recent projects, mainly in React and Next.js.'
        />
      </Head>
      <Navbar />
      <div className='pageContainer'>
        <header>
          <div className='shortLine'></div>
          <h1 className='pageHeader'>Projects</h1>
          <p className='text'>
            Please enjoy browsing some of my projects, most were done for academic purposes, and others were done as part of my professional portfolio
          </p>
        </header>
        <main>
          {projectsList.map((p) => (
            <Project {...p} key={p.id} />
          ))}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default projects;
