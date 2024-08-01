const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".show-all")
const buttonMapAll = document.querySelector(".map-all")
const buttonSumAll = document.querySelector(".sum-all")
const filterAll = document.querySelector(".filter-all")

function formatCurrency(value){
        const newvalue = value.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
        })
        return newvalue
}

function showAll(productArray) {
        let myLi = ''
        productArray.forEach(product => {
                myLi += `
                
                <li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class="item-price">R$ ${formatCurrency(product.price)}</p>
                </li> 
                `
        })

        list.innerHTML = myLi
}


function mapAllItems() {
        const newPrices = menuOptions.map((product) => ({
                ...product,
                price: product.price * 0.9
        }))
        showAll(newPrices)
}

function sumAllItems() {
        const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
        list.innerHTML = `
                
        <li>
            <p>O valor total dos itens é R$ ${formatCurrency(totalValue)}</p>
        </li>
        `

}


function filterAllItems() {
        const filterJustVegan = menuOptions.filter((product) => product.vegan)
        showAll(filterJustVegan)
}


filterAll.addEventListener("click", filterAllItems)
buttonSumAll.addEventListener("click", sumAllItems)
buttonMapAll.addEventListener("click", mapAllItems)
buttonShowAll.addEventListener("click", () => showAll(menuOptions))
