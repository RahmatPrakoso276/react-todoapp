import posts from "../dummy.json";
import MovieList from "../components/MovieList";
import React, { useState } from "react";

export default function Index() {
  const [title, setTitle] = useState("");

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <div>Simple Movie List</div>
      <div>
        Cari Film :
        <input
          type="text"
          value={title}
          onChange={changeSearch}
          placeholder="cari judul"
        />
        {title}
      </div>
      <div>
        {/* akses semua data di json */}
        {posts.map(({ id, title, tags, date }) => {
          return (
            // harus unik
            <div key={id}>
              {/* reuseable components */}
              pertama:
              <MovieList
                //  passing data props ke childnya
                title={title} // mengirim title ke child
                tags={tags} // mengirim tags (berupa array) ke child
                date={date} // mengirim date ke child
              />
              kedua:
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
}
