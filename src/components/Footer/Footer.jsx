import React from "react";

export const Footer = (props) => {
  return (
    <footer className="page-footer font-small blue pt-4 bg-dark text-white mt-3">
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">Company name</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              atque autem veritatis nostrum a labore eos, et nemo rerum
              cupiditate.
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Ссылки</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Link 1</a>
              </li>
              <li>
                <a href="/">Link 2</a>
              </li>
              <li>
                <a href="/">Link 3</a>
              </li>
              <li>
                <a href="/">Link 4</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Контакты</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Link 1</a>
              </li>
              <li>
                <a href="/">Link 2</a>
              </li>
              <li>
                <a href="/">Link 3</a>
              </li>
              <li>
                <a href="/">Link 4</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2020 Copyright: <a href="/">AkzhigitovOlzhas.com</a>
      </div>
    </footer>
  );
};
