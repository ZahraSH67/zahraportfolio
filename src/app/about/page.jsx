'use client'
import styles from './styles.module.css'

export default function About() {
  return (
    <>
      <div className={styles.profileSection}>
        <div className={styles.profileVisual}>
          <img src="/image/aboutimg.jpg" alt="Zahra Shahabi Portrait" />
        </div>
        <h1 className={styles.name}>Zahra Shahabi</h1>
        <h2 className={styles.title}>Frontend Developer & Web Specialist</h2>
      </div>

      <section className={styles.detailsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Professional Profile</h2>
          <div className={styles.sectionGrid}>
         

            <div className={styles.card}>
              <h3>Professional Identity</h3>
              <p>
                A solutions-driven frontend developer with expertise in React.js, Next.js, and modern CSS frameworks. 
                Combining technical skills from my vocational education in Web Development with research experience 
                from my Social Sciences background, I bring a unique perspective to creating user-centered digital solutions.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Technical Expertise</h3>
              <ul>
                <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, Tailwind CSS</li>
                <li><strong>Backend:</strong> PHP, WordPress development</li>
                <li><strong>Tools:</strong> Git, VS Code, Agile methodologies</li>
              </ul>
            </div>

         
            <div className={styles.card}>
              <h3>Education</h3>
              <ul>
                <li>
                  <strong>Vocational Education in Web Development</strong><br />
                  Roskilde Tekniske Skole, Denmark (2022–2025)<br />
                  <em>Specialized in frontend technologies and project-based learning</em>
                </li>
                <li>
                  <strong>Partial B.Sc. in Computer Science</strong><br />
                  University of Copenhagen (2021–2022)<br />
                  <em>Completed courses in algorithms, interaction design, and linear algebra</em>
                </li>
                <li>
                  <strong>High School Diploma</strong><br />
                  NEXT - Copenhagen, Denmark (2020–2021)<br />
                </li>
                <li>
                  <strong>Danish education for adult foreigners etc. (Danish Language School)</strong><br />
                  Ia school & Københavns centerskole (2016–2019)<br />
                  <em>Learning Danish</em>
                </li>
                <li>
                  <strong>M.Sc. in Social Sciences</strong><br />
                  University of Tehran, Iran (2008–2015)<br />
                  <em>Research focus on qualitative methodologies and data analysis</em>
                </li>
              </ul>
            </div>

            {/* Professional Experience */}
            <div className={styles.card}>
              <h3>Professional Experience</h3>
              <ul>
                <li>
                  <strong>Student Mentor</strong> - DUOS, Denmark (2020)<br />
                  Guided peers in study techniques, improving academic performance by 20%
                </li>
                <li>
                  <strong>Volunteer</strong> - Elderlearn, Denmark (2018–2020)<br />
                  Developed cross-cultural communication skills while supporting elderly residents
                </li>
                <li>
                  <strong>Research Organizer</strong> - Tehran Municipality (2009–2011)<br />
                  Managed a political orientation study, delivering insights to government agencies
                </li>
              </ul>
            </div>

            {/* Core Strengths */}
            <div className={styles.card}>
              <h3>Core Strengths</h3>
              <ul>
                <li>Adaptable problem-solver thriving in fast-paced environments</li>
                <li>Strong collaborator with proven mentoring experience</li>
                <li>Detail-oriented developer with research background</li>
                <li>Passionate about creating accessible, user-friendly interfaces</li>
              </ul>
            </div>

            {/* Career Aspirations */}
            <div className={styles.card}>
              <h3>Career Aspirations</h3>
              <p>
                Seeking opportunities to apply my frontend development skills in innovative projects. 
                Particularly interested in roles that combine technical implementation with user experience considerations, 
                allowing me to leverage both my coding expertise and social sciences background.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}