



















/*document.querySelector("#jokeBtn").addEventListener("click",function() {
    const jokes = [
"What does a baby computer call his father? Data",
"After an unsuccessful harvest, why did the farmer decide to try a career in music? Because he had a ton of sick beets",
"I only seem to get sick on weekdays. I must have a weekend immune system",
"What do you call a Frenchman wearing sandals? Philippe Flop",
"Why is it so cheap to throw a party at a haunted house? Because the ghosts bring all the boos",
"I don’t get why Marvel doesn’t use the Hulk to advertise more. He’s basically one big Banner",
"What brand of underwear do scientists wear? Kelvin Klein",
"Which days are the strongest? Saturday and Sunday. The rest are weekdays",
"I just found out I’m colorblind. The news came out of the purple",
"Did you know your pupils are the last part to stop working when you die? They dilate",
"How do cows stay up to date? They read the Moo-spaper",
"What's the difference between a well-dressed man on a unicycle and a poorly-dressed man on a bicycle? Attire",
"I hate my job—all I do is crush cans all day. It’s soda pressing",
"Where do pirates get their hooks? Second hand stores"
    ];
    
    const randomJoke= jokes [Math.floor(Math.random()*jokes.length)];
    
    const jokeContainer=document.querySelector("#jokeContainer");
    jokeContainer.querySelector("#jokeText").innerText=randomJoke;
    jokeContainer.style.display="block";
    
});

function resetRating(){
    const stars=document.querySelectorAll(".star");
    stars.forEach(star => {
            star.classList.remove("selected");
            star.addEventListener("click", function(){
                const ratingValue = this.getAttribute("data-value");

            stars.forEach(star=>{
                star.classList.remove("selected");
            });

            for (let i=0; i < ratingValue; i++){
                stars[i].classList.add("selected");
            }
            showAverageRating(ratingValue);
        });
    function showAverageRating(rating){
        const averageRating=document.querySelector("#averageRating");
        averageRating.innerText=`Average Rating: ${rating}`;
    }

    });

}*/

