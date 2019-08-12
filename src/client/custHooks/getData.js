
const getData = (url) => async() => {
  const res = await fetch(url).catch(e => {
    console.log(e);
  });

  const json = await res.json().catch(e => {
    console.log(e);
  });
  console.log(json);
  return json;
}

export default getData;
