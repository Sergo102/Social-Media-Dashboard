const setColorMode = () => {
  localStorage.getItem('colorMode') == 'dark'
    ? setDarkMode()
    : setLightkMode();
};

const setDarkMode = () => {
  document.querySelector('body').classList = 'dark';
  document.querySelector('.toggle__button').style.left = '3px';
};

const setLightkMode = () => {
  document.querySelector('body').classList = 'light';
  document.querySelector('.toggle__button').style.left = '27px';
};

setColorMode();

const radioButtons = document.querySelectorAll('.toggle__wrapper input');

for(let i = 0; i < radioButtons.length; i++){
  radioButtons[i].addEventListener('click', event => {
    if (document.getElementById('dark').checked){
      localStorage.setItem('colorMode', 'dark');
      setDarkMode();
    }else{
      localStorage.setItem('colorMode', 'light');
      setLightkMode();
    }
  });
};