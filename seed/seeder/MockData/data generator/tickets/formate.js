import * as fs from 'fs';

const datas = [
    {
      "price": 1200,
      "barcode": "0x085dabd441d484d1dfd19cfd64aa521a269ea578",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 5
    },
    {
      "price": 400,
      "barcode": "0x5f202281fdf20dae2df94257bc11646aaae3bad4",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 60
    },
    {
      "price": 1200,
      "barcode": "0xebc82c946bdd4e80d2be5bf7505d255b0a4ea939",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 30
    },
    {
      "price": 1200,
      "barcode": "0xdb9fb58507e76b1e436dea73fda4023b0a1d7ac4",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 37
    },
    {
      "price": 1200,
      "barcode": "0xe0f3fb80906c569dc15c9437e60c05c9bf1bcd41",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 12
    },
    {
      "price": 1200,
      "barcode": "0x2cf948a8ddc6447535c1071feb9bc9a73ef954f1",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 12
    },
    {
      "price": 200,
      "barcode": "0xcc29279837401d129f8a82674d5b5ec5a0542553",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 38
    },
    {
      "price": 200,
      "barcode": "0xef9ed26fdb6563549a7876373c7a5653e2f80be7",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 51
    },
    {
      "price": 1200,
      "barcode": "0x83dedef9af70188263cf9dda7360feb7eb93f117",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 41
    },
    {
      "price": 200,
      "barcode": "0x0f56a7ffd1d142057e6a6610cda533ad759a04ed",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 4
    },
    {
      "price": 1200,
      "barcode": "0x6af41a436c6f107dedf0189eebf02fe7bb0a2418",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 11
    },
    {
      "price": 400,
      "barcode": "0xf0d690d4864e09d95252ae4b82fd2865fcb4f74d",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 58
    },
    {
      "price": 400,
      "barcode": "0xa077cf4fb93a04c29789c59e2e0c5d763deffeb8",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 11
    },
    {
      "price": 800,
      "barcode": "0x379d807c93af1188f9f087718af6c40f2bcea3d4",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 57
    },
    {
      "price": 200,
      "barcode": "0x257cfbadcaacf1f35d64c77d616200fbedb0fd07",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 46
    },
    {
      "price": 400,
      "barcode": "0x10473f6dc22ce7852684fb2c2490e93ec00def01",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 43
    },
    {
      "price": 1200,
      "barcode": "0x4c512221068cfa6836c75804aafa62ea3a672727",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 53
    },
    {
      "price": 1200,
      "barcode": "0x865b9b9e450133219f017bfdd47761c1da8ad20c",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 51
    },
    {
      "price": 800,
      "barcode": "0xe7c5c5a0b00c0a0089cad978b93e520f42960449",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 32
    },
    {
      "price": 800,
      "barcode": "0x617c91bde78247a1d6cdb391a8802a018160e11a",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 64
    },
    {
      "price": 800,
      "barcode": "0xfe4caf5455ab6ec6d377505e6372ff572d28c010",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 11
    },
    {
      "price": 1200,
      "barcode": "0x3b11c2247a073a1e110ee3209e58cba76933133e",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 20
    },
    {
      "price": 1200,
      "barcode": "0x37a28eefa097c302a6103c36a979cdb2dc95600b",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 7
    },
    {
      "price": 200,
      "barcode": "0xcb68a921c0ed30aa9851172cc909889cc63054ab",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 14
    },
    {
      "price": 800,
      "barcode": "0xab353d2fa778dc751e9c5e164a71f2aaba9af26b",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 4
    },
    {
      "price": 200,
      "barcode": "0xa85529cc41b96d3fe68f77dd692b6bc015d815d3",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 6
    },
    {
      "price": 800,
      "barcode": "0xb271ab4bcebe4d3228e06b7b9e7b8ab24be37cd8",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 15
    },
    {
      "price": 200,
      "barcode": "0x998b216dbd7dad43c477a8c6b3222a3f618726b5",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 48
    },
    {
      "price": 800,
      "barcode": "0xdca1a097202f9f96c1efa4da707b8a67063e0c28",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 55
    },
    {
      "price": 1200,
      "barcode": "0xdfb0098d300d48dfe2605ce2e4275cdc02af205b",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 58
    },
    {
      "price": 400,
      "barcode": "0x2561b89cb6aa2d1357d92f5033ffe3c184c61daa",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 60
    },
    {
      "price": 1200,
      "barcode": "0x2a59385eb7a882b5f6b82a27b1b287a007c8ade7",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 8
    },
    {
      "price": 400,
      "barcode": "0x97b11a34f4476617797e1415fe30e0d7badbeec9",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 58
    },
    {
      "price": 200,
      "barcode": "0x831493733b7c716f7425e1ece98bf4916b59f146",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 3
    },
    {
      "price": 400,
      "barcode": "0xe44074074022987ac9b95403fda0004a84457fcc",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 31
    },
    {
      "price": 400,
      "barcode": "0xa0e53054836cd2b5f4149947acb7c6dc0410e1be",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 25
    },
    {
      "price": 400,
      "barcode": "0x730a116091949b83c403d0f2c1036d0c08fd39d5",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 38
    },
    {
      "price": 400,
      "barcode": "0x17c2f851d4cc26137d84e2733b9ecbad60777bcf",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 7
    },
    {
      "price": 1200,
      "barcode": "0x812825501028ba7049e6dc283d52426aa2e62460",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 8
    },
    {
      "price": 1200,
      "barcode": "0xa059cc89e2262b93387eda588b8b79a9cf67fde1",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 25
    },
    {
      "price": 400,
      "barcode": "0x19c639bbd95e2d6c9a401318c3d287f212d012b0",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 7
    },
    {
      "price": 1200,
      "barcode": "0x5ba6bed8dcda3e65828c5dec9c81cf671b914093",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 24
    },
    {
      "price": 200,
      "barcode": "0xbfa7b0a76a56daec78d1dc36e30de4dcf3a83839",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 47
    },
    {
      "price": 800,
      "barcode": "0x3c216abc74c5b23433aff6ed10d41a2ca09a7663",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 46
    },
    {
      "price": 200,
      "barcode": "0x62e589110f6af323b07285744a82a75441d803e6",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 7
    },
    {
      "price": 200,
      "barcode": "0x8e58c8931c1214598d0c4a1ca5de8241bf89cec1",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 51
    },
    {
      "price": 400,
      "barcode": "0x149c6308639c3297b37fe12669bcf3a59942eb42",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 64
    },
    {
      "price": 800,
      "barcode": "0x98df7dfe59db9d6de3330534439ca510a2b897c1",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 37
    },
    {
      "price": 200,
      "barcode": "0x2be542a36f1aa20b12681dea6330e8564ebe2790",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 61
    },
    {
      "price": 1200,
      "barcode": "0xdd75e9e43c6a3499d27dce02340796ed4ac35125",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 38
    },
    {
      "price": 800,
      "barcode": "0x5eed910ffd197f5b828ee7121c28f67f645e754d",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 23
    },
    {
      "price": 800,
      "barcode": "0x0a60c7af6362ad4272c87b4f3e860ea66b030337",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 30
    },
    {
      "price": 200,
      "barcode": "0x2e72c78bbb7615439959bb1414bee14b96cd7c63",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 24
    },
    {
      "price": 400,
      "barcode": "0xde000e4d94ea84ada3800fb3a2ad63c3d4978219",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 30
    },
    {
      "price": 800,
      "barcode": "0x6f42983e52f8f2103c03d2b863803a2f27e8db4c",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 59
    },
    {
      "price": 800,
      "barcode": "0x4680868fc6e84cd6518097213946fa5c953d6d4d",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 20
    },
    {
      "price": 800,
      "barcode": "0xac420099f5c5c67a3e7a8196ccbbe03ef20f024e",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 35
    },
    {
      "price": 1200,
      "barcode": "0xf5fba6322e8ad79dcefb9cbc82bb8814cb2b76c0",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 50
    },
    {
      "price": 1200,
      "barcode": "0x049eb16e74b311359d433d2a03646cb19570a84f",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 31
    },
    {
      "price": 800,
      "barcode": "0xe62e2b38a239f5a3b5df88e7281c71b43f2c7675",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 43
    },
    {
      "price": 800,
      "barcode": "0x6748eb8d02e2b2939844d8bb0788f95189a01911",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 51
    },
    {
      "price": 400,
      "barcode": "0x35e3af62cb8727e1185a70dc8e12880ba36e3bc8",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 11
    },
    {
      "price": 400,
      "barcode": "0xa9364d8a3dfaff676700781bf8ac3e52fa9cfdc9",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 20
    },
    {
      "price": 200,
      "barcode": "0xaa5a3274dfcd60ce951c33af209116141aba8451",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 12
    },
    {
      "price": 200,
      "barcode": "0x946be84f221474dbf2a9269f658f1ebf0b796abb",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 51
    },
    {
      "price": 1200,
      "barcode": "0xa936476a6de6d02f0b42d9ecf0ca2c124efb50cd",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 11
    },
    {
      "price": 200,
      "barcode": "0x185b92b89d8da08d3d1bc086b8a47bb78e57c808",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 43
    },
    {
      "price": 800,
      "barcode": "0x1720e7ce47648a07706f592ad65a3c0437ec2725",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 56
    },
    {
      "price": 200,
      "barcode": "0x3da352d5d7748044ff8f0e94a93344beb7b6bfb8",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 28
    },
    {
      "price": 1200,
      "barcode": "0xeca667981441d2937b214a290cf4fbdaecdd3e46",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 63
    },
    {
      "price": 400,
      "barcode": "0xa5584960af4cd0724cb14b23400d7623ef983246",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 21
    },
    {
      "price": 400,
      "barcode": "0x07feaf5bcb1f139e26fa770ed549a7ad2855c04b",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 6
    },
    {
      "price": 800,
      "barcode": "0x365f22702569bf8d1570a6bab476bd5c97ba0c6a",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 60
    },
    {
      "price": 400,
      "barcode": "0x156e1b4bf7e5602cd5f5c5f0c30697d79160d847",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 39
    },
    {
      "price": 400,
      "barcode": "0xb3ef0b53a60df03397faed9777f48847055e58ee",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 34
    },
    {
      "price": 400,
      "barcode": "0xf33a3269a6027b89b9d2d17390cf5a596549222c",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 60
    },
    {
      "price": 200,
      "barcode": "0x88fbc6c74648c09c6af3d98d4cc5725afd34acaa",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 34
    },
    {
      "price": 1200,
      "barcode": "0x27efdf2598459f762f333b7651c9f0c059cd1170",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 27
    },
    {
      "price": 400,
      "barcode": "0x78b29d441bebc7ef6d68f9062aa30d42d16c20f8",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 60
    },
    {
      "price": 400,
      "barcode": "0x66cef192e5f6838096efb10df4bce124d4507aa4",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 63
    },
    {
      "price": 800,
      "barcode": "0x08f4200ac7206450bc4161f4d8be297c2f944357",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 22
    },
    {
      "price": 1200,
      "barcode": "0x8378840418fd4a63fe8490fd97510b6f0f68d90b",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 8
    },
    {
      "price": 800,
      "barcode": "0xed57a10e1a00800fc2b867e9cc1c2db71ad6c26d",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 19
    },
    {
      "price": 400,
      "barcode": "0x9cb9604eb46276c1e34c824bf9f4c12c16fc4e80",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 11
    },
    {
      "price": 200,
      "barcode": "0x7638d60431328374405a5d4dcac5cc51c6259d4a",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 12
    },
    {
      "price": 200,
      "barcode": "0x32e6193a078da3f70381476c758f41ee37e994ec",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 17
    },
    {
      "price": 200,
      "barcode": "0xd764b3758fed0b54d0b2aa66335cb3473c183ec6",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 45
    },
    {
      "price": 800,
      "barcode": "0x40ebac7839ad4dc799768a913839f58b8beed44e",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 58
    },
    {
      "price": 200,
      "barcode": "0x6e6c0366773be315fbe12fbb5cfd09a2195c0369",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 52
    },
    {
      "price": 1200,
      "barcode": "0x24e83b29a7936be8146fee1e41b1604dfe6df653",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 26
    },
    {
      "price": 200,
      "barcode": "0x737200d36f665c33aee4199be391bc04f71ea319",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 48
    },
    {
      "price": 800,
      "barcode": "0x9e5fedc62f1c0bd9659f138b56a8b9fc6ec7b506",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 49
    },
    {
      "price": 800,
      "barcode": "0xc402fff5d2080a15c80f8742b4f3a17ef83481af",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 28
    },
    {
      "price": 200,
      "barcode": "0xc656aefbc8ac16d519791f15da1c0d05e5a857f8",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 33
    },
    {
      "price": 200,
      "barcode": "0x88b254bfef15a7f4a9d509ca93c3124465ec4ae1",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 46
    },
    {
      "price": 200,
      "barcode": "0x96add0f90a247fcf9b13dcc08e4b5e411f734249",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 34
    },
    {
      "price": 1200,
      "barcode": "0x94c3433b21c5278e0ef885a2ecbccb39b7a334f1",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 41
    },
    {
      "price": 800,
      "barcode": "0xde94873ef25e0fb00f2a7f07c6c0645548ae5cef",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 41
    },
    {
      "price": 800,
      "barcode": "0x94a59223f9d78af97ae50ec01eec5b9627eed91f",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 29
    },
    {
      "price": 800,
      "barcode": "0x7b9a1075e9f662f0286ef4842b05d71694b88845",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 53
    },
    {
      "price": 1200,
      "barcode": "0xabc8a3c9a8ebfb15c2c42b68ec6d2b16a0641584",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 8
    },
    {
      "price": 800,
      "barcode": "0x3d8fe2cf8b6f4e8b7db05380049dd1934a89a99c",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 1
    },
    {
      "price": 800,
      "barcode": "0x8afc655367114922fe10a7820aa30ee572904cbf",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 7
    },
    {
      "price": 400,
      "barcode": "0x215c2994579931acdca152f6c49e26144a706452",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 30
    },
    {
      "price": 400,
      "barcode": "0x0cb7cda6f009e7f4ea5ecc403751578aea709001",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 59
    },
    {
      "price": 200,
      "barcode": "0x8356534ff19a75ccac43e83f24fbb1fed365bd97",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 28
    },
    {
      "price": 200,
      "barcode": "0x26a6aa65e6ece1f1e3075a03377f6c73dbc84ea5",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 12
    },
    {
      "price": 200,
      "barcode": "0x4fd914e25d16001978e9ff9599a29ed2e0118ede",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 46
    },
    {
      "price": 1200,
      "barcode": "0xef29dc36f70edfe731e864a552ea2e172d8fb8fb",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 52
    },
    {
      "price": 800,
      "barcode": "0x791d0cc7355b3d27c8fe236e985ceece5b9719a1",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 23
    },
    {
      "price": 800,
      "barcode": "0x9ae74bc6188c02bab830a705f1fa0c145b5ff6d8",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 11
    },
    {
      "price": 1200,
      "barcode": "0x4a3cc00ccac1fb107d272791b73780db49416675",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 13
    },
    {
      "price": 200,
      "barcode": "0x5795dcd8d8f18c2c9b3aafeacc933da13e814d9b",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 50
    },
    {
      "price": 1200,
      "barcode": "0x32e5c7f7c830488c722798cd70d08262ab50a56b",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 42
    },
    {
      "price": 1200,
      "barcode": "0x1ac7ca5a171f1f66dd468818a5befdd37509a45e",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 46
    },
    {
      "price": 200,
      "barcode": "0x62759127183f7baf618d7d01db3aad772a5493b2",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 13
    },
    {
      "price": 400,
      "barcode": "0x8d967793cc50d496958f66c8cef9bbe842c3faab",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 20
    },
    {
      "price": 400,
      "barcode": "0xcaececa33d20f1d07499845ed66d166eb291265b",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 23
    },
    {
      "price": 200,
      "barcode": "0x83869427597eb8c3e2f96431a24dbe11581d6ed3",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 10
    },
    {
      "price": 200,
      "barcode": "0xd9474f593b70c768ea29fdfcd6774c90c0c48a7b",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 17
    },
    {
      "price": 400,
      "barcode": "0xa72990a93cd02aab03bf552797761fc065231723",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 7
    },
    {
      "price": 800,
      "barcode": "0x964ca09bf9f71015baf840f831f36af8d703f922",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 25
    },
    {
      "price": 400,
      "barcode": "0x49753d64cba85a1a8b5e547be62ed823edaa3251",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 59
    },
    {
      "price": 200,
      "barcode": "0xfd163bf4389259481ed3e6c0f21af32758df799d",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 32
    },
    {
      "price": 800,
      "barcode": "0xf253e8c8898bcd9a6c585bf39e963cc18e2df6c6",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 35
    },
    {
      "price": 800,
      "barcode": "0x644178e1de28c5bcbfb153083de8fbed0941934d",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 44
    },
    {
      "price": 400,
      "barcode": "0x3a917b2041a2727e52fec64c52797ff1bcfc00bb",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 48
    },
    {
      "price": 400,
      "barcode": "0x7270e7558eb78268d4a6df75556a38893d7f416d",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 52
    },
    {
      "price": 400,
      "barcode": "0x53333550b1384d8731bf033e0c98dc84ffeabcfb",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 17
    },
    {
      "price": 1200,
      "barcode": "0x53a4f368773ef9b1ece09978417203cc6628f6fb",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 21
    },
    {
      "price": 400,
      "barcode": "0x867788b102f87bd4f57b51d12e54a1826166757d",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 30
    },
    {
      "price": 400,
      "barcode": "0x55ca6644766fe14ddb35dff16eab4a0fd8a53d38",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 48
    },
    {
      "price": 1200,
      "barcode": "0x195bb3976b61007a4d4c0faf69ba8cbedbc43328",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 20
    },
    {
      "price": 800,
      "barcode": "0x8045f8bf238b5b4ab2ec7314f77f005cebda85ee",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 31
    },
    {
      "price": 800,
      "barcode": "0x037bc096c9a324693753194a7aa16fc2947c3732",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 33
    },
    {
      "price": 400,
      "barcode": "0x941731fa2f33cebbc1891783246929fed8b47ec7",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 47
    },
    {
      "price": 800,
      "barcode": "0x1e74f7e300b18a6f9ab3d4b3c3da1414a87cca94",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 23
    },
    {
      "price": 800,
      "barcode": "0xdcd153677babf92fe73111164ac0620d38af9e99",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 1
    },
    {
      "price": 400,
      "barcode": "0x40e7d1d39bb0731eb0b2ec211ab0a8b8bed95418",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 59
    },
    {
      "price": 400,
      "barcode": "0xcbffad2dc5137b6c551aa2b05399ecadb7e3011e",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 13
    },
    {
      "price": 800,
      "barcode": "0x9f0a0a51bd06945073da676fb13c88be30a6179b",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 31
    },
    {
      "price": 1200,
      "barcode": "0xc54c4e0837bc4d433ea8ef8cf54c46aba1b0e55d",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 34
    },
    {
      "price": 200,
      "barcode": "0xe43e8e7e02780815a2a508b89bb1f97b635e0e2c",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 48
    },
    {
      "price": 200,
      "barcode": "0x2f6e72f203c4a958513acb85f88cc3191af8e244",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 63
    },
    {
      "price": 800,
      "barcode": "0xb303fd52e33b12db071844de668d8c2c4a127cd3",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 25
    },
    {
      "price": 400,
      "barcode": "0xa20f3c4ca25a1c49f436231a968c9e0a650624de",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 30
    },
    {
      "price": 400,
      "barcode": "0x324f39a5f792b69a58569ad6540d9a3a1b3a3c1e",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 15
    },
    {
      "price": 400,
      "barcode": "0x58ed5210e473d11d7b2941bc0a6f90314ad3db17",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 57
    },
    {
      "price": 400,
      "barcode": "0x994a489669a7f3968161a5e37c3ace33ee08a222",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 23
    },
    {
      "price": 200,
      "barcode": "0x0101ce1c0b8a219925da128cdd623a03dcba44c4",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 57
    },
    {
      "price": 400,
      "barcode": "0x44209d1e09ce43ae2c4262a416ab7df329535132",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 50
    },
    {
      "price": 800,
      "barcode": "0x2924cacc1de924fba1d3b014a907b5a4be935e42",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 61
    },
    {
      "price": 400,
      "barcode": "0x7c78632f16bf5cab29e7e245f09b93ed4c61dad9",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 26
    },
    {
      "price": 1200,
      "barcode": "0x6418c81e897c21108dfeb16545703bdbe1b69555",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 35
    },
    {
      "price": 400,
      "barcode": "0x40e0341eb6bdcb403fcbfba2c58da28838e15924",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 5
    },
    {
      "price": 800,
      "barcode": "0xe35c1c348952cda5f9f72c1fdfa5c34d21ac13f9",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 21
    },
    {
      "price": 800,
      "barcode": "0x4229da3ce3b3b86c2eb6c31db7d6ad9de0137c83",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 63
    },
    {
      "price": 400,
      "barcode": "0xa0dab739bd42512f42a095c377e8dcdfe290997e",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 52
    },
    {
      "price": 400,
      "barcode": "0x63694031ccfb5dd3b50a9f71eed3d08a8baf4257",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 40
    },
    {
      "price": 400,
      "barcode": "0xc04b4aee86434999d74c67d97c1626db85017c1a",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 34
    },
    {
      "price": 800,
      "barcode": "0x1c97e6279365da30c764977700c6fc376591fd1d",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 20
    },
    {
      "price": 400,
      "barcode": "0x39fbd405db15f2ca04dc643ea5fe4cfdfc5fba27",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 14
    },
    {
      "price": 200,
      "barcode": "0xb1e2d6819b311135d90352422abb5ad881fff685",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 38
    },
    {
      "price": 1200,
      "barcode": "0xf681ef0ce7851389ba44f80429dc848245ba6454",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 12
    },
    {
      "price": 1200,
      "barcode": "0xc52bb99725225232c5dd6929917841719244cf8b",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 23
    },
    {
      "price": 200,
      "barcode": "0xde724c7cd91352e48ca35550622f6cf6cac1b74e",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 23
    },
    {
      "price": 200,
      "barcode": "0x29c00da88ef055d7c80183fa6f8705d56d06beb7",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 7
    },
    {
      "price": 1200,
      "barcode": "0x109328dd2d400112cb2a5f6b858a676533ea718a",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 54
    },
    {
      "price": 200,
      "barcode": "0x93db425937a6dab38ddd5f453bf6d062ee42a444",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 54
    },
    {
      "price": 800,
      "barcode": "0xb1b8d05ffb3a3bde836153cbb36d97e80023419b",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 46
    },
    {
      "price": 400,
      "barcode": "0x605d47c83e3618d4133e4e38e65cef21361e9071",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 32
    },
    {
      "price": 800,
      "barcode": "0x95a173b61767af1f9ce2088e53f2ea7d0420a1f0",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 5
    },
    {
      "price": 800,
      "barcode": "0x93d9f44607e9631a9aa28f3a2d561f2bd2793e5e",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 5
    },
    {
      "price": 800,
      "barcode": "0x2a1ba57ddc1d082bba0254cd47891c0e2d8fdc6a",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 40
    },
    {
      "price": 1200,
      "barcode": "0xbf7cb76a90cd0374feaf5ba82781cd9720f782f0",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 43
    },
    {
      "price": 200,
      "barcode": "0xb545eb1ca94f00abe20db73c3ae43c324dda5631",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 39
    },
    {
      "price": 1200,
      "barcode": "0xd3cc012a37ed2b478aa99bd0a46754765a295b49",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 41
    },
    {
      "price": 800,
      "barcode": "0x59b7de5def0429989b9cdcc24eab1877eefc89a2",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 31
    },
    {
      "price": 400,
      "barcode": "0xdf02b55905228c6a9f511b00e5059ed3781ffd72",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 21
    },
    {
      "price": 800,
      "barcode": "0x77926f854d25d754989da6ee4152a5bc477cc933",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 46
    },
    {
      "price": 1200,
      "barcode": "0xdc2f9c8ff0107da99e469e50974e74661ea14e77",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 38
    },
    {
      "price": 200,
      "barcode": "0xec441c74f2014e40182ed10dd684a5754f2a1a1c",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 60
    },
    {
      "price": 1200,
      "barcode": "0x4d2194b8c638c1fbb71430a314951d410753606f",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 44
    },
    {
      "price": 1200,
      "barcode": "0xc0026049fe1fe8e578feb0cf0c436c0fdaa85b4c",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 27
    },
    {
      "price": 1200,
      "barcode": "0x61d4aa44c4a8c610ccf5cf62409323026d05e1bd",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 8
    },
    {
      "price": 1200,
      "barcode": "0xe8ab711beb98806abb95b2523598c49303877ebf",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 58
    },
    {
      "price": 1200,
      "barcode": "0x4272a5763c02942e1fd7465e36627f4f12265acb",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 22
    },
    {
      "price": 200,
      "barcode": "0xf5c3ac9ff09273b0c7ada4f522a0f26403f3f4c8",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 55
    },
    {
      "price": 800,
      "barcode": "0xdc48915be614fa39be9ceb8bc0cce437d7c2c90a",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 47
    },
    {
      "price": 400,
      "barcode": "0x222726af44e07d2f04a83349553dbd1374ddc8e5",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 15
    },
    {
      "price": 800,
      "barcode": "0xb043f34194d803af63d28e9737b3a69f51c46dc4",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 52
    },
    {
      "price": 1200,
      "barcode": "0x2ecc02c013005a1846e5410df5a7cb5a613d01de",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 46
    },
    {
      "price": 400,
      "barcode": "0x7a19b55aaa3d09ae55b3e55508060ce4563e0d79",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 59
    },
    {
      "price": 200,
      "barcode": "0x977d671e3246d9c432b66b8ea16311edf8868899",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 33
    },
    {
      "price": 1200,
      "barcode": "0x20dcbf12926febb04b17cd01a79af4d61a4b2f43",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 11
    },
    {
      "price": 1200,
      "barcode": "0x6bd3a39dce44ca8474428736f3fe670eaacb341e",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 17
    },
    {
      "price": 1200,
      "barcode": "0x4630834ce6e0e9c60ff904b8038bf6b69d6bc059",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 48
    },
    {
      "price": 800,
      "barcode": "0x65a602af4b110c64d70f8767c920172225655dd0",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 35
    },
    {
      "price": 800,
      "barcode": "0xb5da812878ed81669b6c7a84631dffb2cde15e9e",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 39
    },
    {
      "price": 1200,
      "barcode": "0xec22ee6331bc6f1ea3154a5ff104354e6a66fdaa",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 27
    },
    {
      "price": 1200,
      "barcode": "0x1b65a7d79ffb6d5b260f3616b51dc8475403596a",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 7
    },
    {
      "price": 800,
      "barcode": "0xfd182257c096a76ed3e395aaf5b277afffe2c254",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 33
    },
    {
      "price": 400,
      "barcode": "0xd3ff611e88b2d46908c2d2f08f0350a07ef0e2ee",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 50
    },
    {
      "price": 800,
      "barcode": "0x56627acbf2649ec85387784e7cd7607e857c5a71",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 52
    },
    {
      "price": 1200,
      "barcode": "0xc26a6d5b3d9f8d817fa8f0e25c32eb5360730140",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 27
    },
    {
      "price": 1200,
      "barcode": "0x74d2c093ab8ad2990ab504c4b733799bbf40b214",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 48
    },
    {
      "price": 1200,
      "barcode": "0x62c049d0ebeef287a3909e86bf8a73233dd54ee9",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 7
    },
    {
      "price": 800,
      "barcode": "0xaca5fd375bf54816364cc33993c345c647c4215d",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 7
    },
    {
      "price": 1200,
      "barcode": "0x2c4c2c11a49196355e24cc66abe35093d2f5cd35",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 23
    },
    {
      "price": 800,
      "barcode": "0xdb5f69595d26123c17786967063f1dffa133c1ed",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 1
    },
    {
      "price": 400,
      "barcode": "0x51ca90b5021dd613e13144fc0c6fe17c9088f222",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 18
    },
    {
      "price": 1200,
      "barcode": "0xd3cb809441c2f5df258e9aecbd8ec1aef40b49ad",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 26
    },
    {
      "price": 1200,
      "barcode": "0x1ac935152023dbc96ddc4c8350656a070f8ded94",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 10
    },
    {
      "price": 1200,
      "barcode": "0xcf106aa254182b4bf07860d175eb9c8ce1830026",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 28
    },
    {
      "price": 200,
      "barcode": "0x9f39d3bb23bb4b532238e101442368e3c16bed89",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 36
    },
    {
      "price": 1200,
      "barcode": "0x3fd12d6625da602c35d54becbe0d94c934817e5c",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 3
    },
    {
      "price": 800,
      "barcode": "0xf8a83039a36f7acd903dc6b6730ad320f56aad98",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 11
    },
    {
      "price": 400,
      "barcode": "0xf0f6bf0e0729f6811018abd085b8bcb2cba5e1fe",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 19
    },
    {
      "price": 400,
      "barcode": "0xf3101bf111366ad51e3306ed596ff0e0328af8d6",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 39
    },
    {
      "price": 400,
      "barcode": "0xd68290834839a0135251af15c1b98e037f291e91",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 7
    },
    {
      "price": 800,
      "barcode": "0x0660651cd630644e155d5ee9eb9a6b61f64eab83",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 60
    },
    {
      "price": 200,
      "barcode": "0x8a60bedb24e3dccf3aadfb2edbb9862874f20796",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 48
    },
    {
      "price": 400,
      "barcode": "0xe34b805f7113e063072d6810e79951d2997b1d2a",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 37
    },
    {
      "price": 1200,
      "barcode": "0xcae042fdf8d64db28a5154bdf282daa55cbff732",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 62
    },
    {
      "price": 1200,
      "barcode": "0x499bb052224819873e4e92f8db4d6c51728e8131",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 38
    },
    {
      "price": 400,
      "barcode": "0x24864314823aa37552a1175cb9d60822976806f0",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 54
    },
    {
      "price": 400,
      "barcode": "0x31267350de61095144a94498bbafc9b886bcfbd9",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 15
    },
    {
      "price": 400,
      "barcode": "0xf087a85666075ece37e68b94fd870a6a74a552db",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 18
    },
    {
      "price": 1200,
      "barcode": "0x50ed3b3d10ae197da65ee35235d619216928a352",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 36
    },
    {
      "price": 200,
      "barcode": "0x6108ab38648c422a2d47f260475b20aeda650d2f",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 60
    },
    {
      "price": 200,
      "barcode": "0x1e9b7390908931079bfe98c4f13347b86de14d65",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 23
    },
    {
      "price": 1200,
      "barcode": "0xb8cff4070e3a404b2100aacb319d47aff816926a",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 34
    },
    {
      "price": 400,
      "barcode": "0xc982abb52dcdbe43d0109d46bbd5fa834b21068b",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 60
    },
    {
      "price": 400,
      "barcode": "0x7e2a90f150f53d0e1229b4897b60b2fcc670dc5c",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 24
    },
    {
      "price": 1200,
      "barcode": "0x1fd33debc1024d587f07119efce6cc799b49f0aa",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 32
    },
    {
      "price": 200,
      "barcode": "0x0bb350131e7591909359e251801cbdfee43eef43",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 31
    },
    {
      "price": 800,
      "barcode": "0x86f05411cb74f7bbdda37fcb3901b6fb74b0db2c",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 49
    },
    {
      "price": 800,
      "barcode": "0xb642d5de8f05907f3e71a895750762a95d6d3bfb",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 49
    },
    {
      "price": 1200,
      "barcode": "0x81cc074f8f88ebd70f8a4a3fbe00e75118712b26",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 45
    },
    {
      "price": 200,
      "barcode": "0xfbd45e66541117deef8a47a73e4d201e794cff3f",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 57
    },
    {
      "price": 200,
      "barcode": "0xf22558eb9d403790f41f1ae89f7f4dc3a76e8ff1",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 37
    },
    {
      "price": 800,
      "barcode": "0x10f370c57fcc077332bd44bb79442f8b7e80d5c9",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 4
    },
    {
      "price": 1200,
      "barcode": "0x4cf7fdc0b78f45d30ed2ce552f7bd30035117d2a",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 22
    },
    {
      "price": 400,
      "barcode": "0xc0d2c8e997efaeb6800b5edc27737bb1a7d12dd7",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 3
    },
    {
      "price": 1200,
      "barcode": "0xc904d779456e864cceb1f6c6129758e8698b3e40",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 38
    },
    {
      "price": 200,
      "barcode": "0xafa7d045040110599ad0673ad1f76c69e583107e",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 54
    },
    {
      "price": 400,
      "barcode": "0xfe8c8f64e70c6bc04c8a979978b00f91d7d3af7b",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 44
    },
    {
      "price": 400,
      "barcode": "0x03d59b0f51c357445cb10f6a3282759ab8effd3b",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 12
    },
    {
      "price": 1200,
      "barcode": "0xfa7b797e1840ce4df5b8296709dc2ab310a71723",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 2
    },
    {
      "price": 200,
      "barcode": "0x648865334bccf8598716caaf1e191530120b7d20",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 36
    },
    {
      "price": 800,
      "barcode": "0xe4311e7a3d39deff56c4da8c77abe2fb753dfc79",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 44
    },
    {
      "price": 200,
      "barcode": "0x18de47427d019ba07d405ef8a81cdc22addd11e8",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 2
    },
    {
      "price": 200,
      "barcode": "0x958c5e642bbbbd811a7f26ae0e35fb1303156130",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 39
    },
    {
      "price": 200,
      "barcode": "0xd6acab5ef6538c14f7a6dace5984f5f47584e3fc",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 27
    },
    {
      "price": 1200,
      "barcode": "0xd27b7f5673db118cb0d4333d77bd07083aaeee9d",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 56
    },
    {
      "price": 400,
      "barcode": "0xf6e614b2b1f96f54e04f82293013f8ebcfbeb9ba",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 35
    },
    {
      "price": 800,
      "barcode": "0xd6a803183855f5374f8c8d5aec08708947e5751e",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 5
    },
    {
      "price": 800,
      "barcode": "0x55ff5e170b5c7f6abdee15a86f9b1bb8d7f03a38",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 22
    },
    {
      "price": 400,
      "barcode": "0x2769be0759c4a760b5bbd8c090d39f8022afad73",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 44
    },
    {
      "price": 400,
      "barcode": "0x7e2450c4bbd8fa33bb967374cab6517d64201d6a",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 39
    },
    {
      "price": 400,
      "barcode": "0x6ae983a6b42f9131c584105da7c79658d533fd4b",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 45
    },
    {
      "price": 800,
      "barcode": "0x9fafb1bde6814ad2f88f76d15d5eabfbb4ac2ea6",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 38
    },
    {
      "price": 1200,
      "barcode": "0x7b89addb074a6d5e72024357ef1202ac7c7b07da",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 53
    },
    {
      "price": 1200,
      "barcode": "0x0b757bc1221d9c9572769da47a5ea3ac107467d3",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 33
    },
    {
      "price": 400,
      "barcode": "0xf7bf71336cdc8815b6a658e12b3c81c0bc9d09e3",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 8
    },
    {
      "price": 400,
      "barcode": "0xb8c30d72b21064da5d9e9028e9e2a42b0882237c",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 48
    },
    {
      "price": 400,
      "barcode": "0x33b1e855ecb95464c217a9e11aa1a44305ef9b02",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 62
    },
    {
      "price": 400,
      "barcode": "0xc98eec472d7d699179b45d463557308f790e3109",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 32
    },
    {
      "price": 1200,
      "barcode": "0xafe41108c488bdcd4801d3708a1027eb38f8219f",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 1
    },
    {
      "price": 1200,
      "barcode": "0x591ad2dc50d96193d7a6cdf3c4af559ca7651379",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 21
    },
    {
      "price": 800,
      "barcode": "0x2769efb12f9e433c07d482bbe304b5d485db2451",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 18
    },
    {
      "price": 800,
      "barcode": "0xdbad90d0ad3a735b13afd4b9b03dbf8985ab22de",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 8
    },
    {
      "price": 1200,
      "barcode": "0xa9ce9922a19d33d70bce6ebfdf4e22fe154b4852",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 6
    },
    {
      "price": 1200,
      "barcode": "0x7f5dcfc7e5962041675c9cd124150b01bacb9b63",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 37
    },
    {
      "price": 400,
      "barcode": "0xae6e9cc3cb9032935e2aba228d5601ade672fac8",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 45
    },
    {
      "price": 1200,
      "barcode": "0xe9c1981db42034bdc2a0f185f3bccf3eec9cf952",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 4
    },
    {
      "price": 1200,
      "barcode": "0x8c812aebdb00710493b1408f4939e573b9297f8f",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 9
    },
    {
      "price": 800,
      "barcode": "0x3c871db44a139356fbdab983391d779eba7ed38e",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 55
    },
    {
      "price": 200,
      "barcode": "0x5726026691d4581b3bc1fc373230316019b94dea",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 57
    },
    {
      "price": 400,
      "barcode": "0x1ee06ab25dc6496ba54090d66d75e2bf6fce8f14",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 25
    },
    {
      "price": 1200,
      "barcode": "0xe46b556cf6099b913ebf599680e4940c09f3963a",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 8
    },
    {
      "price": 400,
      "barcode": "0x4fb455dd5b55be4788bb2b09bd735a3f74f55300",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 8
    },
    {
      "price": 1200,
      "barcode": "0x443538f7f00b43ac586167266ea759d87f7aba10",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 49
    },
    {
      "price": 1200,
      "barcode": "0xdde67ea7040a3c4dfebc152920d2ae17d6b26286",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 12
    },
    {
      "price": 1200,
      "barcode": "0x925c8b84f24449344aa25e6cadc5b95f35ebe116",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 29
    },
    {
      "price": 200,
      "barcode": "0xfaccd250389cf47de55844ced6d27c8ddfc1a591",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 59
    },
    {
      "price": 200,
      "barcode": "0x58bbda253f750e373c23b3f82a80653f1cfbc10d",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 5
    },
    {
      "price": 1200,
      "barcode": "0xd0c2e507a307b5f5f9ff305c61dd2c4bebe42ea6",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 21
    },
    {
      "price": 200,
      "barcode": "0x48ffea209741cdd8d97d15415417c6031d0b4944",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 19
    },
    {
      "price": 800,
      "barcode": "0x78fdde7e8ff82aa71e5c63fed45c7a3541b917e0",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 22
    },
    {
      "price": 1200,
      "barcode": "0x0a0f927975e7210c6c1cf785fae13f4d1364b3f8",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 21
    },
    {
      "price": 800,
      "barcode": "0x1864ae9ff567402026b0e8a11a593299af950b23",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 1
    },
    {
      "price": 800,
      "barcode": "0x5831cbfa3ab7f33b4a9933c79bd2b61db4133776",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 1
    },
    {
      "price": 1200,
      "barcode": "0x98549021e8d6f39a11f9406c87bf537d90e81825",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 32
    },
    {
      "price": 800,
      "barcode": "0x5b8406bf3983ef66e15f91391a2252c9396fc5af",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 4
    },
    {
      "price": 200,
      "barcode": "0xc72ec7f7eaf8c07cc21134a8b5d721c9fb0d93c9",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 40
    },
    {
      "price": 200,
      "barcode": "0x63b6c382faf335753c4167766677362f60d22bca",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 3
    },
    {
      "price": 1200,
      "barcode": "0x5c36b388b90657b3032a0351c7b574443b620a35",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 7
    },
    {
      "price": 400,
      "barcode": "0x7f22176854a818320194ee49d80fd3166e3fbf7f",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 10
    },
    {
      "price": 800,
      "barcode": "0x70a6bbba56536dbfd55e74a97591d1ffa39928d1",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 9
    },
    {
      "price": 400,
      "barcode": "0xf16f56efdbe8b8d6071863dec086e7a0cc02b002",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 43
    },
    {
      "price": 1200,
      "barcode": "0xf50abc5c516c2e8e4b7387a1fbee103e3f8e6849",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 53
    },
    {
      "price": 800,
      "barcode": "0x94d5d51f153c65705a3d8da1af2ddf0c7c76163a",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 22
    },
    {
      "price": 1200,
      "barcode": "0x0ebf380e126c2a9889bd57c45ac62fb628effd21",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 14
    },
    {
      "price": 200,
      "barcode": "0x8a6374c4df26f291193ff837fab7e3db1c9d2e05",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 37
    },
    {
      "price": 400,
      "barcode": "0x5f0569e3785ae1118384764fcd939f13613f44d6",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 18
    },
    {
      "price": 400,
      "barcode": "0xbe75de6a099c48445722b23c63d1d8dfb06a7ee7",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 29
    },
    {
      "price": 200,
      "barcode": "0xfc7140320e01ddbe64ff3a292a35d477e5b90ec7",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 19
    },
    {
      "price": 400,
      "barcode": "0x90dadb7d29845ea591f822a3402ee8a80cf7a330",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 10
    },
    {
      "price": 800,
      "barcode": "0x96b260cc111fbf01dab3a0f6496ef44dcc68e3b9",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 34
    },
    {
      "price": 800,
      "barcode": "0x133b80aff6bd1321ae037e62385532b234c721cc",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 23
    },
    {
      "price": 400,
      "barcode": "0xeb34ca59e50b66218c5236c1cbc7905ec913a63e",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 39
    },
    {
      "price": 1200,
      "barcode": "0x99babcf5662d86346864978dfa0c02694e174321",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 1
    },
    {
      "price": 200,
      "barcode": "0x374345a4bd29840dd6d07fb22d9afbc0cff7b4bb",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 28
    },
    {
      "price": 800,
      "barcode": "0xe82231fdb4c554f1747b87e78ecf2cb4e51e34b8",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 59
    },
    {
      "price": 1200,
      "barcode": "0x2add9f3f5c30e51491cb7759724c0f1d110272e8",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 37
    },
    {
      "price": 200,
      "barcode": "0x9084c1c2622715ac97b9e46d647abbcefd863a75",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 45
    },
    {
      "price": 200,
      "barcode": "0xb8f7003e66a6b9c374fd1f69b04c155dfa402a1b",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 19
    },
    {
      "price": 400,
      "barcode": "0x717efd031d8ff5e78a65a2943e15ddb7117b7a2c",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 57
    },
    {
      "price": 1200,
      "barcode": "0x6c4c805f4273f70c9ef019b650aa59da95ba2e4a",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 2
    },
    {
      "price": 200,
      "barcode": "0xa9b54073d7a7dee0d6392d390a91e367149877f8",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 10
    },
    {
      "price": 800,
      "barcode": "0x842a76e409d50347007089f737d2264ce7bbafa8",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 18
    },
    {
      "price": 800,
      "barcode": "0x902f55b1dfb32da81e3303ee69abd640a2a20c6b",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 62
    },
    {
      "price": 800,
      "barcode": "0x02b222ee15b9990a89516cc78547503790ff37a3",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 17
    },
    {
      "price": 1200,
      "barcode": "0x871bf89dd323cb89ad3fd6321ec15327b6523a12",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 10
    },
    {
      "price": 400,
      "barcode": "0xb65c3d35443061bf84124ad7655ff69a06edd807",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 4
    },
    {
      "price": 200,
      "barcode": "0x8c2e2c4df21e8e8a8de8982a10a2f6d1bf98c7e3",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 36
    },
    {
      "price": 1200,
      "barcode": "0xdf9affb191396edcbfa31d201cc0501e93e46d4d",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 12
    },
    {
      "price": 1200,
      "barcode": "0xb9a23cd3c36aa37bdfc5f7775590ad355fadd288",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 44
    },
    {
      "price": 800,
      "barcode": "0x4a07bc14b6c7468a447c3c1dbe757af0b31e2bf7",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 43
    },
    {
      "price": 800,
      "barcode": "0x771a731526b56b6bde40ba7e1cdad3e79280b0bf",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 45
    },
    {
      "price": 800,
      "barcode": "0x749c2bb31b6d4c3e7749895df30d2a7fc13f932c",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 33
    },
    {
      "price": 400,
      "barcode": "0x89d79a7fb17f3dd45374397fbb9c630dbfddc508",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 56
    },
    {
      "price": 200,
      "barcode": "0x179da81849b4d5dea3ce4514893aa35349ece71e",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 61
    },
    {
      "price": 400,
      "barcode": "0x6a66dc3f2c930f65437a1f1433037883f523f4a5",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 26
    },
    {
      "price": 800,
      "barcode": "0x0abc3f0e2fda3414c06c3574bfcddfcd35e5a2ea",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 46
    },
    {
      "price": 1200,
      "barcode": "0xf6120bbe351b561dc175f02cf97bbb12775c2fb0",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 41
    },
    {
      "price": 200,
      "barcode": "0x0f6c5514a39f056ec4dc4e9811301fd91c1e3fc4",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 34
    },
    {
      "price": 200,
      "barcode": "0x66ba56d486ec3279751a769ecd0c0782323f2448",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 17
    },
    {
      "price": 800,
      "barcode": "0x69eb4106395f43571e7185f75f5df4069c3d0826",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 1
    },
    {
      "price": 200,
      "barcode": "0xc8ba097844ae131d340d2bf3b0fcb4d53c9e3ca6",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 49
    },
    {
      "price": 1200,
      "barcode": "0x5c7d2254ce000464cf01eff48d141a7d1239d138",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 6
    },
    {
      "price": 200,
      "barcode": "0x38e19b2de35a1e3b2cfcdd8e33c578bba9aa9ecb",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 36
    },
    {
      "price": 400,
      "barcode": "0xadfd4178b39ee3343b5c4d6f68e1b78283f61bbb",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 59
    },
    {
      "price": 1200,
      "barcode": "0x33f493dbc8e2c6ba24d08582c31167bb8ddd3722",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 28
    },
    {
      "price": 800,
      "barcode": "0xabfa01dfe155eb24fcd68a5cd90ada18074f4064",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 62
    },
    {
      "price": 1200,
      "barcode": "0x23f720da214863cb6fdc32a82e349a64df6a9a69",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 5
    },
    {
      "price": 400,
      "barcode": "0x32af962b8424564b143aa6b2e9c5f32e79b986c9",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 45
    },
    {
      "price": 200,
      "barcode": "0x82fe1e8a3a444962fc41c61f31d1110609ca7582",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 52
    },
    {
      "price": 400,
      "barcode": "0x4470762ca993518b5f9ea1b70ea1324f8c3afb9e",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 8
    },
    {
      "price": 200,
      "barcode": "0xe054a80d8802dd1eba3c801c75289157bd6e2683",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 11
    },
    {
      "price": 800,
      "barcode": "0xc6821fef230e22fb5ffb2a84d785e0dbc835fe23",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 44
    },
    {
      "price": 400,
      "barcode": "0x92fb1688de65abdbe21cb67608d24a5edd1a29a8",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 59
    },
    {
      "price": 200,
      "barcode": "0x25ac015454deb93b325b7616762c495d6af48c43",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 29
    },
    {
      "price": 400,
      "barcode": "0x94c523c32794bd456640413b2341a6abdc080fbe",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 20
    },
    {
      "price": 200,
      "barcode": "0x2a9a8c43523c57b2ca0f31fb1a7382cc2d218399",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 2
    },
    {
      "price": 400,
      "barcode": "0x5bf0b51177c381d6746bff8ddb99cf498b088da0",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 59
    },
    {
      "price": 400,
      "barcode": "0x7a996c8f12981375c5cc2968b1dae9a02fa397f3",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 57
    },
    {
      "price": 200,
      "barcode": "0xc2cb1ac1d3a2a146e21fb20795236420153314b7",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 30
    },
    {
      "price": 800,
      "barcode": "0xacb80f8a931652f13d8cd6f29b2539da2b85b9e5",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 22
    },
    {
      "price": 800,
      "barcode": "0x954f2b914347e07440db39d40433e204b4c0ba80",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 6
    },
    {
      "price": 400,
      "barcode": "0x91df8362afd7b46cae9d5a72402349819fb8c3e0",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 14
    },
    {
      "price": 400,
      "barcode": "0xd3e9fa586205d137499999e925747481b7124986",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 46
    },
    {
      "price": 200,
      "barcode": "0x76631a258973c54f135ee2a948cd394d3dcec593",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 8
    },
    {
      "price": 400,
      "barcode": "0xa85b2abdf5b96a15a6c4278f05360db1f3c904ff",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 21
    },
    {
      "price": 800,
      "barcode": "0xce3931d17d04af970a5cd91c3df8640a0ffc3597",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 29
    },
    {
      "price": 800,
      "barcode": "0x7180ada9a8cff3a53ce81c6fc199af17cfa7ce42",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 36
    },
    {
      "price": 200,
      "barcode": "0x68db8a45ab87c9c9da11cdf2c96c8c8dcc5ab004",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 8
    },
    {
      "price": 800,
      "barcode": "0xd24afd559e6fe6b8044f0d758b2d6701bce4f6eb",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 1
    },
    {
      "price": 800,
      "barcode": "0x0e31306169b82bd0cea4e4a66e404a2edfc2d12b",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 18
    },
    {
      "price": 200,
      "barcode": "0xe3694521ca75aad36fc4d00d3491b017d7bb5d04",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 35
    },
    {
      "price": 1200,
      "barcode": "0xd72ff6645022e8528134515dd405a126219a92c8",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 43
    },
    {
      "price": 200,
      "barcode": "0x8402f262b2d38b8b9de8911549316424ed9289c2",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 32
    },
    {
      "price": 400,
      "barcode": "0x400fbc2df70d9f231acccd07150e67e62f5164ff",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 54
    },
    {
      "price": 400,
      "barcode": "0x65f3aa0fe9670be2f66fb47b842d8506193f3363",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 22
    },
    {
      "price": 800,
      "barcode": "0x69d260bbb74ca84c8a1bcf29ccc0f7e8abb7395b",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 59
    },
    {
      "price": 400,
      "barcode": "0xa915ee3957a519855b43818837a5b1941d305b21",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 23
    },
    {
      "price": 400,
      "barcode": "0xd2f192537d0f7f73a0b309fdcd7028a9b0e56675",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 23
    },
    {
      "price": 200,
      "barcode": "0x681b3a2cf98ca63dbb5e4f130fbf372534c63bd5",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 2
    },
    {
      "price": 200,
      "barcode": "0xec890db594a1e6a8ceb073f9cdb2b4e882aa7524",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 12
    },
    {
      "price": 1200,
      "barcode": "0x014e16d871c9485b8a9174bd3a74564c6e1f879d",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 31
    },
    {
      "price": 400,
      "barcode": "0x62947d5398a092627eea25363cb14b74234452db",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 40
    },
    {
      "price": 200,
      "barcode": "0x9a08e829388d8628eaa9bbc53a0f5b3230efa424",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 34
    },
    {
      "price": 800,
      "barcode": "0x5a946ca974be6b0daf3679970f42cdae42048783",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 28
    },
    {
      "price": 200,
      "barcode": "0xdd4366d19b7be50114ee88fa6a6c026cdbf12e29",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 26
    },
    {
      "price": 400,
      "barcode": "0x255afcd97bd64526804c2cf73622bb98883882ed",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 5
    },
    {
      "price": 800,
      "barcode": "0xc7b6b4bea26e99f305a7b971104e42453bac9444",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 18
    },
    {
      "price": 200,
      "barcode": "0xb1a61978c1e0e51988827a8bbbc3ddf49ae11fd7",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 37
    },
    {
      "price": 1200,
      "barcode": "0xcaba5ed4036d364a1a3b638abb3240d6705294f4",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 59
    },
    {
      "price": 1200,
      "barcode": "0x58450395c00bb4766b7fa311a033729714142c22",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 6
    },
    {
      "price": 400,
      "barcode": "0x7eb5e8863a96bb90a949b30c7394e0158b4e9934",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 37
    },
    {
      "price": 200,
      "barcode": "0x2adb72a98757a81c8646924f9d6c2a7c1b3a1c63",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 13
    },
    {
      "price": 400,
      "barcode": "0xdd61b7503c91b48dc5b7a3487d27a19e41f2ad52",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 23
    },
    {
      "price": 1200,
      "barcode": "0x02364af413b48bc651099153bad76b6115d4a0e2",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 25
    },
    {
      "price": 800,
      "barcode": "0x10a6b877d7cf2da5f9b68c4725f3c6201f2e090a",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 34
    },
    {
      "price": 1200,
      "barcode": "0x2006b10c7e28dac503ec9e590d76078985e41e3f",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 34
    },
    {
      "price": 1200,
      "barcode": "0x14a0d77c917b0727f57182c59e590f0bfd559213",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 57
    },
    {
      "price": 200,
      "barcode": "0x75539a92e89cf824f5523e634519afe61aa9f2d0",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 35
    },
    {
      "price": 800,
      "barcode": "0x48dd579767259721e40d09dce67533120758a2f5",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 34
    },
    {
      "price": 800,
      "barcode": "0x1e9e2a69a407fa64e276f4cd981cca2517f0b044",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 40
    },
    {
      "price": 800,
      "barcode": "0xbbda20fad1bf6ef9debe948fcd417c1062b3b25b",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 26
    },
    {
      "price": 1200,
      "barcode": "0x6453071750f0e41eb5f12a62f9df8ca592941286",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 54
    },
    {
      "price": 400,
      "barcode": "0x205eb3346051070650a63e4e93cddb2da563cac1",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 23
    },
    {
      "price": 1200,
      "barcode": "0xdba5b10ec948e128112d431fd799b36c85e3550d",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 49
    },
    {
      "price": 400,
      "barcode": "0xe0b561f8b7f5208d748014f67f6a3ffd9cdfd8a1",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 57
    },
    {
      "price": 800,
      "barcode": "0xdaa3ee71b14d5e3303751c01c900d2e03fd1197f",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 30
    },
    {
      "price": 200,
      "barcode": "0x069e9c604ef04258b315f9f0fa1af407d861b518",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 28
    },
    {
      "price": 400,
      "barcode": "0xce6fd22a5b49073c02f54b57d5e00a92b58a5170",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 33
    },
    {
      "price": 1200,
      "barcode": "0xb9fed4776337ccabf1146600e3e9f8777064780a",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 42
    },
    {
      "price": 800,
      "barcode": "0xdb9f3da0430166e0fb1d3cd1f81579d614a75d29",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 58
    },
    {
      "price": 200,
      "barcode": "0x6ea4514aa417718334c425a824e2e222814647ca",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 52
    },
    {
      "price": 400,
      "barcode": "0x8eb6ef9fefef6be2854356c50bcd9e95ff1f9c34",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 43
    },
    {
      "price": 200,
      "barcode": "0xa91ee1f508df2d0f5a78985805ef8d22d3d00ee0",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 38
    },
    {
      "price": 200,
      "barcode": "0x934281f40e34aa2bded9fb82d6e4626085cc7e0e",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 39
    },
    {
      "price": 400,
      "barcode": "0xedcbbe3f1499ba466649771052e41d2c4d49a9ad",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 18
    },
    {
      "price": 400,
      "barcode": "0x5272c5dded0e64243985b051ba537d49e1736f1b",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 34
    },
    {
      "price": 200,
      "barcode": "0x2c84257695e4168e7647496d6fc0e889b217dbcd",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 47
    },
    {
      "price": 1200,
      "barcode": "0xa821208315f0fd2c45e166b240c107443f529347",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 48
    },
    {
      "price": 1200,
      "barcode": "0x8b3253e1e2002f8154c2432b5c38163a682b8e0e",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 27
    },
    {
      "price": 1200,
      "barcode": "0xab89c32ee71333acb3bfc339991bb82b80cc5dc7",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 21
    },
    {
      "price": 200,
      "barcode": "0x53ec0d22641191cfc364ccf0c73fedc29f2dce52",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 18
    },
    {
      "price": 200,
      "barcode": "0x7d0c8894470d8e57c61d4753b766172226f115b7",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 16
    },
    {
      "price": 800,
      "barcode": "0x345b430305bfda67b9e23028186b9ffb7d081b47",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 33
    },
    {
      "price": 1200,
      "barcode": "0x7e150eba0533afd6ed0d369436edaa4010162d9b",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 30
    },
    {
      "price": 200,
      "barcode": "0x1f39c3aa5bb90037bf62c1a608ce10ab2cf85cfb",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 13
    },
    {
      "price": 800,
      "barcode": "0xe1e2cb21743921523e7dcf6abbcd3e3651ddc5e8",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 16
    },
    {
      "price": 400,
      "barcode": "0xd0d24f87cac5f11dd74767e47732cfe85f4dece3",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 27
    },
    {
      "price": 400,
      "barcode": "0xcfa03b2b67569577ef3252636ac429ac5e0528b4",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 1
    },
    {
      "price": 200,
      "barcode": "0x24172fdc9d506588b6c14558f37e3f2475a7bee6",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 5
    },
    {
      "price": 800,
      "barcode": "0x065f844bc88199782aa307a833a8bfe578d793c6",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 13
    },
    {
      "price": 800,
      "barcode": "0x60f7f139fa7f2a7a705d8e9bc5757a5a6d1b59d4",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 41
    },
    {
      "price": 800,
      "barcode": "0x35c95096337bf77e3e9762b7b826ccb41a73f7e9",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 47
    },
    {
      "price": 200,
      "barcode": "0x4125856c8a7dc08c8dc062486329f97fd2329547",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 56
    },
    {
      "price": 200,
      "barcode": "0x52a463cf143787dbf594c6d9aeb960e169231a4f",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 16
    },
    {
      "price": 800,
      "barcode": "0xe3907e6916ced1a89f99d9144eb0f1aa65321a9f",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 30
    },
    {
      "price": 1200,
      "barcode": "0xd9de5379c7afb3979af6af33f6aeb8148522cc9f",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 25
    },
    {
      "price": 400,
      "barcode": "0x50853f0249beacd677c428051b48b90da090fb91",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 28
    },
    {
      "price": 800,
      "barcode": "0xb37f576a5448d9b1ff5dc71858df6044d8fd33c4",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 58
    },
    {
      "price": 1200,
      "barcode": "0x5e3ee3f6f83ffaa8fc319b608caf0bc4e6a77f96",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 53
    },
    {
      "price": 800,
      "barcode": "0xb5ffe77aa63976bbde84afe277c79e16562447b3",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 8
    },
    {
      "price": 800,
      "barcode": "0x7276b730aa9c50ab7ed660cfe51c70d030a0c85d",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 47
    },
    {
      "price": 200,
      "barcode": "0x003975049439e692b1bff5ae64ef99541a1990e3",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 29
    },
    {
      "price": 800,
      "barcode": "0xfd53e53b548489a54af76f24f7f4494c4ceee3b7",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 54
    },
    {
      "price": 400,
      "barcode": "0x023891aba647d3a6636dd16e60e6c9c8f9c4b783",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 31
    },
    {
      "price": 400,
      "barcode": "0x3baea3dad0dbdf4dc26eaa5368cf09e219f39cf4",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 60
    },
    {
      "price": 400,
      "barcode": "0x3257c0106e988935f8b8703fb602abfe4dae85f6",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 19
    },
    {
      "price": 200,
      "barcode": "0x9beb4e25c26971b16c99dae12dca5f8dc0fff1f3",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 22
    },
    {
      "price": 800,
      "barcode": "0x87bfd2d8419c39f06f3f141635ba9d3184af0a76",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 33
    },
    {
      "price": 1200,
      "barcode": "0xdd4852beca40310ea8161f3209c01e8772cc2071",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 57
    },
    {
      "price": 800,
      "barcode": "0xdf0cccf865f155f60ab337b64832701c68c28a8c",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 39
    },
    {
      "price": 1200,
      "barcode": "0x9ffc59a340b94c9298f5c54422fd8e62ecd6b7e2",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 41
    },
    {
      "price": 200,
      "barcode": "0x5b8aa9a52989682d5efd40b71eb0650c194b1bf3",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 61
    },
    {
      "price": 200,
      "barcode": "0xf07a2d473303c139fb757e780dd22c95b4db4575",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 23
    },
    {
      "price": 800,
      "barcode": "0x9ce516b52246a28177f6542b6e7bd247f16a93e6",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 40
    },
    {
      "price": 1200,
      "barcode": "0xdafcb74a2c453db856f5677c8ebdc9971bcec6db",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 59
    },
    {
      "price": 200,
      "barcode": "0xcf4efb22d286a92996944f0cf6df6831d9d2e855",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 44
    },
    {
      "price": 800,
      "barcode": "0xb1c12a1493bf6173f1eab1daa4de72bdbfd6a55b",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 32
    },
    {
      "price": 200,
      "barcode": "0xe8a594887685c9475593e4fcfe1c7e6d1572a983",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 47
    },
    {
      "price": 400,
      "barcode": "0xc8391ab01f44624659ad416fa90c11b9e6bac0b5",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 25
    },
    {
      "price": 400,
      "barcode": "0x12767d31cc6f581c151303d6751364778d714405",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 5
    },
    {
      "price": 200,
      "barcode": "0x5c215b62b0646e09d578dcf47676879896751213",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 28
    },
    {
      "price": 400,
      "barcode": "0x39da0762567fe809c4c4b9a48c41ee3663ce5573",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 18
    },
    {
      "price": 200,
      "barcode": "0x5b94af3f713de0ecd06d1b35296c437e43c72944",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 55
    },
    {
      "price": 200,
      "barcode": "0x9ee6e74ecdef61f4270bd824d1bd56c6c6daf218",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 45
    },
    {
      "price": 800,
      "barcode": "0x07840976b129fe92cfa7115b7f58c8e4dc8daad8",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 10
    },
    {
      "price": 400,
      "barcode": "0x47fd9b5b6d3acd4e5b24dca75de6830222576e69",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 21
    },
    {
      "price": 200,
      "barcode": "0xe4d4796717a95b16f41d42d6f1a34b650ac9ec62",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 18
    },
    {
      "price": 800,
      "barcode": "0xf4b2b13b176b512908faa84cb1402eea2723bc92",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 34
    },
    {
      "price": 400,
      "barcode": "0x7d97e2c05a15b978b01f75a22de9306782d84d6d",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 42
    },
    {
      "price": 800,
      "barcode": "0x73b2b5d394db4c6486593eb215f55550cb6b06a6",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 28
    },
    {
      "price": 800,
      "barcode": "0xf1fee95a3a3662f518a9e08557bd03c67a603dfc",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 28
    },
    {
      "price": 400,
      "barcode": "0xb17964c4e9202a8963f18685a93e31e49863fbd1",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 18
    },
    {
      "price": 1200,
      "barcode": "0xe108ede7c39a76ea4cdb2882f79ab8ff3397f6be",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 8
    },
    {
      "price": 1200,
      "barcode": "0x641410cc5db7ec915218e9b74188e42bc231a215",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 36
    },
    {
      "price": 1200,
      "barcode": "0x6f15ab4108c313bb19909621c86e8e169af2913d",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 13
    },
    {
      "price": 800,
      "barcode": "0x0522dfa62bfe6151e3b5700ea3d7caaa0e042043",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 14
    },
    {
      "price": 800,
      "barcode": "0x342086b8de7521a2f039030331a70e3a9841d7ab",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 6
    },
    {
      "price": 200,
      "barcode": "0xe972085396c4dcef50fa27aeec7c0706474cd67c",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 61
    },
    {
      "price": 800,
      "barcode": "0x84bdf08ee000e5de186380227f9925333c1646e6",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 36
    },
    {
      "price": 1200,
      "barcode": "0xe8c7353606d5322bf0fbc7297cd129246442ad87",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 21
    },
    {
      "price": 400,
      "barcode": "0x0a2bb012f01249e55ec4900ca47d5c9406da3238",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 55
    },
    {
      "price": 800,
      "barcode": "0x221f254732bf8f2382ad1ac324675e3eb3948c45",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 30
    },
    {
      "price": 800,
      "barcode": "0x44b0f72af81a8c4324946fdeaa2b76a312d2ac0a",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 58
    },
    {
      "price": 1200,
      "barcode": "0x467e9a80e542d6441859e5e4efc2131fbcdf5c1c",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 16
    },
    {
      "price": 800,
      "barcode": "0x8a33ab66a6b7d1257438b14707f9827d36490d1d",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 24
    },
    {
      "price": 1200,
      "barcode": "0x4372408222f5a189b021d6ec29eeb875c0021b8e",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 10
    },
    {
      "price": 200,
      "barcode": "0x282e6f3cec7d9398f7946462ba978415c26e40ec",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 58
    },
    {
      "price": 200,
      "barcode": "0x4af5a287b4f0b1fe7f6bd1bd7c0029b8994b892a",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 2
    },
    {
      "price": 200,
      "barcode": "0xf652d3b2dfa81706b17bc2677e55ef2e6fb1c97b",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 40
    },
    {
      "price": 800,
      "barcode": "0x477d771bc710e0b3ed8617d61987a91bcff793d3",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 22
    },
    {
      "price": 200,
      "barcode": "0x78db928d47cabbfe47bd9e13dfe46608ef40f055",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 17
    },
    {
      "price": 800,
      "barcode": "0x36d78df3540beccb1a7abc97bd3468b555c5132e",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 23
    },
    {
      "price": 1200,
      "barcode": "0x9ac2f963f7c011988f13d7ac5221a4191940294e",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 55
    },
    {
      "price": 1200,
      "barcode": "0x376ea50713e7bc8d281b82edf459b11001f2b15b",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 37
    },
    {
      "price": 400,
      "barcode": "0x77dcd408c18c34fa67517cebf0ce7226cef6aecf",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 42
    },
    {
      "price": 800,
      "barcode": "0x026a5c6b01cc3618319cdc8c7ae76417c41c466f",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 34
    },
    {
      "price": 800,
      "barcode": "0xa8bacc876c533d04732cc009b82b4f5822b07ed8",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 48
    },
    {
      "price": 800,
      "barcode": "0x3ebf08ede3c3a36e7ac0389b12a6885d2f33cbbc",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 2
    },
    {
      "price": 200,
      "barcode": "0x03bb2613f3e85cf693a4ffb6d113c3f83ba13ba4",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 8
    },
    {
      "price": 1200,
      "barcode": "0xc83f78735c3eaad3d10785bccbe39ad63d5db513",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 10
    },
    {
      "price": 800,
      "barcode": "0x097433567e0b9a3bf6dc7c29add0b7c65ceaf63e",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 16
    },
    {
      "price": 1200,
      "barcode": "0xad51f1cdec4e481d191a6d7891d9bcd5263d3814",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 57
    },
    {
      "price": 800,
      "barcode": "0xe16905270871c754ec4152c14e123d265b93de67",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 25
    },
    {
      "price": 400,
      "barcode": "0x237bd5bb7a4b0234ae55cb32a5692c0e80e98a0a",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 17
    },
    {
      "price": 1200,
      "barcode": "0x4af894b4c0360ee02177e9c09b3c80538eba5006",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 60
    },
    {
      "price": 400,
      "barcode": "0x205d6deb8895c3dbc0c35f72b8947a932cf5152a",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 15
    },
    {
      "price": 1200,
      "barcode": "0x89ef71cf18457b04801fd14b688242d492265dea",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 11
    },
    {
      "price": 400,
      "barcode": "0x5c25382b8bfdf9447fbddcc372bda67a8d5576d5",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 18
    },
    {
      "price": 400,
      "barcode": "0xabcc4c1d9e86e68c7829ccca1e8c252cd094a842",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 31
    },
    {
      "price": 400,
      "barcode": "0x88638093935a1faf0584b42888ef8d0b29a54acc",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 19
    },
    {
      "price": 1200,
      "barcode": "0x92af7fa041b8367cb2021216fa91b19f6c112643",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 35
    },
    {
      "price": 200,
      "barcode": "0x8e4a32eaaf01cb0db24febdd426244ce3a5830ed",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 18
    },
    {
      "price": 400,
      "barcode": "0xd07bd6425649313d50d4ee5e1610a3a9a54989e8",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 6
    },
    {
      "price": 1200,
      "barcode": "0x40e2127267e8c9ba464841d0b8757c350b071507",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 48
    },
    {
      "price": 800,
      "barcode": "0x841c127b7de05833929fdc30e9e72bbf24c8293f",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 56
    },
    {
      "price": 1200,
      "barcode": "0x78062dc109a2ff914c41fb6643bf1767f92922c3",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 64
    },
    {
      "price": 400,
      "barcode": "0x9e9987305bd588abb827806850bf35a7361300ac",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 44
    },
    {
      "price": 800,
      "barcode": "0x34ca4ae1bc4121e7b3669e6bb6023b6d9406e6fa",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 60
    },
    {
      "price": 1200,
      "barcode": "0x5494ca673abc1721f9e8ea700ee379ed90748b86",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 18
    },
    {
      "price": 1200,
      "barcode": "0x75b1db235bd7643a2910533b225233c022fd9996",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 23
    },
    {
      "price": 200,
      "barcode": "0x4481eac10fcb8e59356cd59acacb2f078e4149c7",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 58
    },
    {
      "price": 200,
      "barcode": "0xc9b711dac1f8dfbfda9ce553e39303753caa0612",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 58
    },
    {
      "price": 400,
      "barcode": "0xf2805522564926187bce52d39e9825cdc14baf88",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 6
    },
    {
      "price": 400,
      "barcode": "0x9cffb1c7a32d81fda99072d8032cd186813d1df5",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 29
    },
    {
      "price": 400,
      "barcode": "0x8565c1c0d2c618ff3217d534a78e204971dbb975",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 5
    },
    {
      "price": 200,
      "barcode": "0xfe408bd39da478b90fdc97303c0aaae3c5c32162",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 20
    },
    {
      "price": 1200,
      "barcode": "0xfa1f504af58180a696b176e788f522c40e9e901b",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 6
    },
    {
      "price": 200,
      "barcode": "0xd55e4e01c6404aee75a762f410ccb258aca52a55",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 27
    },
    {
      "price": 800,
      "barcode": "0xe19c1974aefe3f1067db5f874042899cf3f370f6",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 28
    },
    {
      "price": 400,
      "barcode": "0xf4e00cc86146debcb01e147ba32aaf19489463c3",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 45
    },
    {
      "price": 200,
      "barcode": "0x7c743811eca6e9ca172f670ef24acdcf746c400f",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 52
    },
    {
      "price": 800,
      "barcode": "0x18aa137ca1ded6eab782a64b14d3032517eed09e",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 50
    },
    {
      "price": 200,
      "barcode": "0xf11df4850dbcf41f7693e67defe66504769f7461",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 55
    },
    {
      "price": 400,
      "barcode": "0x535c467f57314a378c92eacb03943aaa6041d61d",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 37
    },
    {
      "price": 400,
      "barcode": "0xf3bf56d6c766514f0603b1dda786f58c2d34615c",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 64
    },
    {
      "price": 200,
      "barcode": "0x27105d3303e70ec4814b92efc21208089ee3d105",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 5
    },
    {
      "price": 200,
      "barcode": "0x361ccd0d2ee08dfad3aa529b97af422a3b571904",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 25
    },
    {
      "price": 800,
      "barcode": "0xa21e8f1d1364e035beddba038e26e0bcc4306aa2",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 13
    },
    {
      "price": 800,
      "barcode": "0xb4f2031bd1e2964ffec70ba874952ac99d3ebb2f",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 1
    },
    {
      "price": 800,
      "barcode": "0xffa334952bbe46162be9d51bb27bfee804a42c5a",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 61
    },
    {
      "price": 400,
      "barcode": "0xe7b66d954d8f7eca2157114c2295c4cb62772d63",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 21
    },
    {
      "price": 200,
      "barcode": "0x9f5afc539735782be0c61210afad68ff0f8e3b17",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 62
    },
    {
      "price": 200,
      "barcode": "0xc1468213fd86729e6cd0fc12d608be7df229ed00",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 49
    },
    {
      "price": 800,
      "barcode": "0x16ad3893ab8cc89ea441bc22971e1e6d030e5e8a",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 48
    },
    {
      "price": 200,
      "barcode": "0x744fbd303e70f3391d627c212441c42be66c3c9d",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 11
    },
    {
      "price": 200,
      "barcode": "0xbd4d6c487832a0e6f96de80bf61664dd10591606",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 28
    },
    {
      "price": 1200,
      "barcode": "0x65b5b9645c10fa27036a38b9ba77084a729b3a47",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 37
    },
    {
      "price": 1200,
      "barcode": "0xcfad329463ecf59a4e734a6bd41b0ec9303523d5",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 38
    },
    {
      "price": 400,
      "barcode": "0x2ebd81c3f6f47029d9f24a9051eee13809ffb4c5",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 25
    },
    {
      "price": 800,
      "barcode": "0x80d9a9707e95a8630ced2f987abdad8e88c41dbd",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 21
    },
    {
      "price": 800,
      "barcode": "0x39f9034eb0ad857192ff7fb7af92216dc6244668",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 36
    },
    {
      "price": 800,
      "barcode": "0xdfddfb6c56bc6cebfcca30f8295dd9574dcca3b7",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 57
    },
    {
      "price": 400,
      "barcode": "0x26dd2b3a9eabc396fed5bd06555fc94ecb6a654e",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 53
    },
    {
      "price": 800,
      "barcode": "0x3a6b5b1db60d2b29c436be6fce202dc44258e58d",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 16
    },
    {
      "price": 800,
      "barcode": "0x883c46807c3cd8c1143fc0124f599d93cea84207",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 29
    },
    {
      "price": 200,
      "barcode": "0x54709c38a649ef959d08aa7d121cf719346fa03a",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 38
    },
    {
      "price": 200,
      "barcode": "0x902eaeebd11008107b76f599db859ee869252d1c",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 30
    },
    {
      "price": 800,
      "barcode": "0x75e063975ef7cfe297e704997def7b80d1f31087",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 56
    },
    {
      "price": 200,
      "barcode": "0x56e85b5f78537fb3d9f6e0b318c8a537117c973f",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 6
    },
    {
      "price": 200,
      "barcode": "0x636a81ac1582f52179385575d873b46430ce655e",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 61
    },
    {
      "price": 800,
      "barcode": "0xddc5b7faa6203804f5e87a66f6f2735350b131cc",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 34
    },
    {
      "price": 1200,
      "barcode": "0x43d9e05c0ffd9650b7c2e195370749d565d5ca90",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 63
    },
    {
      "price": 1200,
      "barcode": "0xeca7920f5bf32d1edab5fc18e1e9efcaf98b7ce1",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 26
    },
    {
      "price": 400,
      "barcode": "0xbc84bd7a06f474b67b9f51204a3a4f08b909ea7d",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 7
    },
    {
      "price": 1200,
      "barcode": "0x232701aaa343d6989abfe36066ec8be834054145",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 29
    },
    {
      "price": 200,
      "barcode": "0x706365ee1566b20b76c29825b928a7ee628eab09",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 55
    },
    {
      "price": 800,
      "barcode": "0x64498c2e68f9cfbcacc57147aa4d336f6c4ae750",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 58
    },
    {
      "price": 400,
      "barcode": "0x8611a23bd9b2211fb8c6ab610ccfbc842d936b4c",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 15
    },
    {
      "price": 200,
      "barcode": "0x7930eb7c30c543685f324763e1b9881bb1454c42",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 44
    },
    {
      "price": 800,
      "barcode": "0x47d593719ba208f4d2cf07fe7f707f91af353c9c",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 45
    },
    {
      "price": 400,
      "barcode": "0xcd2b9ebb085e9376c2ad27b479be0b8107657e13",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 7
    },
    {
      "price": 400,
      "barcode": "0x5c34580b23d342b6daabd15c4cb21158987e7350",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 37
    },
    {
      "price": 1200,
      "barcode": "0xcc49fee1c13cc8d38f3e18a4804bf0a6120d2774",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 24
    },
    {
      "price": 800,
      "barcode": "0x08d708aa61ce68e4cd46533b8934eb3be37074fd",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 62
    },
    {
      "price": 400,
      "barcode": "0xb17928be789a9c1174f7123c67ebfa3146e8c97c",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 27
    },
    {
      "price": 800,
      "barcode": "0x70cfb2cdd8b91fa9a403b76e72fc44e06b8fe552",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 29
    },
    {
      "price": 200,
      "barcode": "0xfcb1e22f0a21661e588837b92f4d1f1b35f20409",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 21
    },
    {
      "price": 800,
      "barcode": "0x924ac26116bfdff85bc0f3be5b66a4156ef7fb67",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 29
    },
    {
      "price": 200,
      "barcode": "0x3ceae31dbec7e7c5ea3f8bd82668c56d71242057",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 46
    },
    {
      "price": 800,
      "barcode": "0x80eeb94ea40d574ea13ac29120e4ee0159f9f2f9",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 39
    },
    {
      "price": 400,
      "barcode": "0x9aed2ad853f2093ad01896f4bf6019f66778a672",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 33
    },
    {
      "price": 800,
      "barcode": "0xf4071a4b4f4610da2ba5d7f14396436578e9cdbc",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 32
    },
    {
      "price": 400,
      "barcode": "0x7361795c74f4dbee1f8f6d2d43dd9ef45197e369",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 53
    },
    {
      "price": 1200,
      "barcode": "0xe0611bc55ee2a5a4c1156c58088958357c5dd5ed",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 17
    },
    {
      "price": 800,
      "barcode": "0x8aebec611a9b72eea3e91fa69236993d14ba7548",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 16
    },
    {
      "price": 800,
      "barcode": "0xad8506299d37ebb6d6e9716eda640f5100d3b525",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 24
    },
    {
      "price": 1200,
      "barcode": "0x2e2848ed15adaad1aecd606e6df2c9e99563e58c",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 45
    },
    {
      "price": 200,
      "barcode": "0x66f875fc62a737ab2f4f8872791e9d4d816c9f79",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 52
    },
    {
      "price": 1200,
      "barcode": "0x6a21b8b8f96a1049485de385d11202c4b10030b7",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 63
    },
    {
      "price": 800,
      "barcode": "0x76e4e6ca0434f42be4b4a6fa26e66f807d96ba08",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 43
    },
    {
      "price": 400,
      "barcode": "0x001a970d33de6221d778d2d5113e9df475983f93",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 22
    },
    {
      "price": 1200,
      "barcode": "0xd22aaba0f5eb46db3972690734c3e2ec42736a4f",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 8
    },
    {
      "price": 200,
      "barcode": "0x39bca84e0add505dfd7f08113515297d36b07d7f",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 22
    },
    {
      "price": 800,
      "barcode": "0xdee73f02284c50925ca80eb89a2ba39e8fead3ad",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 28
    },
    {
      "price": 400,
      "barcode": "0xdaabe147d1ca80b9846b2e1ac3a765e2fcc14650",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 61
    },
    {
      "price": 1200,
      "barcode": "0x50008b1aa4c84f2424f078927d7e891b48519a0d",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 47
    },
    {
      "price": 200,
      "barcode": "0xb3b1c86c9b871969988d75108e8c873abe19371d",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 56
    },
    {
      "price": 400,
      "barcode": "0x1270187ebf11bd9452cb4095093de1c767aa8e5b",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 30
    },
    {
      "price": 200,
      "barcode": "0xf395edeb33543312ed53f7f99fe3b6396336b12c",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 3
    },
    {
      "price": 800,
      "barcode": "0x0ee4d0dd620aad330f3321e1110ac80516f1c995",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 27
    },
    {
      "price": 400,
      "barcode": "0x3e43ed34aaf3a029c303df563f96f791e8e539cc",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 31
    },
    {
      "price": 800,
      "barcode": "0x53d0525fbaa02c8e439822283290db1dea5bbacb",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 10
    },
    {
      "price": 400,
      "barcode": "0xedea265e4dc01048ff1697900b302d995bc3c9e7",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 53
    },
    {
      "price": 800,
      "barcode": "0x62db45935e89924bae5bc35b92e51d99a73baa16",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 4
    },
    {
      "price": 200,
      "barcode": "0x450628a1978c1cc53723f1e9b3be86a8b2f5025c",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 28
    },
    {
      "price": 200,
      "barcode": "0xf941552741998e6daa7621b9fdd34932df52b7bf",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 32
    },
    {
      "price": 800,
      "barcode": "0x7d1a271886988e29e8a2b00ae92755857eb2de07",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 56
    },
    {
      "price": 200,
      "barcode": "0xee38a283a6f896ae209d814f076f9256b5572de5",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 24
    },
    {
      "price": 800,
      "barcode": "0x99f734cef3dd8c21b3c86f757485f19ac93291f4",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 1
    },
    {
      "price": 800,
      "barcode": "0xc3e25ec52f9e3d450dc75edaee5e9cd7b0b3e105",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 55
    },
    {
      "price": 200,
      "barcode": "0x926f0f31d913ac74028f5428890bb3288169a85d",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 28
    },
    {
      "price": 400,
      "barcode": "0xf3b3a2468d041fa3aea37e8696f6bd5c2f88a5d0",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 61
    },
    {
      "price": 200,
      "barcode": "0x88abfe78d03a26551310e4e437fd0d0b37113e96",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 60
    },
    {
      "price": 1200,
      "barcode": "0x230ab34048e96d70bfaa9deebe030c8b18fd3d67",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 23
    },
    {
      "price": 200,
      "barcode": "0x41ed1fd16124604cf871637b44967bebdadda185",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 14
    },
    {
      "price": 200,
      "barcode": "0x606329da090250c3fade55fca43ca779ed379857",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 38
    },
    {
      "price": 400,
      "barcode": "0x36799f7ac4635a6940b3e20cfcf7d522d50aad6c",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 47
    },
    {
      "price": 400,
      "barcode": "0x64c7171b88bc04ef67d8e7c8627488b22f71826a",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 34
    },
    {
      "price": 800,
      "barcode": "0xaa92307ed5d3a500a70c9f1c34739d2dd6cffea0",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 32
    },
    {
      "price": 800,
      "barcode": "0xe112aaddebe48275a27905f15f52062f8700acfd",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 58
    },
    {
      "price": 400,
      "barcode": "0xaa31e273fa8f14089e080db6f465e42fc3c56cb0",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 30
    },
    {
      "price": 200,
      "barcode": "0xa633bf8572fa4d86c8a81aaad4973be77abf9036",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 36
    },
    {
      "price": 1200,
      "barcode": "0x01e3557f44444a9c67e4936a3090acc67278be52",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 23
    },
    {
      "price": 1200,
      "barcode": "0x59d718e0248bbceeb5c5bb2a09ff4d0d614d166c",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 38
    },
    {
      "price": 400,
      "barcode": "0x7242e4010e53fd2ccba8a231071b883f3a62b3b9",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 40
    },
    {
      "price": 800,
      "barcode": "0xe407be29ccb282bfed27d5cd0b5468c4bf496d96",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 35
    },
    {
      "price": 1200,
      "barcode": "0xfd330a51c402991d211621d436745b3e3906b722",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 23
    },
    {
      "price": 800,
      "barcode": "0x25cfbfecfa4e1e087bef993801405d425735ec37",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 19
    },
    {
      "price": 200,
      "barcode": "0x5f22a96ed884482715903b0cc332a819e70a9020",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 50
    },
    {
      "price": 1200,
      "barcode": "0x07f43328d66814a4c3445fcce3d490d84ff7353a",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 34
    },
    {
      "price": 400,
      "barcode": "0xaa12943348d00391c6859c0cd72d9750f659746a",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 16
    },
    {
      "price": 1200,
      "barcode": "0x110221e5e250e8c14333e58056d14dfabbbffcd3",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 36
    },
    {
      "price": 200,
      "barcode": "0x026c4b322bf63188170dd1a867bc2500520bd99e",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 27
    },
    {
      "price": 800,
      "barcode": "0x773b1f7c0af4ca90cb63f530ebe89cdf42711044",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 3
    },
    {
      "price": 1200,
      "barcode": "0x35557e7d29048a4e905a912c906063f1cd173799",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 44
    },
    {
      "price": 200,
      "barcode": "0xbacc9fd61ea4501292c05404d3f482e0119e6f77",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 1
    },
    {
      "price": 1200,
      "barcode": "0x057a1953d116f217d6bd7e1539c731a616e38422",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 41
    },
    {
      "price": 800,
      "barcode": "0x22067c2aefa5b70c1b05e45e7c923d32a50c35de",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 16
    },
    {
      "price": 200,
      "barcode": "0x9aa258620a66938ca746b4891575cc6001cbcc45",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 50
    },
    {
      "price": 400,
      "barcode": "0xf49404d9b1006f069fb608c4fa3c0f02265d741e",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 57
    },
    {
      "price": 200,
      "barcode": "0x4ee89bb21c45550502e2f5d6fb8e8d7478f4cfa8",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 29
    },
    {
      "price": 400,
      "barcode": "0x3aaaaa8b9a798d73049d42cf078a422e43abdad0",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 55
    },
    {
      "price": 200,
      "barcode": "0x2f20496142b04f91e6e41e9641147ee14f2bd03a",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 6
    },
    {
      "price": 400,
      "barcode": "0x96cddd655a2ed15833729dc6ac688694c5821710",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 37
    },
    {
      "price": 800,
      "barcode": "0x3f084c433b9021a4de539c5ca0df9287172aab68",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 41
    },
    {
      "price": 800,
      "barcode": "0x1ba966afc53d73141c2a171cfd9b05a874ba0ba7",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 4
    },
    {
      "price": 200,
      "barcode": "0x3d008a73ad90bc32a5642a4b5d91e640e2d869ae",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 36
    },
    {
      "price": 200,
      "barcode": "0x36833d7f3bf9d34be86fe243d8ff434fd5e87e0b",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 28
    },
    {
      "price": 400,
      "barcode": "0xf315c241a95d9cb64ff4eccebbe85388fb78ec05",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 57
    },
    {
      "price": 400,
      "barcode": "0xe830fc452dd158170d38fa74e61859832444bce0",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 30
    },
    {
      "price": 200,
      "barcode": "0xa7cd7aed69b12d5baa7da8f87820d71624b4d035",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 4
    },
    {
      "price": 800,
      "barcode": "0x9dc826c7c6149d637625fd290550031bb3d19544",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 35
    },
    {
      "price": 1200,
      "barcode": "0x3f28c233c7cf533c7e2a5f29eca0c0fb308ffda8",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 1
    },
    {
      "price": 400,
      "barcode": "0xbc1fd4f919d2393480b6b64e1e793c99adf6c2f4",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 54
    },
    {
      "price": 200,
      "barcode": "0x73c5a0b9a774014028143340891aff4b7aa2fd4f",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 58
    },
    {
      "price": 400,
      "barcode": "0x43401c8f1784180ae494519895f05d616958ecf8",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 48
    },
    {
      "price": 800,
      "barcode": "0x9344a796f14cd1bef34863e144a3d031b797e0d6",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 5
    },
    {
      "price": 400,
      "barcode": "0x741ba50c38b8af778e96c557dfa0ddda4cd4b3a6",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 27
    },
    {
      "price": 200,
      "barcode": "0x475149e3d43fd6b0bc524fd489983587ac361b9d",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 49
    },
    {
      "price": 200,
      "barcode": "0x6ccbbf17355db95246c8729c014db558586aeecb",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 35
    },
    {
      "price": 800,
      "barcode": "0x909d6c87348ba8a5e00d56e6e8fc71a5ea032519",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 57
    },
    {
      "price": 1200,
      "barcode": "0x42ccc7314d1293263976991c51b93cac78246903",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 63
    },
    {
      "price": 1200,
      "barcode": "0x2d56e4577476148ef8b1d03071ffd8acbcd54205",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 30
    },
    {
      "price": 1200,
      "barcode": "0x7b1f3c867dca645bb98eeb7c1ebc4e623e469bfb",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 43
    },
    {
      "price": 800,
      "barcode": "0x0f33780e3c91e016840c1a3c5cc5823d25d355eb",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 4
    },
    {
      "price": 1200,
      "barcode": "0x3d1abd48c2abd835733c321413b0d470d188ade8",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 50
    },
    {
      "price": 1200,
      "barcode": "0xff676b2a8fc1decb395629b646df30c9c17e3d04",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 4
    },
    {
      "price": 200,
      "barcode": "0x4431605bb5b2a225ba85cc7afac81a2b09cefb6e",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 27
    },
    {
      "price": 400,
      "barcode": "0x2c86b6d605c9eb13af2a3f24bb0539d0bfca1bea",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 21
    },
    {
      "price": 1200,
      "barcode": "0x02c98a5a0a80fc2e6056a399ab5aa14ead6e31e5",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 54
    },
    {
      "price": 200,
      "barcode": "0x909a0b1103589b9ee695033f7242e8707096c8d1",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 2
    },
    {
      "price": 200,
      "barcode": "0x93b44a27fe0e5e653b49feb5fe5eae142cb952e8",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 1
    },
    {
      "price": 200,
      "barcode": "0x53af6024210db6725dd02ab77da8a65640db36d6",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 26
    },
    {
      "price": 400,
      "barcode": "0xde5810a64be9d3c42d89d4883951c0c1e2057ca0",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 51
    },
    {
      "price": 1200,
      "barcode": "0xd16eb1e4e869d815bb1d8b2c2973460b0d2a3bbc",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 58
    },
    {
      "price": 1200,
      "barcode": "0x85947ade537bac40781458e715f1b2a73c37be20",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 30
    },
    {
      "price": 400,
      "barcode": "0xde3436e4426a4e55173987dea94bee50e6eba2a7",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 46
    },
    {
      "price": 200,
      "barcode": "0x061188fbda19790282e5786e78e81a06f476b15c",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 62
    },
    {
      "price": 400,
      "barcode": "0xcc198d81accfab4ddfb0d5a187dbfd0d056eccd1",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 36
    },
    {
      "price": 800,
      "barcode": "0xdab6862a975ad046fc7c28392faa9a912ea0c070",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 57
    },
    {
      "price": 1200,
      "barcode": "0x971c73a2a8c00fa3bf61a9daddd6a567a3f5f8e4",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 27
    },
    {
      "price": 200,
      "barcode": "0x0b37208fc2184692fb5d23eae353bef39598e884",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 44
    },
    {
      "price": 800,
      "barcode": "0x0dd4832f223abe79f287b4a34b2e2e38eda4f435",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 58
    },
    {
      "price": 400,
      "barcode": "0x1e4ad53ec849e4dbe02112168cead55c326ec939",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 30
    },
    {
      "price": 400,
      "barcode": "0x4de7278ed19aeaa821d9a8663785df3d58b526f2",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 6
    },
    {
      "price": 800,
      "barcode": "0x21fa0da2c1771d8d28be086aa6e9073f4d97acbe",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 40
    },
    {
      "price": 1200,
      "barcode": "0x2b2d4a7ccb3a47d40ec135e892351307df852162",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 2
    },
    {
      "price": 1200,
      "barcode": "0xad75a9205b6741e1252ef55b51f3b04f6bd6118d",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 37
    },
    {
      "price": 800,
      "barcode": "0x63d1f2610b24127ca9aeb07777a32af4c95f814e",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 2
    },
    {
      "price": 1200,
      "barcode": "0xc8bb9710e5a15ce372650435cd35e6a67067db86",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 14
    },
    {
      "price": 1200,
      "barcode": "0x64fa73f29f8f6faae6ba94cdf56f7e5a36b81695",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 64
    },
    {
      "price": 400,
      "barcode": "0x564fa6cc5b1d16f228bb3fab5715e081fe7ac51c",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 1
    },
    {
      "price": 1200,
      "barcode": "0x1b3755803aa1cc33a312266cc08245093cc58ebc",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 48
    },
    {
      "price": 200,
      "barcode": "0x340a1e777c2622ec60120146aaeb697271a99904",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 41
    },
    {
      "price": 200,
      "barcode": "0x5f7861a5abe16f1063b2bb6022a5d3b9acec76e0",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 30
    },
    {
      "price": 1200,
      "barcode": "0x153f572f03b7978fec45a740fbbc4777d3f91c27",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 27
    },
    {
      "price": 400,
      "barcode": "0x3b635c11087557e85a8ee29d307b8683598178e1",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 28
    },
    {
      "price": 200,
      "barcode": "0x9c643dc3c6200da090e567c52415cb1ca72d172a",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 30
    },
    {
      "price": 800,
      "barcode": "0x296114f6216c055000bc3909d3541d913c11fdc4",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 51
    },
    {
      "price": 1200,
      "barcode": "0xa22d1a725468629a9582c13f36689a87163a63ce",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 5
    },
    {
      "price": 1200,
      "barcode": "0x2d728007a4b125c1ade3ecb535b2b4ad6a36a9c9",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 18
    },
    {
      "price": 800,
      "barcode": "0x3fc81f824badb47b4ebe8bfe81fd9c7d7ad3cfde",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 35
    },
    {
      "price": 800,
      "barcode": "0xb985a4c63703c1b302094978ab144b39481f077b",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 12
    },
    {
      "price": 400,
      "barcode": "0x0443c8b218f766d17de7a0de31ef930920812938",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 56
    },
    {
      "price": 400,
      "barcode": "0x5a29023d7ba008e9939690e3fbecd7a21a983cc3",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 9
    },
    {
      "price": 200,
      "barcode": "0x43482f4319c42de433871ee25624cd7209dee4fa",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 6
    },
    {
      "price": 200,
      "barcode": "0x4dc9bfedae915c75d016647796e22b6653ad1520",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 5
    },
    {
      "price": 800,
      "barcode": "0xc62b246320595a482a64455629ea034da33d1060",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 20
    },
    {
      "price": 200,
      "barcode": "0x3b31f7f34e6618af4f77b92f56bd1cfdd895944f",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 36
    },
    {
      "price": 400,
      "barcode": "0x3f68eca965f96e1368f67cca88be159c0d4160c5",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 38
    },
    {
      "price": 200,
      "barcode": "0x91fb7d959d1732dbecf97094f5dd777b98338fa3",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 58
    },
    {
      "price": 800,
      "barcode": "0xd40e7d576878dc3fea411776f311e2c49bc21281",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 19
    },
    {
      "price": 400,
      "barcode": "0xdb4bab37e61486ed2307d4799da592436bc001ff",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 50
    },
    {
      "price": 1200,
      "barcode": "0xa5d3adb5f6a9bf44836fd1fb6c2ffafb456e696f",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 7
    },
    {
      "price": 200,
      "barcode": "0x2067ad2e560d46540d61faf9ac1cbc88ac31bf33",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 15
    },
    {
      "price": 200,
      "barcode": "0x98ea3e3442f19cde9fd089d99a9d6e68f2245f06",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 43
    },
    {
      "price": 1200,
      "barcode": "0x336108f982ab3480d6ab09c80a710c7725475840",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 26
    },
    {
      "price": 400,
      "barcode": "0x262e48ea444bbfd99ef01b7e9241fb4f6dcc657a",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 60
    },
    {
      "price": 200,
      "barcode": "0x38f727a27128e7f3a4a7edf939579b1ab1049113",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 16
    },
    {
      "price": 800,
      "barcode": "0xeb9919716510b4f7165cd0b3548169398a2fc975",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 10
    },
    {
      "price": 1200,
      "barcode": "0x9a2d0a78ae1572c4231f5384a060c9b8c1610b47",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 46
    },
    {
      "price": 200,
      "barcode": "0xe69b05b79dc979c344e4208c6145850a8df2a380",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 52
    },
    {
      "price": 1200,
      "barcode": "0xf77ce2101252cd7eaef8596ab5333cd78fa05719",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 59
    },
    {
      "price": 800,
      "barcode": "0x2dc988655f66b2bcaa6f67a950937260339ce3e0",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 12
    },
    {
      "price": 200,
      "barcode": "0x7fd35659d5ebaeb91b8e7e07de0c6197b4a815fa",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 19
    },
    {
      "price": 200,
      "barcode": "0x4918b80edc73440d4fe7aa84b7368a9b728d64ad",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 41
    },
    {
      "price": 1200,
      "barcode": "0xedbdd7ec296988b777ed4e6b8a1586812f53f70f",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 47
    },
    {
      "price": 800,
      "barcode": "0x3b9183b375a127040c9111749a805507a228e7a7",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 24
    },
    {
      "price": 400,
      "barcode": "0xc1e4862b2270ec1af0c6465e79adae5deefa6e94",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 2
    },
    {
      "price": 200,
      "barcode": "0xe5627b275f651fa34194426656278fcee6d6a801",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 18
    },
    {
      "price": 400,
      "barcode": "0xbab1fc495c43f94c373e2a6943af08ff19a9f6ad",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 60
    },
    {
      "price": 400,
      "barcode": "0xae6dbafeb401e7dfe959e1d0003e11aaf733617b",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 34
    },
    {
      "price": 200,
      "barcode": "0xe9cf5bde7161c541bd60001d77f882a5d6abaf21",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 46
    },
    {
      "price": 400,
      "barcode": "0x6894979df7a7d7f2ab95fc8ed758407138b9a7b4",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 25
    },
    {
      "price": 200,
      "barcode": "0xc2a78fd241add550889bbc609417c2bf71845e2d",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 37
    },
    {
      "price": 800,
      "barcode": "0xea8c6bb51cddf4509d2ec6d512850d625730f058",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 38
    },
    {
      "price": 1200,
      "barcode": "0x5520531f201ec9874236513972ebc44cee883872",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 50
    },
    {
      "price": 400,
      "barcode": "0x38ec94ab5f5cd36a36ed14e9f140af376698b7e7",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 55
    },
    {
      "price": 200,
      "barcode": "0x89f71cdec30c083cb358c2e3d3625da845e9d19d",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 49
    },
    {
      "price": 400,
      "barcode": "0x1d8dad85b78390a512c45b0fb43e074f8ae8a6cd",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 41
    },
    {
      "price": 1200,
      "barcode": "0xcc0eaa8dfcaa2da448b05425fc225574729ec058",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 26
    },
    {
      "price": 800,
      "barcode": "0x8c59969678182e1c24d501c874703277abfcaeaa",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 29
    },
    {
      "price": 1200,
      "barcode": "0x31b20a4332326f35ff7f78b58c53278facb8a0cd",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 55
    },
    {
      "price": 800,
      "barcode": "0x5679e9a3acf8c0e6e90619c04410d16d58a0a0d2",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 26
    },
    {
      "price": 400,
      "barcode": "0x1f74c6bf31ce39928ae8d59ed41323aa22c119a4",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 33
    },
    {
      "price": 400,
      "barcode": "0xee1e9e24f93f81b43088dd748b30e9a970cd65fd",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 54
    },
    {
      "price": 200,
      "barcode": "0x0b3ac98a64749e3d11cd2900b4a10198581f74fc",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 46
    },
    {
      "price": 800,
      "barcode": "0xdb28fd15fb827125bf261fb41a875a91fd807e76",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 32
    },
    {
      "price": 1200,
      "barcode": "0x7fbcd40f3ca2e749c2f5430af839428508ce8115",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 17
    },
    {
      "price": 200,
      "barcode": "0x4b1c1a9b18e51a6910862483403c38b02868ab85",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 41
    },
    {
      "price": 400,
      "barcode": "0xb97493bea9d427b3a068f21b9dc0caec799779ae",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 63
    },
    {
      "price": 400,
      "barcode": "0xf509e55f0b2ab6ade4efca34d55b011d4e36c73e",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 51
    },
    {
      "price": 800,
      "barcode": "0xbc80a131d20159b5e01155e55b23bef6f1969cb1",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 36
    },
    {
      "price": 800,
      "barcode": "0xf2b92746b973f7aef4b8c4c05ec8ff7c495935b0",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 9
    },
    {
      "price": 800,
      "barcode": "0xc8fd2a5ec54810240af072d310fe1ab09b885686",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 12
    },
    {
      "price": 200,
      "barcode": "0x3b1b24036d5f9eb2f91d90166100bc3c8aa2be81",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 13
    },
    {
      "price": 1200,
      "barcode": "0x9e35a3f08aef847e2e9daa5df4fdddf0e606d196",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 33
    },
    {
      "price": 800,
      "barcode": "0x2d6cd23854bfc985c252ec40f5b3bf07aee08aa7",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 52
    },
    {
      "price": 800,
      "barcode": "0xb63311015993c3107bcdfdc37025458fcbd5fd1a",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 21
    },
    {
      "price": 1200,
      "barcode": "0x4cfe4cf7598e9d1ead2fef9ce533672bb4d1bbd8",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 29
    },
    {
      "price": 1200,
      "barcode": "0xbab04fbc2479f5cf7a7b46266eed42c394846f61",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 34
    },
    {
      "price": 800,
      "barcode": "0x3c7e75671a071d423565164ee83c70babdcefbb5",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 40
    },
    {
      "price": 800,
      "barcode": "0xb3a2ef32be9a561e05057022a212beaca05c2124",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 64
    },
    {
      "price": 400,
      "barcode": "0x933176b89e64b902e32865143d7ecdd72a3fcc78",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 35
    },
    {
      "price": 800,
      "barcode": "0x4f64bc9582804c833f2fccd0c22779401b11d916",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 49
    },
    {
      "price": 200,
      "barcode": "0xdb8fac25c7ea5ffd4ca557b77fb62b24ed2c9020",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 3
    },
    {
      "price": 1200,
      "barcode": "0x409df62f0ae0bf0cbf54886a53683422445a748c",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 28
    },
    {
      "price": 400,
      "barcode": "0x5410b7034c94a89a4a642317ac6602924c339b3b",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 2
    },
    {
      "price": 400,
      "barcode": "0xbaa337b7572588c4287b5a57a3afb8fc11a6acd3",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 28
    },
    {
      "price": 1200,
      "barcode": "0x0cc3f81f3d9153384df3e308f1e5caa4b3c1e319",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 24
    },
    {
      "price": 200,
      "barcode": "0x6130e4b967f28a85861615e7723f831286cf248a",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 30
    },
    {
      "price": 1200,
      "barcode": "0x8e6c0888a3de4132cdc97a300dfbbdbd854a4d41",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 7
    },
    {
      "price": 1200,
      "barcode": "0x625fddf43655b174cfb81beadeb5c2a135aaa4f3",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 26
    },
    {
      "price": 400,
      "barcode": "0xb29d95e05b496ab5b2d985c2b833f92c87558bf2",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 32
    },
    {
      "price": 400,
      "barcode": "0x0aeed5fced19e9fc6ff8ee06a1c9df9fa7d6da65",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 43
    },
    {
      "price": 200,
      "barcode": "0xf5ccd2190f8578b672bcd8c8fe39913b02066da0",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 55
    },
    {
      "price": 800,
      "barcode": "0x121e3f35f9cac5e8f949d37ccecb8ca3422b9a0f",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 27
    },
    {
      "price": 400,
      "barcode": "0x5a32225976d12374d94c65869faaa2fc9958cc25",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 11
    },
    {
      "price": 1200,
      "barcode": "0xc62e9a1ad483280e9727d0d955e2c7f341f21d1c",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 18
    },
    {
      "price": 800,
      "barcode": "0x971e6af020b9696ca7bbc4b025d7116b0e1710f8",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 7
    },
    {
      "price": 200,
      "barcode": "0xa503dd31e9c7c982cd00a71480b72600f739202a",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 57
    },
    {
      "price": 400,
      "barcode": "0x69cbeb26b46746fb1c60766ff6a2a7a3189783aa",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 25
    },
    {
      "price": 400,
      "barcode": "0x2ae998894bd7a77d92f65cce1f59deb6e0cdac22",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 6
    },
    {
      "price": 1200,
      "barcode": "0x8f8983909349c3be40c781b09473c67861e5401f",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 26
    },
    {
      "price": 200,
      "barcode": "0x035c47a17452d5d24ecb42c9419b774b7a8cf66d",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 42
    },
    {
      "price": 1200,
      "barcode": "0xbbce3386978fb18bf96abcadbb47dd40eeb60560",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 19
    },
    {
      "price": 400,
      "barcode": "0x9340e1deb812e2c0653f509985db5249f6841dee",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 63
    },
    {
      "price": 1200,
      "barcode": "0xdb638923c427194e3a7786d0d01fe73f0957f3b1",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 26
    },
    {
      "price": 1200,
      "barcode": "0xb222801a837c7693e7ee203d33aa3765a3f548ce",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 60
    },
    {
      "price": 1200,
      "barcode": "0x541993bf55196ea4b45804cd4f746248f2020fac",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 44
    },
    {
      "price": 200,
      "barcode": "0x69ffc08053ef2456caefc2f67b5f73d0f544fc7c",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 42
    },
    {
      "price": 400,
      "barcode": "0xc8de2acc0c5a39e128072a2d660deea6b8be67b1",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 61
    },
    {
      "price": 200,
      "barcode": "0x6bbc724652b1ab0f92792c963d6241579c2933d7",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 48
    },
    {
      "price": 200,
      "barcode": "0xb29411c15f821448fdaf8b48dc2c5e9adf60ed47",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 52
    },
    {
      "price": 800,
      "barcode": "0x675e0e0b466bb56f23f01088a2747f49a8076991",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 59
    },
    {
      "price": 200,
      "barcode": "0xf0c9164aa67087ac92af2f724f67545a2d20e8f7",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 43
    },
    {
      "price": 400,
      "barcode": "0x3ecda78a0d4dbde64751c0def8b743e811de7d17",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 18
    },
    {
      "price": 800,
      "barcode": "0x50a55b1c26699f66e79e27cb006b145fa6e20467",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 43
    },
    {
      "price": 200,
      "barcode": "0x5df275d292f6ec2f36455921c6b682717d5dc043",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 57
    },
    {
      "price": 1200,
      "barcode": "0xfa05d419cc860cf8552cbc624baec2b8dffc55a8",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 30
    },
    {
      "price": 800,
      "barcode": "0x100a0abab470895b1d83d63c0a8508c02564f565",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 34
    },
    {
      "price": 800,
      "barcode": "0x2c7911e1e1abebb4bf2f234f27c3568e03ce405f",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 10
    },
    {
      "price": 200,
      "barcode": "0x199a291419d604007604e281e00a66930000414a",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 3
    },
    {
      "price": 800,
      "barcode": "0xd8206a2aedf107939ab3489da720ae5f2c5e2368",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 38
    },
    {
      "price": 400,
      "barcode": "0x105fe836338cf65b5aa5d802afac4f9bd658c26f",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 20
    },
    {
      "price": 1200,
      "barcode": "0xa3b9bcd2e2b31e0a6015a8e406576c2b82f8b855",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 63
    },
    {
      "price": 200,
      "barcode": "0xa70eb365ef36f709e53ed485dd9558be1c8a06bd",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 45
    },
    {
      "price": 1200,
      "barcode": "0x13ecad7b74541d5be3276f47c44bdeee861a3d05",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 39
    },
    {
      "price": 200,
      "barcode": "0xad1e8657bbe8ef94a88822f87ec03e71ba28baab",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 47
    },
    {
      "price": 800,
      "barcode": "0xa9b311ea760455aae12e97e4c37387d54d284217",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 47
    },
    {
      "price": 1200,
      "barcode": "0x6a50324afa96182aff6620d9de3832dada219092",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 46
    },
    {
      "price": 200,
      "barcode": "0x4c1e6aae6bef5798fb30efb0394b38473b14792f",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 24
    },
    {
      "price": 400,
      "barcode": "0xda6d36c33f2724431cddcfc3ff804e8f9e655dd9",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 51
    },
    {
      "price": 800,
      "barcode": "0x2d955109f47e6107dad4d261dd1b4ad2c7a977f9",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 12
    },
    {
      "price": 400,
      "barcode": "0x5fa94205b4d84a52df11eea1e839115cc6b94912",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 4
    },
    {
      "price": 1200,
      "barcode": "0x6e15b97edc24e4585d39148528606baae6a2b2b7",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 5
    },
    {
      "price": 1200,
      "barcode": "0x9290bd19d05cebb85d62749c9231b1740a48945e",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 12
    },
    {
      "price": 800,
      "barcode": "0x0eb2c80729275b175118328e012ded0510fd0382",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 22
    },
    {
      "price": 200,
      "barcode": "0x944237f36a98b54b7d8a65b247c070735dce1ba3",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 44
    },
    {
      "price": 200,
      "barcode": "0x39e337159a78a9c9bce25f3debea257ce4bebefe",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 21
    },
    {
      "price": 800,
      "barcode": "0x01060d273b7cb6a489289aac75fed41e2bbf3cfd",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 63
    },
    {
      "price": 400,
      "barcode": "0x8a3fe4f88de747837158c3cf3c3dccbee99e2560",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 16
    },
    {
      "price": 400,
      "barcode": "0xdb88c51485151fc92a22c819dccb5fc2702a28fd",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 13
    },
    {
      "price": 1200,
      "barcode": "0x8a61d2837fc7bce5ca11b5dd17f47bb836a901fc",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 45
    },
    {
      "price": 800,
      "barcode": "0x6d34664320988d98117144463bed7db2aa463af2",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 57
    },
    {
      "price": 200,
      "barcode": "0x324d0c2fb3692d8a7b996e1119f95c2a64acd04a",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 60
    },
    {
      "price": 1200,
      "barcode": "0xde6735e1c310372cdcf8044c543cdcf40dee9602",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 46
    },
    {
      "price": 800,
      "barcode": "0xcda4678fe47638932dd8d7203867d87ef1819e5e",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 15
    },
    {
      "price": 1200,
      "barcode": "0xbabdd7157ce0245a4628d611d8cb66b4aed34401",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 40
    },
    {
      "price": 200,
      "barcode": "0x2f3d66896e57909825b19f00ed4cbc2d9ac393fd",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 9
    },
    {
      "price": 200,
      "barcode": "0xd5146f6fe1d31a38f2c9b13c7a1102d31a5e1cb2",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 53
    },
    {
      "price": 400,
      "barcode": "0x4ab90bc1e072830db1ff67743d95a6db95aeee32",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 52
    },
    {
      "price": 800,
      "barcode": "0x4de5eac813275b6f553b1fbc84f92e7fb3ffbf82",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 12
    },
    {
      "price": 800,
      "barcode": "0x9feaa06b5b104f4cbf107662921a77a293ba7f86",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 38
    },
    {
      "price": 400,
      "barcode": "0x208fcb96e345b7e3e264ec4de344c7f0f6ebd4f9",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 58
    },
    {
      "price": 200,
      "barcode": "0xc70fac002c70272ecc4484ce01cb5159027757ee",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 58
    },
    {
      "price": 400,
      "barcode": "0x54f97ebde683af90e110a8697061d58062b5a3c3",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 1
    },
    {
      "price": 800,
      "barcode": "0x84e7730b4079016f16f72c04e4f5d576ff144011",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 40
    },
    {
      "price": 400,
      "barcode": "0x283311eae71f09396149fec3a0250938a605fac6",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 33
    },
    {
      "price": 800,
      "barcode": "0x05085414edb08906cc3e3031285ad3b9c0f8f8d0",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 7
    },
    {
      "price": 200,
      "barcode": "0x60f2af2138c6fa72937621dfbd3d9536b1d6cdee",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 13
    },
    {
      "price": 1200,
      "barcode": "0xc154f5e67deb5b5cc2f8e47fe99b0cdfd7d5f9de",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 3
    },
    {
      "price": 200,
      "barcode": "0xabdcf8b90cc522b38c33ef31ee40d199d5bcbf5a",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 46
    },
    {
      "price": 800,
      "barcode": "0x09d9291338dd12d4f0f7fad7af109066e3acfc4b",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 46
    },
    {
      "price": 400,
      "barcode": "0x4f1f0ffb667837ad4f3e72ae01e1574636c294d6",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 49
    },
    {
      "price": 800,
      "barcode": "0x59d67b1d83040ca364f4679d15cbf4dbe290dd4b",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 43
    },
    {
      "price": 200,
      "barcode": "0xe7f292ea86f112eeb668205e155d31ff2759cb98",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 53
    },
    {
      "price": 1200,
      "barcode": "0x1c33f4ac2808c78463ace1876fa6321fa850b2f2",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 23
    },
    {
      "price": 200,
      "barcode": "0x873dbe04124b70b2b3938ccfc5c54ab4be36ffbc",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 64
    },
    {
      "price": 800,
      "barcode": "0xcf20e1facbd66b179d71fab88e0b1406b209b171",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 62
    },
    {
      "price": 800,
      "barcode": "0xd6b0fa32222cf5756b512b9f3e496e686a6d4d17",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 45
    },
    {
      "price": 1200,
      "barcode": "0x41ff698a943375194a062c67b27986460c76f738",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 43
    },
    {
      "price": 1200,
      "barcode": "0xa0573ac2a67c344adcf31458cea55406906c06f3",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 29
    },
    {
      "price": 400,
      "barcode": "0x0f6c04e78463698d904bf8e119a99478aa51d77c",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 57
    },
    {
      "price": 200,
      "barcode": "0x9624296116622e73304d965f30bf0c68e0ab3a91",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 40
    },
    {
      "price": 400,
      "barcode": "0xd1b4d366474b18f45a6d675c341383b1744805de",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 14
    },
    {
      "price": 1200,
      "barcode": "0x0d86ddee95c1ebd65c0d7318c62c3d423b7adce6",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 13
    },
    {
      "price": 1200,
      "barcode": "0xf651ee6b39ee74dfe3d7af3e54b7ca3756231761",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 15
    },
    {
      "price": 400,
      "barcode": "0xe22c6146fdda414b9dad1228413f7a6dae127584",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 47
    },
    {
      "price": 800,
      "barcode": "0xe3817e724ebbbda105aa1258acd51d9fce6a79a6",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 38
    },
    {
      "price": 400,
      "barcode": "0x26c60ee5034c9b353515242e8495b8f0fc959150",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 16
    },
    {
      "price": 800,
      "barcode": "0xa35baf8f4ba33e883ec5f170684be74385740832",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 32
    },
    {
      "price": 200,
      "barcode": "0x82fde700a55b9c8423adb179c73fcb1f112ba329",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 43
    },
    {
      "price": 800,
      "barcode": "0xb6bf0b27a676eaf097fcda4b52d1c4308aab1530",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 54
    },
    {
      "price": 1200,
      "barcode": "0x50782b206ae31fd7a287ac4bb570725102361fd0",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 50
    },
    {
      "price": 400,
      "barcode": "0x1158a0754b9ae364181c73f59a3cf3db6adc2078",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 49
    },
    {
      "price": 800,
      "barcode": "0xdad74fd6cf9c5b5e4fd005ee807db5ddcf746a37",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 52
    },
    {
      "price": 800,
      "barcode": "0xfa379a43429e9c7972106a28ba1e26624a0a3ec2",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 11
    },
    {
      "price": 200,
      "barcode": "0x90aa76f259976ceb087fa3397fbe1eabd0430ac6",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 62
    },
    {
      "price": 1200,
      "barcode": "0x482d5a67638dee059ad02f738e160424c65845fb",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 34
    },
    {
      "price": 1200,
      "barcode": "0x73fc345f5f7e598362b2c54b2aee7a0bf67fe817",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 44
    },
    {
      "price": 1200,
      "barcode": "0xaf3eecaecb4dba9880fc716bd8c0e13d968fd231",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 44
    },
    {
      "price": 200,
      "barcode": "0x5eb45419c5b418bfb698675f7695323bb00e2fe5",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 26
    },
    {
      "price": 400,
      "barcode": "0x2ae8fba3130a6b962e3685896c949724338a932c",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 31
    },
    {
      "price": 1200,
      "barcode": "0x748ac4fa129fe160471e6f1876f05709ddcb2ab7",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 46
    },
    {
      "price": 200,
      "barcode": "0x2ebe38b975be9568a0a1106086f047ddc1c83fa4",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 62
    },
    {
      "price": 400,
      "barcode": "0xe1e392f6d8e05b3ea6e65476da5b959deea2f10a",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 64
    },
    {
      "price": 1200,
      "barcode": "0xf8206e6e580198f9558cca2b408d9863f3cdc132",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 32
    },
    {
      "price": 800,
      "barcode": "0x930bee7b4bb5ea3c5ae0f6e5ebde1a01122d76a7",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 30
    },
    {
      "price": 1200,
      "barcode": "0x2e6cc77afbfcc912575c95d694120f4f1cd7702c",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 6
    },
    {
      "price": 800,
      "barcode": "0xb45a965f253ba5b362c5c4ccb8da43870a4ff084",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 28
    },
    {
      "price": 800,
      "barcode": "0xcac41a4d105436c4f60d345f3102895b2c8696fc",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 30
    },
    {
      "price": 800,
      "barcode": "0x3ee5cb86b3dd8da06416d4453b35aa599b9ee636",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 32
    },
    {
      "price": 1200,
      "barcode": "0x092a2e1f4510641e8a19231af4b4b2145d400d1d",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 23
    },
    {
      "price": 200,
      "barcode": "0x05a2de8df918270e0b7d5856988fd71114f425ad",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 46
    },
    {
      "price": 400,
      "barcode": "0x5665961c93d871ade53277fa7919ed22f76f47f4",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 11
    },
    {
      "price": 200,
      "barcode": "0xb2d7cfae80d6ecebf30d1bd69835ef788fc02e04",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 30
    },
    {
      "price": 1200,
      "barcode": "0x1e0dd845a9da2748e508d886467a95915bdd1155",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 18
    },
    {
      "price": 800,
      "barcode": "0x3c339fdb868cee2fb33f7499c01a09f4cf0f6d31",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 42
    },
    {
      "price": 1200,
      "barcode": "0x4437a7b279f50bc43614aaa0f842b19f37a745d8",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 54
    },
    {
      "price": 400,
      "barcode": "0x507571ea70610e064f4887e5f9f330b310112064",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 51
    },
    {
      "price": 1200,
      "barcode": "0xff3fb9e74822b5593763e207c56ffe9024b9ace6",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 30
    },
    {
      "price": 1200,
      "barcode": "0x9296bc658c067e171728f1bb193422572a728cd6",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 64
    },
    {
      "price": 200,
      "barcode": "0x0c39ef126672401bf579e8c5d498cf778b5a1890",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 52
    },
    {
      "price": 400,
      "barcode": "0x6d91804b554930a30cb50a9d90a7e7137c7c8c1b",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 45
    },
    {
      "price": 400,
      "barcode": "0x6460b135f39fba505613f74223d45b2dfe1de77a",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 46
    },
    {
      "price": 200,
      "barcode": "0xc34c24a3ba399f697770c96b02239b9a24538d89",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 35
    },
    {
      "price": 1200,
      "barcode": "0x1b5197d8a9cc32af819d6c1f9cfdcfd9c268fbd0",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 25
    },
    {
      "price": 400,
      "barcode": "0x62719c204fc395410934c6180479c435f99927f5",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 63
    },
    {
      "price": 400,
      "barcode": "0xa450daab89e304a80b41ca22f4bffed807d28fa2",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 33
    },
    {
      "price": 800,
      "barcode": "0x57bd9eb1c23034a9c3695d56bfa644dc27c0f5cb",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 4
    },
    {
      "price": 800,
      "barcode": "0xe0a4001998b63cf645ad774e551ffcb1174674f1",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 50
    },
    {
      "price": 800,
      "barcode": "0xe085514849b9b664d70431a5e106510997dac7a9",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 22
    },
    {
      "price": 400,
      "barcode": "0xc48c4bff02728a72ed6371b21ed42ec62b3b4fd4",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 14
    },
    {
      "price": 200,
      "barcode": "0xcac670a4b43fc3947b962e48ee0717159c35fd2e",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 6
    },
    {
      "price": 800,
      "barcode": "0x1af3c88dfb5467145351e95b91603be62cee2c0b",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 60
    },
    {
      "price": 1200,
      "barcode": "0x04d4e3a2e009f39d5b99a14c34820796ec910757",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 56
    },
    {
      "price": 800,
      "barcode": "0x2ea019160cecf2ac80f2131357beaf8ca769467b",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 54
    },
    {
      "price": 400,
      "barcode": "0x77468f7cc9131d6086d52445fc7d05f5e4bf34b6",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 8
    },
    {
      "price": 800,
      "barcode": "0x1728914d4dd21f59634024f1e95c6c9dfa487f2e",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 30
    },
    {
      "price": 200,
      "barcode": "0x0f000b452005fe199ae3e0ab9bdc8e548928e19d",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 60
    },
    {
      "price": 200,
      "barcode": "0x1ded590b32cd3753a7636bb8f859b1369e4306bd",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 55
    },
    {
      "price": 400,
      "barcode": "0x47111141452982064c885f86c86dc8dd7642f116",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 13
    },
    {
      "price": 200,
      "barcode": "0xd9e0d77405e8e99a5fbd1451e31c32f41aff0b38",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 53
    },
    {
      "price": 400,
      "barcode": "0x96b58c86c7a477e00d6691a77af4967133b8a629",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 33
    },
    {
      "price": 200,
      "barcode": "0xe5833f4176029bad84fed7ccc5fc33b8809733b0",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 28
    },
    {
      "price": 400,
      "barcode": "0x4707f2d399a692cb79b3a4ac565b71bfd7889ffe",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 4
    },
    {
      "price": 1200,
      "barcode": "0xa45bb8d7add0ee4dc225cb4e8e208274c6335735",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 38
    },
    {
      "price": 400,
      "barcode": "0x9c252064331a6e93ee7c0cab31a32c19b732e33f",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 28
    },
    {
      "price": 1200,
      "barcode": "0xebb07c4437d40f4d92d69dae09c05ef21d227838",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 44
    },
    {
      "price": 800,
      "barcode": "0xd19804bfca76a6cca2b6b880be3bfdb7a93e1498",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 51
    },
    {
      "price": 800,
      "barcode": "0xdfeed08dd8bffcb750f7824f4e4f94e96b62ce1b",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 49
    },
    {
      "price": 200,
      "barcode": "0xe075b1c30671986b01ab121d07c617ec1778c0e3",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 18
    },
    {
      "price": 1200,
      "barcode": "0xf6eec087bf9a58dd2386098786e73bf6bdc2f795",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 41
    },
    {
      "price": 200,
      "barcode": "0xd08dd581f158fb2f18c67e172c0187cb39718c21",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 34
    },
    {
      "price": 200,
      "barcode": "0x38eba0ee0cbf5c5a2a261fcfcce670871d4cbada",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 53
    },
    {
      "price": 400,
      "barcode": "0x659048c5534460cff8a51f77542e5aa76d2c7b43",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 19
    },
    {
      "price": 400,
      "barcode": "0xd8393b30415f3cafc023f9662675b138a08e1faa",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 34
    },
    {
      "price": 800,
      "barcode": "0xc161896b2a8c6983cb2e2d96d57d0b53d50431c4",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 4
    },
    {
      "price": 1200,
      "barcode": "0xcbc96f909edd16a8c78c8048c1ca1f6cdd1a78ca",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 11
    },
    {
      "price": 400,
      "barcode": "0xf3b58bf9188c0cdf37a3f88f9b0878831dadd5e8",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 36
    },
    {
      "price": 200,
      "barcode": "0x0f0973dd6070d99251bd0b7b6183ad1461f30e0c",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 37
    },
    {
      "price": 200,
      "barcode": "0xad595a6c1f4bd69323515bbcd5fd215c1f93f002",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 40
    },
    {
      "price": 400,
      "barcode": "0xcaa4a88030bd071b0f8a4b57ae48fd51df2b4295",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 34
    },
    {
      "price": 1200,
      "barcode": "0xb0315d2e52d8c85b4db1b6faa9db172f8eaa4a4d",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 34
    },
    {
      "price": 200,
      "barcode": "0xf9b161e6f43a0846e17e4b1421c075b0fe03eff6",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 26
    },
    {
      "price": 200,
      "barcode": "0x76a5aa51fc9bebcaa22369cabb670a72a1f4798f",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 37
    },
    {
      "price": 1200,
      "barcode": "0x3f2475e34f2717182253627e20e66ca214c3abda",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 31
    },
    {
      "price": 400,
      "barcode": "0xff10d8a10341531534c0ea8f872754986b1f0b85",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 4
    },
    {
      "price": 200,
      "barcode": "0x734b4d830b4180f3b15fc369262c66a26ec49eb8",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 61
    },
    {
      "price": 200,
      "barcode": "0xdd44d01b7b5d2ec2d6bf5c6b65c1b2f024802231",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 20
    },
    {
      "price": 1200,
      "barcode": "0x71651237d780684acd5654042ddae4e4c2f0f7d8",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 10
    },
    {
      "price": 800,
      "barcode": "0x93b603e3950de92b4206e0200a30c880a67504c4",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 17
    },
    {
      "price": 400,
      "barcode": "0x783fa9910c878103ec39a0434f0357f4171233b0",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 57
    },
    {
      "price": 200,
      "barcode": "0x1ea8467d52db10b321540ed96b2ad8cb4dfb37d3",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 16
    },
    {
      "price": 400,
      "barcode": "0xd272667f8d9dcef4afe963e2e47fca1eef292971",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 28
    },
    {
      "price": 800,
      "barcode": "0x5590073dc97ffb5cf085c2bb016fa09e19c17508",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 55
    },
    {
      "price": 1200,
      "barcode": "0x47e6a650e9887db3b1e8bc2aa575d202b6e73179",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 40
    },
    {
      "price": 200,
      "barcode": "0x13f2f8b8cad2fb065e35c1f8d591da30896a3a6f",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 28
    },
    {
      "price": 200,
      "barcode": "0x41f7940b5711ca947eb96522081fe244a60592b5",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 63
    },
    {
      "price": 800,
      "barcode": "0x4bc90bb229d55302f002241b1cd89498e9e56262",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 26
    },
    {
      "price": 800,
      "barcode": "0xbffd24b5f0b11f33fd66c5b5e989326add210094",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 39
    },
    {
      "price": 200,
      "barcode": "0x93029272b483fb4f8181851fd0a368ddcbd19f36",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 1
    },
    {
      "price": 200,
      "barcode": "0x89d03a706247238b1ffa0da6e6befcf46c03291c",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 9
    },
    {
      "price": 200,
      "barcode": "0x4e4c98a9abc8fd90086f99251613963471cd4ff4",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 61
    },
    {
      "price": 800,
      "barcode": "0xabebb375a577d794a00eb54e0f070dab421af033",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 60
    },
    {
      "price": 1200,
      "barcode": "0x27f9871a7c5226b980b3fb23eb0fc90de4195acf",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 46
    },
    {
      "price": 1200,
      "barcode": "0xe614ddf19902677dee18f523572b673eed7bd648",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 31
    },
    {
      "price": 400,
      "barcode": "0xd38c8ce9f2010213f4f63ac52fd9990eaf4e9a14",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 41
    },
    {
      "price": 800,
      "barcode": "0xd6c7311f97685f648b17ddae63f64482f4b63bb6",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 64
    },
    {
      "price": 1200,
      "barcode": "0x43540287b58d32bb23117284801bac3c4688f32c",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 9
    },
    {
      "price": 400,
      "barcode": "0x35d2a109eaa9648cb85b073f2acfd6713dd041e3",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 54
    },
    {
      "price": 200,
      "barcode": "0xe3382b13e79ee724e808447e769c5f33714b38ca",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": false,
      "matchId": 57
    },
    {
      "price": 400,
      "barcode": "0xb548c5f7a260ede1e5138872569d91e9b70a09cd",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 60
    },
    {
      "price": 1200,
      "barcode": "0x1713ca463464aa0a8c8a526d77e4778fdec2e823",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 33
    },
    {
      "price": 1200,
      "barcode": "0xa91c27ab8d3ccf149fd3182f8ee33ae921bb90a9",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 22
    },
    {
      "price": 200,
      "barcode": "0x7891d9877e057c5e2d6b43e547a510304444363a",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 61
    },
    {
      "price": 1200,
      "barcode": "0xe21cb94526194e6a904fa1fb3fd1ea1cda2637b6",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 45
    },
    {
      "price": 800,
      "barcode": "0xedd3b6aa1d951a77f71ac04aba547d856cc9539f",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 64
    },
    {
      "price": 1200,
      "barcode": "0xb147f40aededc2a26f72f855d8c0b753b563e004",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 61
    },
    {
      "price": 1200,
      "barcode": "0x69ae21c3d50f7a0c5e1ed548fdf0d29c3b8c7bff",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 15
    },
    {
      "price": 200,
      "barcode": "0x7adeab8b56a47fa147b2bf2d201a0d04eb054850",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 14
    },
    {
      "price": 400,
      "barcode": "0x62a5e9ade6d88c0f7cdccde15f7d5316a092a214",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 25
    },
    {
      "price": 400,
      "barcode": "0x3dec6ab8e24d0eafd5bd884afdddd50b154472d6",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 37
    },
    {
      "price": 800,
      "barcode": "0xebe708356d2f98d231d6024bd914a232b5a250a6",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 6
    },
    {
      "price": 800,
      "barcode": "0xff065c3fc9071280356d069681656825eda1d59f",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 63
    },
    {
      "price": 800,
      "barcode": "0x66e57899ad9fb5531152e69f16b92609658ee91f",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 2
    },
    {
      "price": 400,
      "barcode": "0x72f50d30bea78f2d25e0354c0ede76fa73d3de8e",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 21
    },
    {
      "price": 800,
      "barcode": "0xc9257fb4cc6a1903af3ae523bdf3f15703a6a71b",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 60
    },
    {
      "price": 400,
      "barcode": "0x4006760929fdd4d00627d06226feb2ed6da3bb9c",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 31
    },
    {
      "price": 400,
      "barcode": "0xe1d278ced611f8b2180edee1e674be61f11181b2",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 25
    },
    {
      "price": 400,
      "barcode": "0x090072a451771946399e6e3adb67e37164b5af7b",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 8
    },
    {
      "price": 800,
      "barcode": "0x6dc258dde2e86cb4cd2bd4f113f955f938a6c5f0",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 54
    },
    {
      "price": 800,
      "barcode": "0xd83caa3fc2176deaaf7cd6b384a25bd1ad8098e7",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 5
    },
    {
      "price": 400,
      "barcode": "0xae14859079adb728dd15d91c138f6baece6f6a46",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": true,
      "matchId": 64
    },
    {
      "price": 800,
      "barcode": "0x72212c90abc401a0187b7dceb0afa7856641138b",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 9
    },
    {
      "price": 200,
      "barcode": "0xf4135cb51c5e93399b4d5ff1485f111fff46113e",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 58
    },
    {
      "price": 1200,
      "barcode": "0x78e574dc5d45be472fa4cb3b832c3584039e0cde",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 48
    },
    {
      "price": 800,
      "barcode": "0xf0cdc5c2027cc780c148b6c31f1eb52a6b15a605",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 33
    },
    {
      "price": 400,
      "barcode": "0x645ad4e1278bc682eaa5980c323af8e174bd48f9",
      "gateOpens": "3:00 AM",
      "category": "Category 2",
      "external": false,
      "matchId": 31
    },
    {
      "price": 800,
      "barcode": "0x52c7f32affa328079dfdd31683ee00cb75f07ee8",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 46
    },
    {
      "price": 800,
      "barcode": "0xfb6223b643520ae52e16a4c820bad8ae78869a4d",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": true,
      "matchId": 35
    },
    {
      "price": 1200,
      "barcode": "0xc5f6824bac756e28a4b0dd2f15a1c6b0fb983364",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": false,
      "matchId": 64
    },
    {
      "price": 800,
      "barcode": "0x102941e4374adfba934a286a160a98b6f13461d0",
      "gateOpens": "3:00 AM",
      "category": "Category 3",
      "external": false,
      "matchId": 46
    },
    {
      "price": 1200,
      "barcode": "0x2a0f3b0e7fa366ce7e02a287ce5ec9c26b36e56e",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 49
    },
    {
      "price": 200,
      "barcode": "0x853193ac7ebca6eefd01cc5f28ffc0a080d4bb98",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 62
    },
    {
      "price": 200,
      "barcode": "0xa446eaa42b933a81311d6004294c17e9f3e74249",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 40
    },
    {
      "price": 1200,
      "barcode": "0x7a7940d61e631098ea8bdedba7dfa4ce6077ef02",
      "gateOpens": "3:00 AM",
      "category": "Category 4",
      "external": true,
      "matchId": 8
    },
    {
      "price": 200,
      "barcode": "0x1a8a34113387f794371e559254d568f892cc1b14",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 17
    },
    {
      "price": 200,
      "barcode": "0xd8aa306404e816ed5e647efb2145425123afdce4",
      "gateOpens": "3:00 AM",
      "category": "Category 1",
      "external": true,
      "matchId": 39
    }
  ]


const newData = datas.map((ticket) =>{
    if (ticket.category === "Category 1"){
        ticket.price = 75
    }
    else if (ticket.category === "Category 2"){
        ticket.price = 125
    }
    else if (ticket.category === "Category 3"){
        ticket.price = 195
    }
    else{
        ticket.price = 1200
    }
    return ticket
})



fs.writeFileSync('./output.json', JSON.stringify(newData, null, 2) , 'utf-8');
