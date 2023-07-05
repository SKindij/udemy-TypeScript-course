const fetchData = (url:string, method: "GET" | "POST"):void => {
  console.log("Fetched!!!")
};

const reqOptions = {
    url: 'https://someurl.com',
    method: 'GET'
}

fetchData('quqi.com', 'GET');
fetchData(reqOptions.url, reqOptions.method as "GET");






