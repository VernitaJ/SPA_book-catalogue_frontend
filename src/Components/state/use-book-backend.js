import { useEffect, useState } from "react";

export const useBookBackend = () => {
  const BACKEND_ROOT = "https://b8tbu.sse.codesandbox.io/";

  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch user data when the username change
  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(BACKEND_ROOT);
        const data = await res.json();
        setBooks(data);
      } catch (err) {
        console.error(err);
        setError(new Error("could not load"));
      } finally {
        setIsLoading(false);
      }
    };

    load();
  }, []);

  return {
    isLoading,
    books,
    error
  };
};
