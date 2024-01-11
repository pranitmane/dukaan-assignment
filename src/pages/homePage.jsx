import { Link } from "react-router-dom";
import Header from "../components/header";

export default function HomePage() {
  return (
    <div className="overflow-y-scroll flex flex-col">
      <Header PageName="Home" />
      <div className="h-full p-4 md:p-8 flex flex-col items-center justify-between">
        <p>
          Visit{" "}
          <Link className="text-Blue underline" to="/payments">
            Payments Page
          </Link>
        </p>
        <div className="text-Black30">
          <p>
            Hello I'm{" "}
            <a
              className="hover:text-Blue underline"
              target="blank"
              href="https://twitter.com/pranitbmane"
            >
              Pranit
            </a>
            ,
          </p>
          <p>
            As a third year Computer Engineering student I am looking for
            Internship role, and what better place to work than with the amazing
            team at{" "}
            <a
              className="underline hover:text-Blue"
              target="blank"
              href="https://mydukaan.io"
            >
              Dukaan
            </a>
            , It would be a great learning experience for me to work on real
            life challenges.
          </p>
        </div>
      </div>
    </div>
  );
}
