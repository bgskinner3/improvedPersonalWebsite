import React, { useState, useEffect } from 'react';
import { GET_ALL_PROJECTS } from '../graphql/queries';
import { UPDATE_PROJECT, DELETE_PROJECT } from '../graphql/mutations';
import { useQuery, useMutation } from '@apollo/client';
import GetAppIcon from '@mui/icons-material/GetApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import Loading from './Loading';
import { toast } from 'react-toastify';
const token = process.env.REACT_APP_JWT_SECRET;

const Projects = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [githublink, setGithubLink] = useState('');
  const [appLink, setAppLink] = useState('');
  const { data, loading, refetch } = useQuery(GET_ALL_PROJECTS);
  const [updateproject] = useMutation(UPDATE_PROJECT);
  const [deleteProject] = useMutation(DELETE_PROJECT);
  const admin = localStorage.getItem(token);

  const DeleteProject = async (id) => {
    try {
     
      const {data} = await deleteProject({
        variables: {
          input: id,
        },
      });
      console.log(data)
      if(data) {
         toast.success('🦄  Successfully Deleted!', {
           position: 'top-center',
           autoClose: 3000,
           hideProgressBar: true,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
         });
      }
    refetch()
    } catch (error) {
      console.error(error);
    }
  };

  const EditProject = async (id) => {
    try {
      await updateproject({
        variables: {
          input: {
            id: id,
            title: title,
            githublink: githublink,
            applink: appLink,
            description: description
          }
        }
      });
      refetch()
    } catch (error) {
      console.error(error);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="grid gap-12">
      {data.projects.map((project) => {
        return (
          <div key={project.id}>
            {project.id % 2 === 0 ? (
              <div className="grid grid-cols-2 ">
                <div className="flex justify-center">
                  <img
                    src={project.image}
                    alt=""
                    className="object-contain h-96 w-96 content-center"
                  />
                </div>

                <div className="grid gird-cols-1 pt-5">
                  <h2 className="text-bold text-2xl font-serif">
                    {project.title}
                  </h2>
                  <p className="text-left font-serif leading-loose">
                    {project.description}
                  </p>
                  <div className="card-actions justify-evenly pt-10">
                    <div className="text-gray-400">
                      <a href={project.applink}>
                        <GetAppIcon
                          sx={{ fontSize: 50 }}
                          className="hover:scale-110 hover:animate-bounce"
                        />
                      </a>
                      <p>App</p>
                    </div>
                    <div className="text-gray-400 ">
                      <a href={project.githublink}>
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
            ) : (
              <div key={project.id} className="grid grid-cols-2 ">
                <div className="grid gird-cols-1 pt-5">
                  <h2 className="text-bold text-2xl font-serif">
                    {project.title}
                  </h2>
                  <p className="text-left font-serif leading-loose ">
                    {project.description}
                  </p>
                  <div className="card-actions justify-evenly pt-10">
                    <div className="text-gray-400">
                      <a href={project.applink}>
                        <GetAppIcon
                          sx={{ fontSize: 50 }}
                          className="hover:scale-110 hover:animate-bounce"
                        />
                      </a>
                      <p>App</p>
                    </div>
                    <div className="text-gray-400">
                      <a href={project.githublink}>
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
                    src={project.image}
                    alt=""
                    className="object-contain h-96 w-96 content-center"
                  />
                </div>
              </div>
            )}
            {admin ? (
              <div>
                <div className="flex-grow border-t border-gray mt-5" />
                <div className="bg-white">
                  <section className="bg-coolGray-50 py-4">
                    <div className="container px-4 mx-auto">
                      <div className="p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">
                        <div className="pb-6 border-b border-coolGray-100">
                          <div className="flex flex-wrap items-center justify-between -m-2">
                            <div className="w-full md:w-auto p-2">
                              <h2 className="text-coolGray-900 text-lg font-semibold">
                                Edit Project
                              </h2>
                            </div>
                            <div className="w-full md:w-auto p-2">
                              <div className="flex flex-wrap justify-between -m-1.5">
                                <div className=" grid gap-y-4 w-full md:w-auto p-1.5">
                                  <button
                                    className="  w-full btn btn-outline btn-secondary-focus "
                                    type="button"
                                    onClick={() => EditProject(project.id)}
                                  >
                                    <p>Edit</p>
                                  </button>
                                  <button
                                    className="  w-full btn btn-outline btn-secondary-focus "
                                    type="button"
                                    onClick={() => DeleteProject(project.id)}
                                  >
                                    <p>Delete</p>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="py-6 border-b border-coolGray-100 ">
                          <div className="w-full md:w-9/12">
                            <div className="flex flex-wrap -m-3">
                              <div className="w-full md:w-1/3 p-3">
                                <p className="text-sm text-coolGray-800 font-semibold">
                                  Title
                                </p>
                              </div>
                              <div className="w-full md:w-1/3 p-3">
                                <input
                                  className="w-full ml-5 px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                                  type="text"
                                  placeholder={project.title}
                                  onChange={(e) => setTitle(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="py-6 border-b border-coolGray-100">
                          <div className="w-full md:w-9/12">
                            <div className="flex flex-wrap -m-3">
                              <div className="w-full md:w-1/3 p-3">
                                <p className="text-sm text-coolGray-800 font-semibold">
                                  GitHub
                                </p>
                              </div>
                              <div className="w-full md:flex-1 p-3">
                                <div className="flex items-center focus-within:border-green-500 overflow-hidden border border-coolGray-200 rounded-lg shadow-input">
                                  <p className="px-4 text-base text-coolGray-500 font-normal">
                                    https://
                                  </p>
                                  <input
                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none border-l"
                                    type="url"
                                    placeholder={project.githublink}
                                    required
                                    onChange={(e) =>
                                      setGithubLink(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="py-6 border-b border-coolGray-100">
                          <div className="w-full md:w-9/12">
                            <div className="flex flex-wrap -m-3">
                              <div className="w-full md:w-1/3 p-3">
                                <p className="text-sm text-coolGray-800 font-semibold">
                                  App-Link
                                </p>
                              </div>
                              <div className="w-full md:flex-1 p-3">
                                <div className="flex items-center focus-within:border-green-500 overflow-hidden border border-coolGray-200 rounded-lg shadow-input">
                                  <p className="px-4 text-base text-coolGray-500 font-normal">
                                    https://
                                  </p>
                                  <input
                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none border-l"
                                    type="url"
                                    placeholder={project.applink}
                                    required
                                    onChange={(e) => setAppLink(e.target.value)}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pt-6">
                          <div className="w-full md:w-9/12">
                            <div className="flex flex-wrap -m-3">
                              <div className="w-full md:w-1/3 p-3">
                                <p className="text-sm text-coolGray-800 font-semibold">
                                  Project
                                </p>
                                <p className="text-xs text-coolGray-500 font-medium">
                                  Write a brief description about the project
                                </p>
                                <p className="text-xs text-coolGray-500 font-medium">
                                  Be sure to include the tech stack
                                </p>
                              </div>
                              <div className="w-full md:flex-1 p-3">
                                <textarea
                                  className="block w-full h-64 p-6 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input resize-none"
                                  required
                                  placeholder={project.description}
                                  onChange={(e) =>
                                    setDescription(e.target.value)
                                  }
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pb-6   border-b border-coolGray-100" />
                      </div>
                    </div>
                  </section>
                </div>
                <div className="flex-grow border-t border-gray" />
              </div>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Projects;


