// Name: Atta Muhammad
//Roll No. PIAIC192474
//Course: Certified Web 3.0 and Metaverse Developer
//This my first assingment, similar quetion are categorized and I have added quetion number at the top as comment.
var lineBreak: string = '\n' + 'Now you are on next quetion'

//Quetion 1-3 

var person:string = "hello, scott"
console.log(person)
console.log(person.toUpperCase())
console.log(person.toLowerCase())
console.log(person.replace(/\b\w/g, (c) => c.toUpperCase()))

//Quetion 4-6
console.log('\n');

var famous_person: string = "Thomas Edison once said,"
var PrintYourMessage: string = '"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time."'
console.log(famous_person,PrintYourMessage)
var spacedName = famous_person.split("").join(" ");
var spacedNameT = famous_person.split("").join("\t");
var spacedNameN = famous_person.split("").join("\n")
console.log(spacedName)
console.log(spacedNameT)
console.log(spacedNameN)

//Quetion 7-8
console.log('\n');

console.log( 2 + 6)
console.log(50 - 42)
console.log(4 * 2)
console.log(80 / 10)

//Quetion 9
console.log('\n');

var myFavNumber: number = 13
var message: string = "Here is my favorite number"
console.log(message, myFavNumber)

//Question 10 is to add coments.

//Question 11-12
console.log('\n');

var friends: string = "Musadiq Saleem Nadir Awais"
var sepratedNames: string[] = friends.split(" ")
for (const friendlist of sepratedNames)
console.log(friendlist)
var message1: string = " Welcome to the first class of web 3.0"
for (const Frindname of sepratedNames) {
  console.log(`Hello, Mr. ${Frindname}` + message1);
}

console.log('\n');

// Quetion 13

var myFavoriteThings: string[] = ['Alienware', 'BMW', 'House','Internet', 'learner'];
for (const favThing of myFavoriteThings) {
var statement: string;
    if (favThing === 'Alienware') {
        statement = `I love to use ${favThing} Laptops with RTX 40 series.`;}  
    else if(favThing === 'BMW') {
        statement = `I dreamed to Drive ${favThing} Cars.`}
    else if(favThing === 'House'){
        statement = `I want to have luxury ${favThing} and life style`}
    else if (favThing === 'Internet') {
        statement = `I dont want slow ${favThing} connection.`;}
    else if(favThing === 'learner'){
        statement = `I'm a quick ${favThing} and I love to learn new things`;
      }
      else {
        statement = `Print ${favThing}`;
      } 
      console.log(statement);
    }
    

//Question 14 
//  Creating Guest list and sending them Invitation
console.log('\n');

var guestList = ['Musadiq', 'Saleem', 'Nadir', 'Awais']
var guestInvitationMessage: string = "I would like to invite you for the party on next weekend"
for (const guest of guestList){
console.log(`Dear ${guest}, you are invited to the dinner. Please join us on this Sunday evening.`);
}


// Question 15 to 17
/* Replacing old guest with new guest and sending them Invitation*/
console.log('\n');

var missingguest: string = 'Awais';
guestList = guestList.filter(guestList => guestList !== missingguest);
var newguest: string = 'Asad';
guestList.push(newguest);
for (const guest of guestList){
    console.log(`Dear ${guest}, you are invited to the dinner. Please join us on this Sunday evening.`)
}
/* Guest which are unable too join us, leting know to all other guest */
console.log('\n');

console.log(`${missingguest} is unable to join us, we might need to invite a few more friends`);

/* Found a bigger space and seign message to all guest */

var biggertable: string = 'Finally! I found a new place with bigger space so we are inviting a few more friends'
console.log(biggertable);

/* Adding New guest to the list */
console.log('\n');

var firstNewguest: string= "Mozam";
var middleNewGuest: string = "Mansoor";
var lastNewGuest: string = "Babar"
guestList.unshift(firstNewguest);
guestList.splice(Math.floor(guestList.length / 2), 0, middleNewGuest);
guestList.push(lastNewGuest);
for (const newlist of guestList) 
console.log(newlist);

