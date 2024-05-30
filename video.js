let videoTitle=[
    "1. Introduction to JavaScript",
    "2. Variables in JavaScript",
    "3. const, let and var in JavaScript",
    "4. Primitives and Objects in JavaScript",
    "5. JavaScript Chapter-1: Practice Set",
    "6. JavaScript Operators and Expressions",
    "7. Conditional expressions in JavaScript",
    "8. JavaScript Chapter-2: Practice Set on Operators and Conditionals",
    "9. For Loops in JavaScript",
    "10. While Loops in JavaScript",
    "11. Functions in JavaScript",
    "12. JavaScript Chapter-3: Practice Set on Loops and Functions",
    "13. Introduction to Strings",
    "14. JavaScript String Methods",
    "15. JavaScript Chapter-4: Practice Set on Strings",
    "16. Introduction to Arrays",
    "17. JavaScript Array Methods",
    "18. Some More JavaScript Array Methods",
    "19. Using Loops With Arrays in JavaScript",
    "20. Map, Filter & Reduce in JavaScript",
]

let playlistbtn = document.getElementsByClassName("playlist-btn")[0]
for (let i = 0; i < 103; i++) {
    playlistbtn.innerHTML += `
    <button type="button" class="video-btn" onclick="changeVideo(this, videoData[${i}], videoTitle[${i}]);">
        ${videoTitle[i]}
        <div class="soundwave">
            <div class="bar1 bar"></div>
            <div class="bar2 bar"></div>
            <div class="bar3 bar"></div>
            <div class="bar4 bar"></div>
            <div class="bar5 bar"></div>
        </div>
    </button>
    `;
}


function changeVideo(button, videoUrl, title) {
    document.querySelectorAll('.video-btn').forEach(function (btn) {
        btn.removeAttribute('id', 'active');
    });
    button.setAttribute('id', 'active');

    let video = document.querySelector('.video-container');
    video.innerHTML = `
    <video id="videos" controls>
        <source src="${videoUrl}" type="video/mp4">
    </video>
    <h2 class="video-title">${title}</h2>
    `;

    let video_detail = document.querySelector('.video-detail');
    video_detail.innerHTML = `
    <i class="ri ri-play-circle-line"></i>
    <a href="#active">${title}</a>
    `;
}