#soccerFinder#

##Summary##
This App allows users to search for parks with soccer facilities in a given area in NYC. Guests may view parks and any associated games. Users may create new games and view games they've created on their profile page.

##Approach##
1. create user story
2. find APIs/trawl for useful information
3. create user story
4. scaffold MVC
5. complete services
6. complete models
7. render results
8. optimize
9. style

##Wireframe##
* Home Page
![homepage](http://i.imgur.com/Yg8Lt23.jpg)
* Path to search results
![path](http://i.imgur.com/9P1bu7H)
* Mapping user vs. guest
![uservsguest](http://i.imgur.com/4ohJXHZ)
* Modal 
![Modal](http://i.imgur.com/nflhVtu)

##Technologies##
* NYCOpenData - [Parks Properties](https://data.cityofnewyork.us/City-Government/Parks-Properties/rjaj-zgq7)
* NYCOpenData - [Athletic Facilities](https://data.cityofnewyork.us/City-Government/Athletic-Facilities/yann-8etk)
* NODE
* Express
* MongoDB

##Sources##
Lots and lots of help from Bobby King's excellent [user_auth_itunes](https://git.generalassemb.ly/wdi-nyc-60/user_auth_itunes) example, most notably his work with bcrypt.
Thanks to Paris Leach for help merging the APIs. 

##Hurdles##
* "Measure twice, cut once" are some of the wisest words ever uttered
* APIs yielded very similar, but slightly different, objects (which needed to be merged)
* MVC architecture is (for the moment) still hard to wrap my head around
