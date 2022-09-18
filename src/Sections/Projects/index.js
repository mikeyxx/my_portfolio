import React from "react";
import CocktailDB from "../../assets/cocktaildb.gif";
import moviesDB from "../../assets/moviesearchapi.gif";
import miniStore from "../../assets/mini_shop.gif";
import birthdayReminder from "../../assets/birthdayApp_AdobeExpress.gif";
import { ImGithub } from "react-icons/im";

const index = () => {
  return (
    <div className="projectContainer" id="projects">
      <h1>Latest Projects</h1>
      <div className="wrap">
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
          <img src={miniStore} alt="" width="350" height="400" />
          <div className="projectDesc">
            <h3>Mini Store</h3>
            <h3>(HTML5, CSS3, Styled-Components, ReactJS, Redux)</h3>
            <p>
              A mini ecommerce store where you can search and add your favourite
              items into your shopping cart.
            </p>
            <div className="links">
              <button>
                <a href="https://github.com/mikeyxx/ministore" target="blank">
                  <ImGithub /> Repo
                </a>
              </button>{" "}
              <button>
                <a href="https://react-ministore.netlify.app/"> Live Site</a>
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
                  href="https://github.com/mikeyxx/birthday-reminder-app"
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
