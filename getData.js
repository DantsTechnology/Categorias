const selectCategories = document.querySelector('.categories_container')
const subcategories = document.querySelector('.subcategories')
const subCategoriesContainer = document.querySelector('.subCategories_Container')
const subSubCategoriesContainer = document.querySelector('.subSubCategories_Container')
const categoriesFetch = document.querySelector('.categoriesFetch')
const backCheck = document.querySelector('.container-back-check')


fetch('data.json')
   .then(res => res.json())
   .then(data => {
      for (let i = 0; i < data.length; i++) {
         const categoriesItem = document.createElement('DIV')
         categoriesItem.classList.add('categories_item')
         categoriesItem.innerHTML = `
            <div class="item_icon_text">
               <i class="${data[i][2].icon}"></i>
               <p class="item_text">${data[i][0]}</p>
            </div>
            <i class="icon fa-solid fa-angle-down top ${data[i][0].toLowerCase().replace(/ /g, '')}"></i>`
         selectCategories.appendChild(categoriesItem)

         let classContainer = data[i][0].toUpperCase().replace(/ /g, '')
         const allCartegoriesConteiner = document.createElement('DIV')
         allCartegoriesConteiner.setAttribute('class', `classContainer ${classContainer}`)
         subcategories.appendChild(allCartegoriesConteiner)


         const allCartegories = document.createElement('P')
         allCartegories.classList.add('allCartegories')
         allCartegories.textContent = data[i][1]
         allCartegoriesConteiner.appendChild(allCartegories)

         let dataFilter = data[i][3]

         let newArray = dataFilter.filter(data => data.length != 1)
         for (let i = 0; i < newArray.length; i++) {

            let newclassContainer = newArray[i][0].toUpperCase().replace(/ /g, '')
            const allNewCategories = document.createElement('DIV')
            allNewCategories.setAttribute('class', `newclassContainer ${newclassContainer}`)
            subCategoriesContainer.appendChild(allNewCategories)

            const allSubCartegories = document.createElement('P')
            allSubCartegories.classList.add('allSubCartegories')
            allSubCartegories.textContent = newArray[i][1]
            allNewCategories.appendChild(allSubCartegories)

            const subCategory = newArray[i][2]

            let diferent = subCategory.filter(data => data.length != 1)
            for (let i = 0; i < diferent.length; i++) {
               let subSubClassContainer = diferent[i][0].toUpperCase().replace(/ /g, '')
               const allSubSubCategories = document.createElement('DIV')
               allSubSubCategories.setAttribute('class', `subSubClassContainer ${subSubClassContainer}`)
               subSubCategoriesContainer.appendChild(allSubSubCategories)

               const allSubSubCartegories = document.createElement('P')
               allSubSubCartegories.classList.add('allSubSubCartegories')
               allSubSubCartegories.textContent = diferent[i][1]
               allSubSubCategories.appendChild(allSubSubCartegories)

               let newDiferent = diferent[i][2]
               newDiferent.forEach(data => {
                  const fetchCategories = document.createElement('p')
                  fetchCategories.classList.add('fetchLastCategories')
                  fetchCategories.textContent = data
                  allSubSubCategories.appendChild(fetchCategories)
               })




               const fetchSubCategories = document.createElement('DIV')
               fetchSubCategories.classList.add('fetchSubCategories')
               fetchSubCategories.innerHTML = `
                     <p class="item_text">${diferent[i][0]}</p>
                     <i class="icon fa-solid fa-angle-down top ${diferent[i][0].toLowerCase().replace(/ /g, '')}"></i>`
               allNewCategories.appendChild(fetchSubCategories)
            }

            let equal = subCategory.filter(data => data.length == 1)
            for (let i = 0; i < equal.length; i++) {
               const fetchCategories = document.createElement('p')
               fetchCategories.classList.add('fetchCategories')
               fetchCategories.textContent = equal[i][0]
               allNewCategories.appendChild(fetchCategories)
            }

            const fetchSubCategories = document.createElement('DIV')
            fetchSubCategories.classList.add('fetchSubCategories')
            fetchSubCategories.innerHTML = `
                  <p class="item_text">${newArray[i][0]}</p>
                  <i class="icon fa-solid fa-angle-down top ${newArray[i][0].replace(/ /g, '')}"></i>`
            allCartegoriesConteiner.appendChild(fetchSubCategories)
         }

         let array = dataFilter.filter(data => data.length == 1)
         for (let i = 0; i < array.length; i++) {
            const fetchCategories = document.createElement('p')
            fetchCategories.classList.add('fetchCategories')
            fetchCategories.textContent = array[i][0]
            allCartegoriesConteiner.appendChild(fetchCategories)
         }
      }
   })



const allContainer = document.querySelector('.allContainer')
const body = document.querySelector('body')

listeners()
function listeners() {
   allContainer.addEventListener('click', backAllCategories)
   body.addEventListener('click', click)
}


function backCategories(text, clas) {
   backCheck.innerHTML = `
   <i class="icon fa-solid fa-angle-down letf"></i>
   <p class="back-${clas}">${text}</p>`
}