/* Sorry message to guests */
console.log('\n');

var ShrinkfList: string = "Awh! I'm really sorry to inform you, I just recieved a call from hotel manager, they are unable to provide us bigger space."
console.log(ShrinkfList);
function newGuestListF(newGuestList){    
    /* Removed few guests  */
    var finalGueslist: string[] = guestList;
    if(newGuestList >= 1 && newGuestList <= finalGueslist.length){
        const removedGuest = finalGueslist.splice(newGuestList - 1, 2);
        console.log(`Now we are Inviting only ${newGuestList} Persons: ${removedGuest.join(", ")}`)
    }
    else{
        console.log("Invalid")
    }   
}
console.log('\n');

newGuestListF(2);

function sorryMessageToGuest(){
    var messageToGuesst: string[] = [];
    while (guestList.length > 2){    /* Removed all guest except two  */
        let removedGuest  = guestList.pop();
    console.log(`I'm sorry to inform you Mr. ${removedGuest} that I won't be able to invite you`); 
    messageToGuesst.push(removedGuest); /* Sending sorry message to removed guests  */
} 
}
console.log('\n');

sorryMessageToGuest();
console.log(`we are only inviting to Mr. ${guestList}`) /* I'm inviting only 2 members here  */
let allGuestRemoved = guestList;
allGuestRemoved.length = 0;
console.log(allGuestRemoved);         /*Now removed all guest from the original List and its Empty now */
console.log(guestList);

//  Quetion 18, Think of at least five places in the world you’d like to visit.
console.log('\n');

let dreamCountries = ["New York", "Berlin" ,"Los Angelus", "Bali", "Bankok"];
console.log(dreamCountries);                                 /** Original List print */
let sortedPlaces = dreamCountries.slice();
sortedPlaces.sort();
console.log(sortedPlaces);                                  /** Alphabetical ordered List print */
console.log(dreamCountries);                                /** Original List print */
let reversed = dreamCountries.slice();
reversed.reverse();
console.log(reversed);                                 /** Reversed order List print */
console.log(dreamCountries);                                  /** original order List print */
let revOrderMsg = `The array order is revesed now ${reversed}`;
console.log(sortedPlaces);                          /** Alphabetical ordered List print */
console.log(revOrderMsg);                        /** Reversed order List with Message print */
let orgOrderMsg = `The array order is in Original order ${dreamCountries}`;
console.log(orgOrderMsg);                  /** Original order List with Message print */
let alphOrderMsg = `THe array is in Alphabetic order ${sortedPlaces}`;
console.log(alphOrderMsg);                     /* Alphabetic order List with Message print */
console.log(orgOrderMsg);                    /** Original order List with Message print */
console.log('\n');

//  Quetion 19 Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let replaceGuestList = guestList;
replaceGuestList.push("saleem ", "Mozam");
let recallGuest = `Recalling guest from quetion 14 for Dinner again ${replaceGuestList}`;
console.log(recallGuest);
// let totalGuest = guestList ;
// totalGuest.length = 2;
console.log(replaceGuestList);

// Question 20 string For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. 

let montain = ["Mount Everest", "Kangchenjunga" ,"Lhotse", "Makalu", "K2"]
for (let mList = 0; mList < montain.length; mList++){
    console.log(mList + 1 + ".\t" + montain[mList]);
};
console.log('\n');

// Question 21 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let [a,b,c,d, e] = montain;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log('\n');

// Question 22 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let intentionalError = [1,2,3,4,5];
let causeError = intentionalError[6];
console.log(causeError);                        /**Made Intentinally Error */
let errorCorction = intentionalError[2];
console.log(errorCorction);                         /**FIxed the Error */

console.log(`\t`);
// Question 23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car: string = "Civic";
let LuxCar: string = "Audi A4";
let bike: string = "cycle";
let HeavyBike: string = "Yamaha YZF-R1";
let mycar: string = "BMW M5";
let num1: number = 13;
let num2: number = 226;
let mycountry: string = "Pakistan";
let imA: string = "3D Artist";
let bool0: boolean = true;
let bool1: boolean = false;
console.log('\n');

