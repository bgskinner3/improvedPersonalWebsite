import React, { useRef } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ArticleIcon from '@mui/icons-material/Article';
import WebIcon from '@mui/icons-material/Web';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import logo from '../images/logo.png';
import 'tw-elements';
const token = process.env.REACT_APP_JWT_SECRET;

const NavBar = () => {
  const navigate = useNavigate();
  const admin = localStorage.getItem(token);

  return (
    <header>
      <nav className="navbar navbar-expand-lg shadow-lg  py-2 bg-white  relative flex items-center w-full justify-between">
        <button
          onClick={() => navigate('/')}
          className="h-16 pt-3 overflow-hidden"
        >
          <div
            className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-white transition duration-200 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            <img src={logo} alt="" className="" />
          </div>
        </button>
        {admin ? (
          <div className="px-6 w-full flex flex-wrap items-center justify-end">
            <div className="flex items-center">
              <button
                className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContentY"
                aria-controls="navbarSupportedContentY"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  className="w-5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="navbar-collapse collapse grow justify-end"
              id="navbarSupportedContentY"
            >
              <ul className="navbar-nav justify-end lg:flex lg:flex-row">
                <li className="relative">
                  <button
                    onClick={() => navigate('/cards')}
                    className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-neutral-content text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-200 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="dark"
                  >
                    <div>
                      <SpeakerNotesIcon />
                      <p className="text-xs">Note Cards</p>
                    </div>
                  </button>
                </li>
                <li className="relative">
                  <button
                    onClick={() => navigate('/adminprojects')}
                    className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-neutral-content text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-200 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="dark"
                  >
                    <div>
                      <AddBoxIcon />
                      <p className="text-xs">Add Project</p>
                    </div>
                  </button>
                </li>
                <li className="relative">
                  <div
                    className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-neutral-content text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-200 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="dark"
                    onClick={() => {
                      localStorage.clear();
                      navigate(`/`);
                    }}
                  >
                    <div>
                      <LogoutIcon />
                      <p className="text-xs"> Logout</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="px-6 w-full flex flex-wrap items-center justify-end">
            <div className="flex items-center">
              <button
                className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContentY"
                aria-controls="navbarSupportedContentY"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  className="w-5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="navbar-collapse collapse grow justify-end"
              id="navbarSupportedContentY"
            >
              <ul className="navbar-nav justify-end lg:flex lg:flex-row">
                <li className="relative">
                  <Link
                    to="resume"
                    spy={true}
                    smooth={true}
                    className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-200 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="dark"
                  >
                    <div>
                      <ArticleIcon />
                      <p className="text-xs">Resume</p>
                    </div>
                  </Link>
                </li>
                <li className="relative">
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-200 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="dark"
                  >
                    <div>
                      <WebIcon />
                      <p className="text-xs">Projects</p>
                    </div>
                  </Link>
                </li>
                <li className="relative">
                  <Link
                    className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-200 ease-in-out"
                    to="about"
                    spy={true}
                    smooth={true}
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="dark"
                  >
                    <div>
                      <InfoIcon />
                      <p className="text-xs">About Me</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
