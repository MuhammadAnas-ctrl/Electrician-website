window.addEventListener("load" , ()=>{
    const loader = document.querySelector(".loader");

    loader.classlist.add("loader-hidden");

    loader.add("transitioned" , ()=>{
        document.body.removeChild("loader");
    })
})