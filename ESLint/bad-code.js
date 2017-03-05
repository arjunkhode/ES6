const weather = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ temp: 29, conditions: 'Sunny with Clouds' });
  }, 2000);
});

// Here, const tweets = new Promise((resolve, reject) => { is unnecessarily using reject
const tweets = new Promise((resolve) => {
  setTimeout(() => {
    resolve(['I like cake', 'BBQ is good too!']);
  }, 500);
});

Promise
  .all([weather, tweets])
  .then((responses) => {
    const [weatherInfo, tweetInfo] = responses;
    console.log(weatherInfo, tweetInfo);
  });

const postsPromise = fetch('http://wesbos.com/wp-json/wp/v2/posts');
const streetCarsPromise = fetch('http://data.ratp.fr/api/datasets/1.0/search/?q=paris');

Promise
  .all([postsPromise, streetCarsPromise])
  .then(responses => Promise.all(responses.map(res => res.json())),
  )
  .then((responses) => {
    console.log(responses);
  });

  /*Changes made:
  1.Const instead of let
  2.Removed parantheses around identifier of arrow function where block was not enclosed in braces
  3.Put parantheses around identifier of arrow function
  4.Added trailing comma inside at the end of 'then'
  5.Comments should start with capital letter
*/