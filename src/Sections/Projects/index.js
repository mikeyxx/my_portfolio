import React from "react";
import PromptVerse from "../../assets/promptverse.jpg";
import { ImGithub } from "react-icons/im";
import store from "../../assets/store.gif";
import upskill from "../../assets/upskill.jpg";
import note from "../../assets/note.jpg";
import smarty from "../../assets/smarty.gif";
import chat from "../../assets/chirpchat.jpg";
import jobApp from "../../assets/jobApp.jpg";

const index = () => {
  return (
    <div className="projectContainer" id="projects">
      <h1>Latest Projects</h1>
      <div className="wrap">
        <div className="projectDescWrap">
          <img src={PromptVerse} alt="promptverse" width="350" height="400" />
          <div className="projectDesc">
            <h3>PromptVerse</h3>
            <h3>(Next.js, Tailwind, fetchAPI, MongoDB)</h3>
            <p>
              PromptVerse is an open-source AI prompting tool for modern world
              to discover, create and share creative prompts
            </p>
            <div className="links">
              <button>
                <a href="https://github.com/mikeyxx/promptverse" target="blank">
                  <ImGithub /> Repo
                </a>
              </button>{" "}
              <button>
                <a href="https://promptverse-lemon.vercel.app/" target="blank">
                  {" "}
                  Live Site
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="projectDescWrap">
          <img src={jobApp} alt="" width="350" height="400" />
          <div className="projectDesc">
            <h3>Jobio</h3>
            <h3>
              (TypeScript, ReactJS, Redux Toolkit, Tailwind, Axios, Express,
              PostgreSQL and NodeJS)
            </h3>
            <p>
              Jobio is a fullstack jobs management application that draws
              inspiration from the Indeed Jobs platform. Jobio was built using
              an SQL database.
            </p>
            <div className="links">
              <button>
                <a href="https://github.com/mikeyxx/jobio" target="blank">
                  <ImGithub /> Repo
                </a>
              </button>{" "}
              <button>
                <a href="https://jobio-app.netlify.app/" target="blank">
                  {" "}
                  Live Site
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="projectDescWrap">
          <img src={chat} alt="" width="350" height="400" />
          <div className="projectDesc">
            <h3>ChirpChat</h3>
            <h3>
              (MongoDB, Express, ReactJS, NodeJS, TypeScript, Redux and Tailwind
              CSS, Cyclic)
            </h3>
            <p>
              ChirpChat is a social media application that allows users to
              connect with their friends and family, and share their thoughts
              and experiences with the world.
            </p>
            <div className="links">
              <button>
                <a
                  href="https://github.com/mikeyxx/socials-media-app"
                  target="blank"
                >
                  <ImGithub /> Repo
                </a>
              </button>{" "}
              <button>
                <a href="https://chirpchat.cyclic.app/" target="blank">
                  {" "}
                  Live Site
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="projectDescWrap">
          <img src={note} alt="" width="350" height="400" />
          <div className="projectDesc">
            <h3>Note App</h3>
            <h3>(React and Localstorage)</h3>
            <p>
              The NoteApp is an application designed to help users organize and
              manage their personal or professional notes in a digital format.
            </p>
            <div className="links">
              <button>
                <a href="https://github.com/mikeyxx/note-app" target="blank">
                  <ImGithub /> Repo
                </a>
              </button>{" "}
              <button>
                <a href="https://use-note-app.netlify.app/" target="blank">
                  {" "}
                  Live Site
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="projectDescWrap">
          <img src={smarty} alt="" width="350" height="400" />
          <div className="projectDesc">
            <h3>Smarty Pants</h3>
            <h3>
              (MongoDB, Express, ReactJS, NodeJS, TypeScript, Redux and Tailwind
              CSS, Cyclic)
            </h3>
            <p>
              Welcome to Smarty Pants! The application is the ultimate brain
              workout disguised as pure fun.
            </p>
            <div className="links">
              <button>
                <a href="https://github.com/mikeyxx/quiz-app" target="blank">
                  <ImGithub /> Repo
                </a>
              </button>{" "}
              <button>
                <a href="https://smartypants.cyclic.app/" target="blank">
                  {" "}
                  Live Site
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="projectDescWrap">
          <img src={store} alt="" width="350" height="400" />
          <div className="projectDesc">
            <h3>Store</h3>
            <h3>(HTML5, Tailwind CSS, ReactJS, TypeScript and Redux)</h3>
            <p>
              The "Store" is an online store with some of the functionalities of
              the popular ecommerce stores where you can search and add your
              favourite items into your shopping cart.
            </p>
            <div className="links">
              <button>
                <a href="https://github.com/mikeyxx/store" target="blank">
                  <ImGithub /> Repo
                </a>
              </button>{" "}
              <button>
                <a href="https://mikes-store.netlify.app/" target="blank">
                  {" "}
                  Live Site
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="projectDescWrap">
          <img src={upskill} alt="" width="350" height="400" />
          <div className="projectDesc">
            <h3>Upskill</h3>
            <h3>
              (ReactJS, Redux Toolkit, React Router, Tailwind, Axios,
              Express.js, Supabase, PostgreSQL)
            </h3>
            <p>
              Upskill is a social platform designed to bring people together and
              forge communities based around co-working, co-learning and skill
              sharing.
            </p>
            <div className="links">
              <button>
                <a
                  href="https://github.com/chingu-voyages/UpSkill"
                  target="blank"
                >
                  <ImGithub /> Repo
                </a>
              </button>{" "}
              <button>
                <a href="https://upskill-client.onrender.com/" target="blank">
                  {" "}
                  Live Site
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
