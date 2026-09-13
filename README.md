# 🎵 Music Recommended System

A simple web-based **Music Recommended System** developed using HTML, CSS, and JavaScript.

The system allows users to select an artist, view recommended songs, play music, control playback, and save their favorite songs.

---

## 📌 Project Overview

The Music Recommended System recommends songs based on the artist selected by the user.

Users can:

- 🎤 Select an artist
- 🎵 View recommended songs
- ▶️ Play songs
- ⏸️ Pause songs
- ⏮️ Play previous song
- ⏭️ Play next song
- 🔊 Control volume
- ❤️ Like songs
- 📂 View liked songs
- 🔄 Automatically play the next song

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Local Storage
- HTML Audio API

---

## 📂 Project Structure

```text
Music Recommended System
│
├── Css
│   ├── index.css
│   └── likesongs.css
│
├── Html
│   ├── index.html
│   └── likesongs.html
│
├── Javascript
│   ├── index.js
│   └── likesongs.js
│
└── songs
    ├── Dheema.mp3
    ├── Kannamma.mp3
    ├── Nee Paartha Vizhigal.mp3
    ├── Kannazhaga.mp3
    ├── Kannai Vittu.mp3
    ├── Halena.mp3
    ├── Kadhal Oru Aagayam.mp3
    ├── Vilambara Idaiveli.mp3
    ├── Manamaganin Sathiyam.mp3
    └── Mei Nigara.mp3
```
---

⚙️ Modules
1. User Interface Module

Provides the music player interface and song recommendation display.

2. Artist Selection Module

Allows users to select an artist from the dropdown list.

3. Song Data Module

Stores artist names, song names, and audio file paths using JavaScript arrays and objects.

4. Recommendation Module

Filters songs based on the selected artist.

5. Music Player Module

Provides:

Play
Pause
Previous
Next

controls.

6. Automatic Song Change Module

When a song finishes, the next recommended song automatically starts playing.

7. Playback Control Module

Allows users to control:

Volume
Play
Pause
Previous
Next
8. Like Songs Module

Users can like songs and save them using Local Storage.

---

🎤 Supported Artists
Anirudh Ravichander
Harris Jayaraj
Hiphop Tamizha
A.R. Rahman
Sid Sriram

---

🎯 Features
Feature	Description
Artist Selection	Select an artist
Recommendations	Display songs by selected artist
Play	Play the selected song
Pause	Pause the current song
Previous	Play the previous song
Next	Play the next song
Auto Next	Automatically play the next song
Volume	Adjust music volume
Like	Save favorite songs
Liked Songs	View saved songs

---

💾 Local Storage

Liked songs are stored in the browser using JavaScript localStorage.

Example:

localStorage.setItem(
    "likedSongs",
    JSON.stringify(likedSongs)
);

The saved songs can be accessed from the Liked Songs page.

---

▶️ How to Run
Download or clone this repository.
Open the project in Visual Studio Code.
Open:
Html/index.html
Run the project using a browser or Live Server.
Select an artist.
Select a song.
Use the music player controls.

---

📸 Screenshots
Home Page

Add your screenshot here:

![Home Page](Screenshot/homepage.png)

Liked Songs
![Liked Songs](Screenshot/likesongspage.png)

---

🚀 Future Enhancements
User login and registration
Search songs
Search by genre
User-specific recommendations
Playlist creation
Song ratings
Database integration
AI-based music recommendation
Responsive mobile design

---

👩‍💻 Developed By

Dhanasri Baladurai

MCA | Web Development Enthusiast

---

📄 License

This project is developed for educational and academic purposes.
