import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  author: string;
  content: string;
  postId: number;
}

const Card = ({ author, content, postId }: Props) => {
  return (
    <li className="my-4 mx-2 p-4 bg-primary-100 shadow-md rounded-md transition duration-500 transform hover:-translate-y-1">
      <Link to={`${postId}`}>
        <p className="text-sm font-semibold text-primary-900 uppercase italic">
          {author}
        </p>
        <p className="text-xl mt-1">{content}</p>
      </Link>
    </li>
  );
};

export default Card;
