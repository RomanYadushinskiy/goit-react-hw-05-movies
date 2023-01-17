

export const CastList = ({ credits }) => {
  return (
    <div>
      <ul>
        {credits &&
          credits.map(({ id, profile_path, name, character }) => {
            return (
              <li key={id}>
                <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt={name} />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};