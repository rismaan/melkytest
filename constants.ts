import { CarModel, Testimonial, Video, NewsArticle } from './types';

export const LOGO_URL = "https://iili.io/KJCXvz7.png";
export const WHATSAPP_NUMBER = "6288224530225";
export const WHATSAPP_MESSAGE = "Halo, saya tertarik dengan promo mobil Suzuki dan ingin bertanya lebih lanjut.";
export const PHONE_NUMBER = "6288224530225";
export const EMAIL_ADDRESS = "melkysuzuki@gmail.com";
export const INSTAGRAM_USERNAME = "@infobandungsuzuki";
export const INSTAGRAM_URL = "https://www.instagram.com/infobandungsuzuki";


export const CAR_DATA: CarModel[] = [
  {
    model: 'XL7 HYBRID',
    image: 'https://imgcdn.oto.com/medium/gallery/exterior/37/2220/suzuki-xl7-12009.jpg',
    variants: [
      { name: 'ZETA MT', price: 269900000 },
      { name: 'ZETA AT', price: 281100000 },
      { name: 'BETA MT HYBRID', price: 292200000 },
      { name: 'BETA AT HYBRID', price: 303100000 },
      { name: 'ALPHA MT HYBRID', price: 302300000 },
      { name: 'ALPHA MT HYBRID 2TONE', price: 304300000 },
      { name: 'ALPHA AT HYBRID', price: 313200000 },
      { name: 'ALPHA AT HYBRID 2TONE', price: 315300000 },
    ],
  },
  {
    model: 'ALL NEW ERTIGA',
    image: 'https://imgcdn.oto.com/large/gallery/exterior/37/2614/suzuki-ertiga-smart-hybrid-front-angle-low-view-164264.jpg',
    variants: [
      { name: 'GA', price: 241750000 },
      { name: 'MC GL MT', price: 265350000 },
      { name: 'MC GL AT', price: 276400000 },
      { name: 'MC GX MT', price: 282000000 },
      { name: 'MC GX AT', price: 293000000 },
      { name: 'CRUISE MT', price: 294800000 },
      { name: 'CRUISE MT 2TONE', price: 296800000 },
      { name: 'CRUISE AT', price: 305700000 },
      { name: 'CRUISE AT 2TONE', price: 307700000 },
    ],
  },
  {
    model: 'GRAND VITARA',
    image: 'https://imgcdn.oto.com/large/gallery/exterior/37/2721/suzuki-grand-vitara-2023-front-angle-low-view-707340.jpg',
    variants: [
      { name: 'GX AT', price: 403200000 },
      { name: 'GX AT 2TONE', price: 406100000 },
    ],
  },
  {
    model: 'JIMNY',
    image: 'https://imgcdn.oto.com/medium/gallery/exterior/37/782/suzuki-jimny-24418.jpg',
    variants: [
      { name: '3 DOOR MT', price: 511500000 },
      { name: '3 DOOR AT', price: 524000000 },
      { name: '3 DOOR MT 2TONE', price: 514850000 },
      { name: '3 DOOR AT 2TONE', price: 527300000 },
      { name: '5 DOOR MT', price: 496100000 },
      { name: '5 DOOR AT', price: 508700000 },
      { name: '5 DOOR MT 2TONE', price: 499350000 },
      { name: '5 DOOR AT 2TONE', price: 511900000 },
      { name: '5 DOOR AT WHITE RHINO', price: 522300000 },
    ],
  },
    {
    model: 'FRONX',
    image: 'https://imgcdn.oto.com/large/gallery/exterior/37/3224/suzuki-fronx-front-side-view-744342.jpg',
    variants: [
        { name: 'GL MT', price: 261800000 },
        { name: 'GL AT', price: 273800000 },
        { name: 'GX MT', price: 278800000 },
        { name: 'GX AT', price: 296600000 },
        { name: 'SGX', price: 322600000 },
        { name: 'SGX 2TONE', price: 324600000 },
    ]
  },
  {
    model: 'S-PRESSO',
    image: 'https://imgcdn.oto.com/large/gallery/exterior/37/2620/suzuki-s-presso-front-angle-low-view-628835.jpg',
    variants: [
      { name: 'MT', price: 176600000 },
      { name: 'AT', price: 186600000 },
    ],
  },
  {
    model: 'NEW CARRY PU',
    image: 'https://imgcdn.oto.com/large/gallery/exterior/37/2158/suzuki-carry-front-angle-low-view-924731.jpg',
    variants: [
      { name: 'PU', price: 175500000 },
      { name: 'PU FD AC PS', price: 183500000 },
      { name: 'PU WD', price: 176600000 },
      { name: 'PU WD AC PS', price: 184400000 },
    ],
  },
  {
    model: 'APV',
    image: 'https://imgcdn.oto.com/large/gallery/exterior/37/326/suzuki-apv-arena-front-angle-low-view-886242.jpg',
    variants: [
      { name: 'GE PS MT AB', price: 228200000 },
      { name: 'GL MT AB', price: 236400000 },
      { name: 'GX MT AB', price: 250500000 },
      { name: 'SGX MT AB', price: 253900000 },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        customerName: 'Budi Santoso',
        carModel: 'Suzuki Jimnny White Rhino 5D',
        photoUrl: 'https://iili.io/KJCsuLu.jpg',
        quote: 'g'
    },
    {
        customerName: 'Dodi Hanggoro',
        carModel: 'Suzuki Grand Vitara',
        photoUrl: 'https://iili.io/KJCs51j.jpg',
        quote: 'g'
    },
    {
        customerName: 'Rika Swastika',
        carModel: 'Suzuki XL7 Zeta',
        photoUrl: 'https://iili.io/KJCsTXe.jpg',
        quote: 'g'
    },
    {
        customerName: 'H Dedi Triswandi',
        carModel: 'Suzuki Jimnny 5D',
        photoUrl: 'https://iili.io/KJCsRqb.jpg',
        quote: 'g'
    },
    {
        customerName: 'H Asep Sumpena',
        carModel: 'Suzuki APV Ambulance',
        photoUrl: 'https://iili.io/KJCsadQ.jpg',
        quote: 'g'
    },
    {
        customerName: 'Zaenal Mustofa',
        carModel: 'Suzuki New Carry',
        photoUrl: 'https://iili.io/KJCsc7V.jpg',
        quote: 'g'
    },
];

export const VIDEOS: Video[] = [
    { title: 'Suzuki Fronx | Educational Content | Lane Keep Assist & Lane Departure Prevention', embedUrl: 'https://www.youtube.com/embed/42_kN4zU9Ts' },
    { title: 'Kata Mereka Tentang Suzuki New XL7 Hybrid', embedUrl: 'https://www.youtube.com/embed/GjucWKtMgQQ' },
    { title: 'The legend is back - Suzuki Grand Vitara!', embedUrl: 'https://www.youtube.com/embed/K7myLx48YRo' },
    { title: 'The Last Journey | Suzuki Jimny', embedUrl: 'https://www.youtube.com/embed/hvs0Y994GOQ' },
];

export const NEWS_ARTICLES: NewsArticle[] = [
    {
        title: 'Suzuki Fronx Jadi Mobil Hybrid Terlaris Juli 2024, Kalahkan Innova Zenix',
        image: 'https://images.bisnis.com/posts/2025/08/19/1903812/suzuki_fronx_1_1750940009.jpg',
        excerpt: 'Suzuki Fronx menjadi mobil hybrid terlaris pada Juli 2024 dengan penjualan 2.047 unit, mengalahkan Toyota Kijang Innova Zenix yang terjual 1.398 unit.',
        date: '20 Agustus 2024',
        category: 'Berita Otomotif',
        sourceUrl: 'https://otomotif.bisnis.com/read/20250819/46/1903812/persaingan-mobil-hybrid-juli-2025-suzuki-fronx-salip-innova-zenix'
    },
    {
        title: 'Review Lengkap: Kecanggihan Suzuki Grand Vitara Hybrid',
        image: 'https://imgx.gridoto.com/crop/0x0:0x0/700x465/photo/2025/04/26/suzuki-new-xl7-hybridjpg-20250426093514.jpg',
        excerpt: 'Keluarga Indonesia kian memilih SUV. Suzuki New XL7 Hybrid dengan ground clearance 200 mm, ESP, dan Hill Hold Control memberi stabilitas, aman, serta percaya diri berkendara.',
        date: '22 Juli 2024',
        category: 'Review',
        sourceUrl: 'https://www.gridoto.com/read/224244008/ini-5-alasan-kenapa-suzuki-new-xl7-hybrid-cocok-untuk-keluarga-nomor-1-penting'
    },
    {
        title: 'Fronx Sukses Dongkrak Penjualan Suzuki, Sumbang 28 Persen Penjualan Ritel',
        image: 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/703x0/filters:watermark(file/2017/cms/img/watermark.png,-0,0,0)/photo/2025/08/20/2920515679.jpg',
        excerpt: 'Kehadiran Fronx bikin penjualan Suzuki meningkat. Dari data penjualan ritel, Fronx menyumbang 28 persen dari total penjualan Suzuki pada Juli 2025.',
        date: '18 Juli 2024',
        category: 'Penghargaan',
        sourceUrl: 'https://www.pikiran-rakyat.com/otomotif/pr-019589816/fronx-sukses-dongkrak-penjualan-suzuki-sumbang-28-persen-penjualan-ritel'
    }
];