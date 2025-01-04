import React from "react";
import styles from "../styles/styles"; 
import cleanDescription from "../utils/cleanDescription"; // Import as defaultimport styles from "../styles/styles";

const DescriptionPopup = ({ description, interactiveUrl, onClose }) => {
  const cleanedDescription = cleanDescription(description);

  return (
    <div style={styles.popupOverlay}>
      <div style={styles.popupContent}>
        {interactiveUrl && (
          <iframe
            src={interactiveUrl}
            title="Interactive Content"
            style={styles.interactiveIframe}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen
          />
        )}

        <p style={styles.popupDescription}>{cleanedDescription}</p>

        {interactiveUrl && (
          <button
            onClick={() => window.open(interactiveUrl, "_blank")}
            style={styles.expandButton}
          >
            Expand View
          </button>
        )}

        <button onClick={onClose} style={styles.closeButton}>
          Close
        </button>
      </div>
    </div>
  );
};

export default DescriptionPopup;