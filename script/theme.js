$(document).ready(function(){

    const $sidebar = $("#sidebar");
    const $icon = $("#custom-icon");
    const $sidebarItems = $(".sidebar-item");
    const bar = $("#bar-icon");
    const mobileViewMenu = $(".mobile-view-menu");
    const rightBar = $(".right-bar");
    // Function to apply dark mode styles
    function applyDarkMode() {
      $(".dark").attr("hidden", true); // Hide the dark icon
      $(".light").attr("hidden", false); // Show the light icon
      $("body").css("background-color", "#1f2336");
      $(".search-box").removeClass("bgSearchBar");
      $(".table-container tr, .right-top-navbar").css("border-bottom", "");
      $(".navbar").removeClass("borderColor");
      $icon.removeClass("nav-iconbg");
      $(".chart-card").removeClass("bg-color");
      $(".number").removeClass("itemBg nav-title-color");
      $(".total_amount_Content").removeClass("bg-color").css("box-shadow", "");
      $(".right-navbar").css("background-color", "");
    
      $(".input-field, .upload-container, .total_amount_Content").removeClass(
        "backgroundColor"
      );
      $(".upload-container").css("border", "");
    
      $(`
        .stat-btn, .title, .transactionAm, .transactionType, .betAmt, .table-container th, 
        .coinName, .bestPerform, .depositAmt, .userName, .superAdmin, .earningAmt, .countryName, 
        .total-earning, .analytics-section-title, .range-bar-title, .transaction-title, .pageTitle
      `).removeClass("title-color");
    
      $(".transaction-title, .bestPerform ")
        .removeClass("title-color")
        .css("font-weight", "");
    
      $(`
        .rangebar-container, .multiple-line-chart, .carousel-container, 
        .earning-graph-container, .city-card
      `)
        .removeClass("bg-color")
        .css(
          "box-shadow",
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
        );
      $(".lng-btn").hover(function () {
        // Mouse enters: apply hover effect
        $(this).css({
          "background-color": "",
          "box-shadow": "",
        });
      });
      $(".analytics-card, .purchase-card").css("box-shadow", "");
      $(".tab-item").removeClass("active-tab-light-mode");
      $(".tab-item").first().addClass("active-tab");
    
      // Set localStorage to dark mode
      localStorage.setItem("theme", "dark");
    }
    
    // Function to apply light mode styles
    function applyLightMode() {
      $(".light").attr("hidden", true); // Hide the light icon
      $(".dark").attr("hidden", false); // Show the dark icon
      $("body").css("background-color", "#F7FAFF");
      $(".search-box").addClass("bgSearchBar");
      $(".navbar").addClass("borderColor");
      $icon.addClass("nav-iconbg");
      $(".chart-card").addClass("bg-color");
      $(".number").addClass("itemBg nav-title-color");
      $(".table-container tr, .right-top-navbar").css(
        "border-bottom",
        "2px solid #E6E8EF"
      );
      $(".table-head").css("color", "#dee2e6 ");
    
      $(".input-field, .upload-container, .total_amount_Content").addClass(
        "backgroundColor"
      );
      $(".upload-container").css("border", "1px solid #E6E8EF");
    
      $(".right-navbar").css({
        "background-color": "#FFFFFF",
      });
    
      $(`
        .stat-btn, .title, .transactionAm, .transactionType, .betAmt, .table-container th, 
        .coinName,  .depositAmt, .userName, .superAdmin, .earningAmt, .countryName, 
        .total-earning, .analytics-section-title, .range-bar-title,  .pageTitle
      `).addClass("title-color");
    
      $(".transaction-title, .bestPerform ")
        .addClass("title-color")
        .css("font-weight", "normal");
    
      $(`
        .rangebar-container, .multiple-line-chart, .carousel-container, 
        .earning-graph-container, .city-card
      `)
        .addClass("bg-color")
        .css(
          "box-shadow",
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
        );
      $(".analytics-card, .purchase-card").css(
        "box-shadow",
        "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
      );
    
      $(".lng-btn").hover(
        function () {
          // Mouse enters: apply hover effect
          $(this).css({
            "background-color": "#fff",
            "box-shadow":
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
          });
        },
        function () {
          // Mouse leaves: remove hover effect or reset styles
          $(this).css({
            "background-color": "",
            "box-shadow": "",
          });
        }
      );
      $(".tab-item").removeClass("active-tab");
      $(".tab-item").first().addClass("active-tab-light-mode");
    
      // Set localStorage to light mode
      localStorage.setItem("theme", "light");
    }
    
    // Check the stored theme on page load and apply it
    
    const savedTheme = localStorage.getItem("theme");
    
    if (!savedTheme) {
      applyDarkMode(); // Default to dark mode
    } else if (savedTheme === "light") {
      applyLightMode();
    } else if (savedTheme === "dark") {
      applyDarkMode();
    }
    
    // Event handler for Dark mode button
    $(".dark").click(function () {
      applyDarkMode();
    });
    
    // Event handler for Light mode button
    $(".light").click(function () {
      applyLightMode();
    });
})
