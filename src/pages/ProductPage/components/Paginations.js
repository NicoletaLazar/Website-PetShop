import React from "react";
import { Container } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";

function Paginations({
  paginate,
  previousPage,
  nextPage,
  lastPage,
  currentPage,
}) {
  return (
    <Container fluid>
      <Pagination size="md">
        <Pagination.First onClick={() => paginate(1)} />
        <Pagination.Prev onClick={() => previousPage()} />
        <span id="curr_pag">{currentPage}</span>
        <Pagination.Next onClick={() => nextPage()} />
        <Pagination.Last onClick={() => paginate(lastPage)} />
      </Pagination>
    </Container>
  );
}

export default Paginations;
