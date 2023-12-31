import { Modal } from '../index';

import { Link, Form, redirect } from 'react-router-dom';

const Post = () => {
  return (
    <Modal>
      <Form
        method="post"
        className="p-4 rounded-md w-full shadow-lg bg-primary-500 flex flex-col"
      >
        <p className="m-1">
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            name="author"
            className="w-full p-1 rounded-md outline-none bg-primary-100"
          />
        </p>
        <p className="m-1">
          <label htmlFor="content">Content: </label>
          <textarea
            id="content"
            name="content"
            rows={3}
            className="w-full p-1 rounded-md outline-none bg-primary-100"
          />
        </p>
        <div className="m-1 flex">
          <button
            type="submit"
            className="p-1 rounded-md border-none bg-primary-100 w-2/5 cursor-pointer"
          >
            Add Post
          </button>
          <Link
            to="/"
            className="ml-1 p-1 rounded-md border-none bg-primary-100 w-2/5 cursor-pointer"
          >
            Cancel
          </Link>
        </div>
      </Form>
    </Modal>
  );
};

export default Post;

export async function action({ request }: any) {
  const formData = await request.formData();
  const postData = {
    author: formData.get('author'),
    content: formData.get('content'),
  };

  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // generates a response obj
  return redirect('/');
}
