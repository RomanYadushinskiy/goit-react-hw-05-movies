export const ListReviews = ({ reviews }) => {
  return (
    <>
      {reviews.length ? (
        <ul>
          {reviews.map(({ id, author, content }) => {
           return <li key={id}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>;
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};