let msgture = " Hey, This one is true";
let msgfalse = "Awh, that's false";

console.log(car == "Mehran",`\n`, msgfalse);
console.log(LuxCar == "Audi A4",`\n`, msgture);
console.log(bike == "CD 70",`\n`, msgfalse);
console.log(HeavyBike == "Yamaha YZF-R1",`\n`, msgture);
console.log(mycar == "Mehran",`\n`, msgfalse);
console.log(num1 == 15,`\n`, msgfalse);
console.log(num2 == 226,`\n`, msgture);
console.log('\n');

console.log(mycountry == "Pakistan",`\n`, msgture);
console.log(imA == "3D Artist", `\n`, msgture);

console.log(bool0);
console.log(msgture);

console.log(bool1);
console.log(msgfalse);
console.log(`\t`);

// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// Tests for equality and inequality with strings
let myLaptop: string = "MSI Katana GF66";
let MyLabtop1: string = "MSI Katana GF66";

console.log(`Is my laptop MSI katana GF66?,\t`, myLaptop == MyLabtop1);
console.log(`Is my laptop MSI katana GF66?,\t`, myLaptop !== MyLabtop1);

console.log(`\t`);

let allStringCondition: string = "Here are all string conditions test.";
let allStringCondition1: string = "here are all string conditions test.";
console.log(allStringCondition,   "Both variables are in original form", allStringCondition == allStringCondition1 );
console.log(allStringCondition, "Both variables are in original form", allStringCondition !== allStringCondition1 );

console.log(allStringCondition.toLowerCase(), " Both variables are lowercase", allStringCondition.toLowerCase() == allStringCondition1.toLowerCase() );
console.log(allStringCondition.toLowerCase(), "one is lowercase other is original", allStringCondition == allStringCondition1.toLowerCase() );
console.log(allStringCondition.toLowerCase(), "one is upercase other is original", allStringCondition.toUpperCase() == allStringCondition1 );
console.log(allStringCondition.toUpperCase(), "Both variables are upercase", allStringCondition.toUpperCase() == allStringCondition1.toUpperCase() );
console.log(`\t`);

// Tests for equality and inequality with Numbers
let numTest: number = 40;
let numTest1: number = 40;

console.log( "Is numTest equal to numTest1?", numTest == numTest1 );
console.log( "Is numTest not equal to numTest1?", numTest != numTest1 );
console.log( "Is numTest greater then numTest1?", numTest > numTest1 );
console.log( "Is numTest not greater then numTest1?", !(numTest > numTest1) );
console.log( "Is numTest greater or equal to numTest1?", numTest >= numTest1 );
console.log( "Is numTest less than numTest1?", numTest < numTest1 );
console.log( "Is numTest less equal to numTest1?", numTest <= numTest1 );
console.log('\n');

//  Tests using "and"

let num3 = 13;
let num4 = 23;
let num5 = 55;
let num6 = "55"

console.log("Testing 3 variables unsing && statment", num3 == 13 && num4 == 23 && num5 == 56 && num6 === "55");
console.log("Testing 3 variables unsing && statment", num3 == 13 && num4 == 23 && num5 == 55 && num6 === "55");
console.log("Testing 3 variables unsing && statment", num3 == 14 && num4 == 23 && num5 == 55 && num6 === num5 as unknown as string);

console.log("Testing 3 variables unsing && statment", num3 <= 13 && num4 == 23 && num5 < 56);
console.log("Testing 3 variables unsing && statment", num3 >= 13 && num4 > 20 && num5 >= 55);
console.log("Testing 3 variables unsing && statment", num3 < 14 && num4 < 23 && num5 == 55);

//  Tests using "and"
console.log('\n');
console.log("Testing 3 variables unsing || statment", num3 == 11 || num4 == 22 || num5 == 56);
console.log("Testing 3 variables unsing || statment", num3 == 13 || num4 == 23 || num5 == 55);
console.log("Testing 3 variables unsing || statment", num3 == 14 || num4 == 23 || num5 == 55);

