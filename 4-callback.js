setTimeout(() => {
    console.log('Two second latlt it gonna to execute')
},2000)


const name = ["Praveen","Pradeep","Prasanth"]
const shortNames = name.filter((name) =>{
    return name.length <= 0
})

const geocode = (address,callback) => {
    const data = {
        l0ngitude : 0,
        latitude : 0
    }
    return data
}

const data = geocode('chennai')
console.log('data')

const add1 = (a,b,callback) =>{
    setTimeout(() => {
        callback(a+b)
    },2000)
    }

    add(1,2,(sum)=>{
        console.log(sum)
    })

    