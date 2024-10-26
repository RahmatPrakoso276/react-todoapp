// inisialisasi props tipe datanya
interface Props {
  title: string;
  tags: string[];
  date: string;
}

//melakukan destructure dari props
export default function MovieList({ title, tags, date }: Props) {
  return (
    <>
      <div>{title}</div>
      <div>Kategori : {tags.join(", ")}</div>
      <div>Tanggal : {date}</div>
    </>
  );
}
