import datas from "../dummy2.json";
import ProfileList from "../components/ProfileList";
import SearchProfile from "../components/SearchProfile";
import { useState } from "react";
export default function Profile() {
  const [filteredDatas, setFilteredDatas] = useState(datas);

  const searchChange = (value: string) => {
    const result = datas.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredDatas(result);
    console.log(value);
  };

  return (
    <div>
      <SearchProfile onSearch={searchChange} filter={filteredDatas.length} />
      Profile List
      <br />
      <div>
        {filteredDatas.map(({ name, language, id, bio, version }) => {
          return (
            <div key={id}>
              <ProfileList
                name={name}
                language={language}
                bio={bio}
                version={version}
              />
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}
