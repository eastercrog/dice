var _0x2596b5 = _0x87d0;
(function(_0x2d2489, _0x387a3b) {
    var _0x476cbc = _0x87d0,
        _0x48df88 = _0x2d2489();
    while (!![]) {
        try {
            var _0x538f3a = parseInt(_0x476cbc(0x14c)) / 0x1 + -parseInt(_0x476cbc(0x131)) / 0x2 + -parseInt(_0x476cbc(0x114)) / 0x3 + -parseInt(_0x476cbc(0x181)) / 0x4 * (parseInt(_0x476cbc(0x141)) / 0x5) + parseInt(_0x476cbc(0x145)) / 0x6 + -parseInt(_0x476cbc(0x11a)) / 0x7 + -parseInt(_0x476cbc(0x14a)) / 0x8 * (-parseInt(_0x476cbc(0x119)) / 0x9);
            if (_0x538f3a === _0x387a3b) break;
            else _0x48df88['push'](_0x48df88['shift']());
        } catch (_0x278cb8) {
            _0x48df88['push'](_0x48df88['shift']());
        }
    }
}(_0x302f, 0x59782));
var rolls_arr = [],
    events;
const abi = '[{\x22inputs\x22:[],\x22stateMutability\x22:\x22nonpayable\x22,\x22type\x22:\x22constructor\x22},{\x22anonymous\x22:false,\x22inputs\x22:[{\x22indexed\x22:true,\x22internalType\x22:\x22address\x22,\x22name\x22:\x22addr\x22,\x22type\x22:\x22address\x22},{\x22indexed\x22:false,\x22internalType\x22:\x22uint256\x22,\x22name\x22:\x22reward\x22,\x22type\x22:\x22uint256\x22},{\x22indexed\x22:false,\x22internalType\x22:\x22uint8\x22,\x22name\x22:\x22d1\x22,\x22type\x22:\x22uint8\x22},{\x22indexed\x22:false,\x22internalType\x22:\x22uint8\x22,\x22name\x22:\x22d2\x22,\x22type\x22:\x22uint8\x22},{\x22indexed\x22:false,\x22internalType\x22:\x22uint8\x22,\x22name\x22:\x22d3\x22,\x22type\x22:\x22uint8\x22},{\x22indexed\x22:false,\x22internalType\x22:\x22uint8\x22,\x22name\x22:\x22d4\x22,\x22type\x22:\x22uint8\x22},{\x22indexed\x22:false,\x22internalType\x22:\x22uint8\x22,\x22name\x22:\x22d5\x22,\x22type\x22:\x22uint8\x22},{\x22indexed\x22:false,\x22internalType\x22:\x22uint256\x22,\x22name\x22:\x22bet\x22,\x22type\x22:\x22uint256\x22}],\x22name\x22:\x22Roll\x22,\x22type\x22:\x22event\x22},{\x22stateMutability\x22:\x22payable\x22,\x22type\x22:\x22fallback\x22},{\x22inputs\x22:[],\x22name\x22:\x22getBetLimits\x22,\x22outputs\x22:[{\x22internalType\x22:\x22uint256[2]\x22,\x22name\x22:\x22\x22,\x22type\x22:\x22uint256[2]\x22}],\x22stateMutability\x22:\x22view\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[],\x22name\x22:\x22getOwner\x22,\x22outputs\x22:[{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22\x22,\x22type\x22:\x22address\x22}],\x22stateMutability\x22:\x22view\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[],\x22name\x22:\x22getRatios\x22,\x22outputs\x22:[{\x22internalType\x22:\x22uint256[9]\x22,\x22name\x22:\x22\x22,\x22type\x22:\x22uint256[9]\x22}],\x22stateMutability\x22:\x22view\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[],\x22name\x22:\x22roll\x22,\x22outputs\x22:[],\x22stateMutability\x22:\x22payable\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[{\x22internalType\x22:\x22uint256\x22,\x22name\x22:\x22_max\x22,\x22type\x22:\x22uint256\x22},{\x22internalType\x22:\x22uint256\x22,\x22name\x22:\x22_min\x22,\x22type\x22:\x22uint256\x22}],\x22name\x22:\x22setBetLimits\x22,\x22outputs\x22:[],\x22stateMutability\x22:\x22nonpayable\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[{\x22internalType\x22:\x22uint256\x22,\x22name\x22:\x22i\x22,\x22type\x22:\x22uint256\x22},{\x22internalType\x22:\x22uint256\x22,\x22name\x22:\x22_ratio\x22,\x22type\x22:\x22uint256\x22}],\x22name\x22:\x22setRatio\x22,\x22outputs\x22:[],\x22stateMutability\x22:\x22nonpayable\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[{\x22internalType\x22:\x22address\x20payable\x22,\x22name\x22:\x22_owner\x22,\x22type\x22:\x22address\x22}],\x22name\x22:\x22transferOwnership\x22,\x22outputs\x22:[],\x22stateMutability\x22:\x22nonpayable\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[{\x22internalType\x22:\x22uint256\x22,\x22name\x22:\x22_weis\x22,\x22type\x22:\x22uint256\x22},{\x22internalType\x22:\x22address\x20payable\x22,\x22name\x22:\x22addr\x22,\x22type\x22:\x22address\x22}],\x22name\x22:\x22withdraw\x22,\x22outputs\x22:[],\x22stateMutability\x22:\x22payable\x22,\x22type\x22:\x22function\x22},{\x22stateMutability\x22:\x22payable\x22,\x22type\x22:\x22receive\x22}]',
    appContext = {
        0x89: {
            'contractAddress': '0x7fE99D573f723F70d77cac0C0FB431bAa6252d2B',
            'betStep': 0xa ** 0x11,
            'currency': _0x2596b5(0x17d),
            'lookBack': 0x64,
            'updateHistory': !![],
            'logo': _0x2596b5(0x13e),
            'browser': 'https://testnet.bscscan.com/tx/'
        },
        0x6c: {
            'contractAddress': _0x2596b5(0x142),
            'betStep': 0x5 * 0xa ** 0x12,
            'currency': 'TT',
            'lookBack': 0x64,
            'updateHistory': !![],
            'logo': _0x2596b5(0x170),
            'browser': _0x2596b5(0x13b)
        }
    };

