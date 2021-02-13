import React from "react";

function Footer() {
  return (
    <div>
      <footer class="text-light bg-primary">
        <div class="container">
          <p class="float-right">
            <a
              href="body"
              id="back-to-top"
              data-scroll=".navbar"
              class="btn btn-lg btn-yellow btn-back-to-top smooth-scroll d-none"
              title="home"
              role="button"
            >
              &uarr;
            </a>
          </p>
          <div class="row">
            <div class="col-md-12 rights">
              <p>All rights reserved copyright &copy; - AfroMeme </p>
              <p>By &#64;the black dev</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
