import config from '../config/index'
export interface getShebaInfoType {
  name: string
  code: string
  nickname: string
  persianName: string
  logo: string | null
}

const baseUrl = config.baseUrl
export type ShebaCodes = Record<string, getShebaInfoType>
export const shebaCodes: ShebaCodes = {
  10: {
    code: '010',
    nickname: 'central-bank',
    name: 'Central Bank of Iran',
    persianName: 'بانک مرکزی جمهوری اسلامی ایران',
    logo: `${baseUrl}/Bank_Markazi.svg`,
  },
  11: {
    code: '011',
    nickname: 'sanat-o-madan',
    name: 'Sanat O Madan Bank',
    persianName: 'بانک صنعت و معدن',
    logo: `${baseUrl}/Sanat_Madan.svg`,
  },
  12: {
    code: '012',
    nickname: 'mellat',
    name: 'Mellat Bank',
    persianName: 'بانک ملت',
    logo: `${baseUrl}/Mellat.svg`,
  },
  13: {
    code: '013',
    nickname: 'refah',
    name: 'Refah Bank',
    persianName: 'بانک رفاه کارگران',
    logo: `${baseUrl}/Refah.svg`,
  },
  14: {
    code: '014',
    nickname: 'maskan',
    name: 'Maskan Bank',
    persianName: 'بانک مسکن',
    logo: `${baseUrl}/Maskan.svg`,
  },
  15: {
    code: '015',
    nickname: 'sepah',
    name: 'Sepah Bank',
    persianName: 'بانک سپه',
    logo: `${baseUrl}/Sepah.svg`,
  },
  16: {
    code: '016',
    nickname: 'keshavarzi',
    name: 'Keshavarzi',
    persianName: 'بانک کشاورزی',
    logo: `${baseUrl}/Keshavarzi.svg`,
  },
  17: {
    code: '017',
    nickname: 'melli',
    name: 'Melli',
    persianName: 'بانک ملی ایران',
    logo: `${baseUrl}/Melli.svg`,
  },
  18: {
    code: '018',
    nickname: 'tejarat',
    name: 'Tejarat Bank',
    persianName: 'بانک تجارت',
    logo: `${baseUrl}/Tejarat.svg`,
  },
  19: {
    code: '019',
    nickname: 'saderat',
    name: 'Saderat Bank',
    persianName: 'بانک صادرات ایران',
    logo: `${baseUrl}/Saderat.svg`,
  },
  20: {
    code: '020',
    nickname: 'tosee-saderat',
    name: 'Tose Saderat Bank',
    persianName: 'بانک توسعه صادرات',
    logo: `${baseUrl}/Tosee_Saderat.svg`,
  },
  21: {
    code: '021',
    nickname: 'post',
    name: 'Post Bank',
    persianName: 'پست بانک ایران',
    logo: `${baseUrl}/Postbank.svg`,
  },
  22: {
    code: '022',
    nickname: 'toose-taavon',
    name: 'Tosee Taavon Bank',
    persianName: 'بانک توسعه تعاون',
    logo: `${baseUrl}/Tosee_Taavon.svg`,
  },
  51: {
    code: '051',
    nickname: 'tosee',
    name: 'Tosee Bank',
    persianName: 'موسسه اعتباری توسعه',
    logo: `${baseUrl}/Tosee.svg`,
  },
  52: {
    code: '052',
    nickname: 'ghavamin',
    name: 'Ghavamin Bank',
    persianName: 'بانک قوامین',
    logo: `${baseUrl}/Ghavamin.svg`,
  },
  53: {
    code: '053',
    nickname: 'karafarin',
    name: 'Karafarin Bank',
    persianName: 'بانک کارآفرین',
    logo: `${baseUrl}/Karafarin.svg`,
  },
  54: {
    code: '054',
    nickname: 'parsian',
    name: 'Parsian Bank',
    persianName: 'بانک پارسیان',
    logo: `${baseUrl}/Parsian.svg`,
  },
  55: {
    code: '055',
    nickname: 'eghtesad-novin',
    name: 'Eghtesad Novin Bank',
    persianName: 'بانک اقتصاد نوین',
    logo: `${baseUrl}/Eghtesad_Novin.svg`,
  },
  56: {
    code: '056',
    nickname: 'saman',
    name: 'Saman Bank',
    persianName: 'بانک سامان',
    logo: `${baseUrl}/Saman.svg`,
  },
  57: {
    code: '057',
    nickname: 'pasargad',
    name: 'Pasargad Bank',
    persianName: 'بانک پاسارگاد',
    logo: `${baseUrl}/Pasargad.svg`,
  },
  58: {
    code: '058',
    nickname: 'sarmayeh',
    name: 'Sarmayeh Bank',
    persianName: 'بانک سرمایه',
    logo: `${baseUrl}/Sarmayeh.svg`,
  },
  59: {
    code: '059',
    nickname: 'sina',
    name: 'Sina Bank',
    persianName: 'بانک سینا',
    logo: `${baseUrl}/Sina.svg`,
  },
  60: {
    code: '060',
    nickname: 'mehr-iran',
    name: 'Mehr Iran Bank',
    persianName: 'بانک مهر ایران',
    logo: `${baseUrl}/Mehr_Iran.svg`,
  },
  61: {
    code: '061',
    nickname: 'shahr',
    name: 'City Bank',
    persianName: 'بانک شهر',
    logo: `${baseUrl}/Shahr.svg`,
  },
  62: {
    code: '062',
    nickname: 'ayandeh',
    name: 'Ayandeh Bank',
    persianName: 'بانک آینده',
    logo: `${baseUrl}/Ayandeh.svg`,
  },
  63: {
    code: '063',
    nickname: 'ansar',
    name: 'Ansar Bank',
    persianName: 'بانک انصار',
    logo: `${baseUrl}/Ansar.svg`,
  },
  64: {
    code: '064',
    nickname: 'gardeshgari',
    name: 'Gardeshgari Bank',
    persianName: 'بانک گردشگری',
    logo: `${baseUrl}/Gardeshgari.svg`,
  },
  65: {
    code: '065',
    nickname: 'hekmat-iranian',
    name: 'Hekmat Iranian Bank',
    persianName: 'بانک حکمت ایرانیان',
    logo: `${baseUrl}/Hekmat.svg`,
  },
  66: {
    code: '066',
    nickname: 'dey',
    name: 'Dey Bank',
    persianName: 'بانک دی',
    logo: `${baseUrl}/Dey.svg`,
  },
  69: {
    code: '069',
    nickname: 'iran-zamin',
    name: 'Iran Zamin Bank',
    persianName: 'بانک ایران زمین',
    logo: `${baseUrl}/Iran_Zamin.svg`,
  },
  70: {
    code: '070',
    nickname: 'resalat',
    name: 'Resalat Bank',
    persianName: 'بانک قرض الحسنه رسالت',
    logo: `${baseUrl}/Resalat.svg`,
  },
  73: {
    code: '073',
    nickname: 'kosar',
    name: 'Kosar Credit Institute',
    persianName: 'موسسه اعتباری کوثر',
    logo: `${baseUrl}/Kosar.svg`,
  },
  75: {
    code: '075',
    nickname: 'melal',
    name: 'Melal Credit Institute',
    persianName: 'موسسه اعتباری ملل',
    logo: `${baseUrl}/Melall.svg`,
  },
  78: {
    code: '078',
    nickname: 'middle-east-bank',
    name: 'Middle East Bank',
    persianName: 'بانک خاورمیانه',
    logo: `${baseUrl}/Khavar_Mianeh.svg`,
  },
  80: {
    code: '080',
    nickname: 'noor-bank',
    name: 'Noor Credit Institution',
    persianName: 'موسسه اعتباری نور',
    logo: `${baseUrl}/Noor.svg`,
  },
  79: {
    code: '079',
    nickname: 'mehr-eqtesad',
    name: 'Mehr Eqtesad Bank',
    persianName: 'بانک مهر اقتصاد',
    logo: `${baseUrl}/Mehr_Eghtesad.svg`,
  },
  90: {
    code: '090',
    nickname: 'mehr-iran',
    name: 'Mehr Iran Bank',
    persianName: 'بانک مهر ایران',
    logo: `${baseUrl}/Mehr_Iran.svg`,
  },
  95: {
    code: '095',
    nickname: 'iran-venezuela',
    name: 'Iran and Venezuela Bank',
    persianName: 'بانک ایران و ونزوئلا',
    logo: `${baseUrl}/Iran_Venezuela.svg`,
  },
}
