'use strict';
const _0x3087a4 = _0x31b4;
(function(_0x178bbc, _0x2bd01d) {
    const _0x531cd8 = _0x31b4,
        _0x389374 = _0x178bbc();
    while (!![]) {
        try {
            const _0xf3ee2f = parseInt(_0x531cd8(0x208)) / 0x1 + parseInt(_0x531cd8(0x1eb)) / 0x2 * (-parseInt(_0x531cd8(0x25f)) / 0x3) + -parseInt(_0x531cd8(0x1f5)) / 0x4 * (parseInt(_0x531cd8(0x1fc)) / 0x5) + -parseInt(_0x531cd8(0x263)) / 0x6 + parseInt(_0x531cd8(0x205)) / 0x7 * (parseInt(_0x531cd8(0x266)) / 0x8) + parseInt(_0x531cd8(0x217)) / 0x9 + parseInt(_0x531cd8(0x22b)) / 0xa * (-parseInt(_0x531cd8(0x210)) / 0xb);
            if (_0xf3ee2f === _0x2bd01d) break;
            else _0x389374['push'](_0x389374['shift']());
        } catch (_0x75d678) {
            _0x389374['push'](_0x389374['shift']());
        }
    }
}(_0x2f73, 0x9bd55));
const Web3Modal = window['Web3Modal']['default'],
    WalletConnectProvider = window[_0x3087a4(0x232)]['default'],
    Fortmatic = window[_0x3087a4(0x206)],
    evmChains = window['evmChains'];
let chainIds = {
        '1': _0x3087a4(0x273),
        '8': _0x3087a4(0x213),
        '10': _0x3087a4(0x259),
        '19': _0x3087a4(0x24d),
        '20': _0x3087a4(0x26d),
        '24': _0x3087a4(0x25d),
        '25': 'cronos',
        '30': _0x3087a4(0x246),
        '40': 'telos',
        '50': _0x3087a4(0x21b),
        '52': _0x3087a4(0x224),
        '55': _0x3087a4(0x250),
        '56': _0x3087a4(0x218),
        '57': _0x3087a4(0x262),
        '60': 'gochain',
        '61': _0x3087a4(0x1d6),
        '66': _0x3087a4(0x253),
        '70': _0x3087a4(0x245),
        '82': 'meter',
        '87': _0x3087a4(0x229),
        '88': 'tomochain',
        '100': _0x3087a4(0x1e1),
        '106': _0x3087a4(0x200),
        '108': _0x3087a4(0x24e),
        '122': _0x3087a4(0x27a),
        '128': 'heco',
        '137': _0x3087a4(0x21e),
        '200': _0x3087a4(0x1f9),
        '246': _0x3087a4(0x261),
        '250': _0x3087a4(0x223),
        '269': _0x3087a4(0x23b),
        '288': 'boba',
        '321': 'kucoin',
        '336': 'shiden',
        '361': 'theta',
        '416': 'sx',
        '534': _0x3087a4(0x23d),
        '592': _0x3087a4(0x202),
        '820': 'callisto',
        '888': _0x3087a4(0x23e),
        '1088': _0x3087a4(0x21a),
        '1231': _0x3087a4(0x255),
        '1234': _0x3087a4(0x1f4),
        '1284': 'moonbeam',
        '1285': _0x3087a4(0x1fe),
        '2000': _0x3087a4(0x276),
        '2222': _0x3087a4(0x1e0),
        '4689': _0x3087a4(0x1e7),
        '5050': _0x3087a4(0x1d2),
        '5551': 'nahmii',
        '6969': 'tombchain',
        '7700': _0x3087a4(0x1e3),
        '8217': 'klaytn',
        '9001': _0x3087a4(0x230),
        '10000': 'smartbch',
        '32520': _0x3087a4(0x23a),
        '32659': _0x3087a4(0x248),
        '39815': _0x3087a4(0x20b),
        '42161': 'arbitrum',
        '42170': 'arb-nova',
        '42220': 'celo',
        '42262': 'oasis',
        '43114': _0x3087a4(0x20e),
        '47805': _0x3087a4(0x21f),
        '55555': 'reichain',
        '71402': _0x3087a4(0x269),
        '333999': _0x3087a4(0x265),
        '420420': _0x3087a4(0x241),
        '888888': _0x3087a4(0x264),
        '1313161554': _0x3087a4(0x26b),
        '1666600000': _0x3087a4(0x1fd),
        '11297108109': _0x3087a4(0x24a),
        '836542336838601': _0x3087a4(0x268)
    },
    web3Modal, provider, selectedAccount, selectedChainId;

