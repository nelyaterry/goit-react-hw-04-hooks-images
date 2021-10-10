import { useState } from "react";
import PropTypes from "prop-types";

import {
  Header,
  SearchForm,
  Button,
  ButtonLabel,
  Input,
} from "./Searchbar.styled";

const Searchbar = ({ onSubmit }) => {
  const [request, setReqest] = useState("");

  const handleChange = (e) => {
    setReqest(e.currentTarget.value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (request === "") {
      alert("What are you looking for??");
      return;
    }

    onSubmit(request);

    setReqest("");
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <Button type="submit">
          <ButtonLabel>Search</ButtonLabel>
        </Button>

        <Input
          type="text"
          name="request"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={request}
          onChange={handleChange}
        />
      </SearchForm>
    </Header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
