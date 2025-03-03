import React from "react";
import pos from "../../assets/pos.png";


const index = () => {
  return (
    <div className="projectContainer" id="projects">
      <h1>Latest Projects</h1>
      <div className="wrap">
        <div className="projectDescWrap">
          <img src={pos} alt="shirt design" width="350" height="400" />
          <div className="projectDesc">
            <h3>RetailMate</h3>
            <h3>(React, TypeScript, Tailwind, NodeJS, PostgreSQL)</h3>
            <p>
              RetailMate is a comprehensive subscription-based platform designed to empower businesses with seamless
              management of their inventories, checkout processes, staff, customer information, and financial reporting
              — all from a centralized system.</p>
            <p> Built as a multi-tenant architecture, RetailMate ensures data isolation across businesses, providing
              each business with a secure, independent environment while maintaining scalability and optimal
              performance. The platform streamlines daily operations, enhances productivity, and enables data-driven
              decision-making, making it an ideal solution for businesses seeking to optimize their retail
              operations.</p>
            <div className="links">
              {/*<button>*/}
              {/*  <a*/}
              {/*      href="https://github.com/mikeyxx/3D_shirt_studio"*/}
              {/*      target="blank"*/}
              {/*  >*/}
              {/*    <ImGithub/> Repo*/}
              {/*  </a>*/}
              {/*</button>*/}
              <button>
                <a
                    href="https://retailmate.store/login"
                    target="blank"
                >
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
