const photographer = document.querySelector('.photograher');
const time = document.querySelector('.current-time');
const day = document.querySelector('.current-day');
const currency = document.querySelector('.currency');

// GET BACKGROUND IMAGE from unsplash on page load
fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
  .then(res => res.json())
  .then(data => {
    document.body.style.backgroundImage = `url(${data.urls.regular})`
    photographer.innerHTML = `Photo by: <a href="${data.user.portfolio_url}">${data.user.name}</a>`;
  })
  .catch(err => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjgzNzM3Njc&ixlib=rb-1.2.1&q=80&w=1080)`
    photographer.innerHTML = `Photo by: <a href="https://www.instagram.com/marcu.david/">David Marcu</a>`;
  });

  
  // GET CURRENT TIME
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
  setInterval(() => {
    const calendar = new Date();
    time.textContent = calendar.toLocaleTimeString("en-us", {timeStyle: 'medium'});
    day.textContent = calendar.toLocaleString("en-us", options);
  }, 1000);


  // GET CURRENCY INFO
  fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json')
    .then(res => {
      if (!res.ok) { throw Error("Something went wrong") }
      return res.json()
    })
    .then(data => {
      currency.innerHTML = `
        <h3><i class="fas fa-dollar-sign"></i> USD Exchange Rates</h3>
        <ul>
          <li>EUR: <i class="fas fa-euro-sign"></i> ${data.usd.eur}</li>
          <li>JPY: <i class="fas fa-yen-sign"></i> ${data.usd.jpy}</li>
          <li>GBP: <i class="fas fa-pound-sign"></i> ${data.usd.gbp}</li>
        </ul>
      `;
    })
    .catch(err => console.error(err));