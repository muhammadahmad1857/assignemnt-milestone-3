import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-800 p-4">
      <footer className="text-white body-font">
        <div className="container px-5 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <span className="ml-3 text-xl">Huzaifa Ayub</span>
          </a>
          <p className="text-sm text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Developed by Huzaifa-1100.
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href={"https://www.facebook.com/H.Z.Shooter"}
              className="text-gray-200 "
            >
              <FaFacebook className="text-2xl hover:text-blue-500 " />
            </Link>
            <Link
              target="_blank"
              href={"https://www.youtube.com/@huboftech944"}
              className="text-gray-200"
            >
              <FaYoutube className="ml-2 text-2xl hover:text-red-500 " />
            </Link>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/huzaifa-ayub-b29132288/"}
              className="text-gray-200"
            >
              <FaLinkedin className="ml-2 text-2xl hover:text-blue-500 " />
            </Link>
            <Link
              target="_blank"
              href={"https://github.com/Huzaifa-1100"}
              className="text-gray-200"
            >
              <FaGithub className="ml-2 text-2xl hover:text-gray-500" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
