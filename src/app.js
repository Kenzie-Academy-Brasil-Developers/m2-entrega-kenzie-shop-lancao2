const vitrine = document.querySelector("main")
class app {

    static requisicao(){
  
        fetch('https://m2-kenzie-shop.herokuapp.com/products')
        .then(response => response.json())
        .then((data)=>{
            console.log(data)
            this.criarVitrine(data)
            
            
        })
        
  
    }
    static criarVitrine(produtos){
        produtos.products.forEach(element => {
            const card = document.createElement("section")
                const imgProduto = document.createElement("img")
                imgProduto.src = `https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint3/img/consumindo-api-produtos/${element.id}/Image.png`
                card.appendChild(imgProduto)
                const Estrelas = document.createElement("ul")
                    function criarEstrelas(){
                        for(let i = 0; i<5;i++){
                            const estrela = document.createElement("li")
                            if(i <= element.reviews){
                                estrela.innerHTML = `
                                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.00004 8.31066L9.41996 10.3359L8.51241 6.51887L11.5339 3.95062L7.55505 3.61398L6.00004 0.0195312L4.44503 3.61398L0.466187 3.95062L3.48214 6.51887L2.58012 10.3359L6.00004 8.31066Z" fill="#FB8200"/>
                                </svg>
                                `
                            }else{
                                estrela.innerHTML = `
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 8.5L4.43528 9.59407L5.12969 7.10093L2.58012 5.41747L5.21139 5.20194L6.00004 2.85442L6.94633 5.20194L9.37016 5.41747L7.53292 7.10093L8.08077 9.59407L6 8.5ZM11.5339 4.68351L7.55505 4.32817L6.00004 0.466125L4.44503 4.32817L0.466187 4.68351L3.48214 7.43878L2.58012 11.5338L6.00004 9.36107L9.41996 11.5338L8.51241 7.43878L11.5339 4.68351Z" fill="#FB8200"/>
                                </svg>
                                `
                            }
                            Estrelas.appendChild(estrela)
                        }
                    }
                    criarEstrelas()
                card.appendChild(Estrelas)
                const produtDescri = document.createElement("p")
                produtDescri.innerText = element.productName
                card.appendChild(produtDescri)
                if(element.promotionStatus == true){
                    const valor = document.createElement("span")
                    valor.className = "riscado"
                    valor.innerText = `R$ ${element.price.productPrice}`
                    const valorPromocinal = document.createElement("span")
                    valorPromocinal.innerText = `R$ ${element.price.productPromotionPrice}`
                    card.appendChild(valor)
                    card.appendChild(valorPromocinal)
                }else{
                    const valor = document.createElement("span")
                    valor.innerText = `R$ ${element.price.productPrice}`
                    card.appendChild(valor)
                }
                const button = document.createElement("button")
                button.innerHTML = "Comprar"
                card.appendChild(button)
            vitrine.appendChild(card)
            
        });
        
    }
} 
app.requisicao()
