//Lesson: Object Constructor

function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
}

var author = new User("Sang Nguyen", "Dang", "Avatar");
var author = new User("Vu Bui Nguyen", "Nguyen", "Avatar");
