
const mongoose = require("mongoose");

const productmodel = require("./model/product");
const prob1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const connect = mongoose.connect("mongodb://localhost:27017/appwrk-db", { useNewUrlParser: true, useUnifiedTopology: true, })
        if (connect) {
            resolve("connected");
        }
        else {
            reject("not connect");
        }
    })

});



const prob2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let store = new productmodel({
                firstname: "qwert",
                lastname: "1234",

            })
            const stored = store.save();
            if (stored) {
                resolve("data saved");
            }
            else {
                reject("not going");
            }
        })

    });
}

const prob3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
    
            productmodel.deleteMany({firstname:"qwert"}).then((result)=>{
                
                resolve("data delete");
            }).catch((err)=>{

                reject("not delete");
            })
        
            
            
        })

    });
}





prob1.then(resolve => {
    console.log(resolve);
    prob2().then(resolve => {
        console.log(resolve);
        prob3().then(resolve => {
            console.log(resolve);

        }).catch(reject => {
            console.log(reject);
        })

    }).catch(reject => {
        console.log(reject);
    })
}).catch(reject => {
    console.log(reject);
})
