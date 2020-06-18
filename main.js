//Group Members:
//Brandon Yakas, Vivek Ganesan, Kamaljit Kaur
//Code: Brandon Yakas

const parentElement = document.querySelector('.katas-list')

const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

//Kata 01

const katas1Heading = document.createElement('h3');

parentElement.append(katas1Heading)

katas1Heading.append('Kata 1:')

const katas1Solution = document.createElement('div')

parentElement.append(katas1Solution)


for (counter = 1; counter <= 20; counter += 1) {
    if (counter <= 19) {
        katas1Solution.append(counter + ",")
    }
    else{
        katas1Solution.append(counter)
    }
        
}

// Kata 02

const katas2Heading = document.createElement('h3');

parentElement.append(katas2Heading)

katas2Heading.append('Kata 2:')

const katas2Solution = document.createElement('div')

parentElement.append(katas2Solution)


for (counter = 2; counter <= 20; counter += 2) {
    if (counter <= 19) {
        katas2Solution.append(counter + ",")
    }
    else{
        katas2Solution.append(counter)
    }
        
}

// Kata 03

const katas3Heading = document.createElement('h3');

parentElement.append(katas3Heading)

katas3Heading.append('Kata 3:')

const katas3Solution = document.createElement('div')

parentElement.append(katas3Solution)


for (counter = 1; counter <= 20; counter += 2) {
    if (counter <= 18) {
        katas3Solution.append(counter + ",")
    }
    else{
        katas3Solution.append(counter)
    }
        
}

// Kata 04

const katas4Heading = document.createElement('h3');

parentElement.append(katas4Heading)

katas4Heading.append('Kata 4:')

const katas4Solution = document.createElement('div')

parentElement.append(katas4Solution)


for (counter = 5; counter <= 100; counter += 5) {
    if (counter <= 99) {
        katas4Solution.append(counter + ",")
    }
    else{
        katas4Solution.append(counter)
    }
        
}

// Kata 05

const katas5Heading = document.createElement('h3');

parentElement.append(katas5Heading)

katas5Heading.append('Kata 5:')

const katas5Solution = document.createElement('div')

parentElement.append(katas5Solution)


for (counter = 1; counter <= 10; counter += 1){
    if (counter <= 9){
        katas5Solution.append((counter * counter) + "," )
    }
  else {
    katas5Solution.append(counter * counter)

}

}

// Kata 06

const katas6Heading = document.createElement('h3');

parentElement.append(katas6Heading)

katas6Heading.append('Kata 6:')

const katas6Solution = document.createElement('div')

parentElement.append(katas6Solution)


for (counter = 20; counter >= 1; counter -= 1) {
    if (counter >= 2) {
        katas6Solution.append(counter + ",")
    }
    else{
        katas6Solution.append(counter)
    }
        
}

// Kata 07

const katas7Heading = document.createElement('h3');

parentElement.append(katas7Heading)

katas7Heading.append('Kata 7:')

const katas7Solution = document.createElement('div')

parentElement.append(katas7Solution)


for (counter = 20; counter >= 1 ; counter -= 2) {
    if (counter >= 3) {
        katas7Solution.append(counter + ",")
    }
    else{
        katas7Solution.append(counter)
    }
        
}

// Kata 08

const katas8Heading = document.createElement('h3');

parentElement.append(katas8Heading)

katas8Heading.append('Kata 8:')

const katas8Solution = document.createElement('div')

parentElement.append(katas8Solution)


for (counter = 19; counter >= 1 ; counter -= 2) {
    if (counter >= 2) {
        katas8Solution.append(counter + ",")
    }
    else{
        katas8Solution.append(counter)
    }
        
}

// Kata 09

const katas9Heading = document.createElement('h3');

parentElement.append(katas9Heading)

katas9Heading.append('Kata 9:')

const katas9Solution = document.createElement('div')

parentElement.append(katas9Solution)


