fetch(`https://catfact.ninja/fact`)
.then(res => res.json())
.then(res => {
      console.log(res)
    const container = document.getElementById('container')

    const h1 = document.createElement('h1')
    h1.innerText= res.fact
    
    container.appendChild(h1)
})