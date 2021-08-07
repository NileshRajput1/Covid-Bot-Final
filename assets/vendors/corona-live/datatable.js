var _0x403e = [
  "applied",
  "<span\x20class=\x22text-primary\x22>",
  "country",
  "\x22\x20width=\x2230\x22/>",
  "json",
  "each",
  "countryInfo",
  "innerHTML",
  "cases",
  "ajax",
  "</span>",
  "critical",
  "todayCases",
  "column",
  "draw",
  "<span\x20class=\x22text-warning\x22>",
  "https://corona.lmao.ninja/v2/countries",
  "<span\x20class=\x22text-danger\x22>",
  "<span\x20class=\x22text-success\x22>",
];
(function (_0x4f3a0d, _0x403e0d) {
  var _0x37c326 = function (_0x22c856) {
    while (--_0x22c856) {
      _0x4f3a0d["push"](_0x4f3a0d["shift"]());
    }
  };
  _0x37c326(++_0x403e0d);
})(_0x403e, 0x1b1);
var _0x37c3 = function (_0x4f3a0d, _0x403e0d) {
  _0x4f3a0d = _0x4f3a0d - 0x0;
  var _0x37c326 = _0x403e[_0x4f3a0d];
  return _0x37c326;
};
$(function () {
  $[_0x37c3("0xd")]({
    type: "GET",
    url: _0x37c3("0x1"),
    dataType: _0x37c3("0x8"),
    success: function (_0x53eeeb) {
      var _0x4b2e17 = $("#world_table")["DataTable"]({
        data: _0x53eeeb,
        order: [[0x3, "desc"]],
        columns: [
          { data: null },
          {
            data: null,
            render: function (_0x14c84e) {
              return (
                "<img\x20src=\x22" +
                _0x14c84e[_0x37c3("0xa")]["flag"] +
                _0x37c3("0x7")
              );
            },
          },
          {
            data: null,
            render: function (_0x2a7657) {
              return (
                "<span\x20class=\x22font-weight-bold\x22>" +
                _0x2a7657[_0x37c3("0x6")] +
                _0x37c3("0xe")
              );
            },
          },
          {
            data: null,
            render: function (_0x1c9bfc) {
              return (
                _0x37c3("0x5") + _0x1c9bfc[_0x37c3("0xc")] + _0x37c3("0xe")
              );
            },
          },
          {
            data: null,
            render: function (_0x18504f) {
              return (
                _0x37c3("0x5") + _0x18504f[_0x37c3("0x10")] + _0x37c3("0xe")
              );
            },
          },
          {
            data: null,
            render: function (_0xa7b522) {
              return _0x37c3("0x2") + _0xa7b522["deaths"] + _0x37c3("0xe");
            },
          },
          {
            data: null,
            render: function (_0x551ff0) {
              return _0x37c3("0x2") + _0x551ff0["todayDeaths"] + _0x37c3("0xe");
            },
          },
          {
            data: null,
            render: function (_0x1e94f9) {
              return _0x37c3("0x3") + _0x1e94f9["recovered"] + _0x37c3("0xe");
            },
          },
          {
            data: null,
            render: function (_0x46e7d3) {
              return _0x37c3("0x0") + _0x46e7d3["active"] + "</span>";
            },
          },
          {
            data: null,
            render: function (_0x574c2a) {
              return _0x37c3("0x0") + _0x574c2a[_0x37c3("0xf")] + "</span>";
            },
          },
        ],
      });
      _0x4b2e17["on"]("order.dt\x20search.dt", function () {
        _0x4b2e17[_0x37c3("0x11")](-0x0, {
          search: "applied",
          order: _0x37c3("0x4"),
        })
          ["nodes"]()
          [_0x37c3("0x9")](function (_0x49bfa5, _0x4def64) {
            _0x49bfa5[_0x37c3("0xb")] = _0x4def64 + 0x1;
          });
      })[_0x37c3("0x12")]();
    },
  });
});
