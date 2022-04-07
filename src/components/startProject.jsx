import React, { useEffect, useState } from "react";
import { Categories } from "./Categories";
import { Arts } from "./Categories/Arts";
import "./Style/startProject.css";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

function StartProject({close, setClose, closeF, setCloseF}) {

  let navigate = useNavigate();

  useEffect(() => {
    setClose(true);
    setCloseF(false);
  },[])

  return (
    <>
      <div className="header">
        <h1 className="heading">Bring your creative project to life.</h1>
        <button className="but" onClick={() => {navigate("/Step1")}}>Start a project</button>
      </div>

      <div className="bodyImg">
        <div className="a">
          <img src="https://a.kickstarter.com/assets/projects/learn/refresh/feature-1-6e68a182e1340ce87d9b3c9f9a25da52935d14be496a4e88085025ae54bb870d.jpg"></img>{" "}
          <span>
            De La Soul raised $600,874 to make their Grammy-winning album, And
            the Anonymous Nobody..., with full creative contorl.
          </span>
        </div>
        <div className="b">
          {" "}
          <img src="https://a.kickstarter.com/assets/projects/learn/refresh/feature-2-8c80ae939629f8b10087e097c965990ff4b3eae72b90b51fc597c7f794420881.jpg"></img>{" "}
        </div>
        <div className="c">
          {" "}
          <img src="https://a.kickstarter.com/assets/projects/learn/refresh/feature-3-48fe9583f16524ea8412cbb862901b00af1aaf669fdcf43f466f34af5696fc08.jpg"></img>
        </div>
      </div>

      {/* Content */}

      <div className="main_content">
        <div className="commas">
          <i className="fa-solid fa-quote-left"></i>
        </div>
        <div className="contain">
          We see Kickstarter as a home for creative minds and a wonderful
          platform; where people who believe, respect, and see the vision can
          support an idea and make it a reality.
        </div>
        <span className="author"> - DE LA SOUL</span>
      </div>

      <div className="section2">
        <div className="desc">
          A Kickstarter project does more than raise money. It builds community
          around your work.
        </div>
      </div>

      <div className="FAQ">
        <div className="Question">What can I use Kickstarter to fund?</div>
        <div className="ans">
          Kickstarter is specifically for creative projects in the following
          categories: Art, Comics, Crafts, Dance, Design, Fashion, Film & Video,
          Food, Games, Journalism, Music, Photography, Publishing, Technology,
          and Theater. Make an album, write a book, create an immersive theater
          experience, score a film — you name it. Read more about our project
          guidelines.
        </div>

        <div className="Question">Who can I get pledges from?</div>
        <div className="ans">
          Millions of people visit Kickstarter every week, but support always
          begins with people you know. Friends, fans, and the communities you’re
          a part of will likely be some of your earliest supporters, not to
          mention your biggest resources for spreading the word about your
          project.
        </div>

        <div className="Question">How much work is it to run a project?</div>
        <div className="ans">
          <p>
            Every Kickstarter project has its share of exhilarating and
            challenging moments, but the amount of work generally depends on the
            size and complexity of the project.{" "}
          </p>
          <p>
            Expect the first few days after launch to be very busy as you spread
            the word to your community, answer questions from potential backers,
            and more. You may need to spend the last few days rallying your
            social networks in order to reach your funding goal.
          </p>
          <p>
            Projects sometimes take on a life of their own, and in that case you
            should expect to spend more time creating and fulfilling rewards.
          </p>
        </div>
      </div>

      <div className="video p-3 mb-2 bg-dark text-white">
        <iframe
          className="landscape"
          width="1050"
          height="780"
          src="https://www.youtube.com/embed/I1uMutuYReM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div className="section2">
        <div className="desc">Why Kickstarter?</div>
      </div>

      <div className="FAQ">
        <div className="Question">
          Kickstarter is just for creative projects.
        </div>
        <div className="ans">
          We built Kickstarter as a tool for artists, designers, makers,
          musicians, and creative people everywhere. We’re proud to be the only
          platform that’s fully dedicated to building community around creative
          projects.
        </div>

        <div className="Question">
        All-or-nothing funding works.</div>
        <div className="ans">
          Kickstarter’s all-or-nothing model allows you to choose a funding goal
          and a set number of days to reach that goal. This way, you don’t get
          stuck without enough funds to realize your project. It also gives
          backers incentive to pledge more to help you reach your goal.
        </div>

        <div className="Question">
        Our community wants to support you.</div>
        <div className="ans">
          Millions of backers agree — helping to create something new is
          exciting. People love peeking behind the creative curtain and directly
          supporting the creative process. In fact, 13.9 million people have
          pledged more than $3.39 billion to bring Kickstarter projects to life
          over the years.
        </div>
      </div>
      <hr />

      <div className="section2">
        <div className="desc">Create a project in any of the following categories</div>
      </div>
      
      <div className="navbar-cat">
      <Categories />
      </div>
      
      <Arts/ >

      <div className="container-fluid destiny">
        <div className="row">
        <div className="lg bottom-destiny">
        “A way for every creative person to control their destiny.”
        </div>
        <div className="lg author-destiny">— Brian Fargo, successful Kickstarter project creator</div>
        </div>
        <button className="sbutton btn btn-secondary btn-lg">Start a project</button>
      </div> 
    </>
  );
}

export { StartProject };