for (counter = 100; counter >= 5 ; counter -= 5) {
    if (counter >= 6) {
        katas9Solution.append(counter + ",")
    }
    else{
        katas9Solution.append(counter)
    }
        
}

// Kata 10

const katas10Heading = document.createElement('h3');

parentElement.append(katas10Heading)

katas10Heading.append('Kata 10:')

const katas10Solution = document.createElement('div')

parentElement.append(katas10Solution)


for (counter = 10; counter >= 1 ; counter -= 1) {
    if (counter >= 2) {
        katas10Solution.append((counter * counter) + ",") }
     else {
        katas10Solution.append(counter * counter)
    }
        
}

// Kata 11

const katas11Heading = document.createElement('h3');

parentElement.append(katas11Heading)

katas11Heading.append('Kata 11:')

const katas11Solution = document.createElement('div')

parentElement.append(katas11Solution)

katas11Solution.append(sampleArray)

// Kata 12

const katas12Heading = document.createElement('h3');

parentElement.append(katas12Heading)

katas12Heading.append('Kata 12:')

const katas12Solution = document.createElement('div')

parentElement.append(katas12Solution)

for (counter = 0; counter <= sampleArray.length -1; counter += 1) {
    if(sampleArray[counter] % 2 === 0) {

        katas12Solution.append(sampleArray[counter] + " ")

    }
    
}


// Kata 13

const katas13Heading = document.createElement('h3');

parentElement.append(katas13Heading)

katas13Heading.append('Kata 13:')

const katas13Solution = document.createElement('div')

parentElement.append(katas13Solution)

for (counter = 0; counter < sampleArray.length-1; counter += 1) {
    if(sampleArray[counter] % 2 === 1) {
        katas13Solution.append(sampleArray[counter] + " ")
    }
}

// Kata 14

const katas14Heading = document.createElement('h3');

parentElement.append(katas14Heading)

katas14Heading.append('Kata 14:')

const katas14Solution = document.createElement('div')

parentElement.append(katas14Solution)

for (counter = 0; counter <= sampleArray.length-1; counter += 1) {
    if(sampleArray[counter] % 2 === 1) {
        katas14Solution.append(Math.pow(sampleArray[counter] , 2) + " ")
    }
}

// Kata 15

const katas15Heading = document.createElement('h3');

parentElement.append(katas15Heading)

katas15Heading.append('Kata 15:')

const katas15Solution = document.createElement('div')

parentElement.append(katas15Solution)


let sum = 0;

for ( counter = 1; counter <= 20; counter += 1) {
    sum += counter
}
katas15Solution.append(sum)

// Kata 16

const katas16Heading = document.createElement('h3');

parentElement.append(katas16Heading)

katas16Heading.append('Kata 16:')

const katas16Solution = document.createElement('div')

parentElement.append(katas16Solution)


sum = 0;

for ( counter = 0 ; counter <= sampleArray.length - 1; counter += 1) {
    sum += sampleArray[counter]
}
katas16Solution.append(sum)

// Kata 17

const katas17Heading = document.createElement('h3');

parentElement.append(katas17Heading)

katas17Heading.append('Kata 17:')

const katas17Solution = document.createElement('div')

parentElement.append(katas17Solution)

let height = sampleArray[0];

for (x = 0; x <= sampleArray.length - 1; x += 1) {
   
    if (sampleArray[x] <= height) {
        height = sampleArray[x]
    }
}

katas17Solution.append(height)

// Kata 18

const katas18Heading = document.createElement('h3');

parentElement.append(katas18Heading)

katas18Heading.append('Kata 18:')

const katas18Solution = document.createElement('div')

parentElement.append(katas18Solution)

height = sampleArray[0];

for (x = 0; x <= sampleArray.length - 1; x += 1) {
   
    if (sampleArray[x] >= height) {
        height = sampleArray[x]
    }
}

katas18Solution.append(height)














