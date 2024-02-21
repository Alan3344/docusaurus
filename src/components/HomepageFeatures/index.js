import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';

const FeatureList = [
  {
    title: translate({
      id:
        'homepage.feature1.title',
      message: '便于使用',
      description: 'The title of the first feature'
    }),
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <Translate
          id="homepage.feature1.description"
          description="The description of the first feature"
        >
        Docusaurus 的设计初衷是为了易于安装和使用，用于快速启动并运行您的网站。
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      id: 'homepage.feature2.title',
      message: '专注于重要的事情',
      description: 'The title of the second feature'
    }),
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <Translate
          id="homepage.feature2.description"
          description="The description of the second feature"
        >
        Docusaurus 让您可以专注于文档，而我们会帮您处理杂务。去继续并将您的文档移至
        </Translate>
        <code>docs</code>
        <Translate
          id="homepage.feature2.description2"
          description="The description of the second feature"
        >
        目录中。
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      id: 'homepage.feature3.title',
      message: '由 React 助力',
      description: 'The title of the third feature'
    }),
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <Translate
          id="homepage.feature3.description"
          description="The description of the third feature"
        >
        通过重用 React 来扩展或自定义您的网站布局。Docusaurus 可以在重复使用相同的页眉和页脚时进行扩展。
        </Translate>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
