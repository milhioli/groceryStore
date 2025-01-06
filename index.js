const chikenDialog = document.querySelector("#chikenModal");
const chikenOp = document.querySelector("#chikenOpen");
const chikenCl = document.querySelector("#chikenClose");


chikenOp.addEventListener("click", (e) => {
    chikenDialog.showModal();
});
chikenCl.addEventListener("click", (e) => {
    chikenDialog.close();
});
chikenDialog.addEventListener("click", (event) => {
    let rect = chikenDialog.getBoundingClientRect();
    // Verify out area
    if(
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
    ) {
        chikenDialog.close();
    }
});
// Checkbox Limiter
document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll("#chikenForm input[type='checkbox']");
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                checkboxes.forEach(cb => {
                    if (cb !== checkbox) {
                        cb.disabled = true;
                    }
                });
            } else {
                checkboxes.forEach(cb => cb.disabled = false);
            }

            resetButton.addEventListener("click", () => {
    checkboxes.forEach(cb => {
        cb.checked = false;  // Desmarca todas as caixas
        cb.disabled = false; // Reabilita todas as caixas
    })
});
        });
    });
});

const beefDialog = document.querySelector("#beefModal");
const beefOp = document.querySelector("#beefOpen");
const beefCl = document.querySelector("#beefClose");

beefOp.addEventListener("click", (e) => {
    beefDialog.showModal();
});
beefCl.addEventListener("click", (e) => {
    beefDialog.close();
});
beefDialog.addEventListener("click", (event) => {
    let rect = beefDialog.getBoundingClientRect();
    // Verify out area
    if(
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
    ) {
        beefDialog.close();
    }
});

// Side dishes

document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll("#sideDishes input[type='checkbox']");
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;

            if (checkedCount === 3) {
                // Desabilita todas as caixas que não estão marcadas
                checkboxes.forEach(cb => {
                    if (!cb.checked) {
                        cb.disabled = true;
                    }
                });
            } else {
                // Habilita todas as caixas quando o número de marcadas é menor que 3
                checkboxes.forEach(cb => cb.disabled = false);
            }

            resetButton.addEventListener("click", () => {
                checkboxes.forEach(cb => {
                    cb.checked = false;  // Desmarca todas as caixas
                    cb.disabled = false; // Reabilita todas as caixas
                })
            });
        });
    });
});
    // Evento para o botão de reset

