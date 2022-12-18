import { Layout } from '../../Layout/Layout'
import { Title } from '../../components'
import styles from './elibrary.module.scss'
import { NextSeo } from 'next-seo'
import { FC } from 'react'

const Elibrary: FC = (): JSX.Element => {
	return (
		<Layout>
			<NextSeo
				title='Электронная библиотека ИГУ - Научная библиотека ИГУ'
				description='Электронная библиотека ИГУ Научная библиотека ИГУ'
			/>
			{/* Hero */}
			{/* {HeroData.map((h, i) => (
        <Hero
          key={i}
          title={h.title}
          subContent={h.subContent}
          subContentOrientation="row"
          button
        />
      ))} */}
			{/* Remainings books */}
			<section className={styles.remaining}>
				<div className='container'>
					<div className={styles.remainignWrapp}>
						<div className='sectionTitle'>
							<Title type='h3'>Недавние в электронной библиотеке</Title>
						</div>
						<div className={styles.books}>
							{/* {BookscardData.map(books => (
                <Bookscard data={books} key={books.id} />
              ))} */}
						</div>
					</div>
				</div>
			</section>
			{/* Categories */}
			<section className={styles.categories}>
				<div className='container'>
					{/* <ElibraryCategories
            categoryTitle='Категории'
            data={CategoriesData}
            categoryLink="elibrary/category"
          /> */}
				</div>
			</section>
		</Layout>
	)
}

export default Elibrary
