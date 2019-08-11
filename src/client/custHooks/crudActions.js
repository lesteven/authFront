
const crudData = (method) => (url, data) => async(e) => {
  e.preventDefault();
  console.log(data); 
  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  const json = await res.json();
  console.log(json);
}

export const postData = crudData('POST');
export const putData = crudData('PUT');
export const deleteData = crudData('DELETE');

