// export const openCartModal = () => {
//   // Dynamically import bootstrap
//   import("bootstrap")
//     .then((bootstrap) => {
//       // Hide all currently open modals
//       const modalElements = document.querySelectorAll(".modal.show");
//       modalElements.forEach((modal) => {
//         const modalInstance = bootstrap.Modal.getInstance(modal);
//         if (modalInstance) {
//           modalInstance.hide();
//         }
//       });

//       // Close any open offcanvas components
//       const offcanvasElements = document.querySelectorAll(".offcanvas.show");
//       offcanvasElements.forEach((offcanvas) => {
//         const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
//         if (offcanvasInstance) {
//           offcanvasInstance.hide();
//         }
//       });

//       // Show the shopping cart modal
//       const shoppingCartModal = document.getElementById("shoppingCart");
//       if (shoppingCartModal) {
//         const myModal = new bootstrap.Modal(shoppingCartModal, {
//           keyboard: false,
//         });
//         myModal.show();

//         shoppingCartModal.addEventListener("hidden.bs.modal", () => {
//           myModal.hide();
//         });
//       }
//     })
//     .catch((error) => {
//       console.error("Error loading Bootstrap:", error);
//     });
// };

export const openCartModal = () => {
  // Dynamically import bootstrap
  import("bootstrap")
    .then((bootstrap) => {
      // Hide all currently open modals
      const modalElements = document.querySelectorAll(".modal.show");
      modalElements.forEach((modal) => {
        const modalInstance = bootstrap.Modal.getInstance(modal);
        if (modalInstance) {
          modalInstance.hide();
        }
      });

      // Close any open offcanvas components
      const offcanvasElements = document.querySelectorAll(".offcanvas.show");
      offcanvasElements.forEach((offcanvas) => {
        const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
        if (offcanvasInstance) {
          offcanvasInstance.hide();
        }
      });

      // Show the shopping cart modal
      const shoppingCartModal = document.getElementById("shoppingCart");
      if (shoppingCartModal) {
        // Remove aria-hidden and inert so that focused elements inside are accessible
        shoppingCartModal.removeAttribute("aria-hidden");
        shoppingCartModal.removeAttribute("inert");

        const myModal = new bootstrap.Modal(shoppingCartModal, {
          keyboard: false,
        });
        myModal.show();

        shoppingCartModal.addEventListener("hidden.bs.modal", () => {
          myModal.hide();
          // Optionally reapply inert when the modal is hidden
          shoppingCartModal.setAttribute("inert", "true");
        });
      }
    })
    .catch((error) => {
      console.error("Error loading Bootstrap:", error);
    });
};
