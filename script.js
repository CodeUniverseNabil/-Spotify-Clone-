console.log("lets run write some js code")
async function main(){
    let a = await fetch("http://127.0.0.1:3000/audio/")
    let response =await a.text()
    console.log(response)
}
main()