function truncate(_0x5dc459, _0x5b0802) {
    var _0x53a342 = _0x2596b5;
    return _0x5dc459[_0x53a342(0x12c)] > _0x5b0802 ? _0x5dc459[_0x53a342(0x13c)](0x0, _0x5b0802 - 0x1) + _0x53a342(0x144) : _0x5dc459;
}

function loadHistory(_0x8e2837, _0x2bc759, _0x3018e1) {
    var _0x2b33a7 = _0x2596b5,
        _0x1f4be0 = [];
    return _0x2bc759[_0x2b33a7(0x17f)]['Roll'](_0x3018e1)['on'](_0x2b33a7(0x14f), _0x46c3eb => {
        var _0x5189a2 = _0x2b33a7,
            _0x3e4b8f = _0x46c3eb[_0x5189a2(0x175)]['d1'],
            _0x539183 = _0x46c3eb[_0x5189a2(0x175)]['d2'],
            _0x358727 = _0x46c3eb[_0x5189a2(0x175)]['d3'],
            _0x1a7b6c = _0x46c3eb[_0x5189a2(0x175)]['d4'],
            _0x342ea5 = _0x46c3eb[_0x5189a2(0x175)]['d5'],
            _0x1a2fa6 = _0x46c3eb[_0x5189a2(0x175)]['reward'],
            _0x501115 = _0x46c3eb[_0x5189a2(0x175)]['addr'],
            _0x183fa5 = _0x46c3eb[_0x5189a2(0x175)]['bet'];
        _0x1f4be0[_0x5189a2(0x16c)](_0x46c3eb[_0x5189a2(0x15c)]) == ![] && ($(_0x5189a2(0x157))[_0x5189a2(0x149)](historyrowhtml(_0x8e2837, _0x501115, _0x46c3eb[_0x5189a2(0x15c)], _0x183fa5 / 0xa ** 0x12, _0x3e4b8f, _0x539183, _0x358727, _0x1a7b6c, _0x342ea5, _0x1a2fa6 / 0xa ** 0x12)), $(_0x5189a2(0x12f))[_0x5189a2(0x162)](), $(_0x5189a2(0x12f))[_0x5189a2(0x10c)]({
            'duration': 0x960
        }), _0x1f4be0['push'](_0x46c3eb[_0x5189a2(0x15c)]));
    })['on'](_0x2b33a7(0x126), _0x476cb1 => {})['on'](_0x2b33a7(0x121), _0x37340c => {
        var _0x399b23 = _0x2b33a7;
        console[_0x399b23(0x11d)](_0x37340c);
    })['on'](_0x2b33a7(0x117), _0x4c6d0a => {});
}

