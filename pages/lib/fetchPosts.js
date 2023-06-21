export default async function getPostData() {
  const jsonData = await fetch(`https://fakestoreapi.com/products/`);
  return jsonData.json();
}
