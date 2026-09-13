let likedSongs =
    JSON.parse(localStorage.getItem("likedSongs")) || [];


const likedSongList =
    document.getElementById("likedSongList");


function displayLikedSongs() {

    likedSongList.innerHTML = "";


    if (likedSongs.length === 0) {

        likedSongList.innerHTML =
            "<p>No liked songs yet.</p>";

        return;
    }


    likedSongs.forEach(function(song, index) {

        let songElement =
            document.createElement("div");


        songElement.className =
            "liked-song";


        songElement.innerHTML = `

            <span>
                🎵 ${song.song}
            </span>

            <button onclick="playLikedSong('${song.file}')">
                ▶ Play
            </button>

            <button onclick="removeLikedSong(${index})">
                ❌ Remove
            </button>

        `;


        likedSongList.appendChild(
            songElement
        );

    });

}


function playLikedSong(file) {

    let audio =
        new Audio(file);

    audio.play();

}


function removeLikedSong(index) {

    likedSongs.splice(index, 1);


    localStorage.setItem(
        "likedSongs",
        JSON.stringify(likedSongs)
    );


    displayLikedSongs();

}


displayLikedSongs();