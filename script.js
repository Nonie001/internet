document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("activity-form");
    const activityList = document.getElementById("activity-list");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const activityInput = document.getElementById("activity");
        const dateInput = document.getElementById("date");

        const activity = activityInput.value;
        const date = dateInput.value;

        if (activity && date) {
            const listItem = document.createElement("li");
            listItem.textContent = `${activity} (${date})`;
            activityList.appendChild(listItem);

            // ล้างค่าฟอร์ม
            activityInput.value = "";
            dateInput.value = "";
        }
    });
});
