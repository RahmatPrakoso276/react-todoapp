interface Props {
  name: string;
  language: string;
  bio: string;
  version: number;
}

export default function ProfileList({ name, language, bio, version }: Props) {
  return (
    <div>
      <div>{name}</div>
      <div>bahasa : {language}</div>
      <div>bio : {bio}</div>
      <div>versi : {version}</div>
    </div>
  );
}
