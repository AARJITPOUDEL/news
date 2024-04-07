import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const ProtectedPage = () => {
  const router = useRouter();
  const [image, setImage] = useState("");
  const [headline, setHeadline] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (router.asPath.includes("/admin/login")) {
      router.push("/login");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/news", {
        image,
        headline,
        description,
      });
      console.log("Response:", response.data);
      router.push("/success-page");
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Failed to submit form");
    }
  };

  return (
    <div>
      <h1>Protected Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="headline">Headline:</label>
          <input
            type="text"
            id="headline"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default ProtectedPage;
