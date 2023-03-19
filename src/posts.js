import React, { useEffect, useState } from "react";
import { Paper, Stack, Typography } from "@mui/material";

const Posts = () => {
  const [allPosts, setAllPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch("https://dummyjson.com/posts");
    const allPostsJson = await response.json();
    console.log(allPostsJson.posts);
    setAllPosts(allPostsJson.posts);
  };
  useEffect(() => {
    getPosts();
  }, []);

  //   const myPaper = styled(Paper);
  return (
    <Stack
      direction="column"
      justifyContent="center"
      sx={{ width: "50%", margin: "auto", backgroundColor: "#f3e5f5" }}
    >
      <Paper
        elevation={3}
        sx={{
          backgroundColor: "#ce93d8",
          margin: 1,
          padding: 2,
        }}
      >
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Posts
        </Typography>
      </Paper>
      {allPosts.map((post) => {
        return (
          <Paper
            elevation={3}
            sx={{
              backgroundColor: "#e1bee7",
              padding: 2,
              margin: 1,
              textAlign: "center",
            }}
          >
            <Typography variant="h5">{post.title}</Typography>
            <Typography variant="body2">{post.body}</Typography>
          </Paper>
        );
      })}
    </Stack>
  );
};

export default Posts;