function historyrowhtml(_0x33490a, _0x3daaad, _0x31fc79, _0x779ab9, _0x222658, _0x5b54c2, _0x8dfedb, _0x4aef99, _0x2fbffc, _0x718ea5) {
    var _0x2bf099 = _0x2596b5;
    let _0x1d6af6 = _0x33490a[_0x2bf099(0x151)],
        _0x3449de = '';
    _0x718ea5 == 0x0 ? _0x3449de = '#FFEEEE' : _0x3449de = _0x2bf099(0x10b);
    var _0x1ea9a0 = '<tr\x20bgcolor=\x22' + _0x3449de + _0x2bf099(0x124) + _0x1d6af6['concat'](_0x31fc79) + _0x2bf099(0x10e) + truncate(_0x3daaad, 0xa) + _0x2bf099(0x10d) + truncate(_0x31fc79, 0xa) + _0x2bf099(0x10d) + truncate(_0x779ab9['toFixed'](0x4), 0x7) + _0x2bf099(0x118) + _0x222658 + _0x2bf099(0x179) + _0x5b54c2 + _0x2bf099(0x179) + _0x8dfedb + _0x2bf099(0x179) + _0x4aef99 + _0x2bf099(0x179) + _0x2fbffc + '.png\x22\x20width=\x2240\x22\x20height=\x2240\x22/></td><td><span\x20style=\x22font-size:30px;\x22>' + truncate(_0x718ea5[_0x2bf099(0x156)](0x4), 0x7) + _0x2bf099(0x115);
    return _0x1ea9a0;
}
async function initApp(_0x5ccbfb, _0x5c1f20) {
    var _0x3eeb95 = _0x2596b5;
    const _0x2c858d = ['Two\x20pairs,\x20', 'Three\x20of\x20a\x20kind,\x20', _0x3eeb95(0x122), _0x3eeb95(0x16a), 'Low\x20straight,\x20', 'High\x20straight,\x20', 'Five\x20of\x20a\x20kind,\x20', _0x3eeb95(0x15a), 'Royal\x20flush,\x20'];
    $(_0x3eeb95(0x127))['html'](_0x5ccbfb[_0x3eeb95(0x12a)]);
    const _0x1607c7 = new Web3(provider);
    _0x1607c7[_0x3eeb95(0x128)][_0x3eeb95(0x14d)](_0x5c1f20[0x0])[_0x3eeb95(0x165)](function(_0xd16d55) {
        var _0x59c51a = _0x3eeb95;
        const _0x56eda9 = parseFloat(_0x1607c7[_0x59c51a(0x11b)][_0x59c51a(0x176)](_0xd16d55, _0x59c51a(0x168)))[_0x59c51a(0x156)](0x4);
        $('#balance')[_0x59c51a(0x173)](_0x59c51a(0x15d) + _0x56eda9 + _0x5ccbfb[_0x59c51a(0x12a)]);
    });
    var _0x20b2c2 = new _0x1607c7[(_0x3eeb95(0x128))][(_0x3eeb95(0x12d))](JSON[_0x3eeb95(0x113)](abi), _0x5ccbfb[_0x3eeb95(0x109)]);
    let _0x587c51 = _0x20b2c2[_0x3eeb95(0x163)][_0x3eeb95(0x17c)]()[_0x3eeb95(0x123)]({
            'from': _0x5c1f20[0x0]
        })[_0x3eeb95(0x165)](function(_0x315fe4) {
            var _0x2bfca9 = _0x3eeb95;
            $(_0x2bfca9(0x16d))[_0x2bfca9(0x154)](_0x315fe4[0x1] / 0xa ** 0x12), $(_0x2bfca9(0x158))[_0x2bfca9(0x134)](function() {
                var _0x1d8f73 = _0x2bfca9;
                $(_0x1d8f73(0x16d))['val'](_0x315fe4[0x0] / 0xa ** 0x12);
            }), $('#minbet')[_0x2bfca9(0x134)](function() {
                var _0x9c70bd = _0x2bfca9;
                $(_0x9c70bd(0x16d))[_0x9c70bd(0x154)](_0x315fe4[0x1] / 0xa ** 0x12);
            });

            function _0x53164c(_0x3dc286, _0x182dad) {
                var _0x4d4f8c = _0x2bfca9,
                    _0x26c4d9 = Math[_0x4d4f8c(0x166)](0xa, _0x182dad || 0x0);
                return Math[_0x4d4f8c(0x15f)](_0x3dc286 * _0x26c4d9) / _0x26c4d9;
            }
            return $(_0x2bfca9(0x152))[_0x2bfca9(0x134)](() => {
                var _0x52428a = _0x2bfca9;
                let _0x4d5250 = $('#betsize')[_0x52428a(0x154)]();
                _0x4d5250 *= 0xa ** 0x12;
                let _0xc2c7ef = _0x4d5250 + _0x5ccbfb['betStep'];
                _0xc2c7ef <= _0x315fe4[0x0] ? $(_0x52428a(0x16d))['val'](_0x53164c(_0xc2c7ef / 0xa ** 0x12, 0x3)) : $(_0x52428a(0x16d))[_0x52428a(0x154)](_0x315fe4[0x0] / 0xa ** 0x12);
            }), $(_0x2bfca9(0x150))[_0x2bfca9(0x134)](() => {
                var _0x466eb6 = _0x2bfca9;
                let _0x1d87b4 = $(_0x466eb6(0x16d))[_0x466eb6(0x154)]();
                _0x1d87b4 *= 0xa ** 0x12;
                let _0x1bc9a0 = _0x1d87b4 - _0x5ccbfb[_0x466eb6(0x146)];
                _0x1bc9a0 >= _0x315fe4[0x1] ? $(_0x466eb6(0x16d))[_0x466eb6(0x154)](_0x53164c(_0x1bc9a0 / 0xa ** 0x12, 0x3)) : $('#betsize')['val'](_0x315fe4[0x1] / 0xa ** 0x12);
            }), _0x315fe4;
        }),
        _0x53beab = _0x20b2c2[_0x3eeb95(0x163)][_0x3eeb95(0x112)]()[_0x3eeb95(0x123)]({
            'from': _0x5c1f20[0x0]
        })['then'](function(_0x121228) {
            var _0x54cfe4 = _0x3eeb95;
            let _0x10ffd0 = 0x0;
            for (_0x10ffd0 = 0x0; _0x10ffd0 < 0x9; ++_0x10ffd0) {
                $(_0x54cfe4(0x11f) + _0x10ffd0 + _0x54cfe4(0x171))['html'](_0x2c858d[_0x10ffd0][_0x54cfe4(0x137)](0x0, -0x2)), $(_0x54cfe4(0x11f) + _0x10ffd0 + _0x54cfe4(0x130))['html'](parseInt(_0x121228[_0x10ffd0]) / 0xa);
            }
            return $('#maxratio9')[_0x54cfe4(0x173)]((parseInt(_0x121228[0x8]) / 0xa)[_0x54cfe4(0x180)]()[_0x54cfe4(0x129)]()), _0x121228;
        });
    var _0x289087;
    let _0x4439f4 = _0x1607c7['eth'][_0x3eeb95(0x17b)]()[_0x3eeb95(0x165)](function(_0x3ae6fd) {
        var _0x327205 = _0x3eeb95;
        return _0x289087 = {
            'fromBlock': _0x3ae6fd - _0x5ccbfb[_0x327205(0x16b)]
        }, _0x289087[_0x327205(0x172)] = {}, rolls_arr = [], events = loadHistory(_0x5ccbfb, _0x20b2c2, _0x289087), $(_0x327205(0x116))[_0x327205(0x125)](function() {
            var _0x1fc828 = _0x327205;
            this[_0x1fc828(0x13d)] ? _0x289087[_0x1fc828(0x172)] = {
                'addr': _0x5c1f20[0x0]
            } : _0x289087[_0x1fc828(0x172)] = {}, rolls_arr = [], $('#history\x20tbody\x20tr')['remove'](), events[_0x1fc828(0x153)](), events = loadHistory(_0x5ccbfb, _0x20b2c2, _0x289087);
        }), _0x3ae6fd;
    });
    return Promise['all']([_0x4439f4, _0x587c51, _0x53beab])[_0x3eeb95(0x165)](function(_0x4ebf41) {
        var _0x4e5586 = _0x3eeb95,
            _0x520a65 = [];
        const _0x3b3e84 = '<div\x20class=\x22row\x20justify-content-sm-center\x22><div\x20class=\x22col-1\x20dice-class\x22><img\x20src=\x22images/rolling-dice2.gif\x22\x20width=\x22150\x22\x20height=\x22150\x22\x20/></div><div\x20class=\x22col-1\x20dice-class\x22><img\x20src=\x22images/rolling-dice2.gif\x22\x20width=\x22150\x22\x20\x20height=\x22150\x22\x20/></div><div\x20class=\x22col-1\x20dice-class\x22><img\x20src=\x22images/rolling-dice2.gif\x22\x20width=\x22150\x22\x20\x20height=\x22150\x22\x20/></div><div\x20class=\x22col-1\x20dice-class\x22><img\x20src=\x22images/rolling-dice2.gif\x22\x20width=\x22150\x22\x20\x20height=\x22150\x22\x20/></div><div\x20class=\x22col-1\x20dice-class\x22><img\x20src=\x22images/rolling-dice2.gif\x22\x20width=\x22150\x22\x20\x20height=\x22150\x22\x20/></div></div>';

        function _0x2af7e6(_0x22b7d8, _0x36890d, _0x58db89, _0x23682e, _0x47efbc) {
            var _0xebd8cb = _0x87d0,
                _0x4db269 = _0xebd8cb(0x10f) + _0x22b7d8 + _0xebd8cb(0x11c) + _0x36890d + '.png\x22\x20width=\x22150\x22\x20height=\x22150\x22/></div><div\x20class=\x22col-1\x20dice-class\x22><img\x20src=\x22images/dice-' + _0x58db89 + _0xebd8cb(0x11c) + _0x23682e + '.png\x22\x20width=\x22150\x22\x20\x20height=\x22150\x22\x20/></div><div\x20class=\x22col-1\x20dice-class\x22><img\x20src=\x22images/dice-' + _0x47efbc + '.png\x22\x20width=\x22150\x22\x20\x20height=\x22150\x22\x20/></div></div>';
            return _0x4db269;
        }
        _0x4ebf41[0x2][_0x4e5586(0x167)](function(_0xb31caa, _0x25f790) {
            _0x520a65[_0xb31caa / 0xa] = _0x25f790;
        }), document[_0x4e5586(0x13f)](_0x4e5586(0x135))['removeAttribute'](_0x4e5586(0x138)), $(_0x4e5586(0x135))['click'](() => {
            var _0x13bdfd = _0x4e5586;
            let _0xbb5a69 = $('#betsize')[_0x13bdfd(0x154)]();
            var _0x2be0cb;
            if (_0x5ccbfb['currency'] == 'TT') _0x2be0cb = 0x3d090;
            else {
                if (_0x5ccbfb[_0x13bdfd(0x12a)] == _0x13bdfd(0x17d)) _0x2be0cb = 0x1d4c0;
                else _0x5ccbfb[_0x13bdfd(0x12a)] == _0x13bdfd(0x110) ? _0x2be0cb = 0x13880 : _0x2be0cb = 0x105b8;
            }
            _0x20b2c2[_0x13bdfd(0x163)][_0x13bdfd(0x133)]()[_0x13bdfd(0x14e)]({
                'from': _0x5c1f20[0x0],
                'gas': _0x2be0cb,
                'value': _0x1607c7[_0x13bdfd(0x11b)][_0x13bdfd(0x136)](_0xbb5a69, 'ether')
            })['on'](_0x13bdfd(0x15c), function(_0x27e2e7) {
                var _0x4f7912 = _0x13bdfd;
                $(_0x4f7912(0x15b))[_0x4f7912(0x148)](_0x4f7912(0x159), {
                    'style': 'app',
                    'className': _0x4f7912(0x14b)
                }), $(_0x4f7912(0x139))['html'](_0x3b3e84), $(_0x4f7912(0x139))[_0x4f7912(0x169)]('border-style', _0x4f7912(0x174)), document[_0x4f7912(0x13f)](_0x4f7912(0x135))[_0x4f7912(0x147)]('disabled', 'disabled');
            })['on'](_0x13bdfd(0x10a), function(_0xfc3a28) {
                var _0x32a337 = _0x13bdfd;
                document[_0x32a337(0x13f)](_0x32a337(0x135))['removeAttribute'](_0x32a337(0x138)), _0x1607c7[_0x32a337(0x128)][_0x32a337(0x14d)](_0x5c1f20[0x0])[_0x32a337(0x165)](function(_0x16e2eb) {
                    var _0x2843f8 = _0x32a337;
                    const _0x478755 = parseFloat(_0x1607c7[_0x2843f8(0x11b)][_0x2843f8(0x176)](_0x16e2eb, 'ether'))[_0x2843f8(0x156)](0x4);
                    $('#balance')['html'](_0x2843f8(0x15d) + _0x478755 + _0x5ccbfb['currency']);
                });
                var _0x15a845 = _0xfc3a28[_0x32a337(0x17f)]['Roll']['returnValues']['d1'],
                    _0x4ddd70 = _0xfc3a28[_0x32a337(0x17f)][_0x32a337(0x178)][_0x32a337(0x175)]['d2'],
                    _0x777592 = _0xfc3a28['events'][_0x32a337(0x178)][_0x32a337(0x175)]['d3'],
                    _0x4a8d91 = _0xfc3a28['events'][_0x32a337(0x178)]['returnValues']['d4'],
                    _0x4b6bd1 = _0xfc3a28[_0x32a337(0x17f)]['Roll'][_0x32a337(0x175)]['d5'],
                    _0x6c806e = _0xfc3a28[_0x32a337(0x17f)][_0x32a337(0x178)][_0x32a337(0x175)][_0x32a337(0x111)],
                    _0x3f5791 = _0xfc3a28[_0x32a337(0x17f)][_0x32a337(0x178)][_0x32a337(0x175)]['reward'],
                    _0x3e163e = _0x3f5791 / _0x6c806e,
                    _0x1d7443;
                _0x3f5791 == 0x0 ? ($(_0x32a337(0x15b))[_0x32a337(0x148)](_0x32a337(0x12e) + _0x5ccbfb[_0x32a337(0x12a)], {
                    'style': _0x32a337(0x120),
                    'className': _0x32a337(0x14b)
                }), $(_0x32a337(0x139))[_0x32a337(0x169)](_0x32a337(0x12b), '#ff1111')) : (_0x1d7443 = _0x2c858d[_0x520a65[_0x3e163e]], $('#status')[_0x32a337(0x148)](_0x1d7443 + _0x32a337(0x132) + _0x3f5791 / 0xa ** 0x12, {
                    'style': _0x32a337(0x120),
                    'className': _0x32a337(0x182)
                }), $(_0x32a337(0x139))[_0x32a337(0x169)](_0x32a337(0x12b), '#11ff11')), $(_0x32a337(0x139))[_0x32a337(0x173)](_0x2af7e6(_0x15a845, _0x4ddd70, _0x777592, _0x4a8d91, _0x4b6bd1)), $(_0x32a337(0x139))['css']('border-style', _0x32a337(0x11e)), _0x5ccbfb[_0x32a337(0x177)] === !![] && ($('#history\x20tbody')[_0x32a337(0x149)](historyrowhtml(_0x5ccbfb, _0xfc3a28[_0x32a337(0x155)], _0xfc3a28[_0x32a337(0x15c)], _0x6c806e / 0xa ** 0x12, _0x15a845, _0x4ddd70, _0x777592, _0x4a8d91, _0x4b6bd1, _0x3f5791 / 0xa ** 0x12)), $(_0x32a337(0x12f))[_0x32a337(0x162)](), $(_0x32a337(0x12f))[_0x32a337(0x10c)]({
                    'duration': 0x960
                }), rolls_arr['push'](_0xfc3a28[_0x32a337(0x15c)]));
            })['on'](_0x13bdfd(0x121), function(_0x54379) {
                var _0x288f9b = _0x13bdfd;
                document[_0x288f9b(0x13f)](_0x288f9b(0x135))[_0x288f9b(0x13a)](_0x288f9b(0x138)), console[_0x288f9b(0x11d)](_0x54379), $(_0x288f9b(0x15b))[_0x288f9b(0x148)](_0x54379[_0x288f9b(0x160)], {
                    'style': _0x288f9b(0x120),
                    'className': _0x288f9b(0x121)
                }), clearAppDisplay();
            });
        });
    });
}

