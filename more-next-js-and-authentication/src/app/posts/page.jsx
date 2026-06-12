//data fetching methods in next js

//method - 1  -->
const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json(); //array of objects
  return posts;
};
//this way data can accessed on other pages as well.
//steps : create a function, make it async. the do the data fetching work as well. and the return the variable consisting the real data (array of objects). lastly, where you would want to access the data, declare a variable within the component function (make it async) and call the function there, making it await.

//method - 2  -->
const getPosts2 = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json(); //array of objects
    return posts;
  } catch (err) {
    throw new Error("failed to fetch posts.");
  }//if it fails to fetch data for some reasons, this error msg will be displayed.
};

//method - 3  -->
const getPosts3 = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json(); //array of objects
  if(!response.ok) {
       throw new Error("failed to fetch posts.");
    }
    return posts;
};

const Post = async () => {
  const posts = await getPosts();//receiving data (array of objects) that the function getPosts() is returning.
  const posts2 = await getPosts2();
  const posts3 = await getPosts3();

  return (
    <div>
      <h1>posts coming soon......</h1>
      <h2>Total Posts : {posts.length}</h2>
      <h2>Total Posts2 : {posts2.length}</h2>
      <h2>Total Posts2 : {posts3.length}</h2>
    </div>
  );
};

export default Post;
