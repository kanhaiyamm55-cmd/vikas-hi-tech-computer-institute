export default function About() {
  return (
    <section className="section">
      <div className="about-grid">
        <div>
          <p className="eyebrow">About Our Institute</p>
          <h1>Practical learning for a better future.</h1>
          <p className="lead">
            Vikas Hi Tech Computer Institute Pvt. Ltd. focuses on practical,
            job-oriented computer education through classroom and online learning.
          </p>
          <p>Our programs are designed to help students build computer skills, understand industry concepts and prepare for future opportunities.</p>
        </div>
        <img className="about-image" src="/assets/institute-poster.jpg" alt="Vikas Hi Tech Institute" />
      </div>

      <div className="stats-grid">
        <div><strong>10+</strong><span>Years of Excellence</span></div>
        <div><strong>100+</strong><span>Computers in Lab</span></div>
        <div><strong>100%</strong><span>Practical Learning Focus</span></div>
        <div><strong>24×7</strong><span>Online Learning Potential</span></div>
      </div>
    </section>
  );
}
