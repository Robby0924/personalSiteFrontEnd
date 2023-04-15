import React, { useState, useEffect } from "react";

const Architecture = () => {
  const [displayProject, setDisplayProject] = useState(false);

  function projectDisplayToggle(event) {
    if (!displayProject) {
      event.preventDefault();
      setDisplayProject(true);
    } else {
      setDisplayProject(false);
    }
  }

  return (
    <>
      {/*-----------EVERYTHING IN THIS RETURN IS JUST A SAMPLE. IT SHOULD BE CHANGED ONCE THE DATABASE IS UP-----------*/}
      <div>
        <h1>My Architecture Projects</h1>

        <h2>2017-2019</h2>
        <p>
          I spent 2 years as an apprentice under one of Cebu City's premier
          progressive architecture firms, Arkinamix. I was involved in various
          projects including residential, office, and high-rise buildings. I
          learned to coordinate with other apprentices as well as take direction
          under multiple architects. More importantly, it prepared me to take
          the licensure exam.
        </p>

        <h2>2019-2022</h2>
        <p>
          After passing the exam, I spent 3 years both as a project architect
          and a partner for one of Cebu City's newest firms, Prototecture. Along
          with my partner, we built relationships with potential clients,
          contractors, suppliers, and members of other allied services. My
          personal contribution to the firm was in developing office standards
          to drafting, contract making, and project on-boarding. As the
          technical expert in the partnership, I was also in charge of
          triple-checking our architectural drawings with all engineering
          drawings to make sure there are no discrepancies between them prior to
          construction. In the event that there are, I had the confidence to
          rectify it effectively by coordinating with their respective
          engineers. I could also quickly provide drawings during construction
          to help issues regarding to what was drawn on plan and what was built
          on site. We've built a dance club and commercial strip along with
          presenting proposals for a dozen other projects.
        </p>

        <p>
          At the same time, I maintained relations with Arkinamix and assisted
          them with the contract documents of one of their residential projects
          and proposed row-house project.
        </p>

        <h2>Images</h2>
        <p>
          Ultimately, I've been involved in many projects in the 5 years I spent
          in a professional setting. Here are some of my favorites:
        </p>

        {/*-----------INITIAL SAMPLE PROJECT-----------*/}

        <div>
          <button onClick={projectDisplayToggle} className="bldgTitle">
            The Montage
          </button>

          <div>
            {displayProject ? (
              <div className="bldgSubAndImg">
                <h4 className="aboutTheBuilding">About the building:</h4>
                <p>
                  The Montage is the newest and (in my opinion) most iconic
                  building in Cebu City, Philippines. It is a sustainable
                  multi-function building with commercial spaces at the podium
                  and offices in the tower.{" "}
                </p>
                <h4 className="myRole">My role:</h4>
                <p>
                  Drafting the proposal for the LEED certification for the
                  high-rise office. The structure was eventually pre-certified
                  in the Silver category.{" "}
                </p>
                <img
                  className="bldgImg"
                  src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/242355779_10165875795415473_638974461281986568_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=gohcDHz9454AX_rOWpf&_nc_ht=scontent-atl3-2.xx&oh=00_AfDnqua_0xNJzeRQC_IXmXS4rZHX0OeIgNnDwABnPDJzpA&oe=643E0447"
                  alt=""
                />
              </div>
            ) : null}
          </div>
        </div>

        {/*-----------INITIAL SAMPLE PROJECT END-----------*/}

        <div>
          <div className="bldgSubAndImg">
            <h3 className="bldgTitle">ASTRIP Commercial Center</h3>
            <h4 className="aboutTheBuilding">About the building:</h4>
            <p>
              ASTRIP was originally meant to be a mid-rise dormitory for
              students with a commercial podium.{" "}
            </p>
            <h4 className="myRole">My role:</h4>
            <p>
              Provided all construction documentation for the building.
              Coordinated with the contract manufacturer with regards to the
              megatext signage and other steel works.{" "}
            </p>
            <img
              className="bldgImg"
              src="https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/151326381_231514668647572_4041781631446339514_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=K9gVAUcaRjUAX9E2R8o&_nc_ht=scontent-atl3-2.xx&oh=00_AfA1Tw4haJTYu8cMlbiMfqSlebSXLMcwMAYyJGwZUjj-5w&oe=646072BC"
              alt=""
            />
          </div>
        </div>

        <div>
          <div className="bldgSubAndImg">
            <h3 className="bldgTitle">Tambuli Seaside Resort and Spa</h3>
            <h4 className="aboutTheBuilding">About the building:</h4>
            <p>
              ASTRIP was originally meant to be a mid-rise dormitory for
              students with a commercial podium.{" "}
            </p>
            <h4 className="myRole">My role:</h4>
            <p>
              Tambuli has multiple structures. I was involved in the Spa,
              Seaside Restaurant, Tower A & C Penthouse Suites, and Clubhouse
              drawings{" "}
            </p>
            <img
              className="bldgImg"
              src="https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/257544027_3075930169391413_8896689017364413642_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=42HOVe2ecz8AX8ad3cr&_nc_ht=scontent-atl3-1.xx&oh=00_AfDU6FF7dhOSivmK32oUwdLQloeRFk38z2oE0XHfYZ9k1A&oe=643E45EE"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Architecture;
