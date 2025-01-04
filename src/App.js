import React, { useState, useEffect } from "react";
import NFTMetadataCard from "./components/NFTMetadataCard";
import Pagination from "./components/Pagination";
import getAuthor from "./utils/getAuthor";
import { lightTheme, darkTheme } from "./styles/styles"; // Update import

const NFTMarketplace = () => {
  const [nfts, setNfts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("tokenId");
  const [sortOrder, setSortOrder] = useState("desc");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const nftsPerPage = 6;

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    const loadIndexAndMetadata = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.allorigins.win/get?url=${encodeURIComponent(
            "https://epicdylan.com/readme-index.json"
          )}`
        );
        const data = await response.json();
        const books = JSON.parse(data.contents).books;

        const nfts = [];
        for (const { tokenId, uri } of books) {
          try {
            const metadataResponse = await fetch(uri);
            if (!metadataResponse.ok) {
              throw new Error(`HTTP error! Status: ${metadataResponse.status}`);
            }
            const metadata = await metadataResponse.json();
            nfts.push({ tokenId, metadata });
          } catch (error) {
            console.error(`Failed to fetch metadata for token ID ${tokenId}:`, error);
            nfts.push({
              tokenId,
              metadata: {
                image: "placeholder.png",
                name: "Unnamed NFT",
                description: "No description available.",
                external_url: "https://example.com",
              },
            });
          }
        }

        setNfts(nfts);
      } catch (error) {
        console.error("Error loading index or metadata:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadIndexAndMetadata();
  }, []);

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleSort = (event) => setSortBy(event.target.value);
  const handleSortOrder = (event) => setSortOrder(event.target.value);

  const filteredAndSortedNFTs = nfts
    .filter((nft) => {
      const name = nft.metadata.name || "Unnamed NFT";
      const author = getAuthor(nft.metadata);
      const searchTermLower = searchTerm.toLowerCase();
      return (
        name.toLowerCase().includes(searchTermLower) ||
        author.includes(searchTermLower)
      );
    })
    .sort((a, b) => {
      let valueA, valueB;

      if (sortBy === "name") {
        valueA = a.metadata.name || "Unnamed NFT";
        valueB = b.metadata.name || "Unnamed NFT";
      } else if (sortBy === "tokenId") {
        valueA = Number(a.tokenId);
        valueB = Number(b.tokenId);
      } else if (sortBy === "author") {
        valueA = getAuthor(a.metadata);
        valueB = getAuthor(b.metadata);
      }

      return sortOrder === "asc" ? (valueA > valueB ? 1 : -1) : valueA < valueB ? 1 : -1;
    });

  const paginatedNFTs = filteredAndSortedNFTs.slice(
    (currentPage - 1) * nftsPerPage,
    currentPage * nftsPerPage
  );

  return (
    <div style={theme.container}>
      <div style={{ textAlign: "right", marginBottom: "20px" }}>
        <button onClick={toggleDarkMode} style={theme.toggleButton}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div style={theme.controls}>
        <input
          type="text"
          placeholder="Search by name or author..."
          value={searchTerm}
          onChange={handleSearch}
          style={theme.searchInput}
        />
        <select value={sortBy} onChange={handleSort} style={theme.sortSelect}>
          <option value="tokenId">Sort by Token ID</option>
          <option value="name">Sort by Name</option>
          <option value="author">Sort by Author</option>
        </select>
        <select value={sortOrder} onChange={handleSortOrder} style={theme.sortSelect}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>

      {isLoading ? (
        <div style={theme.loadingSpinner}>Loading...</div>
      ) : (
        <>
          <div style={theme.nftGrid}>
            {paginatedNFTs.map((nft) => (
              <NFTMetadataCard
                key={nft.tokenId}
                metadata={nft.metadata}
                tokenId={nft.tokenId}
                theme={isDarkMode ? "dark" : "light"} // Pass the theme
              />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            nextPage={nextPage}
            prevPage={prevPage}
            paginatedNFTs={paginatedNFTs}
            nftsPerPage={nftsPerPage}
            theme={isDarkMode ? "dark" : "light"} // Pass the theme
          />
        </>
      )}
    </div>
  );
};

export default NFTMarketplace;