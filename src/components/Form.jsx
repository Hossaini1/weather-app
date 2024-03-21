import Context from "../CityContext";
function Form() {
  const { fetchData, city, setCity} = Context();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
   setCity('')
    
  };

  return (
    <div className="flex justify-center w-full mb-5 p-5">
      <form className="flex" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setCity(e.target.value)}
          value={city}
          className="rounded-l-md px-4 py-2 outline-none bg-sky-100 w-96"
          type="text"
          placeholder="Search city"
        />
        <button
          className="bg-sky-700 text-white rounded-r-md px-4 py-2 ml-1 hover:bg-sky-900"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}
export default Form;
