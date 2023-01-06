let input = document.getElementById('text');
let btn = document.getElementById('btn');
let content = document.querySelector("#content");
let sound = document.getElementById("sound");
// let play = document.querySelector(".play");



let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
btn.addEventListener('click', () => {
   fetch(`${url} ${input.value}`)
      .then(((resposne) => resposne.json()))
      .then((data) => {
         console.log(data)
         content.innerHTML = `

			<div class="phonetics">

				<div class="flex">
					<div class="detail">
						<h2>${input.value}</h2>

						<div class="verb">
							<span>/ ${data[0].phonetics[1].text}</span>
							<span>${data[0].meanings[0].partOfSpeech}</span>
						</div>

					</div>
					<div class="icon">
						<i class="fa-solid fa-volume-high" onclick="play()"></i>
					</div>
				</div>

				<div class="meaning">
					<p class="mean">Meaning 1</p>
					<p class="mean1">${data[0].meanings[0].definitions[0].definition || ''}</p>
				</div>
				<div class="meaning">
					<p class="mean">Meaning 2</p>
					<p class="mean1">${data[0].meanings[0].definitions[1].definition || " "}</p>
				</div>


`;
         sound.setAttribute('src', `${data[0].phonetics[0].audio || data[0].phonetics[1].audio || data[0].phonetics[3].audio || data[0].phonetics[4].audio || data[0].phonetics[5].audio}`);
         // console.log(sound);
      })
      .catch(() => {
         content.innerHTML = `<h3 class="error">Couldn't Find The Word !</h3>`;
      });
});
function play() {
   sound.play();
}