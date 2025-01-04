import React from "react";
import cleanDescription from "../utils/cleanDescription";
import styles from "../styles/styles";

const DescriptionPopup = ({ description, interactiveUrl, onClose }) => {
  const cleanedDescription = cleanDescription(description);

  return (
    <div style={styles.popupOverlay}>
      <div style={styles.popupContent}>
        {/* Iframe Section */}
        {interactiveUrl && (
          <div style={styles.iframeContainer}>
            <iframe
              src={interactiveUrl}
              title="Interactive Content"
              style={styles.interactiveIframe}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        )}

        {/* Description Section */}
        <div style={styles.descriptionContainer}>
          <p style={styles.popupDescription}>{cleanedDescription}</p>
        </div>

        {/* Buttons Section */}
        <div style={styles.buttonContainer}>
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
    </div>
  );
};

export default DescriptionPopup;