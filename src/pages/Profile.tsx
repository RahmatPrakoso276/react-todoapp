import datas from "../dummy2.json";
import ProfileList from "../components/ProfileList";
export default function profile() {
  return (
    <div>
      Profile List
      <br />
      <div>
        {datas.map(({ name, language, id, bio, version }) => {
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
