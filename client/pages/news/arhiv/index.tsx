import { NextSeo } from 'next-seo'
import { FC } from 'react'
import { Cards, Hero } from '../../../components'
import { HeroI } from '../../../Interfaces/Hero.interface'
import { NewsI } from '../../../Interfaces/News.interface'
import { withLayout } from '../../../Layout/WithLayout'


// STYLES
import styles from './arhiv.module.scss'

const NewsArhiv: FC = (): JSX.Element => {
  // Hero Data
  const HeroData: HeroI[] = [
    {
      title: 'Архив новостей ',
      information: 222
    }
  ]
  // Newses
  const NewsData: NewsI[] = [
    { id: 1, title: 'Международная конференция библиотекарей СНГ', description: 'В Научной библиотеке ИГУ им.К.Тыныстанова состоялась встреча библиотекарей СНГ в рамках международной конференции на тему: "Культурное и природное наследие стран Содружества: роль и место библиотек", посвященной межгосударственной программе "Каракол - культурная столица Содружества Независимых Государств 2022 года"', published: 'Май 2022', image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665224754/Library-igu/news/news-1_xuprwf.png' },
    { id: 2, title: 'Министр образования и науки КР в Научной библиотеке ИГУ им.К.Тыныстанова', description: '17 мая 2022 года Научную библиотеку Иссык-Кульского государственного университета посетил министр образования и науки Кыргызской Республики Бейшеналиев Алмазбек Бейшеналиевич', published: 'Июнь 2021', image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665224751/Library-igu/news/news-2_wewje1.png' },
    { id: 3, title: 'Индия в Кыргызской Республике - выставка искусства и жизни Индии', description: '19 мая 2021 года состоялось открытие выставки "Индия в Кыргызской Республике - выставка искусства и жизни Индии", приуроченная году культуры Индии в Кыргызстане. После церемонии разрезания ленты, господин посол и ректор зажгли лампу по Индийской традиции. Ректор ИГУ им.К.Тыныстанова Иманбаев Аскар Асангазиевич, в своей приветственной речи поблагодарил господина посла за активное сотрудничество с нашим университетом. В свою очередь Чрезвычайный и Полномочный посол Республики Индия в Кыргызстане господин Алок А.Димри в своей речи отметил важность проведения подобных мероприятий в стенах университетов, так как аура и атмосфера которая царит в учебных заведениях удивительна. Далее состоялось знакомство с экпозицией, где было показано культурное наследие Индии.', published: 'Авг 2022', image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665224746/Library-igu/news/news-3_xpheil.png' },
    { id: 4, title: 'Индия в Кыргызской Республике - выставка искусства и жизни Индии', description: '19 мая 2021 года состоялось открытие выставки "Индия в Кыргызской Республике - выставка искусства и жизни Индии", приуроченная году культуры Индии в Кыргызстане. После церемонии разрезания ленты, господин посол и ректор зажгли лампу по Индийской традиции. Ректор ИГУ им.К.Тыныстанова Иманбаев Аскар Асангазиевич, в своей приветственной речи поблагодарил господина посла за активное сотрудничество с нашим университетом. В свою очередь Чрезвычайный и Полномочный посол Республики Индия в Кыргызстане господин Алок А.Димри в своей речи отметил важность проведения подобных мероприятий в стенах университетов, так как аура и атмосфера которая царит в учебных заведениях удивительна. Далее состоялось знакомство с экпозицией, где было показано культурное наследие Индии.', published: 'Авг 2022', image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665224746/Library-igu/news/news-3_xpheil.png' },
    { id: 5, title: 'Индия в Кыргызской Республике - выставка искусства и жизни Индии', description: '19 мая 2021 года состоялось открытие выставки "Индия в Кыргызской Республике - выставка искусства и жизни Индии", приуроченная году культуры Индии в Кыргызстане. После церемонии разрезания ленты, господин посол и ректор зажгли лампу по Индийской традиции. Ректор ИГУ им.К.Тыныстанова Иманбаев Аскар Асангазиевич, в своей приветственной речи поблагодарил господина посла за активное сотрудничество с нашим университетом. В свою очередь Чрезвычайный и Полномочный посол Республики Индия в Кыргызстане господин Алок А.Димри в своей речи отметил важность проведения подобных мероприятий в стенах университетов, так как аура и атмосфера которая царит в учебных заведениях удивительна. Далее состоялось знакомство с экпозицией, где было показано культурное наследие Индии.', published: 'Авг 2022', image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665224746/Library-igu/news/news-3_xpheil.png' },
    { id: 6, title: 'Индия в Кыргызской Республике - выставка искусства и жизни Индии', description: '19 мая 2021 года состоялось открытие выставки "Индия в Кыргызской Республике - выставка искусства и жизни Индии", приуроченная году культуры Индии в Кыргызстане. После церемонии разрезания ленты, господин посол и ректор зажгли лампу по Индийской традиции. Ректор ИГУ им.К.Тыныстанова Иманбаев Аскар Асангазиевич, в своей приветственной речи поблагодарил господина посла за активное сотрудничество с нашим университетом. В свою очередь Чрезвычайный и Полномочный посол Республики Индия в Кыргызстане господин Алок А.Димри в своей речи отметил важность проведения подобных мероприятий в стенах университетов, так как аура и атмосфера которая царит в учебных заведениях удивительна. Далее состоялось знакомство с экпозицией, где было показано культурное наследие Индии.', published: 'Авг 2022', image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665224746/Library-igu/news/news-3_xpheil.png' },
    { id: 7, title: 'Индия в Кыргызской Республике - выставка искусства и жизни Индии', description: '19 мая 2021 года состоялось открытие выставки "Индия в Кыргызской Республике - выставка искусства и жизни Индии", приуроченная году культуры Индии в Кыргызстане. После церемонии разрезания ленты, господин посол и ректор зажгли лампу по Индийской традиции. Ректор ИГУ им.К.Тыныстанова Иманбаев Аскар Асангазиевич, в своей приветственной речи поблагодарил господина посла за активное сотрудничество с нашим университетом. В свою очередь Чрезвычайный и Полномочный посол Республики Индия в Кыргызстане господин Алок А.Димри в своей речи отметил важность проведения подобных мероприятий в стенах университетов, так как аура и атмосфера которая царит в учебных заведениях удивительна. Далее состоялось знакомство с экпозицией, где было показано культурное наследие Индии.', published: 'Авг 2022', image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665224746/Library-igu/news/news-3_xpheil.png' },
    { id: 8, title: 'Индия в Кыргызской Республике - выставка искусства и жизни Индии', description: '19 мая 2021 года состоялось открытие выставки "Индия в Кыргызской Республике - выставка искусства и жизни Индии", приуроченная году культуры Индии в Кыргызстане. После церемонии разрезания ленты, господин посол и ректор зажгли лампу по Индийской традиции. Ректор ИГУ им.К.Тыныстанова Иманбаев Аскар Асангазиевич, в своей приветственной речи поблагодарил господина посла за активное сотрудничество с нашим университетом. В свою очередь Чрезвычайный и Полномочный посол Республики Индия в Кыргызстане господин Алок А.Димри в своей речи отметил важность проведения подобных мероприятий в стенах университетов, так как аура и атмосфера которая царит в учебных заведениях удивительна. Далее состоялось знакомство с экпозицией, где было показано культурное наследие Индии.', published: 'Авг 2022', image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665224746/Library-igu/news/news-3_xpheil.png' },
    { id: 9, title: 'Индия в Кыргызской Республике - выставка искусства и жизни Индии', description: '19 мая 2021 года состоялось открытие выставки "Индия в Кыргызской Республике - выставка искусства и жизни Индии", приуроченная году культуры Индии в Кыргызстане. После церемонии разрезания ленты, господин посол и ректор зажгли лампу по Индийской традиции. Ректор ИГУ им.К.Тыныстанова Иманбаев Аскар Асангазиевич, в своей приветственной речи поблагодарил господина посла за активное сотрудничество с нашим университетом. В свою очередь Чрезвычайный и Полномочный посол Республики Индия в Кыргызстане господин Алок А.Димри в своей речи отметил важность проведения подобных мероприятий в стенах университетов, так как аура и атмосфера которая царит в учебных заведениях удивительна. Далее состоялось знакомство с экпозицией, где было показано культурное наследие Индии.', published: 'Авг 2022', image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665224746/Library-igu/news/news-3_xpheil.png' }
  ]
  return (
    <>
      <NextSeo
        title="Архив новостей - Научная библиотека ИГУ"
        description="Научная библиотека ИГУ Вестник ИГУ им. К. Тыныстанова"
      />
      {/* Hero */}
      {HeroData.map((h, i) => (
        <Hero
          key={i}
          title={h.title}
          subContentOrientation="row"
          information={h.information}
        />
      ))}
      {/* Newses */}
      <section>
        <div className="container">
          <div className={styles.news}>
            {NewsData.map(news => (
              <Cards data={news} key={news.id} cardsLink="news" />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default withLayout(NewsArhiv)