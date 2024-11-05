import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Define the Todo type
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

/**
 * Component to fetch and display a specific Todo item based on URL parameter.
 * Utilizes React Router's `useParams` to access route parameters.
 */
export default function TodoId() {
  // Extract the `id` parameter from the route
  const params = useParams<{ id: string }>();

  // State to store the fetched Todo data
  const [data, setData] = useState<Todo | null>(null);

  // Effect to fetch the Todo item when the component mounts or when `params.id` changes
  useEffect(() => {
    // Ensure `params.id` is present
    if (params.id) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${params.id}`
          );

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const json: Todo = await response.json();
          setData(json); // Set the fetched Todo data
        } catch (error) {
          console.error("Error Fetching data", error); // Log any errors
        }
      };

      fetchData();
    }
  }, [params.id]);

  // Render the fetched Todo data or a loading state
  return (
    <>
      {data ? ( // Render the Todo data if available
        <div>
          <h1>title : {data.title}</h1>
          <h1>{data.completed ? "is completed" : "not completed"}</h1>
        </div>
      ) : (
        <p>Loading...</p> // Render loading state if data is not yet available
      )}
    </>
  );
}
