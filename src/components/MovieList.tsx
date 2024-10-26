
interface Props {
  title: string;
  tags: string[];
  date: string;
}

export default function MovieList({ title, tags, date }: Props) {
  return (
    <>
      <div>{title}</div>
      <div>Kategori : {tags.join(", ")}</div>
      <div>Tanggal : {date}</div>
    </>
  );
}
