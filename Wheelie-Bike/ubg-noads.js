/* ubg: offline stand-in for Google's H5 Games Ads loader (adsbygoogle.js) - no ads, no network.
   adConfig() reports ready; every adBreak() finishes at once as if no ad was available. */
(function () {
  var q = window.adsbygoogle = window.adsbygoogle || [];
  function later(fn, arg) { setTimeout(function () { try { fn(arg); } catch (e) { setTimeout(function () { throw e; }); } }, 0); }
  function run(o) {
    if (!o || typeof o !== 'object') return;
    if (o.type) {
      if (typeof o.adBreakDone === 'function') later(o.adBreakDone, {
        breakType: o.type, breakName: o.name || '', breakFormat: o.type === 'reward' ? 'reward' : 'interstitial', breakStatus: 'notReady'
      });
    } else if (typeof o.onReady === 'function') later(o.onReady);
  }
  for (var i = 0; i < q.length; i++) run(q[i]);
  q.push = function (o) { run(o); return q.length; };
})();
