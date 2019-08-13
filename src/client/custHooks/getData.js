
export const getData = async (url) => {
  const res = await fetch(url, {
      credentials: 'include',
      mode: 'cors',
  }).catch(e => {
    console.log(e);
  });

  const json = await res.json().catch(e => {
    console.log(e);
  });
  console.log(json);

  return json;
}

