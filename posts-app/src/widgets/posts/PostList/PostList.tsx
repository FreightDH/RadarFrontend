import { FC, ReactElement } from 'react';
import { PostItem } from 'widgets';
import cl from './PostList.module.scss';

interface PostListProps {
  posts: Post[] | null;
  setEdit: (post: Post) => void;
  deletePost: (postId: number) => void;
}

const PostList: FC<PostListProps> = ({ posts, setEdit, deletePost }): ReactElement => {
  if (!posts || !posts.length) {
    return (
      <h1 className={cl.posts__title} style={{ textAlign: 'center' }}>
        Posts not found!
      </h1>
    );
  }

  return (
    <div className={cl.posts}>
      <h1 className={cl.posts__title}>React Posts App</h1>
      <ul className={cl.posts__list}>
        <li className={cl.list__header}>
          <div className={cl.header__number}>#</div>
          <div className={cl.header__title}>Title</div>
          <div className={cl.header__body}>Text</div>
        </li>
        {posts.map((post) => (
          <PostItem post={post} setEdit={setEdit} deletePost={deletePost} key={post.id} />
        ))}
      </ul>
    </div>
  );
};

export default PostList;
