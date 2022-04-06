import React from "react";
import {Link} from "react-router-dom";
function Categories() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="#">  
          <Link className="nav-link active" aria-current="page" to="./Categories/Arts">Arts</Link>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Comics & lllustration <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Design & Tech 
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Film
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                Food & Craft
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                Games
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                Music
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                Publishing
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export { Categories };
