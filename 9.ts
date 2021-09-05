const nombres = ["Juan", "Pedro", "Luis"];

nombres.forEach(function (s){
   console.log(s.toUpperCase());
});

nombres.forEach((s) => {
    console.log(s.toUpperCase());
});