function init() {
    const _0x1db48b = _0x3087a4;
    console[_0x1db48b(0x1da)](_0x1db48b(0x1ea)), clearApp(), document[_0x1db48b(0x22c)]('btn-disconnect')[_0x1db48b(0x231)][_0x1db48b(0x1f2)] = 'none', $[_0x1db48b(0x237)][_0x1db48b(0x1db)](_0x1db48b(0x1f8), {
        'html': _0x1db48b(0x236),
        'classes': {
            'base': {
                'font-size': _0x1db48b(0x249),
                'font-weight': 'bold',
                'padding': _0x1db48b(0x26c),
                'text-shadow': _0x1db48b(0x215),
                'background-color': _0x1db48b(0x1f3),
                'border': _0x1db48b(0x258),
                'border-radius': _0x1db48b(0x25b),
                'white-space': _0x1db48b(0x228),
                'padding-left': _0x1db48b(0x1d8),
                'background-repeat': _0x1db48b(0x1fa),
                'background-position': _0x1db48b(0x1ed)
            },
            'error': {
                'color': _0x1db48b(0x1e9),
                'background-color': _0x1db48b(0x240),
                'border-color': _0x1db48b(0x1dc),
                'background-image': _0x1db48b(0x226)
            },
            'success': {
                'color': _0x1db48b(0x22d),
                'background-color': _0x1db48b(0x1ff),
                'border-color': '#D6E9C6',
                'background-image': _0x1db48b(0x24f)
            },
            'info': {
                'color': _0x1db48b(0x214),
                'background-color': _0x1db48b(0x1d5),
                'border-color': _0x1db48b(0x260),
                'background-image': 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QYFAhkSsdes/QAAA8dJREFUOMvVlGtMW2UYx//POaWHXg6lLaW0ypAtw1UCgbniNOLcVOLmAjHZolOYlxmTGXVZdAnRfXQm+7SoU4mXaOaiZsEpC9FkiQs6Z6bdCnNYruM6KNBw6YWewzl9z+sHImEWv+vz7XmT95f/+3/+7wP814v+efDOV3/SoX3lHAA+6ODeUFfMfjOWMADgdk+eEKz0pF7aQdMAcOKLLjrcVMVX3xdWN29/GhYP7SvnP0cWfS8caSkfHZsPE9Fgnt02JNutQ0QYHB2dDz9/pKX8QjjuO9xUxd/66HdxTeCHZ3rojQObGQBcuNjfplkD3b19Y/6MrimSaKgSMmpGU5WevmE/swa6Oy73tQHA0Rdr2Mmv/6A1n9w9suQ7097Z9lM4FlTgTDrzZTu4StXVfpiI48rVcUDM5cmEksrFnHxfpTtU/3BFQzCQF/2bYVoNbH7zmItbSoMj40JSzmMyX5qDvriA7QdrIIpA+3cdsMpu0nXI8cV0MtKXCPZev+gCEM1S2NHPvWfP/hL+7FSr3+0p5RBEyhEN5JCKYr8XnASMT0xBNyzQGQeI8fjsGD39RMPk7se2bd5ZtTyoFYXftF6y37gx7NeUtJJOTFlAHDZLDuILU3j3+H5oOrD3yWbIztugaAzgnBKJuBLpGfQrS8wO4FZgV+c1IxaLgWVU0tMLEETCos4xMzEIv9cJXQcyagIwigDGwJgOAtHAwAhisQUjy0ORGERiELgG4iakkzo4MYAxcM5hAMi1WWG1yYCJIcMUaBkVRLdGeSU2995TLWzcUAzONJ7J6FBVBYIggMzmFbvdBV44Corg8vjhzC+EJEl8U1kJtgYrhCzgc/vvTwXKSib1paRFVRVORDAJAsw5FuTaJEhWM2SHB3mOAlhkNxwuLzeJsGwqWzf5TFNdKgtY5qHp6ZFf67Y/sAVadCaVY5YACDDb3Oi4NIjLnWMw2QthCBIsVhsUTU9tvXsjeq9+X1d75/KEs4LNOfcdf/+HthMnvwxOD0wmHaXr7ZItn2wuH2SnBzbZAbPJwpPx+VQuzcm7dgRCB57a1uBzUDRL4bfnI0RE0eaXd9W89mpjqHZnUI5Hh2l2dkZZUhOqpi2qSmpOmZ64Tuu9qlz/SEXo6MEHa3wOip46F1n7633eekV8ds8Wxjn37Wl63VVa+ej5oeEZ/82ZBETJjpJ1Rbij2D3Z/1trXUvLsblCK0XfOx0SX2kMsn9dX+d+7Kf6h8o4AIykuffjT8L20LU+w4AZd5VvEPY+XpWqLV327HR7DzXuDnD8r+ovkBehJ8i+y8YAAAAASUVORK5CYII=)'
            },
            'warn': {
                'color': '#C09853',
                'background-color': _0x1db48b(0x244),
                'border-color': '#FBEED5',
                'background-image': _0x1db48b(0x271)
            }
        }
    });
    if (location[_0x1db48b(0x1de)] !== _0x1db48b(0x1fb)) {
        const _0x276038 = document['querySelector'](_0x1db48b(0x1d1));
        _0x276038[_0x1db48b(0x231)][_0x1db48b(0x1f2)] = _0x1db48b(0x211), document[_0x1db48b(0x254)]('#btn-connect')[_0x1db48b(0x256)](_0x1db48b(0x201), _0x1db48b(0x201));
        return;
    }
    const _0x1bab53 = {
        'walletconnect': {
            'package': WalletConnectProvider,
            'options': {
                'rpc': {
                    0x38: _0x1db48b(0x227),
                    0x61: _0x1db48b(0x1e5),
                    0x89: _0x1db48b(0x25e),
                    0x6c: _0x1db48b(0x21c)
                },
                'infuraId': _0x1db48b(0x1d3)
            }
        }
    };
    web3Modal = new Web3Modal({
        'cacheProvider': ![],
        'providerOptions': _0x1bab53,
        'disableInjectedProvider': ![]
    });
}
async function fetchAccountData() {
    const _0x48e31a = _0x3087a4;
    clearApp();
    const _0x2461e8 = new Web3(provider);
    selectedChainId = await _0x2461e8[_0x48e31a(0x251)][_0x48e31a(0x1df)]();
    if (!appContext[_0x48e31a(0x270)](selectedChainId)) {
        chainIds[_0x48e31a(0x270)](selectedChainId) ? ($(_0x48e31a(0x23f))[_0x48e31a(0x237)](chainIds[selectedChainId] + _0x48e31a(0x20c), {
            'style': 'app',
            'className': _0x48e31a(0x203)
        }), $(_0x48e31a(0x234))[_0x48e31a(0x1ef)](chainIds[selectedChainId] + _0x48e31a(0x277))) : ($('#status')['notify'](_0x48e31a(0x222) + selectedChainId + '\x20yet!', {
            'style': 'app',
            'className': _0x48e31a(0x203)
        }), $(_0x48e31a(0x234))[_0x48e31a(0x1ef)](_0x48e31a(0x220) + selectedChainId + _0x48e31a(0x277)));
        $('#supported\x20tbody\x20tr')['remove']();
        for (let _0x1f522a in appContext) {
            chainIds[_0x48e31a(0x270)](_0x1f522a) && $(_0x48e31a(0x257))[_0x48e31a(0x1d4)](_0x48e31a(0x24b) + appContext[_0x1f522a]['logo'] + _0x48e31a(0x275) + chainIds[_0x1f522a] + '</td></tr>');
        }
        $(_0x48e31a(0x233))['modal']('show'), onDisconnect(), clearApp();
        throw new Error(_0x48e31a(0x26e) + selectedChainId);
    }
    const _0x149f16 = evmChains[_0x48e31a(0x1f1)](selectedChainId),
        _0x1f3270 = await _0x2461e8[_0x48e31a(0x251)][_0x48e31a(0x235)]();
    selectedAccount = _0x1f3270[0x0];
    let _0x2b5163 = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/,
        _0x1f4bf3 = selectedAccount[_0x48e31a(0x207)](_0x2b5163),
        _0x3f62b6;
    !_0x1f4bf3 ? _0x3f62b6 = selectedAccount : _0x3f62b6 = _0x1f4bf3[0x1] + _0x48e31a(0x272) + _0x1f4bf3[0x2];
    const _0x3b01f3 = _0x1f3270['map'](async _0x114c75 => {
        const _0x244fd4 = _0x48e31a,
            _0x3d6d1e = await _0x2461e8['eth'][_0x244fd4(0x20d)](_0x114c75),
            _0x5a48ba = _0x2461e8['utils'][_0x244fd4(0x1d0)](_0x3d6d1e, _0x244fd4(0x1f6));
    });
    await Promise[_0x48e31a(0x1e4)](_0x3b01f3), initApp(appContext[selectedChainId], _0x1f3270)[_0x48e31a(0x204)](function() {
        const _0x2bece1 = _0x48e31a;
        $(_0x2bece1(0x23f))[_0x2bece1(0x237)](_0x2bece1(0x279) + _0x149f16[_0x2bece1(0x212)], {
            'style': 'app',
            'className': _0x2bece1(0x22f)
        }), document[_0x2bece1(0x254)]('#saddress')[_0x2bece1(0x231)][_0x2bece1(0x1f2)] = _0x2bece1(0x211), $(_0x2bece1(0x1e6))[_0x2bece1(0x1ef)](_0x3f62b6), document['getElementById'](_0x2bece1(0x24c))[_0x2bece1(0x231)][_0x2bece1(0x1f2)] = _0x2bece1(0x211), document[_0x2bece1(0x22c)](_0x2bece1(0x1f0))['style'][_0x2bece1(0x1f2)] = _0x2bece1(0x1e8), document[_0x2bece1(0x254)](_0x2bece1(0x21d))[_0x2bece1(0x231)][_0x2bece1(0x1f2)] = _0x2bece1(0x211), $(_0x2bece1(0x21d))[_0x2bece1(0x278)]('src', appContext[selectedChainId][_0x2bece1(0x238)]);
    })[_0x48e31a(0x1f7)](function(_0x353388) {
        const _0x4fe1f9 = _0x48e31a;
        console[_0x4fe1f9(0x1da)](_0x353388), $(_0x4fe1f9(0x23f))[_0x4fe1f9(0x237)](_0x353388[_0x4fe1f9(0x26a)], {
            'style': _0x4fe1f9(0x1f8),
            'className': _0x4fe1f9(0x203)
        }), clearApp();
        throw new Error(_0x353388);
    });
}
async function refreshAccountData() {
    const _0x2a1f26 = _0x3087a4;
    $(_0x2a1f26(0x23f))[_0x2a1f26(0x237)](_0x2a1f26(0x247), {
        'style': 'app',
        'className': 'info'
    }), document['querySelector']('#btn-connect')[_0x2a1f26(0x256)](_0x2a1f26(0x201), _0x2a1f26(0x201)), document[_0x2a1f26(0x22c)]('btn-connect')[_0x2a1f26(0x231)]['display'] = _0x2a1f26(0x1e8);
    var _0x13abaa = fetchAccountData(provider)[_0x2a1f26(0x204)](function() {
        const _0x49209a = _0x2a1f26;
        document[_0x49209a(0x22c)](_0x49209a(0x24c))[_0x49209a(0x231)][_0x49209a(0x1f2)] = 'block';
    })['catch'](function(_0x1eeda7) {
        const _0x36fbdc = _0x2a1f26;
        document['querySelector'](_0x36fbdc(0x225))[_0x36fbdc(0x1ee)](_0x36fbdc(0x201)), document[_0x36fbdc(0x22c)](_0x36fbdc(0x1f0))[_0x36fbdc(0x231)]['display'] = 'block', document['querySelector'](_0x36fbdc(0x1e6))['style'][_0x36fbdc(0x1f2)] = _0x36fbdc(0x1e8);
    });
    await Promise[_0x2a1f26(0x1e4)]([_0x13abaa]);
}
async function onConnect() {
    const _0x19d430 = _0x3087a4;
    onDisconnect();
    try {
        provider = await web3Modal[_0x19d430(0x252)]();
    } catch (_0x173727) {
        console[_0x19d430(0x1da)](_0x19d430(0x216), _0x173727);
        return;
    }
    provider['on'](_0x19d430(0x23c), _0x485b85 => {
        const _0x460eb0 = _0x19d430;
        console[_0x460eb0(0x1da)](_0x460eb0(0x1ec) + _0x485b85), fetchAccountData();
    }), provider['on'](_0x19d430(0x221), _0x3d8665 => {
        const _0x30f8cf = _0x19d430;
        console[_0x30f8cf(0x1da)]('chainChanged:\x20' + _0x3d8665), clearApp(), fetchAccountData();
    }), await refreshAccountData(), $('#accptTOS')[_0x19d430(0x267)] != 0x0 && (document[_0x19d430(0x22c)](_0x19d430(0x1d9))[_0x19d430(0x1dd)] = !![], document['getElementById'](_0x19d430(0x1d9))[_0x19d430(0x201)] = !![]);
}
async function onDisconnect() {
    const _0x4e9f06 = _0x3087a4;
    provider && (clearApp(), provider[_0x4e9f06(0x20a)] && (await provider[_0x4e9f06(0x20a)](), await web3Modal[_0x4e9f06(0x219)](), provider = null), $(_0x4e9f06(0x23f))[_0x4e9f06(0x237)]('Disconnected.', {
        'style': _0x4e9f06(0x1f8),
        'className': _0x4e9f06(0x209)
    })), document['getElementById'](_0x4e9f06(0x24c))[_0x4e9f06(0x231)]['display'] = _0x4e9f06(0x1e8), document[_0x4e9f06(0x22c)](_0x4e9f06(0x1f0))[_0x4e9f06(0x231)]['display'] = _0x4e9f06(0x211), document[_0x4e9f06(0x254)]('#btn-connect')[_0x4e9f06(0x1ee)]('disabled'), document[_0x4e9f06(0x254)]('#saddress')[_0x4e9f06(0x231)][_0x4e9f06(0x1f2)] = _0x4e9f06(0x1e8), document['querySelector'](_0x4e9f06(0x21d))[_0x4e9f06(0x231)][_0x4e9f06(0x1f2)] = _0x4e9f06(0x1e8), $(_0x4e9f06(0x21d))[_0x4e9f06(0x278)](_0x4e9f06(0x25a), ''), selectedAccount = null;
}
async function onTOS() {
    const _0x5dbff4 = _0x3087a4;
    $(_0x5dbff4(0x22e))[_0x5dbff4(0x20f)]('hidden.bs.modal'), $(_0x5dbff4(0x22e))[_0x5dbff4(0x25c)]('show'), $('#staticTos')['on']('hidden.bs.modal', async () => {
        const _0x6617bd = _0x5dbff4;
        $(_0x6617bd(0x22e))[_0x6617bd(0x20f)](_0x6617bd(0x1d7)), $(_0x6617bd(0x26f))[_0x6617bd(0x267)] != 0x0 && (document[_0x6617bd(0x22c)]('accpt')[_0x6617bd(0x1dd)] = !![], document['getElementById'](_0x6617bd(0x1d9))['disabled'] = !![], document[_0x6617bd(0x22c)](_0x6617bd(0x274))['disabled'] = !![], document[_0x6617bd(0x254)](_0x6617bd(0x26f))[_0x6617bd(0x242)]('click', onTOS));
    });
}

