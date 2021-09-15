import React from "react";

export const Footer = (props) => {
  return (
    <footer className="page-footer font-small unique-color-dark pt-4 bg-dark text-white">
      <div className="text-center">
        <a
          className="p-2 px-3 bg-white text-dark text-decoration-none fw-bold"
          style={{ borderRadius: "20px" }}
          href="#up"
        >
          UP
        </a>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2018 Copyright:
        <a href="https://Olzhas.com" className="text-decoration-none">
          {" "}
          Olzhas.com
        </a>
      </div>
    </footer>
  );
};
