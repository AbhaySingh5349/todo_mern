import { useLoaderData } from 'react-router-dom';

import { Card } from '../index';

interface PostsInterface {
  posts: {
    author: string;
    content: string;
    id: number;
  }[];
}

const CardList = () => {
  const { posts } = useLoaderData() as PostsInterface; // data returned by loader asigned to current route

  return (
    <>
      {posts.length === 0 && (
        <div className="text-center text-primary-700">
          <h1>No Posts Found</h1>
        </div>
      )}

      {posts.length > 0 && (
        <ul className="grid grid-cols-3 gap-2 p-4 mx-6">
          {posts.map((item: any) => (
            <Card
              key={item.author}
              author={item.author}
              content={item.content}
              postId={item.id}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default CardList;
