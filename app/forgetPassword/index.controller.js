(function () {
    'use strict';

    angular
        .module('app')
        .controller('ForgetPassword.IndexController', Controller);

    function Controller($window, UserService, FlashService) {
        var vm = this;

        vm.user = null;
        vm.reset = reset;

        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
            });
        }

        function reset() {
            UserService.Reset(vm.user)
                .then(function () {
                    FlashService.Success('Password updated');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }
    }

})();