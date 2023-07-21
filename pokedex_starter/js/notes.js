//image src-->
//older pokemon (gen v and earlier)
//DATA (JSON object).sprites.versions["generation-v"]["black-white"].animated.front_default
//new pokemon
//DATA.sprites.front_default
//2 api requests: one to get basic info and one to get all of the stats
//flavor_text_entries" array of objects-- get first one
//genera array of objects (maybe index 8);
//height and weight divide by 10 kg for weight meters for height
//transform rotate to click the button

/* PSEUDO
starts with number one, and refresh number 1
1.send AJAX REQUEST to the pokemon endpoint
================================================
1. call function when user clicks left or right arrow
2.call function when user presses enter (enter keyup)
in the input
**track the current pokemon id and increment it
3. grab the relevant data and plug it in where it needs to go
name in name slot
height in heigt slot
4. (another function) add another ajax request to species endpoint
*/
