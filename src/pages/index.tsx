import posts from "../dummy.json";
import MovieList from "../components/MovieList";

// destructure properti title, tags, dan date dari object props
export default function index() {
  return (
    <>
      <div>Simple Movie List</div>
      <div>
        {posts.map((data) => {
          return (
            <MovieList
              key={data.id}
              title={data.title}
              tags={data.tags}
              date={data.date}
            />
          );
        })}
      </div>
    </>
  );
}
