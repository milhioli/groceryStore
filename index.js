var splide = new Splide( '#slider1', {
    type   : 'loop',
    padding: '1.5rem',
    perPage: 1,
    arrows: false,
    autoplay: true,
    gap : 10,
    pauseOnHover : true,
    pauseOnFocus : true,
    pagination: false,
    mediaQuery: 'min',
    breakpoints: {
		375: {
			perPage: 1,
            padding: '1rem',
        },
        575: {
            perPage: 2,
        },
        720:{
            perPage: 3,
        },
        1024: {
            perPage:4,
        }
    }
  } );
  
  splide.mount();

  new Splide( '#slider2', {
    type   : 'loop',
    padding: '1rem',
    perPage: 1,
    arrows: false,
    autoplay:true,
    gap : 10,
    pauseOnHover :true,
    pauseOnFocus : true,
    direction: 'rtl',
    mediaQuery: 'min',
    mediaQuery: 'min',
    pagination: false,
    breakpoints: {
		375: {
			perPage: 1,
        },
        575: {
            perPage: 2,
        },
        720:{
            perPage: 3,
        },
        1024: {
            perPage:4,
        }
    }
  }
   ).mount();

   new Splide( '#slider3', {
    type   : 'loop',
    padding: '1rem',
    perPage: 1,
    arrows: false,
    autoplay:true,
    gap : 10,
    pauseOnHover :true,
    pauseOnFocus : true,
    mediaQuery: 'min',
    mediaQuery: 'min',
    pagination: false,
    breakpoints: {
		375: {
			perPage: 1,
        },
        575: {
            perPage: 2,
        },
        720:{
            perPage: 3,
        },
        1024: {
            perPage:4,
        }
    }
  }
   ).mount();


  const chickenDialog = document.querySelector("#chickenModal");
  const chickenOp = document.querySelector("#chickenOpen");
  const chickenCl = document.querySelector("#chickenClose");
  const normalCheckbox = document.getElementById('checkbox-normal');
    const kidsCheckbox = document.getElementById('checkbox-kids');
  
  // Abrir o diálogo
  chickenOp.addEventListener("click", () => {
      chickenDialog.showModal();
  });
  
  // Fechar o diálogo ao clicar no botão de fechamento
chickenCl.addEventListener("click", () => {
    // Acionar todos os removeButtons
    const removeButtons = document.querySelectorAll('.removeButton'); // Seleciona todos os botões de remoção
    removeButtons.forEach(button => {
        button.click(); // Simula um clique em cada botão de remoção
    });

    // Resetar os checkboxes
    const chickenCheckboxes = document.querySelectorAll('dialog input[type="checkbox"]');
    chickenCheckboxes.forEach(checkbox => {
        checkbox.checked = false; // Desmarcar todos os checkboxes
        checkbox.disabled = false; // Habilitar todos os checkboxes
    });

    // Resetar visibilidade e interatividade
    toggleVisibility();

    // Zerar o total
    totalElement.textContent = `R$ 0,00`; // Atualiza o total para zero

    // Selecionar a opção "normal" como padrão
    normalCheckbox.checked = true; // Marca o checkbox "normal"
    kidsCheckbox.checked = false; // Desmarca o checkbox "kids"
    updateVisibility(); // Atualiza a visibilidade com base na seleção

    // Fechar o diálogo
    chickenDialog.close();

    // Forçar reprocessamento do HTML para evitar problemas de renderização
    setTimeout(() => {
        chickenDialog.style.display = "none"; // Ocultar
        chickenDialog.offsetHeight; // Trigger reflow
        chickenDialog.style.display = ""; // Restaurar
    }, 0);
});
  
  // Fechar o diálogo ao clicar fora do conteúdo
  chickenDialog.addEventListener("click", (event) => {
      const rect = chickenDialog.getBoundingClientRect();
      const isOutside =
          event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom;
  
      if (isOutside) {
          chickenDialog.close();
      }
  });

  // Selecionar todos os botões e as seções correspondentes
