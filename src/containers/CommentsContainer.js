import Comments from '../components/comments/Comments'
// import CommentInput from '../components/comments/CommentInput'
// import { addComment } from "../actions/addComment";

function CommentsContainer({ project }) {
  return (
    <div id='comments-container'>
      <h5>Comments</h5>
      {/* <CommentInput
        addComment={addComment}
        projectId={project.id}
      /> */}
      {project.comments.length > 0 ?
        <Comments
          projectComments={project.comments}
        />
        :
        <i>This project does not have any comments yet.</i>
      }
    </div>
  )
}
export default CommentsContainer;