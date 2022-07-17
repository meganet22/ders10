function C1() {


    /* 
    Her render süreci yeni bir interval çalışır

    */

    setTimeout( ()=>{
        console.log("Zamanlayıcı çalıştı.");
    }, 4000 )

    return (
        <p>C1 Komponenti</p>
    )
}

export default C1;