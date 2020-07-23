const positif = document.getElementById("positif");
const sembuh = document.getElementById("sembuh");
const meninggal = document.getElementById("meninggal");

const reqApiCorona = async() => {
    try{
        const req = await fetch("https://api.kawalcorona.com/indonesia")
        const res = await req.json();
    
        console.log(`positif : ${res.positif}`);
    }catch(error) {
        console.log("error")
    }
}

reqApiCorona();