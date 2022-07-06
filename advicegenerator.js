const fetchAdvice = async () => {
  const res = await fetch('https://api.adviceslip.com/advice');
  const data = await res.json();
  console.log(data);

  document.getElementById('advice').innerHTML = `Advice #${data.slip.id}`;
  document.getElementById('quote').innerHTML = `"${data.slip.advice}"`;
};
fetchAdvice();
