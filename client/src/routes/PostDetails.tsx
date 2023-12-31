import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { Modal } from '../components/index';

interface PostInterface {
  author: string;
  content: string;
}

const PostDetails = () => {
  const post = useLoaderData() as PostInterface;
  if (!post) {
    return (
      <Modal>
        <main className="p-4 w-2/5">
          <h1>Coul Not Find The Post</h1>
          <p>Unfortunately requested post could not be found</p>
          <p>
            <Link
              to=".."
              className="p-1 rounded-md border-none bg-primary-100 w-2/5 cursor-pointer"
            >
              {' '}
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className="p-4 w-full">
        <p className="text-xl font-semibold text-primary-900 uppercase italic">
          {post.author}
        </p>
        <p className="text-base font-normal text-primary-900">{post.content}</p>
      </main>
    </Modal>
  );
};

export default PostDetails;

export async function loader({ params }: any) {
  const response = await fetch('http://localhost:8080/posts/' + params.postId);
  const resData = await response.json();
  return resData.post;
}
