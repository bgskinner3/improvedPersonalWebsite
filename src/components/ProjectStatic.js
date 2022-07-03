import React from 'react';
import GetAppIcon from '@mui/icons-material/GetApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import PiePal from '../images/piepal.png';
import bodegaswap from '../images/bodegswap.png';

const StaticProjects = () => {
  return (
    <div className="grid gap-12">
      <div className="grid grid-cols-2 ">
        <div className="flex justify-center">
          <img
            src={bodegaswap}
            alt=""
            className="object-contain h-96 w-96 content-center"
          />
        </div>

        <div className="grid gird-cols-1 pt-5">
          <h2 className="text-bold text-2xl font-serif">Bodega Swap</h2>
          <p className="text-left font-serif leading-loose">
            Bodega Swap is a bartering platform that allows users to trade their
            'trash' for some else's 'treasures'. Connect with other users,
            discuss trade agreements and make the Trade. The Tech Stack for this
            project comprises of React, Supabase and Tailwind. The project as a
            whole took three weeks to conceptualize the idea, produce a
            schema/template and develop the application.
          </p>
          <div className="card-actions justify-evenly pt-10">
            <div className="text-gray-400">
              <a href="https://bodega-swap.herokuapp.com">
                <GetAppIcon
                  sx={{ fontSize: 50 }}
                  className="hover:scale-110 hover:animate-bounce"
                />
              </a>
              <p>App</p>
            </div>
            <div className="text-gray-400 ">
              <a href="https://github.com/FSA-Capstone-2201-Team-7/bodega-swap">
                <GitHubIcon
                  sx={{ fontSize: 50 }}
                  className="hover:scale-110 hover:animate-bounce"
                />
              </a>
              <p>GitHub</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 ">
        <div className="grid gird-cols-1 pt-5">
          <h2 className="text-bold text-2xl font-serif">Pie_Pal</h2>
          <p className="text-left font-serif leading-loose ">
            Pie-Pal is a e-commerce application providing consumers the ability
            to purchase pizza from anywhere in country. While there are many
            cities claiming to have best pizza (Detroit, New York, Chicago,
            etc.). We're here to put an end to that debate. The Tech Stack
            includes, React/Redux, Postgres, Express.
          </p>
          <div className="card-actions justify-evenly pt-10">
            <div className="text-gray-400">
              <a href="https://pie-pal.herokuapp.com/">
                <GetAppIcon
                  sx={{ fontSize: 50 }}
                  className="hover:scale-110 hover:animate-bounce"
                />
              </a>
              <p>App</p>
            </div>
            <div className="text-gray-400">
              <a href="https://github.com/2201-GraceShopper-CharmanderChargers/Pie-Pal">
                <GitHubIcon
                  sx={{ fontSize: 50 }}
                  className="hover:scale-110 hover:animate-bounce"
                />
              </a>
              <p>GitHub</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={PiePal}
            alt=""
            className="object-contain h-96 w-96 content-center"
          />
        </div>
      </div>
    </div>
  );
};

export default StaticProjects