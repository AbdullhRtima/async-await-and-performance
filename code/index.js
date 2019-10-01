// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ work shop here @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

console.log("######### let us get started 2019 async , and preformance  @ by mustafa and abdullah ######### ");
console.log("\n");
console.log("your code result down below ");
console.log("\n\n\n\n\n\n\n\n\n\n");

//   AbdullhRima callback ###################################################

// console.log("BEFORE");
// const data = getData(1);
// console.log(data)
// console.log("AFTER");

// function getData (id) {
//    setTimeout(()=>{
//       console.log("loading...");
//       return {
//          id : id ,
//          name : "taymaa"
//       }
//    },5000);
// }
// problem here we cant get any data so what is the solution ??   
// solution  { callback , promises , Async & await} 



//############################# solution using callback 


// console.log("BEFORE");
// getData(1,function(data) {
//    console.log("Data :" ,data)
//    getSocialMedia(data.name , (social)=>{
//       console.log("social media :" ,social )
//    })
// });
// console.log("AFTER");

// function getData(id,callback) {
//    setTimeout(()=>{
//       console.log("loading...");
//       callback({id:id , name:"taymaa"});
//    },2000);
// }

// function getSocialMedia(username,callback){
//    setTimeout(()=> {
//       console.log("loading social media ...")
//       callback({ username : username , facebook : "@taymaaZ" })
//    }, 3000)
// }

// problem callback hell nested callbacks 


// console.log("BEFORE");

// //Async
// getData(1,function(data) {
//    // probelm here is callback hell callback inside inside inside 
//    console.log("Data :" ,data)
//    getSocialMedia(data.name , (social)=>{
//       console.log("social media :" ,social );
//       getPost(social.facebook , (post)=> {
//          console.log("post :" , post)
//       } )
//    })
// });
// console.log("AFTER");


// /// our function LOL 
// function getData(id,callback) {
//    setTimeout(()=>{
//       console.log("loading...");
//       callback({id:id , name:"taymaa"});
//    },2000);
// }

// function getSocialMedia(username,callback){
//    setTimeout(()=> {
//       console.log("loading social media ...")
//       callback({ username : username , facebook : "@taymaaZ" })
//    }, 3000)
// }

// function getPost(facebook,callback){
//  setTimeout(()=>{
//    callback({
//       facebook : facebook ,
//       post : " I will KIll you ... soon"
//    });
//  },3500)
// }

// ######################################################################

// wait what ok ho sync work 

// this is how sync works we need something like this!!!
// const data = getData(id);
// const social = getSocialMedia(data.name);
// const post = getPost(social.facebook);


//##################### 

// how can we scape from callback hell ??

// we can use rescue function ....

// like this .....

// console.log('##################### Before ###########################');

// // getData(1,(data)=> { 
// //    console.log("Data :" ,data)
// //    getSocialMedia(data.name , (social)=>{
// //       console.log("social media :" ,social );
// //       getPost(social.facebook , (post)=> {
// //          console.log("post :" , post)
// //       });
// //    });
// // });

// getData(1,getUser);

// function getUser(data){
//    console.log("Data :" ,data)
//    getSocialMedia(data.name ,getSocial)
// }

// function getSocial(social){
//    console.log("social media :" ,social );
//    getPost(social.facebook ,dispalyPost)
// }

// function dispalyPost(post){
//    console.log("loading post ...")
//    console.log("post:", post);
// }

// function getData(id,callback) {
//    setTimeout(()=>{
//       console.log("loading...");
//       callback({id:id , name:"abdullah rt .."});
//    },1000);
// }


// function getSocialMedia(username,callback){
//    setTimeout(()=> {
//       console.log("loading social media ...")
//       callback({ username : username , facebook : "@abdullart97" })
//    }, 2000)
// }


// function getPost(facebook,callback){
//  setTimeout(()=>{
//    callback({
//       facebook : facebook ,
//       post : " this user has no post yet ............."
//    });
//  },2500)
// }


