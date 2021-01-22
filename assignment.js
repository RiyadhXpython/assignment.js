//  https://github.com/RiyadhXpython/assignment.js

// kilometerToMeter started 

function kilometerToMeter(km){
    var meter = km*1000;
    return meter;
}
// var result = kilometerToMeter(10);
// console.log(result);

// kilometerToMeter ended 



// budgetCalculator started

function budgetCalculator(watch, phone, Laptop){
    var totalWatch = watch*50;
    var totalPhone = phone*100;
    var totalLaptop = Laptop*500;
    var totalBudget = totalWatch + totalPhone + totalLaptop;
    return totalBudget;
}
// var result = budgetCalculator(10,20,30);
// console.log(result);

// budgetCalculator ended



// megaFriend started

    function megaFriend(arr){
        var longestName = arr[0];
        
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
                if( longestName.length < element.length){
                    longestName = element
                    }
                        }
                        return longestName
                            }

// var  myFriends = ["shakib","rony","riyadh","riad mahamud sirazy"]
// var longestName = megaFriend(myFriends)
// console.log(longestName)

// megaFriend ended 



// hotelCost started

function hotelCost(myStayingDays){
    if (myStayingDays< 0){
        return "warning : days cant be less than 0"
    }
    else if(myStayingDays < 10){
        return myStayingDays *100;
    }
    else if(myStayingDays < 20){
        var twentyDaysLater = myStayingDays -10;
        return (1000 +(twentyDaysLater*80));
    }
    else{
        var twentyDaysLater = myStayingDays - 20;
        return(1800 + (twentyDaysLater*50));
    }
}
// var result = hotelCost(25);
// console.log(result);

// hotelCost ended

















