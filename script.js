const container = document.querySelector(".container");
const userSelect = document.querySelector("#user-select");
const detail = document.querySelector(".detail");

function render(users) {
  let html = `<option value="" disabled selected>Choose a user</option>`;
  //   users.forEach((user) => {
  //     html += `<option value="${user.id}">${user.name}</option>`;
  //   });
  for (let i in users) {
    html += `<option value="${users[i].id}">${users[i].name}</option>`;
  }
  userSelect.innerHTML = html;
}

function renderUserDetail(user) {
  detail.innerHTML = `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${user.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Username: ${user.username}</h6>
    <p class="card-text">Email${user.email}</p>
    <p class="card-text">Phone: ${user.phone}</p>
    <p class="card-text">Address: ${user.address.street}, ${user.address.city}</p>
  

  </div>
</div>`;
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    //console.log(res);
    render(res);
    userSelect.addEventListener("change", function (e) {
      //console.log(e.target.value);
      fetch(`https://jsonplaceholder.typicode.com/users/${e.target.value}`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          //console.log(res);
          renderUserDetail(res);
        });
    });
  });
