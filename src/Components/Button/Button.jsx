import './button.scss'

function Button({ onClick }) {
  return (
    <button className="button loadmore" onClick={onClick} type="button">
      Load more
    </button>
  );
}

export default Button; 