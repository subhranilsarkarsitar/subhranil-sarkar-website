import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import './Teach.css';

const Teach = () => {
  return (
    <div className="container teaching">
        <Navbar />
        <div className="main-content page-content">
          <div className="image-container">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/teaching2.png`}
              alt="Sitar performance of Subhranil Sarkar and Ustad Shahid Parvez Khan"
              className="gharana-image"
            />
          </div>
          <div className="text-content">
            <h1 className="title">The Art of Teaching—Subhranil’s Way</h1>
            <p className="description">
              In a time when learning is often reduced to <strong>55-minute time-boxed sessions</strong>, checklists,
              and faster outcome-driven classes, <strong>Shri Subhranil Sarkar’s approach to teaching
              Indian classical music</strong> stands as a quiet rebellion — a return to <strong>depth, sincerity,
              and spiritual connection</strong>. His method isn’t just about playing the sitar;
              it is about <strong>awakening the musical soul</strong> through <strong>discipline, devotion, and
              inner reflection</strong>.
            </p>
            <h3>Where Sound Meets</h3>
            <p className="description">
              With over <strong>three decades of dedicated research</strong>, intense riyaaz, performance, and instrument craftsmanship,
              Subhranil Sarkar has immersed himself in the <strong>many dimensions of the sitar</strong> — its aesthetic grace,
              historical depth, tonal richness, and structural subtleties. His teaching flows from this vast inner reservoir,
              offering each student a <strong>rare and holistic journey</strong> into the living heart of Hindustani classical music.
            </p>
            <h3>Learning & Listening, Teaching as Initiation</h3>
            <p className="description">
              His sessions are <strong>quiet explorations</strong> — unhurried, contemplative, and deeply personal.
              Here, the focus is on <strong>depth and clarity</strong>. Each intricacy is treated not as a task to be executed
              but as a being to be <strong>listened to, absorbed, and lovingly rendered.</strong> This is not instruction.
              It is initiation. 
            </p>
            <p className="description">
              Subhranil believes that <strong>every student is unique</strong>. His teaching
              is <strong>personalized</strong> — aligned with the
              learner’s aptitude, temperament, and intent. Whether one is tracing their first stroke or refining
              the subtlest <strong>meend or gamak</strong>, his guidance remains patient, precise, and unwavering.
            </p>
            <h3>The Sitar as a Living Companion</h3>
            <p className="description">
              What sets his pedagogy apart is his rare expertise in <strong>sitar craftsmanship</strong>.
              Having studied its construction and acoustics for over <strong>two decades</strong>,
              he guides each student to <strong>bond with their instrument</strong> — not as an object,
              but as a partner in expression. Through detailed understanding of <strong>jawari, wood, gourd shape,
              and string tension</strong>, he helps each learner find their <strong>perfect sound</strong>.
            </p>
            <h3>Walking the Timeless Path</h3>
            <p className="description">
              To learn under Shri Subhranil Sarkar is to walk an ancient path — where <strong>silence
              is as valued as sound</strong>, and <strong>patience is the first raag</strong>. His is a teaching not meant
              just for performers, but for seekers — those who yearn to experience the <strong>sitar
              as a vessel of the soul</strong>, and <strong>Indian classical music as a way of life</strong>.
            </p>
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default Teach;