const menuButtons = document.querySelectorAll('.btn-href');
const sections = document.querySelectorAll('.content');

function highlightButtonOnScroll() {
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const button = document.querySelector(`a[href="#${section.id}"]`);

        // Calcular a metade da altura da seção
        const sectionMiddle = rect.top + rect.height / 2;

        // Verificar se a metade da seção está visível no viewport
        if (sectionMiddle >= 0 && sectionMiddle <= window.innerHeight) {
            menuButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        }
    });
}

// Função para ativar o botão ao clicar
menuButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Evitar o comportamento padrão de rolagem
        const targetId = button.getAttribute('href').slice(1); // Pegar ID do destino
        const targetSection = document.getElementById(targetId);

        // Rolar suavemente até a seção
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        // Atualizar o botão ativo
        menuButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

let isScrolling;
window.addEventListener('scroll', () => {
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
        highlightButtonOnScroll();
    }, 100); // Ajustar o tempo de debounce conforme necessário
});


// Escutar o evento de rolagem
window.addEventListener('scroll', highlightButtonOnScroll);


// Escutar o evento de rolagem
window.addEventListener('scroll', highlightButtonOnScroll);


// Escutar o evento de rolagem
window.addEventListener('scroll', highlightButtonOnScroll);


// Escutar o evento de rolagem
window.addEventListener('scroll', highlightButtonOnScroll);

//checkbox


    function updateVisibility() {
        const kidsElements = document.querySelectorAll('[for="kids"]');
        const normalElements = document.querySelectorAll('[for="normal"]');

        if (normalCheckbox.checked) {
            kidsElements.forEach(el => el.style.display = 'none');
            normalElements.forEach(el => el.style.display = 'flex');
        } else if (kidsCheckbox.checked) {
            normalElements.forEach(el => el.style.display = 'none');
            kidsElements.forEach(el => el.style.display = 'flex');
        } else {
            normalCheckbox.checked = true;
            updateVisibility();
        }
    }

    normalCheckbox.addEventListener('change', function () {
        if (normalCheckbox.checked) {
            kidsCheckbox.checked = false;
        }
        updateVisibility();
    });

    kidsCheckbox.addEventListener('change', function () {
        if (kidsCheckbox.checked) {
            normalCheckbox.checked = false;
        }
        updateVisibility();
    });

    // Ensure at least one checkbox is selected on page load
    updateVisibility();

    // Obtém os checkboxes e o elemento de total
const checkboxes = document.querySelectorAll('.type input[type="checkbox"]');
const totalElement = document.getElementById('total');

function updateTotal() {
    let total = 0;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            // Encontra o elemento <p class="price"> relacionado ao checkbox
            const priceElement = checkbox.closest('.type').querySelector('.price');
            if (priceElement) {
                // Converte o preço para número e soma ao total
                const price = parseFloat(priceElement.textContent.replace('R$', '').replace(',', '.'));
                if (!isNaN(price)) {
                    total += price;
                }
            }
        }
    });

    // Atualiza o elemento de total com o novo valor
    totalElement.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

// Adiciona o listener de mudança a todos os checkboxes
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateTotal);
});

// Inicializa o total na carga da página
updateTotal();


document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll("#choose input[type='checkbox']");
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;

            if (checkedCount === 1) {
                // Desabilita todas as caixas que não estão marcadas
                checkboxes.forEach(cb => {
                    if (!cb.checked) {
                        cb.disabled = true;
                    }
                });
            } else {
                // Habilita todas as caixas quando o número de marcadas é menor que 1
                checkboxes.forEach(cb => cb.disabled = false);
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll("#side-dishes-form input[type='checkbox']");
    
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
        });
    });
});

// Fechar o diálogo ao clicar no botão de fechamento
chickenCl.addEventListener("click", () => {
    chickenDialog.close();
    
    // Forçar reprocessamento do HTML para evitar problemas de renderização
    setTimeout(() => {
        chickenDialog.style.display = "none"; // Ocultar
        chickenDialog.offsetHeight; // Trigger reflow
        chickenDialog.style.display = ""; // Restaurar
    }, 0);

    // Resetar os elementos do diálogo, se necessário
    resetDialogElements();

});

