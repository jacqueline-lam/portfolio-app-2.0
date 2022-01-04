import Comment from './Comment';

const Comments = ({ projectComments }) => {
  const renderComments = projectComments.map(comment => {
    return <Comment key={comment.id} comment={comment} />
  })

  return (
    <div className='comments'>
      {renderComments}
    </div>
  );
};

export default Comments;