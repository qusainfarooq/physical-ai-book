import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="Physical AI & Humanoid Robotics"
      description="A textbook for embodied intelligence and robotics"
    >
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">Physical AI & Humanoid Robotics</h1>
          <p className="hero__subtitle">
            Learn how AI connects to real and simulated robots
          </p>
          <div>
            <Link
              className="button button--secondary button--lg"
              to="/docs/Quarter/overview"
            >
              Start Reading
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="container margin-vert--lg">
          <h2>About this Book</h2>
          <p>
            This textbook guides you through the foundations of Physical AI —
            from ROS 2 basics to humanoid robotics and conversational agents.
            Each module builds practical skills while connecting theory to
            hands‑on experiments.
          </p>
        </section>
        <section className="container margin-vert--lg">
          <h2>What You'll Learn</h2>
          <ul>
            <li>How robots use ROS 2 to communicate</li>
            <li>Simulating robots safely in Gazebo</li>
            <li>Using NVIDIA Isaac for perception and planning</li>
            <li>Designing humanoid robots for natural interaction</li>
            <li>Integrating voice and language models with robotics</li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}
