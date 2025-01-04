const getAuthor = (metadata) => {
    const authorAttribute = metadata.attributes?.find(
      (attr) => attr.trait_type === "Author(s)"
    );
    if (authorAttribute) return authorAttribute.value.trim().toLowerCase();
  
    if (metadata.properties?.author)
      return metadata.properties.author.trim().toLowerCase();
  
    return "unknown author";
  };
  
  export default getAuthor;