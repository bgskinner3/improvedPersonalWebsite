import React, { useState, useEffect } from 'react';
import PageNotFound from './PageNotFound';
import { useMutation, useQuery } from '@apollo/client';
import {
  CREATE_CARD_MUTATION,
  UPDATE_CARD_MUTATION,
} from '../graphql/mutations';
import { GET_ALL_CARDS } from '../graphql/queries';
const token = process.env.REACT_APP_JWT_SECRET;
const CreateCards = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [field, setfield] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [createCard] = useMutation(CREATE_CARD_MUTATION);
  const { data } = useQuery(GET_ALL_CARDS);
  const admin = localStorage.getItem(token);

  useEffect(() => {
    getSubjects();
  }, [data]);

  const getSubjects = () => {
    let type = [];
    if (data) {
      data.cards.forEach((card) => {
        if (!type.includes(card.field)) {
          type.push(card.field);
        }
      });
    }
    setSubjects(type);
  };
  const CreateCard = async () => {
    try {
      await createCard({
        variables: {
          input: {
            title: title,
            description: description,
            field: field,
          },
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return admin ? (
    <form className="bg-coolGray-50 py-4" onSubmit={() => CreateCard()}>
      <div className="container px-4 mx-auto">
        <div className="p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">
          <div className="pb-6 border-b border-coolGray-100">
            <div className="flex flex-wrap items-center justify-between -m-2">
              <div className="w-full md:w-auto p-2">
                <h2 className="text-coolGray-900 text-lg font-semibold">
                  Create Index Card
                </h2>
              </div>
              <div className="w-full md:w-auto p-2">
                <div className="flex flex-wrap justify-between -m-1.5">
                  <div className="w-full md:w-auto p-1.5">
                    <button
                      className=" btn btn-outline btn-secondary"
                      type="submit"
                    >
                      <p>Save</p>
                    </button>
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
                    Title
                  </p>
                </div>
                <div className="w-full md:flex-1 p-3">
                  <input
                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                    type="text"
                    placeholder=""
                    required
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
                    Subject
                  </p>
                </div>
                <div className="w-full md:flex-1 p-3">
                  <input
                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                    type="text"
                    placeholder={field}
                    required
                    onChange={(e) => setfield(e.target.value)}
                  />
                </div>
                <div className="w-full md:flex-1 p-3">
                  <div className="relative">
                    <svg
                      className="absolute right-4 top-1/2 transform -translate-y-1/2"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.3333 6.1133C11.2084 5.98913 11.0395 5.91943 10.8633 5.91943C10.6872 5.91943 10.5182 5.98913 10.3933 6.1133L8.00001 8.47329L5.64001 6.1133C5.5151 5.98913 5.34613 5.91943 5.17001 5.91943C4.99388 5.91943 4.82491 5.98913 4.70001 6.1133C4.63752 6.17527 4.58792 6.249 4.55408 6.33024C4.52023 6.41148 4.50281 6.49862 4.50281 6.58663C4.50281 6.67464 4.52023 6.76177 4.55408 6.84301C4.58792 6.92425 4.63752 6.99799 4.70001 7.05996L7.52667 9.88663C7.58865 9.94911 7.66238 9.99871 7.74362 10.0326C7.82486 10.0664 7.912 10.0838 8.00001 10.0838C8.08801 10.0838 8.17515 10.0664 8.25639 10.0326C8.33763 9.99871 8.41136 9.94911 8.47334 9.88663L11.3333 7.05996C11.3958 6.99799 11.4454 6.92425 11.4793 6.84301C11.5131 6.76177 11.5305 6.67464 11.5305 6.58663C11.5305 6.49862 11.5131 6.41148 11.4793 6.33024C11.4454 6.249 11.3958 6.17527 11.3333 6.1133Z"
                        fill="#8896AB"
                      ></path>
                    </svg>
                    <select
                      className="appearance-none w-full py-2.5 px-4 text-coolGray-900 text-base font-normal bg-white border outline-none border-coolGray-200 focus:border-green-500 rounded-lg shadow-input"
                      onChange={(e) => setfield(e.target.value)}
                    
                    >
                      <option disabled selected>
                        Current Subjects
                      </option>
                      {subjects.map((subject, i) => {
                        return <option key={i}>{subject}</option>;
                      })}
                    </select>
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
                    Description
                  </p>
                  <p className="text-xs text-coolGray-500 font-medium">
                    Note Card Information
                  </p>
                </div>
                <div className="w-full md:flex-1 p-3">
                  <textarea
                    className="block w-full h-64 p-6 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input resize-none"
                    required
                    placeholder="..."
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  ) : (
    <PageNotFound />
  );
};

export default CreateCards;
