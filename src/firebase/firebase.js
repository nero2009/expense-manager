import * as firebase from 'firebase'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET ,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {firebase,googleAuthProvider, database as default}
// //child removed
// database.ref('expenses').on('child_removed',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })

// //child changed
// database.ref('expenses').on('child_changed',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })

// //child_added
// database.ref('expenses').on('child_added',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').once('value')
//     .then((snapshot)=>{
//         const expenses = []
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id:childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });
//         console.log(expenses)
//     })

// database.ref('expenses').on('value',(snapshot)=>{
//         const expenses = []
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id:childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });
//         console.log(expenses)
// })

// database.ref('expenses').push({
//     description:'Laundry',
//     note:'couple of whites and tees',
//     amount: 80,
//     createdAt: 2338829
// })




// database.ref().on('value',(snapshot)=>{
//     const val = snapshot.val()
//     console.log(`${val.name}  is a ${val.job.title} at ${val.job.company}`)
//     },(e)=>{
//         console.log('Error with data fetching',e)
//     })


// const onValueChange= database.ref().on('value',(snapshot)=>{
//     console.log(snapshot.val())
// },(e)=>{
//     console.log('Error with data fetching',e)
// })

// setTimeout(()=>{
//     database.ref('age').set(29)
// },3000)

// setTimeout(()=>{
//     database.ref().off(onValueChange)
// },7000)

// setTimeout(()=>{
//     database.ref('age').set(89)
// },10000)

// database.ref('location').once('value')
//     .then((snapshot)=>{
//         const val =snapshot.val()
//         console.log(val)
//     })
//     .catch((e)=>{
//         console.log('Error fetching data', e)
//     })


// database.ref().set({
//     name:"Adaware Oghenero",
//     age: 23,
//     stressLevel: 4,
//     job: {
//         title: 'Frondend developer',
//         company: 'Andela'
//     },
//     location:{
//         city:"Lagos",
//         country:"Nigeria"
//     }
 
// }).then(()=>{
//     console.log('Data is saved!!')
// }).catch((error)=>{
//     console.log('This failed', error)
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'paystack',
//     'location/city':'Yaba'
// })

// const statusRef = database.ref('isSingle')
// statusRef.remove()
//     .then(()=>{
//         console.log('Remove succeeded!')
//     }).catch((err)=>{
//         console.log("Remove failed: " + err)
//     })