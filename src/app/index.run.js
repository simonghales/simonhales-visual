(function() {
  'use strict';

  angular
    .module('simonhalesVisual')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
