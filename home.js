import {onAuthStateChanged , signOut  } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth , db,  } from "./configue.js";
import { collection, addDoc , getDocs ,  Timestamp , query, orderBy } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"; 


const form = document.querySelector("#form");
const tittle = document.querySelector("#tittle");
const discription = document.querySelector("#discription");
const card = document.querySelector("#card");


// User login or logout function

onAuthStateChanged(auth, (user) => {
    if (user) {
    const uid = user.uid;
    console.log(uid);
    } else {
     window.location = "index.html"
    }
  });
  
// logout function 

const logout = document.querySelector("#logout-btn");
logout.addEventListener("click" , ()=>{
    signOut(auth).then(() => {
        console.log("logout successful");
        window.location = "index.html"
      }).catch((error) => {
        console.log(error);
      });
      
})

// getData from Firestore
const arr = []
async function getDataFromFirestore (){
  arr.length = 0;
  const q = query(collection(db ,"posts"), orderBy('postsDate', 'desc')); 
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    arr.push({...doc.data(), docId:doc.id});
    console.log(doc.id);
    
  });
  console.log(arr);
  arr.map((item)=>{
    card.innerHTML += ` <div class="card mt-2">
            <div class="card-body">
                <p><span class="h4">Tittle:</span>${item.tittle}</p>
                <p><span class="h4">Discription:</span>${item.discription}</p>
                <button type="button" id = "delete" class="btn btn-danger">Danger</button>
                <button type="button" id = "update" class="btn btn-info">Info</button>


            </div>
          </div>` 
  })

  const del = document.querySelectorAll("#delete");
  const upd = document.querySelectorAll("#update");

  del.forEach((btn , index)=>{
   btn.addEventListener('click' , ()=>{
    console.log("delete called" , arr[index]);
    
   })
   })

  upd.forEach((btn , index)=>{
   btn.addEventListener('click' , ()=>{
    console.log("update called" , arr[index]);
    
   })
   })

 
  
}

getDataFromFirestore()






// post Data on Firestore

form.addEventListener('submit' , async (event)=>{
  event.preventDefault();
  card.innerHTML = ' '
  console.log(tittle.value);
  console.log(discription.value);
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      tittle: tittle.value,
      discription: discription.value,
      uid: auth.currentUser.uid, 
      postsDate: Timestamp.fromDate(new Date()),



    });
    console.log("Document written with ID: ", docRef.id);
    getDataFromFirestore ()

  } catch (e) {
    console.error("Error adding document: ", e);
  }
  
})




































