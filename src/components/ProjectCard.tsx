import styles from '@/components/cards.module.scss';

interface ProjectCardProps {
  projects: {
    id: string;
    title: string;
    client: string;
    date: string;
  }[];
}

export default function ProjectCard({ projects }: ProjectCardProps) {
  return (
    <>
      {projects.map((project) => (
        <li key={project.id} className={styles['s-card']}>
          <h3 className={styles['s-card__ttl']}>{project.title}</h3>
          <p className={styles['s-card__client']}>{project.client}</p>
          <time className={styles['s-card__date']} dateTime={project.date}>
            {project.date}
          </time>
        </li>
      ))}
    </>
  );
}