// Função para resetar os elementos dentro do diálogo
function resetDialogElements() {
    // Exemplo de como resetar campos de input dentro do diálogo
    const checkboxes = chickenDialog.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);

    const inputs = chickenDialog.querySelectorAll('input[type="text"], input[type="number"]');
    inputs.forEach(input => input.value = '');

    // Resetar qualquer outro elemento necessário, como seletores, etc.
}
s







// const meatDialog = document.querySelector("#meatModal");
// const meatOp = document.querySelector("#meatOpen");
// const meatCl = document.querySelector("#meatClose");

// meatOp.addEventListener("click", () => {
//     meatDialog.showModal(); {
        
//     }
// });
// meatCl.addEventListener("click", (e) => {
//     meatDialog.close();
// });
// // Fechar o diálogo ao clicar fora do conteúdo
// meatDialog.addEventListener("click", (event) => {
//     // Verificar se o clique foi fora do conteúdo
//     const rect = meatDialog.getBoundingClientRect();
//     const isOutside =
//         event.clientX < rect.left ||
//         event.clientX > rect.right ||
//         event.clientY < rect.top ||
//         event.clientY > rect.bottom;

//     if (isOutside) {
//         meatDialog.close();
//         // Forçar reprocessamento para evitar problemas de renderização
//         setTimeout(() => {
//             meatDialog.style.display = "none"; // Ocultar para garantir
//             meatDialog.offsetHeight; // Trigger reflow
//             meatDialog.style.display = ""; // Restaurar
//         }, 0);
//     }
// });

// const omeletDialog = document.querySelector("#omeletModal");
// const omeletOp = document.querySelector("#omeletOpen");
// const omeletCl = document.querySelector("#omeletClose");

// omeletOp.addEventListener("click", () => {
//     omeletDialog.showModal(); {
        
//     }
// });
// omeletCl.addEventListener("click", (e) => {
//     omeletDialog.close();
// });
// // Fechar o diálogo ao clicar fora do conteúdo
// omeletDialog.addEventListener("click", (event) => {
//     // Verificar se o clique foi fora do conteúdo
//     const rect = omeletDialog.getBoundingClientRect();
//     const isOutside =
//         event.clientX < rect.left ||
//         event.clientX > rect.right ||
//         event.clientY < rect.top ||
//         event.clientY > rect.bottom;

//     if (isOutside) {
//         omeletDialog.close();
//         // Forçar reprocessamento para evitar problemas de renderização
//         setTimeout(() => {
//             omeletDialog.style.display = "none"; // Ocultar para garantir
//             omeletDialog.offsetHeight; // Trigger reflow
//             omeletDialog.style.display = ""; // Restaurar
//         }, 0);
//     }
// });

// const othersDialog = document.querySelector("#othersModal");
// const othersOp = document.querySelector("#othersOpen");
// const othersCl = document.querySelector("#othersClose");

// othersOp.addEventListener("click", () => {
//     othersDialog.showModal(); {
        
//     }
// });
// othersCl.addEventListener("click", (e) => {
//     othersDialog.close();
// });
// // Fechar o diálogo ao clicar fora do conteúdo
// othersDialog.addEventListener("click", (event) => {
//     // Verificar se o clique foi fora do conteúdo
//     const rect = othersDialog.getBoundingClientRect();
//     const isOutside =
//         event.clientX < rect.left ||
//         event.clientX > rect.right ||
//         event.clientY < rect.top ||
//         event.clientY > rect.bottom;

//     if (isOutside) {
//         othersDialog.close();
//         // Forçar reprocessamento para evitar problemas de renderização
//         setTimeout(() => {
//             othersDialog.style.display = "none"; // Ocultar para garantir
//             othersDialog.offsetHeight; // Trigger reflow
//             othersDialog.style.display = ""; // Restaurar
//         }, 0);
//     }
// });


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