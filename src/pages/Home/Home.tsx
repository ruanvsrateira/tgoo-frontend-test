import { Fragment, useEffect, useState } from "react";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { Box, Button, Container, useMediaQuery } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
import theme from "../../theme";
import { Table } from "../../components/Table/Table";
import { API } from "../../services/axios";
import { Logo } from "../../components/Logo/Logo";
import { LoadingIndicator } from "../../components/LoadingIndicator/LoadingIndicator";

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState<string>("");
  const [posts, setPosts] = useState([]);

  const breaker650px = useMediaQuery("(max-width: 650px)");
  const breaker1033px = useMediaQuery("(max-width: 1033px)");

  function fetchPosts() {
    API.get("/posts?paginated=true").then(({ data }) => {
      setLoading(true);
      setPosts(data.data.data);
      setLoading(false);
    });
  }

  function fetchFilteredPosts() {
    API.get(`/posts?paginated=true&title=${searchValue}`).then(({ data }) =>
      setPosts(data.data.data)
    );
    setLoading(false);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container>
      <Box
        flexDirection={breaker1033px ? "column" : "row"}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        mt={2}
        gap={breaker1033px ? 2 : 0}
      >
        <Logo />
        <Box width={breaker1033px ? "100%" : "600px"}>
          <SearchInput
            label="Busque pelo post"
            value={searchValue}
            onChange={(e) => {
              setLoading(true);
              setSearchValue(e.target.value);
              fetchFilteredPosts();
            }}
          />
        </Box>
        <Button
          variant="contained"
          color="success"
          size="large"
          style={{
            backgroundColor: theme.colors["main-orange"],
            width: breaker1033px ? "100%" : "200px",
            height: breaker1033px ? "100%" : "43px",
          }}
          endIcon={<AddOutlined />}
        >
          Nova Postagem
        </Button>
      </Box>

      {loading ? (
        <LoadingIndicator />
      ) : (
        <Fragment>
          <Box mt={10}>
            <Table data={posts} />
          </Box>
          <p>{posts.length} Posts</p>
        </Fragment>
      )}
    </Container>
  );
};