function _0x2f73() {
    const _0x3f89de = ['3833796AwYYSP', 'vision', 'polis', '424nepkZM', 'length', 'curio', 'godwoken', 'message', 'aurora', '8px\x2015px\x208px\x2014px', 'elastos', 'Unsupported\x20chain:\x20', '#accptTOS', 'hasOwnProperty', 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABJlBMVEXr6eb/2oD/wi7/xjr/0mP/ykf/tQD/vBj/3o7/uQ//vyL/twebhgD/4pzX1K3z8e349vK6tHCilCWbiQymn0jGworr6dXQza3HxcKkn1vWvV/5uRfk4dXZ1bD18+/52YebiAmyr5S9mhCzrWq5t6ufjRH54aLs0oS+qD751XqPhAybhwXsujG3sm+Zk0PTwG6Shg+PhhObhwOPgQL4zV2nlyrf27uLfgCPhRHu7OmLgAafkyiWkD3l49ibiAfTs0C+lgCniwD4sgDJxqOilzDWowWFfAH08uebig6qpFHBvH/aw26FfQTQzsvy8OyEfz20r3jAvaKbhgG9q0nc2LbZxXanoUu/u5WSggCtp1anpJKdmFz/zlX/1nGJiYmuq5Dx7+sAAADoPUZSAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfdBgUBGhh4aah5AAAAlklEQVQY02NgoBIIE8EUcwn1FkIXM1Tj5dDUQhPU502Mi7XXQxGz5uVIjGOJUUUW81HnYEyMi2HVcUOICQZzMMYmxrEyMylJwgUt5BljWRLjmJm4pI1hYp5SQLGYxDgmLnZOVxuooClIDKgXKMbN5ggV1ACLJcaBxNgcoiGCBiZwdWxOETBDrTyEFey0jYJ4eHjMGWgEAIpRFRCUt08qAAAAAElFTkSuQmCC)', '...', 'ethereum', 'accptTOS', '\x22\x20width=\x2283\x22\x20/></td><td>', 'dogechain', '\x20yet!', 'attr', 'Connected\x20to:\x20', 'fuse', 'fromWei', '#alert-error-https', 'xlc', '31783977f92543a98baa9ba3e3029211', 'prepend', '#D9EDF7', 'ethereumclassic', 'hidden.bs.modal', '25px', 'accpt', 'log', 'addStyle', '#EED3D7', 'checked', 'protocol', 'getChainId', 'kava', 'xdai', 'scrollTo', 'canto', 'all', 'https://bsc-testnet.public.blastapi.io', '#saddress', 'iotex', 'none', '#B94A48', 'Initializing\x20common', '2032QHDYzu', 'accountsChanged:\x20', '3px\x2014px', 'removeAttribute', 'html', 'btn-connect', 'getChain', 'display', '#fcf8e3', 'step', '240cRYldf', 'ether', 'catch', 'app', 'xdaiarb', 'no-repeat', 'https:', '15995vmgsWO', 'harmony', 'moonriver', '#DFF0D8', 'velas', 'disabled', 'astar', 'error', 'then', '137886ReiRWO', 'Fortmatic', 'match', '682855NkyFZN', 'info', 'close', 'oho', '\x20blockchain\x20not\x20supported\x20yet!', 'getBalance', 'avalanche', 'unbind', '143VnMKNh', 'block', 'name', 'ubiq', '#3A87AD', '0\x201px\x200\x20rgba(255,\x20255,\x20255,\x200.5)', 'Could\x20not\x20get\x20a\x20wallet\x20connection', '4574385dzEEzF', 'binance', 'clearCachedProvider', 'metis', 'xdc', 'https://mainnet-rpc.thundercore.com', '#logo', 'polygon', 'rei', '\x20chain\x20id:', 'chainChanged', 'Unsupported\x20blockchain\x20with\x20id:\x20', 'fantom', 'csc', '#btn-connect', 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtRJREFUeNqkVc1u00AQHq+dOD+0poIQfkIjalW0SEGqRMuRnHos3DjwAH0ArlyQeANOOSMeAA5VjyBxKBQhgSpVUKKQNGloFdw4cWw2jtfMOna6JOUArDTazXi/b3dm55socPqQhFka++aHBsI8GsopRJERNFlY88FCEk9Yiwf8RhgRyaHFQpPHCDmZG5oX2ui2yilkcTT1AcDsbYC1NMAyOi7zTX2Agx7A9luAl88BauiiQ/cJaZQfIpAlngDcvZZMrl8vFPK5+XktrWlx3/ehZ5r9+t6e+WVnp1pxnNIjgBe4/6dAysQc8dsmHwPcW9C0h3fW1hans1ltwJhy0GxK7XZbUlMp5Ww2eyan6+ft/f2FAqXGK4CvQk5HueFz7D6GOZtIrK+srupdx1GRBBqNBtzc2AiMr7nPplRdKhb1q6q6zjFhrklEFOUutoQ50xcX86ZlqaZpQrfbBdu2R6/G19zX6XSgh6RX5ubyHCM8nqSID6ICrGiZjGYYxojEsiw4PDwMSL5VKsC8Yf4VRYFzMzMaxwjlJSlCyAQ9l0CW44PBADzXhe7xMdi9HtTrdYjFYkDQL0cn4Xdq2/EAE+InCnvADTf2eah4Sx9vExQjkqXT6aAERICMewd/UAp/IeYANM2joxt+q5VI+ieq2i0Wg3l6DNzHwTERPgo1ko7XBXj3vdlsT2F+UuhIhYkp7u7CarkcrFOCtR3H5JiwbAIeImjT/YQKKBtGjRFCU5IUgFRe7fF4cCNVIPMYo3VKqxwjyNAXNepuopyqnld602qVsfRpEkkz+GFL1wPj6ySXBpJtWVa5xlhpcyhBNwpZHmtX8AGgfIExo0ZpzkWVTBGiXCSEaHh62/PoR0p/vHaczxXGnj4bSo+G78lELU80h1uogBwWLf5YlsPmgDEd4M236xjm+8nm4IuE/9u+/PH2JXZfbwz4zw1WbO+SQPpXfwG/BBgAhCNZiSb/pOQAAAAASUVORK5CYII=)', 'https://bscrpc.com', 'nowrap', 'nova\x20network', 'addEventListener', '154630mRLSKc', 'getElementById', '#468847', '#staticTos', 'success', 'evmos', 'style', 'WalletConnectProvider', '#unsupportedModal', '#unsup', 'getAccounts', '<div>\x0a<span\x20data-notify-text></span>\x0a</div>', 'notify', 'logo', '#btn-disconnect', 'bitgert', 'hpb', 'accountsChanged', 'candle', 'wanchain', '#status', '#F2DEDE', 'kekchain', 'removeEventListener', 'click', '#FCF8E3', 'hoo', 'rsk', 'Connecting...', 'fusion', '20px', 'palm', '<tr><td><img\x20src=\x22', 'btn-disconnect', 'songbird', 'thundercore', 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAutJREFUeNq0lctPE0Ecx38zu/RFS1EryqtgJFA08YCiMZIAQQ4eRG8eDGdPJiYeTIwHTfwPiAcvXIwXLwoXPaDxkWgQ6islKlJLSQWLUraPLTv7Gme32zoF9KSTfLO7v53vZ3d/M7/fIth+IO6INt2jjoA7bjHCJoAlzCRw59YwHYjBnfMPqAKWQYKjGkfCJqAF0xwZjipQtA3MxeSG87VhOOYegVrUCy7UZM9S6TLIdAamySTclZdYhFhRHloGYg7mgZv1Zzztvgud7V1tbQ2twYA34LJmF4p5dXF1KTufnE+SxeJtuCZNsLDCQU0+RyKTF27Unw101l8e6hns3u0PBalORVVVkcaEKBJDgV3+cGM4tKKmI+ohlIGnygKX00rSBfszz/n2uXv81wd6+rt1orsZCHRdr1Imk2F2Kob3hutSxW8thsd8AXNaln9D7CTfA6O+0UgkMuwVvEFFUbbAcrkcTA8+AtOk8E6KiQiDmMFSDqZItAzEVQviRkdDdaFgPp8HSZKAEAL5Qh7Sq2lIJBJwv2scUqkUnKoZgNhcDKhKg5aH+1IkcouCAdFGAQsuWZYhOjwFHQ96oagWgRoUov1T9kRBEODAwxM2QtEUl+Wp+Ln9VRo6BcMw4ErHRYjH4/B26AlQoQQTRdHWwcd9AH57+UAXddvDD37DmrBBV34WfqiXPl61g+vr6xA9zsGeM9gOdsNXkgpEtTwVvwOklXLKm6+/p5ezwk4B+j6droBs2CsGa/gNs6RIxazl4Tc25mpTgw/apPR1LYlNRFAzgsOxkyXYLIM1V8NMwyAkJSctD1eGVKiq5wWjSPdjmeTkiKvVW4f2YPHWl3GAVq6ymcyCTgovM3FzyRiDe2TaKcEKsLpJvNHjZgPNqEtyi6mZIm4SRFyLMUsONSSdkPeFtY1n0mczoY3BHTLhwPRy9/lzcziCw9ACI+yql0VLzcGAZbYSM5CCSZg1/9oc/nn7+i8N9p/8An4JMADxhH+xHfuiKwAAAABJRU5ErkJggg==)', 'zyx', 'eth', 'connect', 'okexchain', 'querySelector', 'ultron', 'setAttribute', '#supported\x20tbody', '1px\x20solid\x20#fbeed5', 'optimism', 'src', '4px', 'modal', 'kardiachain', 'https://polygon-rpc.com/', '1668UKGiMw', '#BCE8F1', 'energyweb', 'syscoin'];
    _0x2f73 = function() {
        return _0x3f89de;
    };
    return _0x2f73();
}

function _0x31b4(_0x29a822, _0x5d3749) {
    const _0x2f73ca = _0x2f73();
    return _0x31b4 = function(_0x31b465, _0x1fe87e) {
        _0x31b465 = _0x31b465 - 0x1d0;
        let _0x8fa178 = _0x2f73ca[_0x31b465];
        return _0x8fa178;
    }, _0x31b4(_0x29a822, _0x5d3749);
}
window[_0x3087a4(0x22a)]('load', async () => {
    const _0x48f240 = _0x3087a4;
    window[_0x48f240(0x1e2)](0x0, 0x0), init(), $(_0x48f240(0x26f))[_0x48f240(0x267)] != 0x0 && document[_0x48f240(0x254)](_0x48f240(0x26f))[_0x48f240(0x22a)](_0x48f240(0x243), onTOS), $('#accpt')['change'](function() {
        const _0x2100ea = _0x48f240;
        this['checked'] && ($(_0x2100ea(0x26f))[_0x2100ea(0x267)] != 0x0 && (document[_0x2100ea(0x22c)](_0x2100ea(0x1d9))[_0x2100ea(0x1dd)] = !![], document[_0x2100ea(0x22c)](_0x2100ea(0x1d9))[_0x2100ea(0x201)] = !![], document[_0x2100ea(0x22c)](_0x2100ea(0x274))[_0x2100ea(0x201)] = !![], document[_0x2100ea(0x254)]('#accptTOS')[_0x2100ea(0x242)](_0x2100ea(0x243), onTOS), $(_0x2100ea(0x22e))[_0x2100ea(0x20f)](_0x2100ea(0x1d7))));
    }), document[_0x48f240(0x254)](_0x48f240(0x225))[_0x48f240(0x22a)]('click', onConnect), document[_0x48f240(0x254)](_0x48f240(0x239))['addEventListener'](_0x48f240(0x243), onDisconnect);
});