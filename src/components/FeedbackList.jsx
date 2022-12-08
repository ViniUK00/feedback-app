import PropTypes from "prop-types"
import FeedBackItem from "./FeedbackItem"

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feetback Yet.</p>
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedBackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  )
}

FeedbackList.protoTypes = {
  feedback: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
}

export default FeedbackList
