import fetch from 'node-fetch';

const url =  "https://api.potterdb.com/v1/characters/"

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const main = async () => {
  const result = await fetcher(url);
  console.log(result.data);
}

main();

