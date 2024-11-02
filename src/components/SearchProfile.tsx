import { useState } from "react";

interface Props {
  onSearch: (value: string) => void;
  filter: number;
}

export default function SearchProfile({ onSearch, filter }: Props) {
  const [search, setSearch] = useState("");

  const searchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    console.log("clicked");
    onSearch(search);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(search);
    }
  };
  return (
    <>
      <div>Cari Profile</div>
      <div className="flex gap-2">
        <input
          type="text"
          className="border border-black"
          onChange={searchChange}
          onKeyDown={handleKeyDown}
        />
        <button className="border border-black px-4" onClick={handleClick}>
          Cari
        </button>
      </div>
      <br />
      <div>
        Ditemukan {filter} data dengan pencarian kata {search}
      </div>
    </>
  );
}
