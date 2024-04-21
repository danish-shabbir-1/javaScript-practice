// 1. Promises : promise default pending me hota ha agar fulfiled ho jae to then wala code run ho jata ha or agar 
//    reject hojae to catch wala code run hota ha 






// 1. PROMISES 


const promm = document.getElementById('prom')
const promReject = document.getElementById('prom-reject')

const learnPro = new Promise ((resolve, reject) => {
        promm.addEventListener('click' , () => {
            resolve('Promised Resolved')
        })
        promReject.addEventListener('click' , () => {
            reject('Promised Rejected')
        })
})

learnPro.then(() => {
    console.log('hii');
})
learnPro.catch((e) => {
    console.log(e.massage);
})

// 2. ASYNC / AWAIT 

