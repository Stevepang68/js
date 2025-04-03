export const ZKSYNC_SINGLETON_FACTORY =
  "0xa51baf6a9c0ef5Db8C1898d5aDD92Bf3227d6088" as const;
export const CONTRACT_DEPLOYER_ADDRESS =
  "0x0000000000000000000000000000000000008006" as const;
export const KNOWN_CODES_STORAGE = "0x0000000000000000000000000000000000008004";
export const PUBLISHED_PRIVATE_KEY = process.env.ZKSYNC_PUBLISHED_PRIVATE_KEY;

export const singletonFactoryAbi = [
  "function deploy(bytes32,bytes32,bytes) external payable",
] as const;

export const singletonFactoryBytecode =
  "0x000400000000000200000000030100190000006003300270000000480430019700030000004103550002000000010355000000480030019d000100000000001f0000008001000039000000400010043f0000000101200190000000440000c13d0000000001000031000000040210008c0000004c0000413d0000000202000367000000000302043b0000004a033001970000004b0330009c0000004c0000c13d000000040310008a0000004c04000041000000600530008c000000000500001900000000050440190000004c03300197000000000603004b000000000400a0190000004c0330009c00000000030500190000000003046019000000000303004b0000004c0000c13d0000004403200370000000000303043b0000004d0430009c0000004c0000213d00000023043000390000004c05000041000000000614004b000000000600001900000000060580190000004c071001970000004c04400197000000000874004b0000000005008019000000000474013f0000004c0440009c00000000040600190000000004056019000000000404004b0000004c0000c13d0000000404300039000000000442034f000000000404043b0000004d0540009c0000004c0000213d00000024033000390000000005340019000000000115004b0000004c0000213d0000000401200370000000000101043b0000002402200370000000000202043b011b004e0000040f00000000010000190000011c0001042e0000000001000416000000000101004b0000004c0000c13d00000020010000390000010000100443000001200000044300000049010000410000011c0001042e00000000010000190000011d00010430000000000503001900000000060004140000000003000416000000400700043d0000006408700039000000600900003900000000009804350000004408700039000000000028043500000020027000390000004e08000041000000000082043500000024087000390000000000180435000000840170003900000000004104350000001f0840018f0000004f03300197000000a401700039000000020550036700000005094002720000006d0000613d000000000a000019000000050ba00210000000000cb10019000000000bb5034f000000000b0b043b0000000000bc0435000000010aa00039000000000b9a004b000000650000413d000000000a08004b0000007c0000613d0000000509900210000000000595034f00000000099100190000000308800210000000000a090433000000000a8a01cf000000000a8a022f000000000505043b0000010008800089000000000585022f00000000058501cf0000000005a5019f0000000000590435000000000141001900000000000104350000001f01400039000000200400008a000000000141016f00000084051000390000000000570435000000c301100039000000000141016f0000000001170019000000000471004b000000000400001900000001040040390000004d0510009c000000eb0000213d0000000104400190000000eb0000c13d000000400010043f0000000004070433000000500540009c000000f10000813d00000040012002100000005101100197000000c0026002100000005202200197000000000112019f00000060024002100000005302200197000000000121019f00000054011001c7000000000203004b000000a20000613d0000800902000039000080060400003900000001050000390000000006000019011b01160000040f000000a80000013d00008006020000390000000003000019000000000400001900000000050000190000000006000019011b01160000040f00030000000103550000006001100270000100480010019d00000048031001970000003f013000390000005505100197000000400100043d0000000004150019000000000554004b000000000500001900000001050040390000004d0640009c000000eb0000213d0000000105500190000000eb0000c13d000000400040043f00000000013104360000001f043000390000000504400272000000c70000613d00000000050000310000000205500367000000000600001900000005076002100000000008710019000000000775034f000000000707043b00000000007804350000000106600039000000000746004b000000bf0000413d000000000400004b000000c90000613d0000000104000031000000000443004b000001020000213d00000003050003670000001f0430018f0000000503300272000000d90000613d000000000600001900000005076002100000000008710019000000000775034f000000000707043b00000000007804350000000106600039000000000736004b000000d10000413d000000000604004b000000e80000613d0000000503300210000000000535034f00000000013100190000000303400210000000000401043300000000043401cf000000000434022f000000000505043b0000010003300089000000000535022f00000000033501cf000000000343019f00000000003104350000000101200190000001040000613d000000000001042d0000005a0100004100000000001004350000004101000039000000040010043f0000005b010000410000011d00010430000000440210003900000059030000410000000000320435000000240210003900000008030000390000000000320435000000570200004100000000002104350000000402100039000000200300003900000000003204350000004802000041000000480310009c0000000001028019000000400110021000000058011001c70000011d0001043000000000010000190000011d00010430000000400100043d000000440210003900000056030000410000000000320435000000240210003900000011030000390000000000320435000000570200004100000000002104350000000402100039000000200300003900000000003204350000004802000041000000480310009c0000000001028019000000400110021000000058011001c70000011d0001043000000119002104210000000102000039000000000001042d0000000002000019000000000001042d0000011b000004320000011c0001042e0000011d000104300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff0000000200000000000000000000000000000040000001000000000000000000ffffffff00000000000000000000000000000000000000000000000000000000d76fad23000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffff3cda33510000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffff00000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000ffffffff000000000000000000000000ffffffff00000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001ffffffe04465706c6f796d656e74206661696c656400000000000000000000000000000008c379a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000640000000000000000000000004f766572666c6f770000000000000000000000000000000000000000000000004e487b710000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000240000000000000000000000002c95995010be2e2e7fd9e5c02a9d1b9650531dc66e9319a360a6698b8c648018" as const;

