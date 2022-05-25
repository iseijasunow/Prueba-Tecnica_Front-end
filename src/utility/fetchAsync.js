async function fetchAsync(API) {
  const req = await fetch(API, { method: "GET" });
  const resp = await req.json();
  return resp;
}

export { fetchAsync };
