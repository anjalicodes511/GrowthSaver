// Initialize feather icons
feather.replace();

// 1. Select DOM Elements
const goalAmountInput = document.getElementById("goal-amount");
const currentSavingInput = document.getElementById("current-savings");
const monthlyContriInput = document.getElementById("monthly-contribution");

const calculateBtn = document.getElementById("calculate-btn");
const progressBar = document.getElementById("progress-bar");
const result = document.getElementById("result");


// 2. Add event listener for calculate button

calculateBtn.addEventListener('click',()=>{
    // 3. Validate user input
    const goalAmount = parseFloat(goalAmountInput.value);
    const currentSaving = parseFloat(currentSavingInput.value);
    const monthlyContribution = parseFloat(monthlyContriInput.value);

    if(isNaN(goalAmount) || isNaN(monthlyContribution) || isNaN(currentSaving)){
        result.textContent = "Please Enter Valid Numbers";
        result.classList.add("show");
        return;
    }

    // 4. Calculate remaining amount and months to reach goal
    const remAmount = goalAmount-currentSaving;
    const monthsToGo = Math.ceil(remAmount/monthlyContribution);
    const progressPercentage = (currentSaving/goalAmount) * 100;

    // 5. Update progress bar based on current savings
    progressBar.style.width = `${progressPercentage}%`;
    // 6. Display result based on the savings progress
    result.classList.remove("show");

    setTimeout(()=>{
        // 7. HAndle UI updates and transitions for result display
        if(currentSaving >= goalAmount){
            result.innerHTML = "🎉Congratulations! Your savings have bloomed to reach your goal!";
        }
        else{
            result.innerHTML = `Keep nurturing your savings! You'll reach your goal in ${monthsToGo} months.`;
        }
        result.classList.add("show");
    },100);

});