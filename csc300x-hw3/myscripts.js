let mealPlan = [];
let totalAmount = 0;

function addToMealPlan(dish, cost) {
    mealPlan.push({ dish, cost, quantity: 1 });
    updateMealPlanDisplay();
}

function updateMealPlanDisplay() {
    const mealPlanItemsElement = document.getElementById('mealPlanItems');
    mealPlanItemsElement.innerHTML = '';
    totalAmount = 0;

    mealPlan.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'meal-plan-item';
        div.innerHTML = `${item.dish} - $${item.cost} x ${item.quantity}
        <button onclick="removeFromMealPlan(${index})">Remove</button>
        <button onclick="addAnotherOrder(${index})">Add Another Order</button>`;
        mealPlanItemsElement.appendChild(div);

        totalAmount += item.cost * item.quantity;
    });

    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
}

function removeFromMealPlan(index) {
    mealPlan.splice(index, 1);
    updateMealPlanDisplay();
}

function addAnotherOrder(index) {
    mealPlan[index].quantity += 1;
    updateMealPlanDisplay();
}