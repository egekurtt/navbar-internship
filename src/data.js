
export const navbarItems = [
    {
        id: 1,
        title: 'Anasayfa',
        path: '/'
    },

    {
        id: 2,
        title: 'Hizmetlerimiz',
        path: '/hizmetlerimiz',
        subtitles: [
            {
            id: 1,
            subtitle: 'Teknik Hizmetlerimiz',
            path: '/teknik-hizmetlerimiz',
            items: [
                {
                    id: 1,
                    item: 'Frontend Teknolojileri',
                    path: '/teknik-hizmetlerimiz/frontend-teknolojileri'
                },
                {
                    id: 2,
                    item: 'Backend Teknolojileri',
                    path: '/teknik-hizmetlerimiz/backend-teknolojileri'
                },
                {
                    id: 3,
                    item: 'AWS Hizmetleri',
                    path: '/teknik-hizmetlerimiz/aws-teknolojileri'
                }
              ]
            },

            {
            id: 2,
            subtitle: 'Danışmanlık Hizmetlerimiz',
            path: '/danismalik-hizmetleri',
            items: [
                {
                    id: 1,
                    item: 'Teknik Destek',
                    path: '/danismalik-hizmetleri/teknik-destek'
                },
                {
                    id: 2,
                    item: 'Bilgilendirme Hizmetleri',
                    path: '/danismalik-hizmetleri/bilgilendirme-hizmetleri'
                },
                {
                    id: 3,
                    item: 'Mentorluk Hizmetleri',
                    path: '/danismalik-hizmetleri/mentorluk-hizmetleri'
                },
                {
                    id: 4,
                    item: 'Danışmanlık Eğitimleri',
                    path: '/danismalik-hizmetleri/danismalik-egitimleri',
                    subitems: [
                        {
                            id: 1,
                            subitem: 'Sertifikalı Danışmanlık Hizmetleri',
                            path: '/danismalik-hizmetleri/danismalik-egitimleri/sertifikalı-dns-hizmeti'
                        },
                        {
                            id: 2,
                            subitem: 'Kurumsal Danışmanlık Hizmetleri',
                            path: '/danismalik-hizmetleri/danismalik-egitimleri/kurumsal-dns-hizmeti'
                        }
                    ]
                },
                {
                    id: 5,
                    item: 'Eğitim Öğretim Planlama',
                    path: '/danismalik-hizmetleri/egitim-ogretim-planlama'
                },
                {
                    id: 6,
                    item: 'Yazılım Danışmanlığı',
                    path: '/danismalik-hizmetleri/yazılım-danismanligi'
                },
                {
                    id: 7,
                    item: 'Proje Danışmanlığı',
                    path: '/danismalik-hizmetleri/proje-danismanligi'
                }
              ]
            },

            {
            id: 3,
            subtitle: 'Hatalı Altyapı Onarımı',
            path: '/hatali-altyapi-onarimi'
            }
      ]
    },

    {
        id: 3,
        title: 'Hakkımızda',
        path: '/hakkımızda',
        subtitles: [
            {
            id: 1,
            subtitle: 'Biz Kimiz?',
            path: '/hakkımızda/biz-kimiz'
            },
            {
            id: 2,
            subtitle: 'Kurumsal',
            path: '/hakkımızda/kurumsal'
            },

            {
            id: 3,
            subtitle: 'Referanslarımız',
            path: '/hakkımızda/referanslarimiz',
            items: [
                {
                    id: 1,
                    item: 'Geçmiş Referanslar',
                    path: '/hakkımızda/referanslarimiz/gecmis-referanslar',
                    subitems: [
                        {
                            id: 1,
                            subitem: 'x referansı',
                            path: '/hakkımızda/referanslarimiz/gecmis-referanslar/x-referansi'
                        },
                        {
                            id: 2,
                            subitem: 'y referansı',
                            path: '/hakkımızda/referanslarimiz/gecmis-referanslar/y-referansi'
                        },
                        {
                            id: 3,
                            subitem: 'z referansı',
                            path: '/hakkımızda/referanslarimiz/gecmis-referanslar/z-referansi'
                        }
                    ]
                },
                {
                    id: 2,
                    item: 'Gelecek Referanslar',
                    path: '/hakkımızda/referanslarimiz/gelecek-referanslar',
                    subitems: [
                        {
                            id: 1,
                            subitem: 'a referansı',
                            path: '/hakkımızda/referanslarimiz/gelecek-referanslar/a-referansi'
                        },
                        {
                            id: 2,
                            subitem: 'b referansı',
                            path: '/hakkımızda/referanslarimiz/gelecek-referanslar/b-referansi'
                        },
                        {
                            id: 3,
                            subitem: 'c referansı',
                            path: '/hakkımızda/referanslarimiz/gelecek-referanslar/c-referansi'
                        }
                    ]
                }
              ]
            },
            {
            id: 4,
            subtitle: 'Vizyon',
            path: '/hakkımızda/vizyon'
            },
            {
            id: 5,
            subtitle: 'Misyon',
            path: '/hakkımızda/misyon'
            }
      ]
    },
    {
        id: 4,
        title: 'İletişim',
        path: '/iletisim'
    },
    {
        id: 5,
        title: 'Kayıt Ol',
        path: '/kayit-ol'
    },
    {
        id: 6,
        title: 'Giriş Yap',
        path: '/giris-yap'
    }
]