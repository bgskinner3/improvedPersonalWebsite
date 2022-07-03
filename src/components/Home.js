import React from 'react';
import profile from '../images/profile.jpg';
import Projects from './Projects';
import StaticProjects from './ProjectStatic';

const Home = () => {
  return (
    <div className="w-full bg-white">
      <div className="bg-[url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp')]  realitve bg-no-repeat h-screen bg-cover overflow-hidden ">
        <div className="grid grid-cols-2 bg-transparent/40 h-full">
          <div className=" ml-10 mr-10 grid grid-cols-1  mb-96">
            <div className="flex py-5 items-center  ">
              <div className="flex-grow border-t-4 border-neutral-content " />
              <p className=" font-extrabold text-neutral-content italic italic text-bold lg:text-2xl object-contain text-left font-serif ml-10 mr-10 text-center">
                Hi, I'm Brennan
              </p>

              <div className="flex-grow border-t-4 border-neutral-content " />
            </div>
          </div>
          <div className=" ml-10 mr-10 grid grid-cols-1 mt-96 ">
            <div className="flex py-5 items-center ">
              <div className="flex-grow border-t-4 border-neutral-content " />
              <p className=" font-extrabold text-neutral-content italic text-bold lg:text-2xl object-contain text-left font-serif ml-10 mr-10 text-center">
                This Is My Story
              </p>

              <div className="flex-grow border-t-4 border-neutral-content" />
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className="m-20">
        <StaticProjects />
        <Projects />
      </div>
      <div className="flex-grow border-t border-gray" />
      <div id="about" className="grid grid-cols-2 content-center">
        <div className="grid grid-cols-1 content-center ml-20">
          <img
            className="mask mask-circle w-96 ml-24 mr-24"
            src={profile}
            alt=""
          />
        </div>
        <div className="grid grid-cols-1 content-center m-20">
          <div className="flex py-5 items-center mb-5 ">
            <div className="flex-grow border-t border-neutral-content " />
            <p className=" font-extrabold text-neutral-content italic text-bold lg:text-2xl object-contain text-left font-serif ml-10 mr-10 text-center">
              About Me
            </p>
            <div className="flex-grow border-t border-neutral-content " />
          </div>
          <p className="text-left font-serif leading-loose p-10">
            Hello, my name is Brennan Skinner and here is another generic "about
            me" from another generic software engineer. I'm proficent in
            Javascript, Node, SQL and React and I have knowledge of Solidty,
            Docker, Kubernetes and GraphQL, which was used here. I spend alot of
            my free time educating myself on web3 tech and its application. I'm
            a avid pool player and I enjoy playing chess.
          </p>
          <div className="flex-grow border-t border-neutral-content mt-10 " />
        </div>
      </div>
      <div className="flex-grow border-t border-gray" />
      <div
        className="p-20 font-serif font-extrabold text-neutral-content italicf"
        id="resume"
      >
        <h1 className="text-2xl text-bold font-extrabold text-neutral-content italic ">
          Brennan Skinner
        </h1>
        <p className="underline font-extrabold text-neutral-content italic">
          Software Engineer
        </p>
        <div className="text-sm pb-5 font-extrabold text-neutral-content italic">
          <p>Email:</p>
          <p>brennangskinner2@gmail.com</p>
        </div>
        <div className="text-left">
          <h1 className="underline text-xl italic">EDUCATION</h1>
          <div className="grid grid-rows pb-5 pt-5">
            <p className="text-lg">Fullstack Academy</p>
            <p>New York, NY, APRIL, 2022</p>
            <p>Certificate in Software Engineering</p>
          </div>
          <div className="grid grid-rows pb-5 pt-5">
            <p className="text-lg">The King's College</p>
            <p>New York, NY, MAY, 2014 </p>
            <p>Politics, Philosophy, and Economics, B.A</p>
          </div>
        </div>
        <div className="text-left">
          <h1 className="underline text-xl italic">TECHNICAL SKILLS</h1>
          <li>
            <p>Proficent:</p>
            <p>
              Javascript, React/Redux, PostgreSQL, Node, Sequelize, Express,
              Tailwind
            </p>
          </li>
          <li>
            <p>Knowledgeable:</p>
            <p>GraphQL, ApolloGraphQL, Supabase</p>
          </li>
          <li>
            <p>Familiar:</p>
            <p>Firebase, Docker, Kubernetes</p>
          </li>
          <li></li>
        </div>
        <div className="text-left pt-5">
          <h1 className="underline text-xl italic">EMPLOYMENT</h1>
          <div className="pt-5 pb-5">
            <div className="flex">
              <p className="text-lg text-bold">Artichoke Basiles,</p>
              <p className="pl-2 pt-1 italic">New York, NY</p>
            </div>
            <div className="pt-2 pb-2">
              <p className="italic">Assistant Director of Operations</p>
              <p className="italic">JUNE, 2014- FEBRUARY, 2021</p>
            </div>

            <div>
              <li>Managed multiple locations across several states.</li>
              <li>
                Assembled, trained and managed a workforce that contributed to
                nearly 30% of total revenue.
              </li>
              <li>
                Developed a training program that was implemented throughout the
                company.
              </li>
              <li>
                Increased total revenuse, by establishing guidlelines and
                procedures focused on P/L.
              </li>
            </div>
          </div>
          <div className="pb-5 pt-5">
            <div className="flex">
              <p className="text-lg text-bold">Eataly,</p>
              <p className="pl-2 pt-1 italic">New York, NY</p>
            </div>
            <div className="pt-2 pb-2">
              <p className="italic">Management</p>
              <p className="italic">SEPTEMBER, 2016-OCTOBER, 2017</p>
            </div>

            <div>
              <li>
                Demonstrated multi-disciplinary industry expertise by increasing
                employee productivity and statisfaction.
              </li>
              <li>
                Rebuilt a team, utilizing a decisive management style, which
                generated the branches first $10 million annual revenue.
              </li>
              <li>
                Introduced new management techniques used in the building of the
                company's second location
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