function _0x87d0(_0x545f57, _0xaae8cd) {
    var _0x302f0a = _0x302f();
    return _0x87d0 = function(_0x87d073, _0x1c33bd) {
        _0x87d073 = _0x87d073 - 0x109;
        var _0xa7e07e = _0x302f0a[_0x87d073];
        return _0xa7e07e;
    }, _0x87d0(_0x545f57, _0xaae8cd);
}

function _0x302f() {
    var _0x5a2b32 = ['#history\x20tbody\x20tr', 'events', 'toString', '724ReuwPV', 'success', 'contractAddress', 'receipt', '#DDFFDD', 'fadeIn', '</span></td><td><span\x20style=\x22font-size:30px;\x22>', '\x27,\x27_blank\x27)\x22><td><span\x20style=\x22font-size:30px;\x22>', '<div\x20class=\x22row\x20justify-content-sm-center\x22><div\x20class=\x22col-1\x20dice-class\x22><img\x20src=\x22images/dice-', 'BNB', 'bet', 'getRatios', 'parse', '1935333bdTUWa', '</span></td></tr>', '#onlyme', 'connected', '</span></td><td><img\x20src=\x22images/dice-', '9wiQugu', '4264120vIUYEt', 'utils', '.png\x22\x20width=\x22150\x22\x20height=\x22150\x22/></div><div\x20class=\x22col-1\x20dice-class\x22><img\x20src=\x22images/dice-', 'log', 'solid', '#ratio', 'app', 'error', 'Full\x20house,\x20', 'call', '\x22\x20onclick=\x22window.open(\x27', 'change', 'changed', '#currency', 'eth', 'trim', 'currency', 'border-color', 'length', 'Contract', 'Reward:\x200\x20', '#history\x20tbody\x20tr:first-child', '_value', '372320ECavTC', 'reward:\x20', 'roll', 'click', '.roll-button', 'toWei', 'slice', 'disabled', '#scene', 'removeAttribute', 'https://viewblock.io/thundercore/tx/', 'substr', 'checked', 'images/polygonlogosmall.png', 'querySelector', '#balance', '18370ZrkoTo', '0x7BAC7E17aebC611204c4eED155A00D5793EBf5F4', 'onclick', '&hellip;', '2750478nDLNKE', 'betStep', 'setAttribute', 'notify', 'prepend', '16102792mGitGz', 'info', '629jgnXuW', 'getBalance', 'send', 'data', '#minus', 'browser', '#plus', 'unsubscribe', 'val', 'from', 'toFixed', '#history\x20tbody', '#maxbet', 'Rolling...', 'Flush,\x20', '#status', 'transactionHash', 'Balance:\x20', 'getElementById', 'round', 'message', 'unbind', 'hide', 'methods', 'remove', 'then', 'pow', 'forEach', 'ether', 'css', 'Four\x20of\x20a\x20kind,\x20', 'lookBack', 'includes', '#betsize', '#minbet', 'ready', 'images/ttlogosmall.png', '_name', 'filter', 'html', 'none', 'returnValues', 'fromWei', 'updateHistory', 'Roll', '.png\x22\x20width=\x2240\x22\x20height=\x2240\x22/><img\x20src=\x22images/dice-', 'prop', 'getBlockNumber', 'getBetLimits', 'MATIC'];
    _0x302f = function() {
        return _0x5a2b32;
    };
    return _0x302f();
}

