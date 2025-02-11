const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "I know you love me! And I love you too...";
    gif.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fsearch%2Fi-love-you-cute-gifs&psig=AOvVaw2lPgbitnFUk8EM2Mmzg3Dv&ust=1739376157619000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNDz4qD_u4sDFQAAAAAdAAAAABAJ.gif";

    // Hide the No button
    noBtn.style.display = "none";
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    // Ensure randomX and randomY are within the wrapper bounds
    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
