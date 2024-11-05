// membuat website dinamis
export default function belajar() {
  const name = "Rahmat";
  const techStack = ["React", "Javascript", "Typescript"];
  const dummyData = [
    {
      id: 1,
      name: "Rahmat",
      age: 20,
    },
    {
      id: 2,
      name: "Prakoso",
      age: 23,
    },
    {
      id: 3,
      name: "ulul",
      age: 27,
    },
  ];
  return (
    <>
      <div>{name}</div>
      <div>
        {techStack.map((titles, index) => {
          return <div key={index}>{titles}</div>;
        })}
      </div>
      <br />
      <div key={name}>
        {dummyData.map((data) => {
          return (
            <div key={data.id}>
              {data.name} {data.age}
            </div>
          );
        })}
      </div>
      {techStack.map((value, index, array) => {
        console.log(`Value: ${value}`); // Menampilkan nilai saat ini
        console.log(`Index: ${index}`); // Menampilkan indeks elemen
        console.log(`Array: ${array}`); // Menampilkan array asli
        return index; // Mengembalikan nilai untuk membentuk array baru
      })}
      {techStack.map((stack, index, array) => {
        return (
          <div key={index}>
            stacks : {stack} index of : {index} array length of {array.length}
          </div>
        );
      })}
      ;
      <div>
        {dummyData.map((data, index, array) => {
          return (
            <div key={data.id}>
              nama : {data.name}
              umur : {data.age}
              index : {index}
              total items : {array.length}
            </div>
          );
        })}
      </div>
    </>
  );
}
