import React, { useState, useEffect, useMemo } from 'react';
import PageNotFound from './PageNotFound';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_CARD_MUTATION } from '../graphql/mutations';

import { GET_ALL_CARDS } from '../graphql/queries';
import SearchIcon from '@mui/icons-material/Search';
const token = process.env.REACT_APP_JWT_SECRET;

const Cards = () => {
  const [cardSearch, setCardSearch] = useState('');
  const [fieldFilter, setFieldFilter] = useState([]);
  const [fieldType, setFieldType] = useState('');
  const [displayCard, setDisplayCard] = useState([]);
  const { data, loading, refetch } = useQuery(GET_ALL_CARDS);
  const [deleteCard] = useMutation(DELETE_CARD_MUTATION);
  const navigate = useNavigate(null);
  const admin = localStorage.getItem(token);

  useEffect(() => {
    init();
  }, [data]);

  const init = () => {
    let type = [];
    if (data) {
      data.cards.forEach((card) => {
        if (!type.includes(card.field)) {
          type.push(card.field);
        }
      });

      setDisplayCard(data.cards);
    }
    setFieldFilter(type);
  };
  const deleteSingleCard = async (id) => {
    try {
      await deleteCard({
        variables: {
          deleteCard: id,
        },
      });
      refetch();
    } catch (error) {
      console.error(error);
    }
  };
  const filteredCards = useMemo(() => {
    setFieldType('');
    const nameRegexMatch = new RegExp(cardSearch, 'ig');

    return displayCard.filter((card) => {
      return card.title.match(nameRegexMatch);
    });
  }, [displayCard, cardSearch]);

  if (!admin) {
    return <PageNotFound />;
  }

  return loading ? (
    <Loading />
  ) : (
    <div className="h-screen">
      <div className="grid grid-cols-1 gap-4  p-6 ml-10 mr-10">
        <div className="flex">
          <SearchIcon sx={{ fontSize: 50 }} />
          <input
            type="text"
            className="relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-indigo-200 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-500 focus:outline-none "
            placeholder="Search"
            aria-label="Search"
            value={cardSearch}
            onChange={(e) => setCardSearch(e.target.value)}
          ></input>
        </div>
        <div className="dropdown ">
          <label tabIndex="0" className="btn btn-outline w-full">
            Filter
          </label>
          <ul
            tabIndex="0"
            className="dropdown-content menu p-2 shadow bg-white rounded-box w-full border-4 bg-primary-content rounded-3xl border-neutral-content shadow-2xl shadow-black "
            onClick={(e) => setFieldType(e.target.innerHTML.toLowerCase())}
          >
            {fieldFilter.map((type, i) => {
              return (
                <li key={i} className="text-black">
                  <div>{type}</div>
                </li>
              );
            })}
          </ul>
        </div>
        <button
          className="btn btn-outline"
          type="button"
          onClick={() => navigate('/createcards')}
        >
          CreateCard
        </button>
      </div>
      <div className="carousel rounded-box pt-20 pb-10">
        {filteredCards.map((card, i) => {
          if (card.field === fieldType || fieldType === '') {
            return (
              <div key={card.id}>
                <label className="swap swap-flip w-screen ">
                  <input type="checkbox" />
                  <div className="swap-on">
                    <div className="card md:w-96 h-96 overflow-scroll lg:card-side bg-white shadow-xl shadow-black p-10">
                      <div className="text-left prose text-xs md:text-md text-black font-serif prose-slate max-w whitespace-pre-line">
                        {card.description}
                      </div>
                    </div>
                  </div>
                  <div className="swap-off">
                    <div className="card grid grid-cols-1 md:w-96 h-96 overflow-scroll lg:card-side bg-white shadow-xl shadow-black p-10">
                      <div className="card-body text-black">{card.title}</div>
                      <div className="grid grid-cols-2 mt-20 gap-4">
                        <button
                          className="btn btn-active"
                          // onClick={() => navigate(`/cards/${card.id}`)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-active"
                          onClick={() => deleteSingleCard(card.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cards;
