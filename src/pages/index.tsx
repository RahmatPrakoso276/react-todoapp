import posts from "../dummy.json";
import MovieList from "../components/MovieList";

export default function index() {
  return (
    <>
      <div>Simple Movie List</div>
      <div>
        {/* akses semua data di json */}
        {posts.map((data) => {
          return (
            <>
              {/* reuseable components */}
              <MovieList
                //  passing data props ke childnya
                key={data.id} // harus unik
                title={data.title} // mengirim title ke child
                tags={data.tags} // mengirim tags (berupa array) ke child
                date={data.date} // mengirim date ke child
              />
              br
            </>
          );
        })}
      </div>
    </>
  );
}
