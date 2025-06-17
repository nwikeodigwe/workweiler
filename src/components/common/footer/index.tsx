import { Link } from "react-router";
import { Socials } from "./socials";

export const Footer = () => {
  return (
    <section className="py-10 bg-gold text-white">
      <div className="container flex flex-col gap-5">
        <div className="grid grid-cols-4">
          <div>
            <Link to="/">
              <h2>Logo</h2>
            </Link>
          </div>
          <div>
            <h2 className="font-semibold">Workweiler</h2>
            <ul className="flex flex-col gap-2 mt-2">
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/terms">Terms and Conditions</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold">Employer</h2>
            <ul className="flex flex-col gap-2 mt-2">
              <li>
                <Link to="/employer/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold">Candidate</h2>
            <ul className="flex flex-col gap-2 mt-2">
              <li>
                <Link to="/listings">Job Listings</Link>
              </li>
              <li>
                <Link to="/candidate/faq">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
        <Socials />
        <div>
          <p className="text-sm text-center">
            All trademarks are the property of their respective owners, All
            rights reserved ©2025
          </p>
        </div>
      </div>
    </section>
  );
};