export const twProxyAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

export const twProxyBytecode =
  "0x00040000000000020006000000000002000000000301001900000060033002700000007e04300197000300000041035500020000000103550000007e0030019d000100000000001f0000008001000039000000400010043f00000000010000310000000102200190000000410000c13d0000008402000041000000000202041a0000008202200197000000000310004c0000004d0000c13d0000000001000414000000040320008c0000006a0000613d0000007e0300004100000000040000310000007e0540009c00000000040380190000007e0510009c0000000001038019000000c0011002100000006003400210000000000113019f01f201ed0000040f0003000000010355000000000301001900000060043002700000001f0340018f0001007e0040019d0000007e044001970000000504400272000000300000613d00000000050000190000000506500210000000000761034f000000000707043b00000000007604350000000105500039000000000645004b000000290000413d000000000530004c0000003e0000613d00000003033002100000000504400210000000000504043300000000053501cf000000000535022f000000000141034f000000000101043b0000010003300089000000000131022f00000000013101cf000000000151019f00000000001404350000000101200190000001060000c13d000001090000013d0000009f02100039000000200900008a000000000292016f0000007f03200041000000800330009c000000860000213d000000900100004100000000001004350000004101000039000000040010043f0000009101000041000001f40001043000000002030003670000001f0410018f0000000501100272000000590000613d00000000050000190000000506500210000000000763034f000000000707043b00000000007604350000000105500039000000000615004b000000520000413d000000000540004c000000670000613d00000003044002100000000501100210000000000501043300000000054501cf000000000545022f000000000313034f000000000303043b0000010004400089000000000343022f00000000034301cf000000000353019f00000000003104350000000001000414000000040320008c000000dc0000c13d000000030100036700000001020000310000001f0320018f0000000502200272000000770000613d00000000040000190000000505400210000000000651034f000000000606043b00000000006504350000000104400039000000000524004b000000700000413d000000000430004c000001060000613d00000003033002100000000502200210000000000402043300000000043401cf000000000434022f000000000121034f000000000101043b0000010003300089000000000131022f00000000013101cf000000000141019f0000000000120435000001060000013d000000400020043f0000001f0210018f00000002030003670000000504100272000000940000613d00000000050000190000000506500210000000000763034f000000000707043b000000800660003900000000007604350000000105500039000000000645004b0000008c0000413d000000000520004c000000a30000613d0000000504400210000000000343034f00000003022002100000008004400039000000000504043300000000052501cf000000000525022f000000000303043b0000010002200089000000000323022f00000000022301cf000000000252019f000000000024043500000081020000410000003f0310008c000000000300001900000000030220190000008104100197000000000540004c0000000002008019000000810440009c000000000203c019000000000220004c000000da0000613d000000800a00043d0000008202a001970000008203a0009c000000da0000213d000000a00300043d000000830430009c000000da0000213d00000080041000390000009f013000390000008105000041000000000641004b0000000006000019000000000605801900000081074001970000008101100197000000000871004b0000000005008019000000000171013f000000810110009c00000000010600190000000001056019000000000110004c000000da0000c13d00000080013000390000000001010433000000830510009c000000470000213d0000003f05100039000000000595016f000000400800043d0000000005580019000000000685004b00000000060000190000000106004039000000830750009c000000470000213d0000000106600190000000470000c13d000000400050043f0000000007180436000000a0033000390000000005310019000000000445004b0000010f0000a13d0000000001000019000001f4000104300000007e0300004100000000040000310000007e0540009c00000000040380190000007e0510009c0000000001038019000000c0011002100000006003400210000000000113019f01f201ed0000040f0003000000010355000000000301001900000060043002700000001f0340018f0001007e0040019d0000007e044001970000000504400272000000f60000613d00000000050000190000000506500210000000000761034f000000000707043b00000000007604350000000105500039000000000645004b000000ef0000413d000000000530004c000001040000613d00000003033002100000000504400210000000000504043300000000053501cf000000000535022f000000000141034f000000000101043b0000010003300089000000000131022f00000000013101cf000000000151019f00000000001404350000000101200190000001090000613d000000600100003900000001011001ff000001f30001042e0000007e0100004100000001020000310000007e0320009c00000000010240190000006001100210000001f400010430000000000410004c000001190000613d000000000400001900000000057400190000000006340019000000000606043300000000006504350000002004400039000000000514004b000001120000413d000000000117001900000000000104350000008401000041000000000301041a0000008503300197000000000223019f000000000021041b0000000001080433000000000110004c000001280000c13d0000002001000039000001000010044300000120000004430000008f01000041000001f30001042e000000400300043d000000860130009c000000470000213d0000006001300039000000400010043f0000004001300039000000870200004100000000002104350000002701000039000200000003001d00000000021304360000008801000041000100000002001d0000000000120435000000890100004100000000001004390000000400a004430000007e0100004100000000020004140000007e0320009c0000000001024019000000c0011002100000008a011001c70000800202000039000600000009001d00050000000a001d000400000008001d000300000007001d01f201e80000040f00000003070000290000000404000029000000050600002900000006050000290000000102200190000000da0000613d000000000101043b000000000110004c000001630000c13d000000400100043d00000064021000390000008c03000041000000000032043500000044021000390000008d0300004100000000003204350000002402100039000000260300003900000000003204350000008b0200004100000000002104350000000402100039000000200300003900000000003204350000007e020000410000007e0310009c000000000102801900000040011002100000008e011001c7000001f4000104300000000001000414000000040260008c000001690000c13d000000010200003900000001030000310000017f0000013d0000007e020000410000007e0370009c00000000030200190000000003074019000000400330021000000000040404330000007e0540009c00000000040280190000006004400210000000000334019f0000007e0410009c0000000001028019000000c001100210000000000113019f000000000206001901f201ed0000040f0000000605000029000000010220018f000300000001035500000060011002700001007e0010019d0000007e031001970000006001000039000000000430004c000001a50000c13d000000000220004c000001230000c13d0000000021010434000000000310004c000001d20000c13d000000400400043d000500000004001d0000008b01000041000000000014043500000004014000390000002002000039000000000021043500000002010000290000000003010433000400000003001d000000240140003900000000003104350000004402400039000000010100002901f201db0000040f00000004010000290000001f011000390000000602000029000000000121016f00000044011000390000007e020000410000007e0310009c000000000102801900000005040000290000007e0340009c000000000204401900000040022002100000006001100210000000000121019f000001f400010430000000830130009c000000470000213d0000003f01300039000000000451016f000000400100043d0000000004410019000000000514004b00000000050000190000000105004039000000830640009c000000470000213d0000000105500190000000470000c13d000000400040043f0000000003310436000000030400036700000001060000310000001f0560018f0000000506600272000001c20000613d000000000700001900000005087002100000000009830019000000000884034f000000000808043b00000000008904350000000107700039000000000867004b000001ba0000413d000000000750004c000001820000613d0000000506600210000000000464034f00000000036300190000000305500210000000000603043300000000065601cf000000000656022f000000000404043b0000010005500089000000000454022f00000000045401cf000000000464019f0000000000430435000001820000013d0000007e030000410000007e0420009c00000000020380190000007e0410009c000000000103801900000060011002100000004002200210000000000121019f000001f400010430000000000430004c000001e50000613d000000000400001900000000052400190000000006140019000000000606043300000000006504350000002004400039000000000534004b000001de0000413d00000000012300190000000000010435000000000001042d000001eb002104230000000102000039000000000001042d0000000002000019000000000001042d000001f0002104250000000102000039000000000001042d0000000002000019000000000001042d000001f200000432000001f30001042e000001f40001043000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffffffffffff000000000000007f8000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000ffffffffffffffff360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbcffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffff9f206661696c656400000000000000000000000000000000000000000000000000416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c1806aa1896bbf26568e884a7374b41e002500962caba6a15023a8d90e8508b83020000020000000000000000000000000000002400000000000000000000000008c379a0000000000000000000000000000000000000000000000000000000006e74726163740000000000000000000000000000000000000000000000000000416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f000000000000000000000000000000000000008400000000000000000000000000000002000000000000000000000000000000400000010000000000000000004e487b710000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000240000000000000000000000004eac19f774d2aa18cb028e3f83aa2c1f0c443d0b4b93f1861958946a249100cb" as const;
