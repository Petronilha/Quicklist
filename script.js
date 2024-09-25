
// Crianção de constantes 
const form = document.querySelector("form")
const input = document.getElementById("input-new-item")
const fieldset = document.querySelector(".itens")
const fieldsetAlert = document.querySelector(".alert")
const deleteAlert = document.querySelector(".notice a")

const list = []
let i = 0


input.addEventListener("input", () => {
  const hasCharacterRegex = /\d+/g
  input.value = input.value.replace(hasCharacterRegex, "")
  })

form.onsubmit = (event) => {
  event.preventDefault()
  createElement(fieldset)
  addItens(input.value)
  
  const trash = document.querySelector(".list-itens:nth-child("+i+") img")

  // clicar no icone de lixo e deletar da list
  trash.addEventListener("click", (env) => {
    fieldsetAlert.classList.remove("none")
    
    const p = document.querySelector(".list-itens p")

    // Deletando do array pelo índice
    removeItens(env.target.id)
  })
}


deleteAlert.addEventListener("click", () => {
  fieldsetAlert.classList.add("none")
})

// Funções
// Adiciona o item digitado dentro da tag
function addItens(input) {
  try {
    ++i
    const description = document.querySelector(".list-itens:nth-child("+ i + ") p")
    const div = document.querySelector(".list-itens:nth-child("+ i + ")")
    const img = document.querySelector(".list-itens:nth-child("+ i + ") img")
    div.id = i
    img.id = i
    list.push(input)
    description.textContent = list[i - 1]
  } catch(err) {
      console.log(err)
    } 
}

// Cria toda a estrutura de tags para receber e mostrar o valor que o usuário digitou
function createElement(fieldset) {
  // Criando tags
  const newDiv = document.createElement("div")
  const newSection = document.createElement("section")
  const newLabel = document.createElement("label")
  const newLabelDiv = document.createElement("div")
  const newInput = document.createElement("input")
  const newP = document.createElement("p")
  const newA = document.createElement("a")
  const newImg = document.createElement("img")

 // Incluindo classes e atributos
  newDiv.classList.add("list-itens")
  newSection.classList.add("each-itens")
  newLabelDiv.classList.add("checkbox-image")
  newInput.setAttribute("name", "check")
  newInput.setAttribute("type", "checkbox")
  newImg.setAttribute("src", "assets/icons/trash.svg")
  newA.setAttribute("href", "#")

  // incluindo filhos
  fieldset.appendChild(newDiv)
  newDiv.appendChild(newSection)
  newSection.appendChild(newLabel)
  newSection.appendChild(newA)
  newLabel.appendChild(newLabelDiv)
  newLabel.appendChild(newInput)
  newLabel.appendChild(newP)
  newA.appendChild(newImg)

}

// Remove o item da lista e da tela
function removeItens(value) {
  // criando variavel capturando tag div após o fieldset
  const div = document.getElementById(value)

  // Removendo item da lista
  list.splice(value - 1, 1)

  // Removendo div do html
  fieldset.removeChild(div)
}