function clearAppDisplay() {
    var _0x368279 = _0x2596b5;
    $(_0x368279(0x139))['html']('<div\x20class=\x22row\x20justify-content-sm-center\x22><div\x20class=\x22col-1\x20dice-class\x22><img\x20src=\x22images/staticdice.jpg\x22\x20width=\x22150\x22\x20/></div><div\x20class=\x22col-1\x20dice-class\x22><img\x20src=\x22images/staticdice.jpg\x22\x20width=\x22150\x22\x20/></div><div\x20class=\x22col-1\x20dice-class\x22><img\x20src=\x22images/staticdice.jpg\x22\x20width=\x22150\x22\x20/></div><div\x20class=\x22col-1\x20dice-class\x22><img\x20src=\x22images/staticdice.jpg\x22\x20width=\x22150\x22\x20/></div><div\x20class=\x22col-1\x20dice-class\x22><img\x20src=\x22images/staticdice.jpg\x22\x20width=\x22150\x22\x20/></div></div>');
}

function clearApp() {
    var _0x5731ad = _0x2596b5;
    events && events[_0x5731ad(0x153)](), clearAppDisplay(), $('.roll-button')[_0x5731ad(0x17a)](_0x5731ad(0x143), null), $('.roll-button')[_0x5731ad(0x161)](_0x5731ad(0x134)), document['querySelector'](_0x5731ad(0x135))[_0x5731ad(0x147)](_0x5731ad(0x138), 'disabled'), $(_0x5731ad(0x158))['unbind'](_0x5731ad(0x134)), $(_0x5731ad(0x16e))[_0x5731ad(0x161)](_0x5731ad(0x134)), $('#plus')[_0x5731ad(0x161)]('click'), $(_0x5731ad(0x150))[_0x5731ad(0x161)](_0x5731ad(0x134)), rolls_arr = [], $(_0x5731ad(0x17e))[_0x5731ad(0x164)](), $(_0x5731ad(0x16d))['val'](''), $(_0x5731ad(0x140))[_0x5731ad(0x173)]('');
}
$(document)[_0x2596b5(0x16f)](function() {
    var _0x3dac4d = _0x2596b5;
    document[_0x3dac4d(0x15e)]('btn-connect')['click']();
});