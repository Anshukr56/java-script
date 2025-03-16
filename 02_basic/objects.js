const whatsappUser = {}

whatsappUser.id = "123abc"
whatsappUser.name = "anshu"
whatsappUser.isLoggedIn = false

//console.log(whatsappUser);

const regularUser={
    email: "anshu@gmail.com",
    fullname: {
        userfullnmae:{
            firstname : "anshu",
            lastname : "kumar"
        }
    }
}
//console.log(regularUser.fullname.userfullnmae);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}


//const obj3 = {obj1,obj2}
const obj3 = Object.assign(obj1,obj2) //another way of adding two arrays
console.log(obj3);
