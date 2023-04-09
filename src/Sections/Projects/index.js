import React from "react";
import CocktailDB from "../../assets/cocktaildb.gif";
import moviesDB from "../../assets/moviesearchapi.gif";
import birthdayReminder from "../../assets/birthdayApp_AdobeExpress.gif";
import { ImGithub } from "react-icons/im";
import store from "../../assets/store.gif";
import lendsqr from "../../assets/lendsqr.gif";
import upskill from "../../assets/upskill.jpg";
import jobApi from "../../assets/jobs-api.gif";
import smarty from "../../assets/smarty.gif";
import chat from "../../assets/chirpchat.jpg";

const index = () => {
  return (
    <div className="projectContainer" id="projects">
      <h1>Latest Projects</h1>
      <div className="wrap">
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
          <img src={jobApi} alt="" width="350" height="400" />
          <div className="projectDesc">
            <h3>Jobio</h3>
            <h3>
              (MongoDB, Express, ReactJS, NodeJS, TypeScript, Redux and Tailwind
              CSS, Cyclic)
            </h3>
            <p>
              Jobio is a job tracking application designed to help individuals
              and organizations keep track of job applications and hiring
              processes. It allows users to log job applications, track the
              status of each application, and set reminders for follow-up tasks
              such as sending thank-you notes, scheduling interviews, and
              checking on application status.
            </p>
            <div className="links">
              <button>
                <a href="https://github.com/mikeyxx/jobs-api" target="blank">
                  <ImGithub /> Repo
                </a>
              </button>{" "}
              <button>
                <a href="https://jobs-manager-api.cyclic.app/" target="blank">
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
              just looking to pass the time, we've got you covered with a wide
              variety of categories and levels of difficulty. Put on your
              thinking cap and get ready to test your knowledge against the best
              of the best. Will you be our next quiz champion? Let's find out!
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
          <img src={lendsqr} alt="" width="350" height="400" />
          <div className="projectDesc">
            <h3>A lending-as-a-service dashboard</h3>
            <h3>(HTML5, Tailwind CSS, ReactJS)</h3>
            <p>A Lending-as-a-Service solution dashboard that powers lenders</p>
            <div className="links">
              <button>
                <a
                  href="https://github.com/mikeyxx/lendsqr-banking-financial-service-dashboard"
                  target="blank"
                >
                  <ImGithub /> Repo
                </a>
              </button>{" "}
              <button>
                <a
                  href="https://banking-financial-service-dashboard.netlify.app/"
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
          <img src={CocktailDB} alt="" width="350" height="400" />
          <div className="projectDesc">
            <h3>Fresh Cocktails</h3>
            <h3>(HTML5, SCSS, ReactJS)</h3>
            <p>
              Your favourite cocktail maker. A fun app to learn how to make the
              best cocktails available!
            </p>
            <div className="links">
              <button>
                <a href="https://github.com/mikeyxx/cocktaildb" target="blank">
                  <ImGithub /> Repo
                </a>
              </button>{" "}
              <button>
                <a href="https://freshcocktailsdb.netlify.app/" target="blank">
                  {" "}
                  Live Site
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="projectDescWrap">
          <img src={moviesDB} alt="" width="350" height="400" />
          <div className="projectDesc">
            <h3>Your Favourite Movies Picker</h3>
            <h3>(HTML5, SCSS, ReactJS, CONTEXT-API)</h3>
            <p>
              An app where you can search for your favourite movies. You can
              also save movies you will love to watch!
            </p>
            <div className="links">
              <button>
                <a href="https://github.com/mikeyxx/moviesDB" target="blank">
                  <ImGithub /> Repo
                </a>
              </button>{" "}
              <button>
                <a
                  href="https://my-movies-database.netlify.app/"
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
