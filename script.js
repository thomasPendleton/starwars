fetch('https://swapi.dev/api/planets')
    .then(res => res.json())
    .then(planets => {
       console.log(planets.results)
    }) 
    




