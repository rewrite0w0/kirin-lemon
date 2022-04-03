import React from 'react';

import styles from './styles.module.css';

import { PersonalTabs } from './Tabs';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--offset-2 col-4">
            <PersonalTabs />
          </div>
        </div>
      </div>
    </section>
  );
}
