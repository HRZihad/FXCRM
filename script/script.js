$(document).ready(function () {
  const $sidebar = $("#sidebar");
  const $icon = $("#custom-icon");
  const $sidebarItems = $(".sidebar-item");
  const bar = $("#bar-icon");
  const mobileViewMenu = $(".mobile-view-menu");
  const rightBar = $(".right-bar");

  bar.hide();

  $(window).on("resize load", function () {
    // Cache window width
    const windowWidth = $(window).width();

    if (windowWidth > 425) {
      // Desktop View: Use localStorage state to manage the sidebar visibility
      let isSidebarHidden = localStorage.getItem("isSidebarHidden") === "true";

      // Function to update UI based on state
      function updateUI() {
        if (isSidebarHidden) {
          $icon.hide();
          bar.show(500);
          $sidebar.addClass("hidden");
          $sidebarItems.addClass("sidebar-item-hidden");
        } else {
          $icon.show(500);
          bar.hide();
          $sidebar.removeClass("hidden");
          $sidebarItems.removeClass("sidebar-item-hidden");
        }
      }

      // Remove any previous mobile-specific event handlers
      mobileViewMenu.off("click");
      $icon.off("click");

      // Update UI on load to apply the saved state
      updateUI();

      $icon.on("click", function () {
        isSidebarHidden = true;
        localStorage.setItem("isSidebarHidden", isSidebarHidden); // Store state
        updateUI();
      });

      bar.on("click", function () {
        isSidebarHidden = false;
        localStorage.setItem("isSidebarHidden", isSidebarHidden); // Store state
        updateUI();
      });
    } else {
      // Mobile View: Sidebar visibility is controlled independently (no need for localStorage)
      isSidebarHidden = false;
      localStorage.setItem("isSidebarHidden", isSidebarHidden);
      if (!isSidebarHidden) {
        $icon.show(500);
        bar.hide();
        $sidebar.removeClass("hidden");
        $sidebarItems.removeClass("sidebar-item-hidden");
      }
      // Remove previous desktop-specific event handlers
      $icon.off("click");
      bar.off("click");

      mobileViewMenu.on("click", function () {
        $sidebar.addClass("addNav");
      });

      $icon.on("click", function () {
        $sidebar.removeClass("addNav");
      });
    }
  });

  // Report page right side navbar functinality start here ( mobile view)

  rightBar.on("click", function (event) {
    event.stopPropagation();
    $(".right-navbar").addClass("right-navbar-show");
  });

  $(window).click(function () {
    $(".right-navbar").removeClass("right-navbar-show");
  });

  $(".right-navbar").click(function (event) {
    event.stopPropagation();
  });

  

  // active route
  var path = window.location.pathname.split("pages")[1].replace(/^\/|\/$/g, "");
  // console.log(path);

  $("#sidebar ul li a").each(function () {
    // Get the href attribute and normalize it
    var href = $(this)
      .attr("href")
      .replace(/^\/|\/$/g, "");

    // Check if the href matches the current path
    if (href === path || (href === "" && path === "/")) {
      $(this).addClass("nav-active");
    } else {
      $(this).removeClass("nav-active");
    }
  });

  // finance page tab

  $(".tab-item").click(function () {
    $(".tab-item").removeClass("active-tab");
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      $(".tab-item").removeClass("active-tab");
      $(this).addClass("active-tab");
    } else {
      $(".tab-item").removeClass(" active-tab-light-mode");
      $(this).addClass("active-tab-light-mode");
    }
  });

  // input file upload
  $("#file-upload").on("change", function (event) {
    const [file] = event.target.files;

    if (file && (file.name.endsWith(".jpg") || file.name.endsWith(".png"))) {
      const reader = new FileReader();
      $(".custom-file-upload").hide();
      $("#show-filename").append(file?.name).addClass("file-name").show();
      $(".delete-icon").show();
      // Load the image and display it
      reader.onload = function (event) {
        $("#preview-img").attr("src", event.target.result);
        $("#image-preview").show();
      };

      reader.readAsDataURL(file);
    } else {
      alert("Please upload an image with a .jpg or .png extension.");
      $("#file-upload").val("");
      $("#image-preview").hide();
    }
  });

  $(".delete-icon").click(function () {
    const value = $("#file-upload").val("");
    $("#show-filename").remove();
    $("#preview-img").attr("src", "");
    $("#image-preview").hide();
    $(".custom-file-upload").show();
    $(".delete-icon").hide();
  });

  $("#amount-value").on("click", function () {
    $("#amount-field").val("");
  });

  var option = $(".option-group");

  $("#method-field").click(function () {
    option.toggle();
    const icon = $("#method-field-icon i");
    if (icon.hasClass("fa-caret-down")) {
      icon.removeClass("fa-caret-down").addClass("fa-caret-up");
    } else {
      icon.removeClass("fa-caret-up").addClass("fa-caret-down");
    }
  });

  var method = $("#method-field");

  $("#bank").click(function () {
    const content = $("#bank").text();
    method.val(content);
    option.hide();
  });
  $("#crypto").click(function () {
    const content = $("#crypto").text();
    method.val(content);
    option.hide();
  });

  $(".btn-ripple").on("click", function (e) {
    let x_coord = e.clientX;
    let y_coord = e.clientY;

    let btn_top_pos = $(this).offset().top;
    let btn_left_pos = $(this).offset().left;

    let x = x_coord - btn_left_pos;
    let y = y_coord - btn_top_pos;

    // Create the ripple effect (span element)
    const $span = $("<span class='ripple'></span>");
    $span.css({
      top: `${y}px`,
      left: `${x}px`,
    });

    $(this).append($span);

    setTimeout(() => {
      $span.remove();
    }, 1000);
  });
});