// console.log('##################### After ###########################');


//  the end of resuce code from call back hell 



//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

///// promises ///

// slide #1

// const promise = new Promise((resolve ,reject )=> {
//    // here you can write async stuff ....
//   resolve("abdullah");
//   // here reject or throw errors ....
// });

// promise.then( name => console.log("my name is", name ));

// slide #2 

// const promise = new Promise((resolve ,reject )=> {
//    // here you can write async stuff ....
//    // let name = null
//    let answer = "nahhhh good ....."
//    setTimeout(()=> {
//       resolve(answer);
//    },2000);
//    // here reject or throw errors ....
//    if (answer == null ){
//       reject(console.log(new Error(" error while excute the promise")))
//    }
  
// });

// promise
//       .then( answer => console.log( answer ))
//       .finally(console.log("HI abdullah how are you today ... "))


//slide #3

//ex 1  with example .... 

// console.log("BEFORE");

//Async
// getData(1,function(data) {
//    // probelm here is callback hell callback inside inside inside 
//    console.log("Data :" ,data)
//    getSocialMedia(data.name , (social)=>{
//       console.log("social media :" ,social );
//       getPost(social.facebook , (post)=> {
//          console.log("post :" , post)
//       } )
//    })
// });


// // consuming promise
// getData(1)
//    .then( data => {console.log(data)})
//    //HINT  here you can add more that one then  
//    .catch(err => console.log(new Error(err)));

// console.log("AFTER");



// /// our function LOL 

// function getData(id) {
//   return new Promise ((resolve ,reject)=>{
//    setTimeout(()=>{
//       console.log("loading...");
//       resolve({id:id , name:"abdullah"});
//    },2000);
//   });
// }

// function getSocialMedia(username,callback){
//    setTimeout(()=> {
//       console.log("loading social media ...")
//       callback({ username : username , facebook : "@abdullahrt97" })
//    }, 3000)
// }

// function getPost(facebook,callback){
//  setTimeout(()=>{
//    callback({
//       facebook : facebook ,
//       post : "Welcome JS developer ... "
//    });
//  },3500)
// }

//slide #4

// you can do this too 

// const promise = Promise.resolve("HI abdullah !! ");

// promise.then(greeting => console.log(greeting));

// const promise = Promise.reject(new Error(" opps someting wrong here  "));

// promise.then(err => console.log(err));

// slide #5
// promise.all 

const facebook_api = Promise.resolve("data from facebook api");
const twitter_api = Promise.reject("data from twitter api ");

Promise.all([facebook_api , twitter_api ])
   .then(apis =>  console.log(apis))
   .catch(err => console.log(err));

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// // async and await

// console.log("BEFORE");


// async function abdullahData(){
//    try{
//       const data  = await getData(1);
//       const social = await getSocialMedia(data.name);
//       const post  = await getPost(social.facebook);
//       console.log(data);
//       console.log(social);
//       console.log(post)

//    }catch(err){
//       console.log("ERROR !!",err.message)
//    }

// }
// abdullahData();


// console.log("AFTER");



// /// our function LOL 

// function getData(id) {
//   return new Promise ((resolve ,reject)=>{
//    setTimeout(()=>{
//       console.log("loading...");
//       resolve({id:id , name:"abdullah"});
//    },2000);
//   });
// }

// function getSocialMedia(username){
//    return  new Promise ((resolve,reject)=>{
//       setTimeout(()=> {
//          console.log("loading social media ...")
//          resolve({ username : username , facebook : "@abdullahrt97" })
//       }, 3000)
//    } );

// }

// function getPost(facebook){
//    return new Promise ((resolve,reject)=>{
//       setTimeout(()=>{
//          resolve({
//             facebook : facebook ,
//             post : "Welcome JS developer ... "
//          });
//        },3500)
//    });

// }



