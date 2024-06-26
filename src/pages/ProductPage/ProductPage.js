import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import Paginations from "./components/Paginations";
import SidebarMenu from "./components/Sidebar";
import { Container, Col, Row } from "react-bootstrap";
import "./ProductPage.css";

export default function ProductPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(25);
  const [currentPosts, setCurrentPosts] = useState([]);
  const lastPage = Math.ceil(posts.length / postsPerPage);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const Posts = ({ x, loading }) => {
    if (loading) {
      return <h2>Loading...</h2>;
    } else {
      return (
        <ul className="list-group mb-4">
          {x.map((post) => (
            <li key={post.id} id="its" className="list-group-item">
              {post.id}. {post.title}
            </li>
          ))}
        </ul>
      );
    }
  };

  useEffect(() => {
    const to = (currentPage - 1) * postsPerPage;
    let from = to + postsPerPage;
    if (from > posts.length - 1 && posts.length) {
      from = posts.length - 1;
    }
    console.log(to, from, posts);
    setCurrentPosts(posts.slice(to, from));
  }, [currentPage, postsPerPage, posts]);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== lastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Container fluid>
      <Row>
        <h1 id="title_page">Product Page</h1>
      </Row>
      <Row>
        <Col className="p-0" xs={3}>
          <SidebarMenu />
        </Col>
        <Col xs={9}>
          <Posts x={currentPosts} loading={loading} />
          <Paginations
            xs={8}
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
            previousPage={previousPage}
            nextPage={nextPage}
            currentPage={currentPage}
            lastPage={lastPage}
          />
        </Col>
      </Row>
    </Container>
  );
}
