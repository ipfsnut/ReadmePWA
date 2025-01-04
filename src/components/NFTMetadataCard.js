import React, { useState } from "react";
import DescriptionPopup from "./DescriptionPopup";
import getAuthor from "../utils/getAuthor"; // Import as default
import styles from "../styles/styles";

const NFTMetadataCard = ({ metadata, tokenId }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [mediaError, setMediaError] = useState(false);

  const mediaSrc = mediaError
    ? metadata.interactive_url || metadata.animation_url || "placeholder.png"
    : metadata.image || "placeholder.png";

  const authors = getAuthor(metadata);

  return (
    <div style={styles.nftCard}>
      <div style={styles.imageContainer}>
        {mediaError && metadata.interactive_url ? (
          <iframe
            src={metadata.interactive_url}
            title={`${metadata.name} Interactive Content`}
            style={styles.coverImage}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen
          />
        ) : (
          <img
            src={mediaSrc}
            alt={`${metadata.name} Cover`}
            style={styles.coverImage}
            onError={() => setMediaError(true)}
            loading="lazy"
          />
        )}
      </div>

      <h1 style={styles.title}>{metadata.name || "Unnamed NFT"}</h1>
      <p style={styles.author}>By {authors}</p>

      <button onClick={() => setShowPopup(true)} style={styles.descriptionLink}>
        Readme
      </button>

      <a
        href={`https://opensea.io/assets/matic/0x931204fb8cea7f7068995dce924f0d76d571df99/${tokenId}`}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.tradeLink}
      >
        Trade on OpenSea
      </a>

      {showPopup && (
        <DescriptionPopup
          description={metadata.description || "No description available."}
          interactiveUrl={metadata.interactive_url}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default NFTMetadataCard;