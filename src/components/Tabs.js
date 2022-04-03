import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Project } from './Project';
import { project } from '../data/data';

export const PersonalTabs = () => {
  return (
    <Tabs>
      <TabItem value="project" label="Project" default>
        {project.map((props, idx) => (
          <Project key={idx} {...props} />
        ))}
      </TabItem>
    </Tabs>
  );
};
