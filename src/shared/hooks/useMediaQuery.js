import { useState, useEffect, useCallback } from "react";

const getQueryMatches = (query) => {
  if (typeof window !== "undefined") return window.matchMedia(query).matches;
  return false;
};

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(getQueryMatches(query));

  const handleChange = useCallback(() => {
    setMatches(getQueryMatches(query));
  }, [query]);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    matchMedia.addEventListener("change", handleChange);

    return () => matchMedia.removeEventListener("change", handleChange);
  }, [query, handleChange]);

  return matches;
};