console.log("Testing 3 variables unsing || statment", num3 < 13 || num4 > 23 || num5 < 52 || num6 === num5 as unknown as string);
console.log("Testing 3 variables unsing || statment", num3 > 13 || num4 > 20 || num5 > 55 || num6 === 75 as unknown as string);
console.log("Testing 3 variables unsing || statment", num3 > 14  || num4 < 23 || num5 === 56 || num6 === "75" as unknown as string);

// Test whether an item is in a array
console.log('\n');

let findObjInArray: string[] = ["Apple", "Samsung", "Oppo", "Infinix", "Real me", "Nokia", "Motorola"];
let objExist = ["Apple", "Samsung", "Infinix", "Nokia"];
let noObjExist = ["QMobile", "huawei", "sony"];

let getValuesPrint = findObjInArray.filter((value) => objExist.indexOf(value) !== -1);
let objFondMsg = "Thats true the mentioned objects exist in the original array";
console.log(getValuesPrint,'\n', objFondMsg);

// Test whether an item is not in a array
let noObjectFound = findObjInArray.some((value) => noObjExist.indexOf(value) !== -1);
let noObjFoundMsg = "false, non of object exists in the original array";
console.log(noObjectFound , '\n', objFondMsg);
console.log("\n")

// Question 25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

let alien_color: string = "Red"
let winMsg = "You earned 5 points"
let looseMsg = "You lost, please try again"

if (alien_color == "Red"){  /**Its true, player just earned 5 points. */
    console.log(winMsg);
} else{
    console.log(looseMsg);
}

if (alien_color == "Yellow"){       /**Its false, player earned nothing. with print message */
    console.log(winMsg)
}else{
    console.log(looseMsg)
}

if (alien_color == "Yellow"){ /**Its false, player earned nothing. without print message */
    console.log(winMsg)
}else{
    console.log()
}
console.log("\n")

// Question 26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.




let winMsg1 = "You just earned 10 points"
let alien_color1 = "Green"
if (alien_color1 == "Green"){   /**Its true, player just earned 5 points. */
    console.log(winMsg);
} else {
    console.log(winMsg1);
}
if (alien_color == "Green"){   /**Its false, but player still earned 10 points. */
    console.log(winMsg);
} else {
    console.log(winMsg1);
}
console.log("\n");
// Question 27 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alien_color2 = "Yellow"
let winMsg2: string = "You earned 15 points"

/** Here 1st statment is ture, Played earn 5 points */
if(alien_color == "Red"){
    console.log(winMsg);
} else if(alien_color1 == "Yellow"){
    console.log(winMsg1);
}else if(alien_color2 == "Green"){
    console.log(winMsg1);
}else{
    console.log("Invalid color")
}

/** Here 2nd statment is ture, Played earn 10 points */
if(alien_color == "Yellow"){
    console.log(winMsg);
} else if(alien_color1 == "Green"){
    console.log(winMsg1);
}else if(alien_color2 == "Red"){
    console.log(winMsg1);
}else{
    console.log("Invalid color")
}

/** Here 3rd statment is ture, Played earn 15 points */
if(alien_color == "Green"){
    console.log(winMsg);
} else if(alien_color1 == "Red"){
    console.log(winMsg1);
}else if(alien_color2 == "Yellow"){
    console.log(winMsg2);
}else{
    console.log("Invalid color")
}
/** Here No statment is ture, Played earn nothing Result is Invalid color */
if(alien_color == "Green"){
    console.log(winMsg);
} else if(alien_color1 == "Yellow"){
    console.log(winMsg1);
}else if(alien_color2 == "Red"){
    console.log(winMsg2);
}else{
    console.log("Invalid color")
}
// Question 28 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
console.log("\n");

let ageBaby:number = 2;
let ageKid: number = 4;
let ageTeen: number = 13;
let ageAdult: number = 20;
let ageElder: number = 65;

