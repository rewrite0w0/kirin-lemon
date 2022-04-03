import React from 'react';
import projectStyles from '../css/project.module.css';

export const Project = ({
  title,
  description,
  img,
  codeLink,
  liveLink,
  report,
  stack,
}) => {
  return (
    <section className={projectStyles.container}>
      <div className={projectStyles.previewContainer}>
        {img ? (
          <img className={projectStyles.preview} src={img} alt="project img" />
        ) : (
          <></>
        )}
      </div>
      <div className={projectStyles.contents}>
        <div className={projectStyles.titleContainer}>
          <h4>{title}</h4>
        </div>
        <div>
          {description ? (
            <span className={projectStyles.description}>{description}</span>
          ) : (
            <></>
          )}
        </div>
        <div className={projectStyles.linkContainer}>
          {codeLink ? (
            <a
              href={codeLink}
              target="_blank"
              rel="nofollow noreferer noopener"
              className={projectStyles.links}
            >
              code
            </a>
          ) : (
            <></>
          )}
          {liveLink ? (
            <a
              href={liveLink}
              target="_blank"
              rel="nofollow noreferer noopener"
              className={projectStyles.links}
            >
              live
            </a>
          ) : (
            <></>
          )}
          {report ? (
            <a href={report} className={projectStyles.links}>
              report
            </a>
          ) : (
            <></>
          )}
        </div>
        <div>
          {stack.map((skill) => (
            <span className={projectStyles.stacks}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};
