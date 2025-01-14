const chickenDialog = document.querySelector("#chickenModal");
const chickenOp = document.querySelector("#chickenOpen");
const chickenCl = document.querySelector("#chickenClose");


// Abrir o diálogo
chickenOp.addEventListener("click", () => {
    chickenDialog.showModal(); {
        
    }
});
chickenCl.addEventListener("click", (e) => {
    chickenDialog.close();
});
// Fechar o diálogo ao clicar fora do conteúdo
chickenDialog.addEventListener("click", (event) => {
    // Verificar se o clique foi fora do conteúdo
    const rect = chickenDialog.getBoundingClientRect();
    const isOutside =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;

    if (isOutside) {
        chickenDialog.close();
        // Forçar reprocessamento para evitar problemas de renderização
        setTimeout(() => {
            chickenDialog.style.display = "none"; // Ocultar para garantir
            chickenDialog.offsetHeight; // Trigger reflow
            chickenDialog.style.display = ""; // Restaurar
        }, 0);
    }
});

const meatDialog = document.querySelector("#meatModal");
const meatOp = document.querySelector("#meatOpen");
const meatCl = document.querySelector("#meatClose");

meatOp.addEventListener("click", () => {
    meatDialog.showModal(); {
        
    }
});
meatCl.addEventListener("click", (e) => {
    meatDialog.close();
});
// Fechar o diálogo ao clicar fora do conteúdo
meatDialog.addEventListener("click", (event) => {
    // Verificar se o clique foi fora do conteúdo
    const rect = meatDialog.getBoundingClientRect();
    const isOutside =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;

    if (isOutside) {
        meatDialog.close();
        // Forçar reprocessamento para evitar problemas de renderização
        setTimeout(() => {
            meatDialog.style.display = "none"; // Ocultar para garantir
            meatDialog.offsetHeight; // Trigger reflow
            meatDialog.style.display = ""; // Restaurar
        }, 0);
    }
});

const omeletDialog = document.querySelector("#omeletModal");
const omeletOp = document.querySelector("#omeletOpen");
const omeletCl = document.querySelector("#omeletClose");

omeletOp.addEventListener("click", () => {
    omeletDialog.showModal(); {
        
    }
});
omeletCl.addEventListener("click", (e) => {
    omeletDialog.close();
});
// Fechar o diálogo ao clicar fora do conteúdo
omeletDialog.addEventListener("click", (event) => {
    // Verificar se o clique foi fora do conteúdo
    const rect = omeletDialog.getBoundingClientRect();
    const isOutside =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;

    if (isOutside) {
        omeletDialog.close();
        // Forçar reprocessamento para evitar problemas de renderização
        setTimeout(() => {
            omeletDialog.style.display = "none"; // Ocultar para garantir
            omeletDialog.offsetHeight; // Trigger reflow
            omeletDialog.style.display = ""; // Restaurar
        }, 0);
    }
});

const othersDialog = document.querySelector("#othersModal");
const othersOp = document.querySelector("#othersOpen");
const othersCl = document.querySelector("#othersClose");

othersOp.addEventListener("click", () => {
    othersDialog.showModal(); {
        
    }
});
othersCl.addEventListener("click", (e) => {
    othersDialog.close();
});
// Fechar o diálogo ao clicar fora do conteúdo
othersDialog.addEventListener("click", (event) => {
    // Verificar se o clique foi fora do conteúdo
    const rect = othersDialog.getBoundingClientRect();
    const isOutside =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;

    if (isOutside) {
        othersDialog.close();
        // Forçar reprocessamento para evitar problemas de renderização
        setTimeout(() => {
            othersDialog.style.display = "none"; // Ocultar para garantir
            othersDialog.offsetHeight; // Trigger reflow
            othersDialog.style.display = ""; // Restaurar
        }, 0);
    }
});