let ageBabyMsg: string = "person is a baby";
let ageKidMsg: string = "person is a Kid";
let ageToddlerMsg: string = "person is a Toddler";
let ageTeenMsg: string = "person is a Teenager";
let ageAdultMsg: string = "person is a Adult";
let ageElderMsg: string = "person is a Elder";

if (ageBaby < 3){
    console.log(ageBabyMsg);
}
 if (ageBaby >= 2 && ageKid < 5){
    console.log(ageToddlerMsg);
}
 if (ageKid >= 4 && ageTeen < 14){
    console.log(ageKidMsg);
}
 if (ageTeen >= 13 && ageTeen < 20){
    console.log(ageTeenMsg);
}
if (ageAdult >= 20 && ageTeen < 65){
    console.log(ageAdultMsg);
}
if (ageElder >= 65 ){
    console.log(ageElderMsg);
}

// Question 29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
console.log("\n");
let favorite_fruits = ["Mango","Apple","Banana","Strawberry"]

if(favorite_fruits.indexOf("Mango") >= 0){
    console.log("I Love to to eat Mangos")
}
else{
    console.log("I really dont Like Mango")
}

if(favorite_fruits.indexOf("Apple") >= 0){
    console.log("I Love to to eat Apple")
}
else{
    console.log("I really dont Like Apple")
}

if(favorite_fruits.indexOf("Banana")>= 0){
    console.log("I Love to to eat Banana")
}
else{
    console.log("I really dont Like Banana")
}

if(favorite_fruits.indexOf("Strawberry")>= 0){
    console.log("I Love to to eat Strawberry")
}else{
    console.log("I really dont Like Strawberry")
}

if(favorite_fruits.indexOf("Peach") >= 0){
    console.log("I Love to to eat Peach")
}else{
    console.log("I really dont Like Peach")
}

if(favorite_fruits.indexOf("Palm")>= 0){
    console.log("I Love to to eat Palm")
}
else{
    console.log("I really dont Like Palm")
}

// Question 30 Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
console.log("\n");

let adminArray:string[] = ["Admin","Dr. Lutuf", "Mozam","Asad","Sulaiman","Fahad",]

for (let message of adminArray){
    if(message === "Admin"){
        console.log(`Hello ${message}, would you like to see a status report?`)
    } else {
        console.log(`Hello ${message}, thank you for logging in again.`)

    }
}

// Question 31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
console.log("\n");

 if(adminArray.length === 0){   /** this statement isnt working  error will check it later. */
    console.log("We need to find users");
 }
 else{
    console.log("Not found");
 }
if (adminArray.length === 0){
    console.log("We need to find users");
}
for (let message of adminArray){
    if(message === "Admin"){
        console.log(`Hello ${message}, would you like to see a status report?`)
    } else {
        console.log(`Hello ${message}, thank you for logging in again.`)
    }
}
if (adminArray.length >= 1){
    console.log("Array isnt empty");

}else{
    console.log("We need to find users");

}

// Question 32, Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
console.log("\n");
let current_users = ["Dr. Lutuf", "Mozam","Asad","Sulaiman","Fahad","Babar","Ali","Khalid"];
let new_users = ["Farhan", "Asad","Hadi","Usama","sulaiman","Fahad","babar","Imran","Khalid", "Zubair"];
for (let checkUser of new_users){
    let isUserNameTaken: boolean = current_users.some(username => username.toLowerCase() === checkUser.toLowerCase());
    if(isUserNameTaken){
        console.log(`Sorry the ${checkUser} is already taken, please try different one`)
    }

else{
    console.log(`The username ${checkUser} is correct`)
}
}

// Question 33, Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
console.log("\n")

let numList = [1,2,3,4,5,6,7,8,9]

for (let num of numList){
    let ordinal:string;
    if (num === 1){
    ordinal = "1st";
}
        else if(num ===2){
            ordinal = "2nd"
}       else if(num === 3){
    ordinal = "3rd"
} else{
    ordinal = num + "th"
}
console.log(ordinal)
}
// Question 34, Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log("\n");
let Pizza = ["Sicilian pizza","pepperoni pizza","Italian Pizza","BBQ Chicken Pizza","Hawaiian Pizza",]

