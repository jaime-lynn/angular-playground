;(function () {
  angular.module('angularPlayground')
    .component('controllersComponent', {
      controller: ControllersController,
      templateUrl: '/app/components/controllers/controllers.html'
    })

  function ControllersController () {
    this.controllersStatus = 'Working'
    this.friends = [];
    this.newFriend = '';
    this.addFriend = function() {
      debugger
      console.log('hit add friend')
      this.friends.push(this.newFriend);
      this.newFriend = '';
    }
  }
}())
