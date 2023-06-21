import PostPage from "./index";

// seperate module for fetching data
import getpostData from "../lib/fetchPosts";

// function for fetching data and loading into 'postData'
export async function getStaticProps() {
  const postData = await getpostData();
  return {
    props: { postData },
  };
}

export default function Posts({ postData }) {
  return <PostPage postData={postData} />;
}
