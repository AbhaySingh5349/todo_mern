import React from 'react';

import { MdPostAdd, MdMessage } from 'react-icons/md';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="m-4 p-4 bg-primary-700 rounded-md flex justify-between items-center">
      <h1>
        <MdMessage size={36} />
        React Poster
      </h1>
      <p>
        <Link to="/create-post">
          <MdPostAdd size={36} />
          Add ToDo
        </Link>
      </p>
    </header>
  );
};

export default Header;