// // chickenCl.addEventListener("click", (e) => {
// //     chickenDialog.close();
// // });
// // // chickenDialog.addEventListener("click", (event) => {
// // //     let rect = chickenDialog.getBoundingClientRect();
// // //     // Verify out area
// // //     if(
// // //         event.clientX < rect.left ||
// // //         event.clientX > rect.right ||
// // //         event.clientY < rect.top ||
// // //         event.clientY > rect.bottom
// // //     ) {
// // //         chickenDialog.close();
// // //         console.log("ABlabla")
// // //     }
// // // });
// // chickenDialog.addEventListener("click", (event) => {
// //     let rect = chickenDialog.getBoundingClientRect();
    
// //     // Verificar se o clique foi fora do conteúdo visível
// //     if (
// //         event.target === chickenDialog && (
// //         event.clientX < rect.left ||
// //         event.clientX > rect.right ||
// //         event.clientY < rect.top ||
// //         event.clientY > rect.bottom)
// //     ) {
// //         chickenDialog.close();
// //     }
// // });
// // Checkbox Limiter
// document.addEventListener("DOMContentLoaded", () => {
//     const checkboxes = document.querySelectorAll("#chicken-form input[type='checkbox']");
    
//     checkboxes.forEach(checkbox => {
//         checkbox.addEventListener("change", () => {
//             if (checkbox.checked) {
//                 checkboxes.forEach(cb => {
//                     if (cb !== checkbox) {
//                         cb.disabled = true;
//                     }
//                 });
//             } else {
//                 checkboxes.forEach(cb => cb.disabled = false);
//             }

//             resetButton.addEventListener("click", () => {
//     checkboxes.forEach(cb => {
//         cb.checked = false;  // Desmarca todas as caixas
//         cb.disabled = false; // Reabilita todas as caixas
//     })
// });
//         });
//     });
// });

// // const beefDialog = document.querySelector("#beefModal");
// // const beefOp = document.querySelector("#beefOpen");
// // const beefCl = document.querySelector("#beefClose");

// // beefOp.addEventListener("click", (e) => {
// //     beefDialog.showModal();
// // });
// // beefCl.addEventListener("click", (e) => {
// //     beefDialog.close();
// // });
// // beefDialog.addEventListener("click", (event) => {
// //     let rect = beefDialog.getBoundingClientRect();
// //     // Verify out area
// //     if(
// //         event.clientX < rect.left ||
// //         event.clientX > rect.right ||
// //         event.clientY < rect.top ||
// //         event.clientY > rect.bottom
// //     ) {
// //         beefDialog.close();
// //     }
// // });

// // Side dishes

// document.addEventListener("DOMContentLoaded", () => {
//     const checkboxes = document.querySelectorAll("#side-dishes-form input[type='checkbox']");
    
//     checkboxes.forEach(checkbox => {
//         checkbox.addEventListener("change", () => {
//             const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;

//             if (checkedCount === 3) {
//                 // Desabilita todas as caixas que não estão marcadas
//                 checkboxes.forEach(cb => {
//                     if (!cb.checked) {
//                         cb.disabled = true;
//                     }
//                 });
//             } else {
//                 // Habilita todas as caixas quando o número de marcadas é menor que 3
//                 checkboxes.forEach(cb => cb.disabled = false);
//             }

//             resetButton.addEventListener("click", () => {
//                 checkboxes.forEach(cb => {
//                     cb.checked = false;  // Desmarca todas as caixas
//                     cb.disabled = false; // Reabilita todas as caixas
//                 })
//             });
//         });
//     });
// });
//     // Evento para o botão de reset

// document.addEventListener("DOMContentLoaded", () => {
//     const checkboxes = document.querySelectorAll("#sideDishes input[type='checkbox']");

//     resetButton.addEventListener("click", () => {
//         checkboxes.forEach(cb => {
//             cb.checked = false;  // Desmarca todas as caixas
//             cb.disabled = false; // Reabilita todas as caixas
//         })
//     });
// });