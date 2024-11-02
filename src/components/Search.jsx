import { useEffect, useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("pasta");
  useEffect(() => {
    function demo() {
      console.log("demo called");
    }
    demo();
  }, []);
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
