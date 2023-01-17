import { useState } from 'react';

export const MovieSearch = ({ setSearchParams }) => {
  const [query, setQuery ] = useState("");

  const onChange = (e) => {
    setQuery(e.target.value);
  }

 const onSubmit = (e) => {
    e.preventDefault();
    setSearchParams(query ? { query: query.trim() } : {});
    setQuery('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} value={query} />
      <button type="submit">Search</button>
    </form>
  );
};