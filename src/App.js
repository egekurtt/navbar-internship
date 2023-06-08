import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Anasayfa from "./pages/Anasayfa"
import Hizmetlerimiz from "./pages/Hizmetlerimiz"
import TeknikHizmetlerimiz from "./pages/TeknikHizmetlerimiz"
import FrontendTeknolojileri from "./pages/FrontendTeknolojileri"
import BackendTeknolojileri from "./pages/BackendTeknolojileri"
import AwsHizmetleri from './pages/AwsHizmetleri'
import TeknikDestek from './pages/TeknikDestek';
import DanismanlıkHizmetleri from './pages/DanismanlıkHizmetleri';
import BilgilendirmeHizmetleri from './pages/BilgilendirmeHizmetleri';
import MentorlukHizmetleri from './pages/MentorlukHizmetleri';
import DanismanlikEgitimleri from './pages/DanismanlikEgitimleri';
import SertifikaliDnsHizmetleri from './pages/SertifikaliDnsHizmetleri';
import KurumsalDnsHizmetleri from './pages/KurumsalDnsHizmetleri';
import EgitimOgretimPlanlama from './pages/EgitimOgretimPlanlama';
import YazilimDanismanligi from './pages/YazilimDanismanligi';
import ProojeDanismanlıgı from './pages/ProojeDanismanlıgı';
import HataliAltyapiOnarimi from './pages/HataliAltyapiOnarimi';
import Hakkımızda from './pages/Hakkımızda';
import BizKimiz from './pages/BizKimiz';
import Kurumsal from './pages/Kurumsal';
import Referanslarimiz from './pages/Referanslarimiz';
import GecmisReferasnlar from './pages/GecmisReferasnlar';
import XReferansi from './pages/XReferansi';
import YReferansi from './pages/YReferansi';
import ZReferansi from './pages/ZReferansi';
import GelecekReferanslar from './pages/GelecekReferanslar';
import AReferansi from './pages/AReferansi';
import BReferansi from './pages/BReferansi';
import CReferansi from './pages/CReferansi';
import Vizyon from './pages/Vizyon';
import Misyon from './pages/Misyon';
import Iletisim from './pages/Iletisim';
import KayitOl from './pages/KayitOl';
import GirisYap from './pages/GirisYap';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Anasayfa />} />
          <Route path='/hizmetlerimiz' element={<Hizmetlerimiz />} />
          <Route path='/teknik-hizmetlerimiz' element={<TeknikHizmetlerimiz />} />
          <Route path='/teknik-hizmetlerimiz/frontend-teknolojileri' element={<FrontendTeknolojileri />} />
          <Route path='/teknik-hizmetlerimiz/backend-teknolojileri' element={<BackendTeknolojileri />} />
          <Route path='/teknik-hizmetlerimiz/aws-teknolojileri' element={<AwsHizmetleri />} />
          <Route path='/danismalik-hizmetleri' element={<DanismanlıkHizmetleri />} />
          <Route path='/danismalik-hizmetleri/teknik-destek' element={<TeknikDestek />} />
          <Route path='/danismalik-hizmetleri/bilgilendirme-hizmetleri' element={<BilgilendirmeHizmetleri />} />
          <Route path='/danismalik-hizmetleri/mentorluk-hizmetleri' element={<MentorlukHizmetleri />} />
          <Route path='/danismalik-hizmetleri/danismalik-egitimleri' element={<DanismanlikEgitimleri />} />
          <Route path='/danismalik-hizmetleri/danismalik-egitimleri/sertifikalı-dns-hizmeti' element={<SertifikaliDnsHizmetleri />} />
          <Route path='/danismalik-hizmetleri/danismalik-egitimleri/kurumsal-dns-hizmeti' element={<KurumsalDnsHizmetleri />} />
          <Route path='/danismalik-hizmetleri/egitim-ogretim-planlama' element={<EgitimOgretimPlanlama />} />
          <Route path='/danismalik-hizmetleri/yazılım-danismanligi' element={<YazilimDanismanligi />} />
          <Route path='/danismalik-hizmetleri/proje-danismanligi' element={<ProojeDanismanlıgı />} />
          <Route path='/hatali-altyapi-onarimi' element={<HataliAltyapiOnarimi />} />
          <Route path='/hakkımızda' element={<Hakkımızda />} />
          <Route path='/hakkımızda/biz-kimiz' element={<BizKimiz />} />
          <Route path='/hakkımızda/kurumsal' element={<Kurumsal />} />
          <Route path='/hakkımızda/referanslarimiz' element={<Referanslarimiz />} />
          <Route path='/hakkımızda/referanslarimiz/gecmis-referanslar' element={<GecmisReferasnlar />} />
          <Route path='/hakkımızda/referanslarimiz/gecmis-referanslar/x-referansi' element={<XReferansi />} />
          <Route path='/hakkımızda/referanslarimiz/gecmis-referanslar/y-referansi' element={<YReferansi />} />
          <Route path='/hakkımızda/referanslarimiz/gecmis-referanslar/z-referansi' element={<ZReferansi />} />
          <Route path='/hakkımızda/referanslarimiz/gelecek-referanslar' element={<GelecekReferanslar />} />
          <Route path='/hakkımızda/referanslarimiz/gelecek-referanslar/a-referansi' element={<AReferansi />} />
          <Route path='/hakkımızda/referanslarimiz/gelecek-referanslar/b-referansi' element={<BReferansi />} />
          <Route path='/hakkımızda/referanslarimiz/gelecek-referanslar/c-referansi' element={<CReferansi />} />
          <Route path='/hakkımızda/vizyon' element={<Vizyon />} />
          <Route path='/hakkımızda/misyon' element={<Misyon />} />
          <Route path='/iletisim' element={<Iletisim />} />
          <Route path='/kayit-ol' element={<KayitOl />} />
          <Route path='/giris-yap' element={<GirisYap />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
