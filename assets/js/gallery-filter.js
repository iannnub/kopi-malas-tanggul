export function galleryFilter() {
    const filterContainer = document.querySelector("#gallery-filters");
    const galleryItems = document.querySelectorAll("#gallery-grid .gallery-item");

    if (!filterContainer) {
        return;
    }

    filterContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("filter-btn")) {
            // Hapus kelas 'active' dari semua tombol
            filterContainer.querySelector(".active").classList.remove("active");
            // Tambahkan kelas 'active' ke tombol yang diklik
            event.target.classList.add("active");

            const filterValue = event.target.getAttribute("data-filter");

            galleryItems.forEach(item => {
                if (item.classList.contains(filterValue) || filterValue === "all") {
                    item.classList.remove("hidden");
                    item.classList.add("block");
                } else {
                    item.classList.remove("block");
                    item.classList.add("hidden");
                }
            });
        }
    });
}