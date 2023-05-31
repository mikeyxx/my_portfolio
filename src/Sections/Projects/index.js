import React from "react";
import CocktailDB from "../../assets/cocktaildb.gif";
import birthdayReminder from "../../assets/birthdayApp_AdobeExpress.gif";
import { ImGithub } from "react-icons/im";
import store from "../../assets/store.gif";
import upskill from "../../assets/upskill.jpg";
import note from "../../assets/note.jpg";
import smarty from "../../assets/smarty.gif";
import chat from "../../assets/chirpchat.jpg";
import jobApp from "../../assets/jobApp.jpg";
import smartbasket from "../../assets/smartbasket.jpg";

const index = () => {
  return (
    <div className="projectContainer" id="projects">
      <h1>Latest Projects</h1>
      <div className="wrap">
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
              an SQL database (PostgreSQL), NodeJS, Express and React. All
              posted jobs are displayed on the home URL where a user without
              registering can check out any job and apply. In other to advertise
              a job on the platform, a user would have to register by clicking a
              link on the menu which prompts the user to register or login after
              which the user then creates a job and the homepage is immediately
              updated with the new created job. Also, a registered user can only
              delete/update the job he created. See below a video demo of the
              application.
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
              and experiences with the world. With ChirpChat, you can easily
              create a new user account, log in with your unique username and
              password, and start making posts about your day-to-day activities.
              Not only can you create your own posts, but you can also like and
              view other users' posts with ease. Whether you're sharing a funny
              meme, a thought-provoking article, or just updating your friends
              on your latest adventures, ChirpChat makes it easy to stay
              connected and engaged..
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
          <img src={smartbasket} alt="" width="350" height="400" />
          <div className="projectDesc">
            <h3>Smartbasket</h3>
            <h3>(JavaScript, React, Firebase, Tailwindcss)</h3>
            <p>
              Smartbasket is an intuitive app that saves users time by
              predicting which items to buy next based on their shopping habits.
              Say goodbye to mundane shopping lists and hello to a shopping
              experience that is delightful!
            </p>
            <div className="links">
              <button>
                <a
                  href="https://github.com/the-collab-lab/tcl-59-smart-shopping-list"
                  target="blank"
                >
                  <ImGithub /> Repo
                </a>
              </button>{" "}
              <button>
                <a
                  href="https://tcl-59-smart-shopping-list.web.app/"
                  target="blank"
                >
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
              It provides a convenient way to create, edit, and store various
              types of notes, such as text notes, to-do lists, and reminders.
              Users can easily capture and organize their ideas, thoughts,
              tasks, and important information in a structured and searchable
              manner. With a note application, users can keep their notes easily
              accessible and well-organized.
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
              workout disguised as pure fun. Whether you're a trivia buff or
              just looking to pass the time, Smarty Pants has you covered with a
              wide variety of questions. Put on your thinking cap and get ready
              to test your knowledge against the best of the best. Will you be
              our next quiz champion? Let's find out!
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
        <div className="projectDescWrap">
          <img src={birthdayReminder} alt="" width="350" height="400" />
          <div className="projectDesc">
            <h3>Birthday Reminder App</h3>
            <h3>(HTML5, CSS3, Material UI, ReactJS, Firebase)</h3>
            <p>
              Your personal birthday reminder app! This app helps you save and
              track the birthday of your friends and loved ones.
            </p>
            <div className="links">
              <button>
                <a
                  href="https://github.com/mikeyxx/birthday_app"
                  target="blank"
                >
                  <ImGithub /> Repo
                </a>
              </button>{" "}
              <button>
                <a href="https://birthday-rem-app.netlify.app/" target="blank">
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
