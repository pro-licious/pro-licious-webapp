function LoginCtrl($log, $state) {
	var vm = this;
	vm.userLogin = function () {
		$state.go('dashboard');
	};
}
module.exports = LoginCtrl;
