import React, { useState, memo, useCallback, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaSearch, FaTimes } from "react-icons/fa";
import "./SearchInput.scss";

interface SearchInputProps {
  initialValue?: string;
  showButtonSearch?: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({
  initialValue = "",
  showButtonSearch = true,
}) => {
  const [searchTerm, setSearchTerm] = useState(initialValue);
  const navigate = useNavigate();
  const location = useLocation();

  const trimmedSearchTerm = useMemo(() => searchTerm.trim(), [searchTerm]);
  const isSearchDisabled = useMemo(() => !trimmedSearchTerm, [trimmedSearchTerm]);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (trimmedSearchTerm) {
        navigate(`/results?q=${encodeURIComponent(trimmedSearchTerm)}`);
      }
    },
    [navigate, trimmedSearchTerm]
  );

  const handleClear = useCallback(() => {
    setSearchTerm("");
    if (location.pathname === "/results") {
      navigate("/results?q=");
    }
  }, [location.pathname, navigate]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  return (
    <form className="search-input" onSubmit={handleSubmit}>
      <div className="search-input__group">
        <div className="search-input__wrapper">
          <FaSearch className="search-input__icon search-input__icon--search" />
          <input
            type="text"
            className="search-input__field"
            value={searchTerm}
            onChange={handleChange}
          />
          {searchTerm && (
            <button
              type="button"
              className="search-input__clear"
              onClick={handleClear}
            >
              <FaTimes className="search-input__icon search-input__icon--clear" />
            </button>
          )}
        </div>
        {showButtonSearch && (
          <button
            type="submit"
            className="search-input__submit"
            disabled={isSearchDisabled}
          >
            Buscar
          </button>
        )}
      </div>
    </form>
  );
};

export default memo(SearchInput);