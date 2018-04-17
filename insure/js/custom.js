let catalogFilterView = document.getElementsByClassName('catalog_view');
for (let i = 0, max = catalogFilterView.length; i < max; i++) {
    catalogFilterView[i].addEventListener('click', catalogView);
}
let mobileMenu = document.getElementById('mobile_menu');
mobileMenu.addEventListener('click', toggleMobileMenu);

function catalogView(e) {
    e.preventDefault();
    let catalogContent = document.getElementsByClassName('catalog_content_wrap')[0];
    if (this.classList.contains('catalog_view_table')) {
        catalogContent.classList.remove("card");
    } else {
        catalogContent.classList.add("card");
    }
}

function toggleMobileMenu(e) {
    e.preventDefault();
    console.log(this.parentElement)
    if(this.parentElement.classList.contains('is_active')) {
        this.parentElement.classList.remove('is_active')
    } else {
        this.parentElement.classList.add('is_active')
    }
}