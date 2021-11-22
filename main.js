document.querySelector('#toggle-button').addEventListener('click', function() {
  sideBarToggle++
  if (sideBarToggle % 2 == 0) {
    document.querySelector('#toggle-button').style.left = '320px'
    document.querySelector('#side-bar').style.left = '0px'
    document.querySelector('#main-page').style.marginLeft = '305px'
  }
  else {
    document.querySelector('#toggle-button').style.left = '20px'
    document.querySelector('#side-bar').style.left = '-300px'
    document.querySelector('#main-page').style.marginLeft = '5px'
  }
})
