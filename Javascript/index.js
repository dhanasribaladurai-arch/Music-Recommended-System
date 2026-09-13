const songs = [

    {
        artist: "Anirudh Ravichander",
        song: "Dheema",
        file: "../songs/Dheema.mp3"
    },

    {
        artist: "Anirudh Ravichander",
        song: "Kannamma",
        file: "../songs/Kannamma.mp3"
    },

    {
        artist: "Anirudh Ravichander",
        song: "Nee Paartha Vizhigal",
        file: "../songs/Nee Paartha Vizhigal (The Touch of Love).mp3"
    },

    {
        artist: "Anirudh Ravichander",
        song: "Kannazhaga",
        file: "../songs/Kannazhaga (The Kiss of Love).mp3"
    },

    {
        artist: "Harris Jayaraj",
        song: "Kannai Vittu",
        file: "../songs/Kannai Vittu.mp3"
    },

    {
        artist: "Harris Jayaraj",
        song: "Halena",
        file: "../songs/Halena.mp3"
    },

    {
        artist: "Hiphop Tamizha",
        song: "Kadhal Oru Aagayam",
        file: "../songs/Kadhal Oru Aagayam.mp3"
    },

    {
        artist: "Hiphop Tamizha",
        song: "Vilambara Idaiveli",
        file: "../songs/Vilambara Idaiveli.mp3"
    },

    {
        artist: "A.R. Rahman",
        song: "Manamaganin Sathiyam",
        file: "../songs/Manamaganin Sathiyam.mp3"
    },

    {
        artist: "Sid Sriram",
        song: "Mei Nigara",
        file: "../songs/Mei Nigara.mp3"
    }

];

let recommendedsongs = [];

let currentsongindex = 0;

const artistselect =
    document.getElementById("artistselected");

const songList =
    document.getElementById("songList");

const audioplayer =
    document.getElementById("audioPlayer");

const currentsong =
    document.getElementById("currentSong");

const volumecontrol =
    document.getElementById("volumeControl");


function selectArtist() {

    let selectedArtist =
        artistselect.value;

    if (selectedArtist === "") {

        songList.innerHTML =
            "<p>Select an artist to see recommended songs.</p>";

        recommendedsongs = [];

        return;
    }
    recommendSongs(selectedArtist);

}

function recommendSongs(artist) {

    recommendedsongs =
        songs.filter(function(song) {

            return song.artist === artist;

        });


    currentsongindex = 0;

    displaySongs();

}

function displaySongs() {

    songList.innerHTML = "";


    if (recommendedsongs.length === 0) {

        songList.innerHTML =
            "<p>No songs available.</p>";

        return;
    }


    recommendedsongs.forEach(
        function(song, index) {

            let songElement =
                document.createElement("div");


            songElement.className =
                "song";

            songElement.innerHTML =
                "🎵 " + song.song;
   
            songElement.onclick =
                function() {

                    currentsongindex =
                        index;

                    loadSong();

                    playSong();

                };


            songList.appendChild(
                songElement
            );

        }
    );

}


function loadSong() {

    if (recommendedsongs.length === 0) {

        return;

    }

    let song =
        recommendedsongs[currentsongindex];

    audioplayer.src =
        song.file;

    currentsong.innerText =
        song.song;

}

function playSong() {

    if (recommendedsongs.length === 0) {

        alert("Please select an artist first.");

        return;

    }

    if (audioplayer.src === "") {

        loadSong();

    }
    audioplayer.play();

}

function pauseSong() {

    audioplayer.pause();

}

function nextSong() {

    if (recommendedsongs.length === 0) {

        return;

    }
    currentsongindex++;
    if (
        currentsongindex >=
        recommendedsongs.length
    ) {

        currentsongindex = 0;

    }
    loadSong();

    playSong();

}

function previousSong() {

    if (recommendedsongs.length === 0) {

        return;

    }
    currentsongindex--;
    if (currentsongindex < 0) {

        currentsongindex =
            recommendedsongs.length - 1;

    }


    loadSong();

    playSong();

}

audioplayer.addEventListener(
    "ended",
    function() {

        console.log(
            "Song finished. Playing next song."
        );


        nextSong();

    }
);

function likeSong() {

    if (recommendedsongs.length === 0) {
        alert("Please select an artist and song first.");
        return;
    }

    let song = recommendedsongs[currentsongindex];

    let likedSongs = JSON.parse(
        localStorage.getItem("likedSongs")
    ) || [];

    let alreadyLiked = likedSongs.some(function(likedSong) {

        return likedSong.song === song.song;

    });

    if (alreadyLiked) {

        alert("❤️ Song is already liked.");
        return;

    }

    likedSongs.push({
        artist: song.artist,
        song: song.song,
        file: song.file
    });
    localStorage.setItem(
        "likedSongs",
        JSON.stringify(likedSongs)
    );

    console.log(
        "Liked Songs:",
        JSON.parse(localStorage.getItem("likedSongs"))
    );

    alert("❤️ Song saved to liked songs!");

}


function changeVolume() {

    audioplayer.volume =
        volumecontrol.value;

}