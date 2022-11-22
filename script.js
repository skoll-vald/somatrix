const tabsBtn = document.querySelectorAll(".features__tab");
const tabsItem = document.querySelectorAll(".features__tab-content");
const tabsHr = document.querySelectorAll(".features__tab_hr");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);
        let hrId = currentBtn.getAttribute("data-hr");
        let currentHr = document.querySelector(hrId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItem.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsHr.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
            currentHr.classList.add('active');
        }
    });
}

document.querySelector('.features__tab:nth-child(1)').click();