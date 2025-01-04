import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getAuthor from "../utils/getAuthor";
import { Helmet } from "react-helmet"; // Import Helmet


const BookDetails = () => {
  const { tokenId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(
          `https://epicdylan.com/readme-index.json`
        );
        const data = await response.json();
        const books = JSON.parse(data.contents).books;
        const selectedBook = books.find((book) => book.tokenId === tokenId);
        setBook(selectedBook);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBook();
  }, [tokenId]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Helmet>
        <title>{book.metadata.name}</title>
        <meta property="og:title" content={book.metadata.name} />
        <meta property="og:description" content={book.metadata.description} />
        <meta property="og:image" content={book.metadata.image} />
        <meta property="og:url" content={`https://yourapp.com/books/${tokenId}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={book.metadata.name} />
        <meta name="twitter:description" content={book.metadata.description} />
        <meta name="twitter:image" content={book.metadata.image} />
      </Helmet>
      <h1>{book.metadata.name}</h1>
      <p>{book.metadata.description}</p>
      <p>Author: {getAuthor(book.metadata)}</p>
    </div>
  );
};

export default BookDetails;