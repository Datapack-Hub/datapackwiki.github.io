import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>Easy to understand</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: <Translate>The Datapack Wiki are being made to help anyone and everyone wherever you stand in your progress with creating datapacks for Minecraft.</Translate>
  },
  {
    title: <Translate>Focus on What Matters</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: <><Translate>Datapack.wiki is providing you with core examples, and ways to use certain features to your advantage. these will be displayed in: </Translate><br></br><code><Translate>Code Blocks like these.</Translate></code></>
  },
  {
    title: <Translate>Powered by the community</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: <Translate>These docs are fueld by the community, and will be an expansive yet intreguing insight on how to use and deploy datapacks for any use case scenario.</Translate>
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