for (let pizzaname of Pizza){
    console.log(pizzaname)
}
console.log("I like all kinds of pizza, such as Margherita, Pepperoni, and BBQ Chicken",
"Pizza is one of my favorite dishes, and I can have it any time of the day.",
"Whether it's thin crust or deep-dish, I enjoy every bite!",
"I really love pizza!")

// Question 35, Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals 
// in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement
//  about each animal, such as A dog would make a great pet. 
//  • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
console.log("\n");

let animal = ["Dog", "Cat", "Rabbit", "Hamsters","Domestic canary"]

for(let animalprint of animal){
    console.log(animalprint);
}

for (let animalMsg of animal){
    console.log(`A ${animalMsg} would make a great pet.`)
}
console.log("All these Animals are domestic and would make great pets");

// Question 36, T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// Question 37, Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// Note, Here I have answered both question because both were similar.

console.log("\n");

function make_shirt(shirtsize:string = "Large", shirtMsg:string = "I love type script"): void{
    console.log(`The shirt size is ${shirtsize} and it has the message: "${shirtMsg}" printed on it.`);
}
make_shirt();
make_shirt("Medium")
console.log("\t");
make_shirt("Small" , "Hurry Up");
make_shirt("Medium" , "Let's Do It ");
make_shirt("Large" , "One Mile Ahead");
make_shirt("Extra Large" , "Come On Man");
console.log("\t");
// Question 38, Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city(cirtName: string, country: string  = "Pakistan"){
    console.log(`${cirtName} is in ${country}`)
}
describe_city("Karachi")
describe_city("Islamabad")
describe_city("Lahore")
describe_city("Hyderabad")
describe_city("Berlin", "Germany")
describe_city("Bankok", "Thailand")
describe_city("Newyork", "USA")

//  Question 39, City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
console.log("\t");
function city_country(City:string, country:string){
        console.log(`"${City}, ${country}"`)

}
city_country("Lahore", "Pakistan");
city_country("Karachi", "Pakistan");
city_country("Multan", "Pakistan");
city_country("Faisalabad", "Pakistan");
city_country("London", "UK");
city_country("Paris", "France");

// Question 40, Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.


function make_album(Artist: string, Album: string, Tracks?: number): object {
  const album: any = {
    Artist: Artist,
    Album: Album,
  };
  if (Tracks !== undefined) {
    album.Tracks = Tracks;
  }
  return album;
}

const album1 = make_album("Ed Sheeran", "Divide");
const album2 = make_album("Taylor Swift", "Folklore", 16);
const album3 = make_album("Imagine Dragons", "Evolve", 12);

console.log(album1);
console.log(album2);
console.log(album3);

// Question 41, Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicianName: string[] = ["Harry Houdini", "Criss Angel", "David Blaine", "William Lance", "Richard"];
function show_magicians(printName: string[]): void{
    printName.forEach((magician) =>{
        console.log(magician);
    })
}
show_magicians(magicianName);
console.log("\t");
//  Question 42, Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified
function great_magicians(printName: string[]) :string[]{
    return printName.map((magician) => `Great ${magician}`)   
}
let greatMagician = great_magicians(magicianName);
show_magicians(greatMagician);
console.log("\t");

console.log("Original Magician Array");
show_magicians(magicianName);
console.log("\t");

console.log("Great Magician Array");
show_magicians(greatMagician);
console.log("\t");
// Question 44, Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function sandwich(...items: string[]): void{
console.log("Sandwich Summery");
if (items.length === 0){
    console.log("You havent ordered anythign");
} else {
    console.log(`You have ordered ${items.join(", ")}`);
}
}
sandwich();
console.log("\t");
sandwich("Egg Sandwich", "Grilled Cheese Sandwich");
sandwich("Nutella Sandwich", "Ham Sandwich", "Grilled Chicken Sandwich");
sandwich("Seafood Sandwich", "Roast Beef Sandwich", "Olive Sandwich");
sandwich("Ice Cream Sandwich", "Meatball Sandwich", "Prawn Sandwich", "Salmon Sandwich");