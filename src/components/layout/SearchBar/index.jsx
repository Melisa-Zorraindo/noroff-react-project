export default function SearchBar() {
  return (
    <>
      <label htmlFor="search-bar">
        <span className="material-symbols-rounded">search</span>
        <input type="text" placeholder="Search" name="search" />
      </label>
    </>
  );
}
