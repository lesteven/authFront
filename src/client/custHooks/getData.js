

const getData = (url) => async(e) => {
  e.preventDefault();
  console.log(data); 
  const res = await fetch(url);
  const json = await res.json();
  console.log(json);
}

export default getData;
