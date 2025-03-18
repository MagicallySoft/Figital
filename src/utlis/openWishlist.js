// export const openWistlistModal = () => {
//   const bootstrap = require("bootstrap"); // dynamically import bootstrap
//   const modalElements = document.querySelectorAll(".modal.show");
//   modalElements.forEach((modal) => {
//     const modalInstance = bootstrap.Modal.getInstance(modal);
//     if (modalInstance) {
//       modalInstance.hide();
//     }
//   });

//   // Close any open offcanvas
//   const offcanvasElements = document.querySelectorAll(".offcanvas.show");
//   offcanvasElements.forEach((offcanvas) => {
//     const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
//     if (offcanvasInstance) {
//       offcanvasInstance.hide();
//     }
//   });
//   var myModal = new bootstrap.Modal(document.getElementById("wishlist"), {
//     keyboard: false,
//   });

//   myModal.show();
//   document
//     .getElementById("wishlist")
//     .addEventListener("hidden.bs.modal", () => {
//       myModal.hide();
//     });
// };


export const openWistlistModal = async () => {
  try {
    // Dynamically import Bootstrap's JS module
    const bootstrap = await import("bootstrap");
    
    // Hide any currently open modals
    document.querySelectorAll(".modal.show").forEach((modalEl) => {
      const modalInstance = bootstrap.Modal.getInstance(modalEl);
      if (modalInstance) {
        modalInstance.hide();
      }
    });

    // Hide any open offcanvas components
    document.querySelectorAll(".offcanvas.show").forEach((offcanvasEl) => {
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasEl);
      if (offcanvasInstance) {
        offcanvasInstance.hide();
      }
    });

    // Get the wishlist modal element and show it
    const wishlistModalEl = document.getElementById("wishlist");
    if (wishlistModalEl) {
      const myModal = new bootstrap.Modal(wishlistModalEl, { keyboard: false });
      myModal.show();

      // Optionally add an event listener to clean up after hiding
      wishlistModalEl.addEventListener(
        "hidden.bs.modal",
        () => {
          // Cleanup code (if any) goes here
        },
        { once: true }
      );
    }
  } catch (error) {
    console.error("Error loading Bootstrap in openWishlistModal:", error);
  }
};