function click(e) {
   fetch(('data.json'))
      .then(res => res.json())
      .then(data => {
         data.forEach(data => {
            const dataVisible = data[0].toLowerCase().replace(/ /g, '')
            if (e.target.classList.contains(dataVisible)) {
               document.querySelector(`.${dataVisible.toUpperCase()}`).style.visibility = "visible"
               categoriesFetch.style.visibility = "hidden"
               backCategories("Todas las categorias", "categories")
            }
            const subDataVisible = data[3]

            let filter = subDataVisible.filter(data => data.length != 1)
            for (let i = 0; i < filter.length; i++) {
               var subClass = subDataVisible[i][0].replace(/ /g, '')

                  let arrayClass = []
               if (e.target.classList.contains(subClass)) {
                  document.querySelector(`.${subClass.toUpperCase()}`).style.visibility = "visible"

                  document.querySelector(`.${dataVisible.toUpperCase()}`).style.visibility = "hidden"
                  backCategories(data[1], "subCategories")

                  return parent = e.target.parentElement.parentElement.className.split(" ", 2)
               }

               if (e.target.classList.contains('back-subCategories')) {
                  let newArrayClass = [...arrayClass, parent]
                  document.querySelector(`.${newArrayClass[0][1]}`).style.visibility = "visible"

                  let newclassContainer = document.querySelectorAll('.newclassContainer')
                  newclassContainer.forEach(classC => classC.style.visibility = "hidden")

                  backCategories("Todas las categorias", "categories")
               }

               
               let newFilter = filter[i][2]
               let subFilter = newFilter.filter(data => data.length != 1)
               let filterBack = filter[i][1]
               for (let i = 0; i < subFilter.length; i++) {
                  let subSubClass = newFilter[i][0].replace(/ /g, '').toLowerCase()

                  let contentClass = []
                  if (e.target.classList.contains(subSubClass)) {
                     document.querySelector(`.${subSubClass.toUpperCase()}`).style.visibility = "visible"

                     document.querySelector(`.${subClass.toUpperCase()}`).style.visibility = "hidden"
                     backCategories(filterBack, "subSubCategories")

                     return newParent = e.target.parentElement.parentElement.className.split(" ", 2)
                  }

                  if (e.target.classList.contains('back-subSubCategories')) {
                     let changeArray = [...contentClass, newParent]
                     document.querySelector(`.${changeArray[0][1]}`).style.visibility = "visible"

                     let subSubClassContainer = document.querySelectorAll('.subSubClassContainer')
                     subSubClassContainer.forEach(classC => classC.style.visibility = "hidden")

                     backCategories("Categoria anterior", "subCategories")
                  }
               }
            }
         });
      })
}
function backAllCategories(e) {
   if (e.target.classList.contains('back-categories')) {
      let classContainer = document.querySelectorAll('.classContainer')
      classContainer.forEach(classC => classC.style.visibility = "hidden")

      categoriesFetch.style.visibility = "visible"
      backCheck.innerHTML = `
         <p class="back-categories">Todas las categorias</p>
         <i class="icon fa-solid fa-check"></i>`
   }
}





/* Busqueda */
const input = document.querySelector(".input_search");
const serchContainer = document.querySelector(".serch_container");
const xmasrk = document.querySelector('.fa-circle-xmark')

function xmasrkSH(scale, VH) {
   xmasrk.style.transform = `scale(${scale})`
   xmasrk.style.visibility = VH
}

function visibilityCategories() {
   document.querySelectorAll('.classContainer').forEach(separate => separate.style.visibility = "hidden")
   document.querySelectorAll('.newclassContainer').forEach(separate => separate.style.visibility = "hidden")
   document.querySelectorAll('.subSubClassContainer').forEach(separate => separate.style.visibility = "hidden")

   backCheck.innerHTML = `
   <p class="back-categories">Todas las categorias</p>
   <i class="icon fa-solid fa-check"></i>`
}

xmasrk.addEventListener('click', () => {
   input.value = ""
   serchContainer.innerHTML = ``
   xmasrkSH(0, "hidden")
   backCheck.style.visibility = "visible"
   categoriesFetch.style.visibility = "visible"

   visibilityCategories()
})

input.addEventListener("keyup", (e) => {
   serchContainer.innerHTML = ``
   let teclas = e.target.value.toLowerCase()
   e.preventDefault()

   fetch('searchData.json')
      .then(res => res.json())
      .then(data => {
         if (e.target.value != 0) {
            categoriesFetch.style.visibility = "hidden"
            backCheck.style.visibility = "hidden"
            xmasrkSH(1, "visible")
            visibilityCategories()

            let filter = data.filter(data => {
               let newData = data.toLowerCase()
               return newData.includes(teclas)
            })
            if (filter == teclas) console.log("No encontamos nda estupido")
            filter.forEach(filter => {
               const serchItem = document.createElement('P')
               serchItem.classList.add('serch_iten')
               serchItem.textContent = filter

               serchContainer.appendChild(serchItem)
            })
            console.log(input.value)
            if (input.value != 0 && serchContainer.innerHTML == ``) {
               console.log("No hay resultados")
               
               const serchItem = document.createElement('P')
               serchItem.setAttribute('class', "serch_iten category_not_exist")
               serchItem.textContent = "No tenemos una categoría con ese nombre"

               serchContainer.appendChild(serchItem)
            }
         } else {
            xmasrkSH(0, "hidden")
            categoriesFetch.style.visibility = "visible"
            backCheck.style.visibility = "visible"
         }
      })
})