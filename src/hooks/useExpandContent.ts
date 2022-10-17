import { useState } from "react";

const useExpandContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToogleIsVisible = () => {
    setIsVisible(!isVisible);
  };

  return { isVisible, handleToogleIsVisible };
};

export default useExpandContent;
