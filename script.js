//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function removeArt(bandName){
   return bandName.replace(/^(a|an|the)/i, "".trim())
}

const sortedBand = touristSpots.sort((a,b)=>removeArt(a) > removeArt(b) ? 1 : -1);

document.getElementById("band").innerHTML = sortedBand.map(band => `<li>${band}</li>`).join("")