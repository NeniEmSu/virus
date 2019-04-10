// Dropdown Menu
$(document).ready(function () {
    $(".menu-icon").on("click", function () {
        $("nav ul").toggleClass("showing");
    });
});



// filter

(function () {
    const filterBtn = document.querySelectorAll('.filter-btn');

    filterBtn.forEach(function (btn) {
        btn.addEventListener("click", function (event) {
            event.preventDefault();
            const value = event.target.dataset.filter;

            const items = document.querySelectorAll(".store-item")

            items.forEach(function (item) {
                if (value === "all") {
                    items.style.display = "block";
                } else {
                    if (item.classList.contains(value)) {
                        items.style.display = "block";
                    } else {
                        items.style.display = "none";
                    }
                }

            });
        });

    });

})();