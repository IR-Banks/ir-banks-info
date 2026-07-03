import Ansar from '../logos/banks/Ansar.svg'
import Ayandeh from '../logos/banks/Ayandeh.svg'
import Bank_Markazi from '../logos/banks/Bank_Markazi.svg'
import Dey from '../logos/banks/Dey.svg'
import Eghtesad_Novin from '../logos/banks/Eghtesad_Novin.svg'
import Gardeshgari from '../logos/banks/Gardeshgari.svg'
import Ghavamin from '../logos/banks/Ghavamin.svg'
import Hekmat from '../logos/banks/Hekmat.svg'
import Iran_Venezuela from '../logos/banks/Iran_Venezuela.svg'
import Iran_Zamin from '../logos/banks/Iran_Zamin.svg'
import Karafarin from '../logos/banks/Karafarin.svg'
import Keshavarzi from '../logos/banks/Keshavarzi.svg'
import Khavar_Mianeh from '../logos/banks/Khavar_Mianeh.svg'
import Kosar from '../logos/banks/Kosar.svg'
import Maskan from '../logos/banks/Maskan.svg'
import Mehr_Eghtesad from '../logos/banks/Mehr_Eghtesad.svg'
import Mehr_Iran from '../logos/banks/Mehr_Iran.svg'
import Melall from '../logos/banks/Melall.svg'
import Mellat from '../logos/banks/Mellat.svg'
import Melli from '../logos/banks/Melli.svg'
import Noor from '../logos/banks/Noor.svg'
import Parsian from '../logos/banks/Parsian.svg'
import Pasargad from '../logos/banks/Pasargad.svg'
import Postbank from '../logos/banks/Postbank.svg'
import Refah from '../logos/banks/Refah.svg'
import Resalat from '../logos/banks/Resalat.svg'
import Saderat from '../logos/banks/Saderat.svg'
import Saman from '../logos/banks/Saman.svg'
import Sanat_Madan from '../logos/banks/Sanat_Madan.svg'
import Sarmayeh from '../logos/banks/Sarmayeh.svg'
import Sepah from '../logos/banks/Sepah.svg'
import Shahr from '../logos/banks/Shahr.svg'
import Sina from '../logos/banks/Sina.svg'
import Tejarat from '../logos/banks/Tejarat.svg'
import Tosee from '../logos/banks/Tosee.svg'
import Tosee_Saderat from '../logos/banks/Tosee_Saderat.svg'
import Tosee_Taavon from '../logos/banks/Tosee_Taavon.svg'

// Bank logos inlined as data URIs at build time by @rollup/plugin-url.
// Using a single map keeps banks.ts and sheba.ts DRY and guarantees
// every logo URL is self-contained (no external/static files needed).
export const logos = {
  Ansar: Ansar,
  Ayandeh: Ayandeh,
  Bank_Markazi: Bank_Markazi,
  Dey: Dey,
  Eghtesad_Novin: Eghtesad_Novin,
  Gardeshgari: Gardeshgari,
  Ghavamin: Ghavamin,
  Hekmat: Hekmat,
  Iran_Venezuela: Iran_Venezuela,
  Iran_Zamin: Iran_Zamin,
  Karafarin: Karafarin,
  Keshavarzi: Keshavarzi,
  Khavar_Mianeh: Khavar_Mianeh,
  Kosar: Kosar,
  Maskan: Maskan,
  Mehr_Eghtesad: Mehr_Eghtesad,
  Mehr_Iran: Mehr_Iran,
  Melall: Melall,
  Mellat: Mellat,
  Melli: Melli,
  Noor: Noor,
  Parsian: Parsian,
  Pasargad: Pasargad,
  Postbank: Postbank,
  Refah: Refah,
  Resalat: Resalat,
  Saderat: Saderat,
  Saman: Saman,
  Sanat_Madan: Sanat_Madan,
  Sarmayeh: Sarmayeh,
  Sepah: Sepah,
  Shahr: Shahr,
  Sina: Sina,
  Tejarat: Tejarat,
  Tosee: Tosee,
  Tosee_Saderat: Tosee_Saderat,
  Tosee_Taavon: Tosee_Taavon,
} as const

export type LogoKey = keyof typeof logos
