import React from "react";

const Home = ({ posts }: any): React.ReactElement => {

  console.log('posts: ', posts);
  return (
    <div>
      <div className="container">
        <header
          className="jumbotron my-3 text-center"
          id="header"
          style={{background: "#dbe1e2"}}
        >
          <h1 className="display-3 lead-1">A Warm Welcome!</h1>
          <p className="lead-2">
            A warm welcome and lots of good wishes on becoming part of our
            growing team. Congratulations and on behalf of all the members. We
            are all happy and excited about your inputs and contribution to our
            Network.
          </p>
        </header>
      </div>

      <div id="portfolio-wrapper">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100">
                <a
                  href="/<%= video.path %>"
                  className="pop-img"
                  title="Add Description"
                >
                    <div className="card-body">
                      <h4
                        className="card-title text-black"
                        style={{textDecoration: "none"}}
                      >
                      </h4>
                      <p className="card-text">
                      </p>
                    </div>
                  </a>
                  <div className="card-footer">
                    <a
                      href="/individual/<%=video.id %>"
                      className="btn btn-info"
                    >
                      View
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home