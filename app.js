function startTime(){
    const toDay = new Date()
    let h = toDay.getHours()
    let m = toDay.getMinutes()
    let s = toDay.getSeconds()

    document.getElementById('text').innerText = h + ':' + m + ':' + s ;
    setTimeout(startTime , 1000)
}