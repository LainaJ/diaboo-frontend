


function removeDuplicates (nums) {
    console.log("it worked")
    let currentNum = 0
    let nextNum = 0
    for (let i = 0; i < nums.length; i++){
        nextNum = i++
        if (nums[i] === nums[i++]){
            nums.splice(nextNum, 0)
            }
return nums.length
     }
    // return nums.length
};

removeDuplicates()